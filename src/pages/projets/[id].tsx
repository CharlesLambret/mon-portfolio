import { useRouter } from "next/router";
import { useEffect } from "react";
import { fetchProjet } from "@/api/apicalls";
import { MacbookMockUp } from "@/components/mockups/macbook";
import { useState } from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import GithubIcon from "@/components/svg/github";
import VecteurSolo from "@/components/svg/vecteursolo";
import VecteurDuo from "@/components/svg/vecteurduo";
import Footer from "@/components/footer/footer";

interface Technologie {
    id: string;
    Nom: string;
}
export default function ProjetPage() {
    const router = useRouter();
    const { id } = router.query;
    const [projet, setProjet] = useState<any>(null);
    const [loading, setLoading] = useState(true);

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
        return <div>Loading...</div>;
    }

    if (projet) {
        return (
            <div className="flex flex-col w-full min-h-full p-5 justify-center items-center">
                <h1 className="text-4xl font-bold">{projet.Nom}</h1>
                <div className="flex flex-row justify-evenly items-center py-5 w-1/2 mx-auto">
                    <a href={projet.url_prod} target="_blank" rel="noreferrer" className="text-white py-2 px-4 gap-2 flex flex-row justify-center items-center rounded-full bg-linear-to-b from-orange-300 to-orange-400  "> <GlobeAltIcon className="w-10"/> Voir le projet en ligne</a>
                    <a href={projet.url_github} target="_blank" rel="noreferrer" className="text-white py-2 px-4 gap-2 flex flex-row justify-center items-center rounded-full bg-linear-to-b from-purple-500 to-purple-600"><GithubIcon className="w-10"/>Accéder au Github</a>
                </div>
                <div className="flex flex-row justify-evenly items-center py-5 mx-auto">
                    <VecteurSolo className="w-20"/>
                    <MacbookMockUp
                        src={`${process.env.NEXT_PUBLIC_BASE_UPLOADS_URL}${projet.premier_screen}`}
                        
                    />
                    <VecteurDuo className="w-30"/>
                </div>
                <div className="flex flex-row w-full justify-around items-center my-5">
                  <p className="text-lg font-medium"> Technologies utilisées :   
                     {projet.technologies.map((technologie: Technologie) => (
                                           <span key={technologie.id}> {technologie.Nom} </span>
                                        ))  }
                    </p>
                    <p className="text-lg font-medium">
                        Période de réalisation : {projet.periode} 
                    </p>
                    <p className="text-lg font-medium">
                        Durée de réalisation : {projet.duree_realisation} jours
                    </p>
                </div>
                <div className="flex flex-row justify-evenly items-center py-5 mx-auto w-2/3 my-5">
                    <div className="flex flex-col gap-3 justify-center w-2/3 items-start">
                        <h2 className="text-2xl font-bold">Description du projet</h2>
                        <p className="text-lg font-medium">{projet.description}</p>
                    </div>
                    <div className="w-1/3 mx-2 border-purple-500 border-2 p-3 rounded">
                        <img 
                            src={`${process.env.NEXT_PUBLIC_BASE_UPLOADS_URL}${projet.mockup_droite}`}
                            alt="mockup droite"
                            className="w-full"
                        />
                    </div>
                </div>
                <div className="w-4/5 my-5 py-5">
                    <div className="h-1 bg-gradient-to-r from-orange-500 via-purple-500 to-violet-500"></div>
                </div>
                <img 
                    src={`${process.env.NEXT_PUBLIC_BASE_UPLOADS_URL}${projet.deuxieme_screen}`}
                    className="w-4/5"
                />
                <div className="w-4/5 my-5 py-5">
                    <div className="h-1 bg-gradient-to-r from-orange-500 via-purple-500 to-violet-500"></div>
                </div>
                <div className="flex flex-row justify-evenly items-center py-5 mx-auto w-2/3 my-5">
                    <div className="w-1/3 mx-2 border-purple-500 border-2 p-3 rounded">
                        <img 
                            src={`${process.env.NEXT_PUBLIC_BASE_UPLOADS_URL}${projet.mockup_gauche}`}
                            alt="mockup gauche"
                            className="w-full"
                        />
                    </div>
                    <div className="flex flex-col gap-3 justify-center w-1/2 items-start">
                        <h2 className="text-2xl font-bold">Détails du projet</h2>
                        <p className="text-lg font-medium">{projet.details_projet}</p>
                    </div>
                </div>
                <p>{projet.exemple_code}</p>
                <Footer />
            </div>
        );
    }

    return <div>Projet not found</div>;
}