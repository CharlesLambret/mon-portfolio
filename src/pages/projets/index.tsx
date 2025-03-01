import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";
import { JSX, useEffect, useState } from "react";
import { fetchPortfolio, fetchProjets } from "@/api/apicalls";
import { ArrowDownIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function Home() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  interface Technology {
    Nom: string;
    Icone: string;
  }
const [projets, setProjets] = useState<any[]>([]);
  useEffect(() => {
    const getContent = async () => {
      try {
        const data = await fetchPortfolio();
        const projets = await fetchProjets();
        setContent(data);
        setProjets(projets);
      } catch (error) {
        console.error("Error fetching portfolio or projects:", error);
      }finally {
        setLoading(false);
      }
    };
    getContent();
  }, []);


  const router = useRouter();
  
  const handleClick = (documentId: string): void => {
    router.push(`/projets/${documentId}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col w-full min-h-full p-5 justify-center items-center">
      <section className="flex flex-row w-full justify-around items-center mb-5 p-5">
        <div className="flex flex-col  justify-center w-1/2 items-start gap-3">
          <h1 className="text-4xl font-bold text-start">{content.title}</h1>
          <p className="text-xl font-medium">{content.description}</p>
        </div>
        <img src="./illuprojets.png" className="w-1/2"/>
      </section>
      <ArrowDownIcon className="w-8 fill-white"/>
    <section className="flex flex-col w-full  mt-5">
        <div className="flex flex-row  mb-5 py-5 gap-2 w-full justify-start items-center">
            <MagnifyingGlassIcon className="w-10"/>
            <input
            type="text"
            placeholder="Rechercher une technologie..."
            className="p-2 border border-white rounded-full w-1/3 focus:border-orange-500 hover:border-orange-400"
            onChange={(e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredProjets = projets.filter((projet) =>
            projet.technologies.some((tech : Technology) => tech.Nom.toLowerCase().includes(searchTerm))
            );
            setProjets(filteredProjets);
            }}
        />
        </div>
      <div className="flex flex-row justify-center px-5 w-full gap-5">
        {projets.map((projet) => (
        <div key={projet.id} className="py-5 flex flex-col w-1/4 rounded border border-orange-400 hover:p-2 cursor-pointer hover:shadow-lg hover:bg-orange-500 hover:backdrop-blur-md hover:shadow-orange-300/30 justify-center items-center gap-3">
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_UPLOADS_URL}${projet.premier_screen}`}
            alt={projet.Nom}
            className="w-full p-1"
          />
          <h2 className="text-2xl font-bold mb-2">{projet.Nom}</h2>
          <p className="text-lg">{projet.description}</p>
          <button
            className="mt-3 p-2 bg-orange-500 text-white rounded"
            onClick={() => handleClick(projet.documentId)}
          >
            Voir le projet
          </button>
        </div>
        ))}
      </div>
    </section>
      
    </div>
  );
}
