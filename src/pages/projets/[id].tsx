import { useRouter } from "next/router";
import { useEffect } from "react";
import { fetchProjet } from "@/api/projets";
import { MacbookMockUp } from "@/components/mockups/macbook";
import { useState } from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import GithubIcon from "@/components/svg/github";
import VecteurSolo from "@/components/svg/vecteursolo";
import VecteurDuo from "@/components/svg/vecteurduo";
import Footer from "@/components/footer/footer";
import ChargementComponent from "@/components/chargement/chargement";
import NoProjectFoundComponent from "@/components/noprojectfound/noprojectfound";
import CustomHead from "@/components/head/head";

interface Technologie {
    id: string;
    Nom: string;
}
export default function ProjetPage() {
    const router = useRouter();
    const { id } = router.query;
    const [projet, setProjet] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const formatCode = (code: string) => {
        // Remove backticks and trim whitespace
        const cleanedCode = code.replace(/```/g, '').trim();
        // Add line breaks for long lines
        
        return cleanedCode;
    };

    useEffect(() => {
        if (id) {
            const fetchProj = async () => {
                try {
                    const response = await fetchProjet(String(id));
                    setProjet(response);
                } catch (error) {
                    console.error('Error fetching projet:', error);
                } finally {
                    setLoading(false);
                }
            };
            fetchProj();
        }
    }, [id]);

    if (loading) {
    return <ChargementComponent/>;
    }

    if (projet) {
        return (
            <>
              <CustomHead
                pageTitle={projet.metaTitle}
                pageDescription={projet.metaDescription}
              />
                
                <div className="flex flex-col w-full min-h-full p-5 justify-center items-center">
                    {projet.premier_screen && (
                        <img 
                            className="md:hidden w-full my-5" 
                            src={`${process.env.NEXT_PUBLIC_BASE_UPLOADS_URL}${projet.premier_screen}`} 
                            alt="mockup"
                        />
                    )}
                    <div className="flex flex-col md:flex-row justify-evenly items-center py-5 w-full md:w-1/2 mx-auto">
                        {projet.url_prod?.startsWith("https://") && (
                            <a href={projet.url_prod} target="_blank" rel="noreferrer" className="text-white my-2 py-2 px-4 gap-2 flex flex-row justify-center items-center rounded-full bg-linear-to-b from-orange-300 to-orange-400">
                                <GlobeAltIcon className="w-10" /> Voir le projet en ligne
                            </a>
                        )}
                        {projet.url_github?.startsWith("https://") && (
                             <a href={projet.url_github} target="_blank" rel="noreferrer" className="text-white my-2 py-2 px-4 gap-2 flex flex-row justify-center items-center rounded-full bg-linear-to-b from-purple-500 to-purple-600"><GithubIcon className="w-10"/>Accéder au Github</a>

                        )}
                    </div>
                    <div className="flex hidden md:block flex-row justify-evenly items-center py-5 mx-auto">
                        <VecteurSolo className="w-20"/>
                        <MacbookMockUp
                            src={`${process.env.NEXT_PUBLIC_BASE_UPLOADS_URL}${projet.premier_screen}`}
                            
                        />
                        <VecteurDuo className="w-30"/>
                    </div>
                    <div className="flex flex-col md:flex-row w-full justify-center md:justify-around items-center my-5">
                    <p className="text-lg font-medium py-5"> Technologies utilisées :   
                    {projet.technologies.map((tech: Technologie, index: number) => (
                        <> {tech.Nom}{index < projet.technologies.length - 1 ? ',' : ''}</>
                    ))}
                        </p>
                        <p className="text-lg font-medium py-5">
                            Période de réalisation : {projet.periode} 
                        </p>
                        <p className="text-lg font-medium py-5">
                            Durée de réalisation : {projet.duree_realisation} jours
                        </p>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row justify-evenly items-center py-5 mx-auto w-full md:w-4/5 gap-5 my-5">
                        <div className={`flex flex-col gap-3 justify-center w-full md:${projet.mockup_droite? 'w-1/2': 'w-full'} items-center md:items-start py-5  md:py-0`}>
                            <h2 className="text-2xl font-bold text-center md:text-start">Description du projet</h2>
                            <p className="text-lg font-medium w-full text-justify">{projet.description}</p>
                        </div>
                        {projet.mockup_droite && (
                        <div className="w-full md:w-1/2 mx-2 border-purple-500 border-2 p-3 rounded">
                            <img 
                                src={`${process.env.NEXT_PUBLIC_BASE_UPLOADS_URL}${projet.mockup_droite}`}
                                alt="mockup droite"
                                className="w-full"
                            />
                        </div>
                        )}
                    </div>
                    {projet.deuxieme_screen && (
                    <>
                    <div className="w-full md:w-4/5 my-5 py-5">
                        <div className="h-1 bg-gradient-to-r from-orange-500 via-purple-500 to-violet-500"></div>
                    </div>

                    <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_UPLOADS_URL}${projet.deuxieme_screen}`}
                        className="w-full md:w-4/5"
                    />
                    </>
                    
                    )}
                    <div className="w-full md:w-4/5 my-5 py-5">
                        <div className="h-1 bg-gradient-to-r from-orange-500 via-purple-500 to-violet-500"></div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center py-5 mx-auto w-full md:w-4/5 gap-5 my-5">
                        <div className="w-full md:w-1/2 mx-2 border-purple-500 border-2 p-3 rounded">
                        {projet.mockup_gauche && (

                            <img 
                                src={`${process.env.NEXT_PUBLIC_BASE_UPLOADS_URL}${projet.mockup_gauche}`}
                                alt="mockup gauche"
                                className="w-full"
                            />
                        )}
                        </div>
                        <div className={`flex flex-col gap-3 py-5 justify-center w-full md:${projet.mockup_gauche? 'w-1/2': 'w-full'} items-start`}>
                            <h2 className="text-2xl font-bold  text-center w-full md:text-start">Détails du projet</h2>
                            <p className="text-lg font-medium text-justify w-full">{projet.details_projet}</p>
                        </div>
                    </div>
                    <div className="hidden md:block w-full md:w-4/5 my-5 py-5">
                        <h2 className="text-2xl font-bold text-center md:text-start">Exemple de code</h2>
                        <pre className="bg-gray-800 text-white p-4 rounded" style={{ whiteSpace: 'pre-wrap' }}>
                            <code className="language-javascript">{formatCode(projet.exemple_code)}</code>
                        </pre>
                    </div>
                    <Footer />
                </div>
            </>
        );
    }

    return <NoProjectFoundComponent />;
}