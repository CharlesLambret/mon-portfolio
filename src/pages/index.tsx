import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";
import { JSX, useEffect, useState } from "react";
import { fetchAccueil } from "@/api/apicalls";
import Footer from "@/components/footer/footer";
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

  useEffect(() => {
    const getContent = async () => {
      try {
        const data = await fetchAccueil();
        setContent(data);
      } catch (error) {
        console.error("Error fetching accueil:", error);
      }finally {
        setLoading(false);
      }
    };
    getContent();
  }, []);


  const router = useRouter();
  const Pages =[
    {
      name:'A propos',
      imgsrc: './illuapropos.png',
      link: '/a-propos',
    },
    {
      name:'Mes projets',
      imgsrc: './illuprojets.png',
      link: '/projets',
    },
    {
      name:'Contact',
      imgsrc: './illucontact.png',
      link: '/contact',
    },
    
]
  interface Page {
    name: string;
    illustration: JSX.Element;
    link: string;
  }

  const handleClick = (link: string): void => {
    router.push(link);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col w-full min-h-full p-5 justify-center items-center">
      <section className="flex flex-row w-full justify-around items-center mb-5 p-5">
        <div className="flex flex-col  justify-center w-1/2 items-start gap-3">
          <h1 className="text-4xl font-bold text-start">{content.title}</h1>
          <h3 className="text-2xl font-semibold">{content.titreParagraphe}</h3>
          <p className="text-xl font-medium">{content.paragraphe}</p>
        </div>
        <img src="./illuaccueil.png" className="w-1/2"/>
      </section>
      <section className="flex flex-col w-full justify-center items-center gap-5 my-5 py-5">
        <img src="./photo.png" alt="Photo de Charles Lambret" className="rounded-full w-1/6 mt-5"/>
        <h2 className="text-3xl font-bold">{content.titreDeux}</h2>
        <p className="text-lg text-justify w-3/4 mx-auto">
        {content.paragrapheDeux}
        </p>
      </section>
      <section className="flex flex-col w-full justify-center items-center gap-5 my-5 py-5">
        <h2 className="text-3xl font-bold">{content.titreTrois}</h2>
        <p className="text-lg text-justify w-3/4 mx-auto my-4">
        {content.paragrapheTrois}
        </p>
        <div className="flex flex-row justify-center px-5 w-full gap-5">
          {Pages.map((page) => (
            <div key={page.name} onClick={() => handleClick(page.link)} className="py-5 flex flex-col w-1/4 rounded border border-orange-400 hover:p-2 cursor-pointer hover:shadow-lg  hover:bg-orange-500 hover:backdrop-blur-md hover:shadow-orange-300/30 justify-center items-center gap-3">
              <img src={page.imgsrc} alt={page.name} className="w-1/2 my-5"/>
              <p className="font-semibold">{page.name}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
