import { SEOData } from "./seo";
import { API_URL, StrapiObject, Paragraph, getResponsewithBearerToken, Image } from "./strapiformats";


interface CVData extends StrapiObject {
    title: string;
    description: string;
    document: Image;
    seo: SEOData;
}

export const fetchCV = async () => {
    const response = await getResponsewithBearerToken(`${API_URL}/cv`);
    const cvData: CVData = response.data.data;

    const cv = {
        id: cvData.id,
        documentId: cvData.documentId,
        title: cvData.title,
        description: cvData.description,
        document: cvData.document.url,
        metaTitle : cvData.seo.metaTitle,
        metaDescription : cvData.seo.metaDescription,
        createdAt: cvData.createdAt,
        updatedAt: cvData.updatedAt,
        publishedAt: cvData.publishedAt,
        locale: cvData.locale,
      
    };

    return cv;
};