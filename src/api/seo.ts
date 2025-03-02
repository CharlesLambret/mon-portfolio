import { API_URL, StrapiObject, Image, getResponsewithBearerToken } from "./strapiformats";

interface SEOGlobals extends StrapiObject {
    siteName: string;
    favicon: Image;
}

export interface SEOData extends StrapiObject {
    metaTitle: string;
    metaDescription: string;
}

export const fetchSEO = async () => {
    console.log('fetchSEO');
    console.log(`${API_URL}/global?populate=*`);
    const response = await getResponsewithBearerToken(`${API_URL}/global?populate=*`);
    console.log(response);

    const seoData: SEOGlobals = response.data.data;

    const seo = {
        id: seoData.id,
        documentId: seoData.documentId,
        siteName: seoData.siteName,
        favicon: seoData.favicon.url,
        createdAt: seoData.createdAt,
        updatedAt: seoData.updatedAt,
        publishedAt: seoData.publishedAt,
        locale: seoData.locale,
    };

    return seo;
};