import { SEOData } from "./seo";
import { API_URL, StrapiObject, getResponsewithBearerToken } from "./strapiformats";


interface CVData extends StrapiObject {
    downloadurl: string;
    PremierParagraphe: string;
    experiences: Experience[];
    sotfskills : StringObject[];
    hardskills : StringObject[];
    langues : StringObject[];
    associatif : Experience[];
    title: string;
    subtitle: string;
    introduction: string;
    seo : SEOData;
}

interface StringObject{
    mot: string;
}
export interface Experience {
    Entreprise : string;
    Periode : string;
    description : string;
    motsclefs: StringObject[];
    Poste: string;
}



export const fetchCV = async () => {
    const response = await getResponsewithBearerToken(`${API_URL}/cv?populate[experiences][populate]=*&populate[associatif][populate]=*&populate[seo]=true&populate[sotfskills]=true&populate[hardskills]=true&populate[langues]=true`);
    const cvData: CVData = response.data.data;

    const cv = {
        id: cvData.id,
        documentId: cvData.documentId,
        downloadurl: cvData.downloadurl,
        premierparagraphe: cvData.PremierParagraphe,
        experiences: cvData.experiences,
        sotfskills : cvData.sotfskills,
        hardskills : cvData.hardskills,
        langues :cvData.langues,
        associatif : cvData.associatif,
        title: cvData.title,
        subtitle: cvData.subtitle,
        introduction: cvData.introduction,
        metaTitle: cvData.seo.metaTitle,
        metaDescription: cvData.seo.metaDescription,
        createdAt: cvData.createdAt,
        updatedAt: cvData.updatedAt,
        publishedAt: cvData.publishedAt,
        locale: cvData.locale,
      
    };

    return cv;
};