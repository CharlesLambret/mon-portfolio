import { SEOData } from "./seo";
import { API_URL, StrapiObject, Paragraph, getResponsewithBearerToken } from "./strapiformats";


interface AccueilData extends StrapiObject {
    Title: string;
    Titre_paragraphe: string;
    Paragraphe: Paragraph[];
    TitreDeux: string;
    ParagrapheDeux: Paragraph[];
    Titre3: string;
    ParagrapheTrois: Paragraph[];
    seo: SEOData;
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
        metaTitle: accueilData.seo.metaTitle,
        metaDescription: accueilData.seo.metaDescription
    };

    return accueil;
};