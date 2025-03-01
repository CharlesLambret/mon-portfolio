import { useRouter } from "next/router";
import { useEffect } from "react";
import { fetchProjet } from "@/api/apicalls";
import { MacbookMockUp } from "@/components/mockups/macbook";
import { useState } from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import GithubIcon from "@/components/svg/github";
import VecteurSolo from "@/components/svg/vecteursolo";
import VecteurDuo from "@/components/svg/vecteurduo";

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
                
                
            </div>
        );
    }

    return <div>Projet not found</div>;
}