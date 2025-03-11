import { SEOData } from "./seo";
import { API_URL, Image, StrapiObject, Paragraph, getResponsewithBearerToken } from "./strapiformats";


export interface PortfolioData extends StrapiObject {
    Titre: string;
    Description: Paragraph[];
    seo: SEOData;
}

export const fetchPortfolio = async () => {
    const response = await getResponsewithBearerToken(`${API_URL}/portfolio?populate=*`);
    const portfolioData: PortfolioData = response.data.data;
    const portfolio = {
        id: portfolioData.id,
        documentId: portfolioData.documentId,
        title: portfolioData.Titre,
        description: portfolioData.Description.map((p: Paragraph) => p.children.map(c => c.text).join('\n')).join('\n'),
        metaTitle: portfolioData.seo.metaTitle,
        metaDescription: portfolioData.seo.metaDescription,
        createdAt: portfolioData.createdAt,
        updatedAt: portfolioData.updatedAt,
        publishedAt: portfolioData.publishedAt,
        locale: portfolioData.locale,
    };
    return portfolio;
};


export interface Technology extends StrapiObject {
    Nom: string;
    Icone: Image;
}

export interface Projet extends StrapiObject {
    Nom: string;
    url_github: string;
    url_prod: string;
    description: Paragraph[];
    premier_screen: Image;
    mockup_droite: Image;
    mockup_gauche: Image;
    exemple_code: string;
    technologies: Technology[];
    periode : number;
    duree_realisation : number;
    details_projet: Paragraph[];
    deuxieme_screen: Image;
    seo: SEOData;
}

export const fetchProjets = async () => {
    const response = await getResponsewithBearerToken(`${API_URL}/projets?populate=*`);
    const projetsData: Projet[] = response.data.data;

    const projets = projetsData.map((projet: Projet) => ({
        id: projet.id,
        documentId: projet.documentId,
        Nom: projet.Nom,
        description: projet.description.map((p: Paragraph) => p.children.map(c => c.text).join(' ')).join('\n'),
        details_projet: projet.details_projet.map((p: Paragraph) => p.children.map(c => c.text).join(' ')).join('\n'),
        periode: projet.periode,
        duree_realisation: projet.duree_realisation,
        premier_screen: projet.premier_screen.formats.small?.url ,
        technologies: projet.technologies.map((tech: Technology) => ({
            id: tech.id,
            documentId: tech.documentId,
            Nom: tech.Nom,
        })),
        url_github: projet.url_github,
        url_prod: projet.url_prod,
        mockup_droite: projet.mockup_droite.formats.small?.url ,
        mockup_gauche: projet.mockup_gauche.formats.small?.url ,
        exemple_code: projet.exemple_code,
        createdAt: projet.createdAt,
        updatedAt: projet.updatedAt,
        publishedAt: projet.publishedAt,
        locale: projet.locale,
        metaTitle: projet.seo.metaTitle,
        metaDescription: projet.seo.metaDescription
    }));

    return projets;
};

export const fetchProjet = async (documentId: string) => {
    const response = await getResponsewithBearerToken(`${API_URL}/projets/${documentId}?populate=*`);
    const projetData: Projet = response.data.data;

    const projet = {
        id: projetData.id,
        documentId: projetData.documentId,
        Nom: projetData.Nom,
        description: projetData.description.map((p: Paragraph) => p.children.map(c => c.text).join(' ')).join('\n'),
        premier_screen: projetData.premier_screen.formats.medium?.url ,
        details_projet: projetData.details_projet.map((p: Paragraph) => p.children.map(c => c.text).join(' ')).join('\n'),
        periode: projetData.periode,
        duree_realisation: projetData.duree_realisation,
        deuxieme_screen: projetData.deuxieme_screen.url || projetData.deuxieme_screen.formats.medium?.url,
        mockup_droite: projetData.mockup_droite.formats.medium?.url ,
        mockup_gauche: projetData.mockup_gauche.formats.medium?.url ,
        technologies: projetData.technologies.map((tech: Technology) => ({
            id: tech.id,
            documentId: tech.documentId,
            Nom: tech.Nom,
        })),
        url_github: projetData.url_github,
        url_prod: projetData.url_prod,
        exemple_code: projetData.exemple_code,
        createdAt: projetData.createdAt,
        updatedAt: projetData.updatedAt,
        publishedAt: projetData.publishedAt,
        locale: projetData.locale
    };

    return projet;
};