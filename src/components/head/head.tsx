import Head from "next/head";
import { useState, useEffect } from "react";
import { fetchSEO } from "@/api/seo";
import ChargementComponent from "../chargement/chargement";

interface HeadProps {
    pageTitle: string;
    pageDescription: string;
}

export default function CustomHead({ pageTitle, pageDescription }: HeadProps) {
    const [baseSEO, setBaseSEO] = useState<any>(null);

    useEffect(() => {
        const getContent = async () => {
          try {
            const seoData = await fetchSEO();
            setBaseSEO(seoData);
          } catch (error) {
            console.error("Error fetching baseSEO:", error);
          }
        };
        getContent();
      }, []);

    if (!baseSEO) {
        return <ChargementComponent/>; // or a loading spinner, or any placeholder
    }

    return (
        <Head>
            <title>{pageTitle} | {baseSEO.siteName}</title>
            <meta name="description" content={pageDescription} />
            <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_UPLOADS_URL}${baseSEO.favicon}`} />
        </Head>
    );
}