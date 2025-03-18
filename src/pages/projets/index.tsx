
import { useRouter } from "next/router";
import {  useEffect, useState } from "react";
import { fetchPortfolio, fetchProjets } from "@/api/projets";
import { ArrowDownIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Footer from "@/components/footer/footer";
import ChargementComponent from "@/components/chargement/chargement";
import NoProjectFoundComponent from "@/components/noprojectfound/noprojectfound";
import CustomHead from "@/components/head/head";
import { useTheme } from "@/context/theme";
function truncateText(text: string, maxLength: number): string {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
}

export default function Home() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [projets, setProjets] = useState<any[]>([]);
  const [originalProjets, setOriginalProjets] = useState<any[]>([]);
  const {theme} = useTheme();
  interface Technology {
    Nom: string;
    Icone: string;
  }

  useEffect(() => {
    const getContent = async () => {
      try {
        const data = await fetchPortfolio();
        const projets = await fetchProjets();
        setContent(data);
        setProjets(projets);
        setOriginalProjets(projets); // Store the original list of projects
      } catch (error) {
        console.error("Error fetching portfolio or projects:", error);
      } finally {
        setLoading(false);
      }
    };
    getContent();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === '') {
      setProjets(originalProjets); // Reset to the original list of projects
    } else {
      const filteredProjets = originalProjets.filter((projet) =>
        projet.technologies.some((tech: Technology) =>
          tech.Nom.toLowerCase().includes(term)
        )
      );
      setProjets(filteredProjets);
    }
  };

  const router = useRouter();

  const handleClick = (documentId: string): void => {
    router.push(`/projets/${documentId}`);
  };

  if (loading) {
    return <ChargementComponent />;
  }

  return (
    <>
      <CustomHead pageTitle={content.metaTitle} pageDescription={content.metaDescription} />
      <div className="flex flex-col w-full min-h-full p-5 justify-center items-center">
        <section className="flex flex-col-reverse md:flex-row w-full justify-around items-center mb-5 p-5">
          <div className="flex flex-col justify-center w-full md:w-1/2 items-start gap-3">
            <h1 className="text-4xl font-bold text-start">{content.title}</h1>
            {content.description ? (
              content.description.split('\n').map((paragraph: string, index: number) => (
                <p key={index} className="text-xl font-medium">{paragraph}</p>
              ))
            ) : null}
            
          </div>
          <img src="./illuportfolio.png" className="w-full md:w-1/2" />
        </section>
        <ArrowDownIcon className="w-8 fill-white" />
        <section className="flex flex-col w-full mt-5">
          <div className="flex flex-row mb-5 py-5 gap-2 w-full justify-start items-center">
            <MagnifyingGlassIcon className="w-8 md:w-10" />
            <input
              type="text"
              placeholder="Rechercher une technologie..."
              className="p-2 border border-white rounded-full w-5/6 md:w-1/3 focus:border-orange-500 hover:border-orange-400"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center px-5 w-full gap-5 my-5">
            {projets.length === 0 ? (
              <NoProjectFoundComponent />
            ) : (
              projets.map((projet) => (
                <div key={projet.id} className={`p-5 flex flex-col w-full md:w-1/3 rounded shadow-lg ${theme.ctaShadow} justify-center items-center gap-3 ${theme.bg_dark} ${theme.bg_dark}`}>
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_UPLOADS_URL}${projet.premier_screen}`}
                    alt={projet.Nom}
                    className="w-full p-1"
                  />
                  <h2 className="text-2xl font-bold mb-2">{projet.Nom}</h2>
                  <p className="text-lg">{truncateText(projet.description, 90)}</p>
                  <div className="flex flex-row-wrap gap-2 items-center justify-center">
                    {projet.technologies.map((tech: Technology, index: number) => (
                      <p className="text-sm" key={index}>
                        {tech.Nom}{index < projet.technologies.length - 1 ? ',' : ''}
                      </p>
                    ))}
                  </div>
                  <button
                    className="mt-3 p-2 border-2 border-white cursor-pointer text-white rounded hover:bg-orange-500 hover:border-orange-500 hover:shadow-md hover:shadow-orange-400/30"
                    onClick={() => handleClick(projet.documentId)}
                  >
                    Voir le projet
                  </button>
                </div>
              ))
            )}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}