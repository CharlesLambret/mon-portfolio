import { SEOData } from "./seo";
import { API_URL, Image, StrapiObject, Paragraph, getResponsewithBearerToken } from "./strapiformats";

interface Section extends StrapiObject {
    paragraphe: string;
    image: Image;
    periode: string;
}

interface APropos extends StrapiObject {
    title: string;
    introduction: Paragraph[];
    sections: Section[];
    seo: SEOData;

}

export const fetchAPropos = async () => {
    const response = await getResponsewithBearerToken(`${API_URL}/a-propo?populate[sections][populate]=image&populate=seo`);
    const aProposData: APropos = response.data.data;

    const aPropos = {
        id: aProposData.id,
        documentId: aProposData.documentId,
        title: aProposData.title,
        introduction: aProposData.introduction,
        sections: aProposData.sections.map((s: Section) => ({
            paragraphe: s.paragraphe,
            image: s.image?.url || '',
            periode: s.periode
        })),
        metaTitle: aProposData.seo.metaTitle,
        metaDescription: aProposData.seo.metaDescription,
        createdAt: aProposData.createdAt,
        updatedAt: aProposData.updatedAt,
        publishedAt: aProposData.publishedAt,
        locale: aProposData.locale,

    }
    return aPropos;
};