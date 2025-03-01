import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

// Strapi Objects -------------------------

interface Paragraph {
    type: string;
    children: { type: string; text: string }[];
}

interface StrapiObject {
    id: number;
    documentId: string;
    Title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
}

interface ImageFormats {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
}

interface Image {
    formats: ImageFormats;
}

const getResponsewithBearerToken = async (url: string) => {
    return await axios.get(url, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    });
}

// Pages -------------------------

interface AccueilData extends StrapiObject {
    Title: string;
    Titre_paragraphe: string;
    Paragraphe: Paragraph[];
    TitreDeux: string;
    ParagrapheDeux: Paragraph[];
    Titre3: string;
    ParagrapheTrois: Paragraph[];
}

export const fetchAccueil = async () => {
    const response = await getResponsewithBearerToken(`${API_URL}/accueil`);
    const accueilData: AccueilData = response.data.data;

    const accueil = {
        id: accueilData.id,
        documentId: accueilData.documentId,
        title: accueilData.Title,
        titreParagraphe: accueilData.Titre_paragraphe,
        paragraphe: accueilData.Paragraphe.map((p: Paragraph) => p.children.map(c => c.text).join(' ')).join('\n'),
        titreDeux: accueilData.TitreDeux,
        paragrapheDeux: accueilData.ParagrapheDeux.map((p: Paragraph) => p.children.map(c => c.text).join(' ')).join('\n'),
        titreTrois: accueilData.Titre3,
        paragrapheTrois: accueilData.ParagrapheTrois.map((p: Paragraph) => p.children.map(c => c.text).join(' ')).join('\n'),
        createdAt: accueilData.createdAt,
        updatedAt: accueilData.updatedAt,
        publishedAt: accueilData.publishedAt,
        locale: accueilData.locale,
    };

    return accueil;
};

export interface PortfolioData extends StrapiObject {
    Titre: string;
    Description: Paragraph[];
}

export const fetchPortfolio = async () => {
    const response = await getResponsewithBearerToken(`${API_URL}/portfolio`);
    const portfolioData: PortfolioData = response.data.data;
    const portfolio = {
        id: portfolioData.id,
        documentId: portfolioData.documentId,
        title: portfolioData.Titre,
        description: portfolioData.Description.map((p: Paragraph) => p.children.map(c => c.text).join(' ')).join('\n'),
        createdAt: portfolioData.createdAt,
        updatedAt: portfolioData.updatedAt,
        publishedAt: portfolioData.publishedAt,
        locale: portfolioData.locale,
    };
    return portfolio;
};

export const fetchAPropos = async () => {
    const response = await axios.get(`${API_URL}/a-propos?populate=*`);
    return response.data;
};

export const fetchContact = async () => {
    const response = await axios.get(`${API_URL}/contact`);
    return response.data;
};

// Projets -------------------------

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
}

export const fetchProjets = async () => {
    const response = await getResponsewithBearerToken(`${API_URL}/projets?populate=*`);
    const projetsData: Projet[] = response.data.data;

    const projets = projetsData.map((projet: Projet) => ({
        id: projet.id,
        documentId: projet.documentId,
        Nom: projet.Nom,
        description: projet.description.map((p: Paragraph) => p.children.map(c => c.text).join(' ')).join('\n'),
        premier_screen: projet.premier_screen.formats.small?.url || '',
        technologies: projet.technologies.map((tech: Technology) => ({
            id: tech.id,
            documentId: tech.documentId,
            Nom: tech.Nom,
            Icone: tech.Icone.formats.small?.url || ''
        })),
        url_github: projet.url_github,
        url_prod: projet.url_prod,
        mockup_droite: projet.mockup_droite.formats.small?.url || '',
        mockup_gauche: projet.mockup_gauche.formats.small?.url || '',
        exemple_code: projet.exemple_code,
        createdAt: projet.createdAt,
        updatedAt: projet.updatedAt,
        publishedAt: projet.publishedAt,
        locale: projet.locale
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
        premier_screen: projetData.premier_screen.formats.medium?.url || '',
        mockup_droite: projetData.mockup_droite.formats.medium?.url || '',
        mockup_gauche: projetData.mockup_gauche.formats.medium?.url || '',
        technologies: projetData.technologies.map((tech: Technology) => ({
            id: tech.id,
            documentId: tech.documentId,
            Nom: tech.Nom,
            Icone: tech.Icone.formats.small?.url || ''
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