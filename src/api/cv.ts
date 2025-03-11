import { SEOData } from "./seo";
import { API_URL, StrapiObject, Paragraph, getResponsewithBearerToken, Image } from "./strapiformats";


interface CVData extends StrapiObject {
    document: Image;
}

export const fetchCV = async () => {
    const response = await getResponsewithBearerToken(`${API_URL}/cv?populate=*`);
    const cvData: CVData = response.data.data;

    const cv = {
        id: cvData.id,
        documentId: cvData.documentId,
        document: cvData.document.url,
        createdAt: cvData.createdAt,
        updatedAt: cvData.updatedAt,
        publishedAt: cvData.publishedAt,
        locale: cvData.locale,
      
    };

    return cv;
};