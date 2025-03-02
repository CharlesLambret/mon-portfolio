import { SEOData } from "./seo";
import { API_URL, Lien, StrapiObject, Paragraph, getResponsewithBearerToken, postResponsewithBearerToken } from "./strapiformats";


export interface PageContact extends StrapiObject {
    title: string;
    description : Paragraph[];
    liens : Lien[];
    seo: SEOData;
}

export const fetchContact = async () => {
    const response = await getResponsewithBearerToken(`${API_URL}/page-contact?populate=*`);
    
    const contactData: PageContact = response.data.data;

    const aPropos = {
        id: contactData.id,
        documentId: contactData.documentId,
        title: contactData.title,
        description: contactData.description.map((p: Paragraph) => p.children.map(c => c.text).join(' ')).join('\n'),
        github: contactData.liens.find((lien: Lien) => lien.display === 'github')?.url,
        linkedin: contactData.liens.find((lien: Lien) => lien.display === 'linkedin')?.url,
        email: contactData.liens.find((lien: Lien) => lien.display === 'email')?.url,
        metaTitle : contactData.seo.metaTitle,
        metaDescription : contactData.seo.metaDescription,
        createdAt: contactData.createdAt,
        updatedAt: contactData.updatedAt,
        publishedAt: contactData.publishedAt,
        locale: contactData.locale

    }
    return aPropos;
};

export interface Contact {
    nom: string;
    prenom: string;
    message : string;
    email: string;
}

export const postContact = async (contact: Contact) => {
    const response = await postResponsewithBearerToken(`${API_URL}/contacts`, contact);
    return response;
}

