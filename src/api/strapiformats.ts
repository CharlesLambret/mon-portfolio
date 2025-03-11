import axios from 'axios';

export const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

// Strapi Objects -------------------------

export interface Paragraph {
    type: string;
    children: { type: string; text: string }[];
}



export interface StrapiObject {
    id: number;
    documentId: string;
    Title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
}

export interface ImageFormats {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
}

export interface Image {
    formats: ImageFormats;
    url?: string;
}

export interface Lien{
    url: string;
    display: string;
}

export const getResponsewithBearerToken = async (url: string) => {
    return await axios.get(url, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    });
}

export const postResponsewithBearerToken = async (url: string, data: any) => {
    return await axios.post(url, {
        data: data
    }, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    });
}