import { SEOData } from "./seo";
import { API_URL, Image, StrapiObject, Paragraph, getResponsewithBearerToken } from "./strapiformats";


interface APropos extends StrapiObject {
    title: string;
    introduction: string;
    premier_paragraphe: Paragraph[];
    premiere_image: Image;
    second_paragraphe: Paragraph[];
    troisieme_paragraphe: Paragraph[];
    troisieme_image: Image;
    quatrieme_paragraphe: Paragraph[];
    quatrieme_image: Image;
    cinquieme_paragraphe: Paragraph[];
    cinquieme_image: Image;
    periodePremierParagraphe: string;
    periodeSecondParagraphe: string;
    periodeTroisiemeParagraphe: string;
    periodeQuatriemeParagraphe: string;
    periodeCinquiemeParagraphe: string;
    seo: SEOData;

}

export const fetchAPropos = async () => {
    const response = await getResponsewithBearerToken(`${API_URL}/a-propo?populate=*`);
    const aProposData: APropos = response.data.data;

    const aPropos = {
        id: aProposData.id,
        documentId: aProposData.documentId,
        title: aProposData.title,
        introduction: aProposData.introduction,
        premierParagraphe: aProposData.premier_paragraphe.map((p: Paragraph) => p.children.map(c => c.text).join(' ')).join('\n'),
        premiereImage: aProposData.premiere_image.url ,
        periodePremierParagraphe: aProposData.periodePremierParagraphe,
        secondParagraphe: aProposData.second_paragraphe.map((p: Paragraph) => p.children.map(c => c.text).join(' ')).join('\n'),
        periodeSecondParagraphe: aProposData.periodeSecondParagraphe,
        troisiemeParagraphe: aProposData.troisieme_paragraphe.map((p: Paragraph) => p.children.map(c => c.text).join(' ')).join('\n'),
        troisiemeImage: aProposData.troisieme_image.url ,
        periodeTroisiemeParagraphe: aProposData.periodeTroisiemeParagraphe,
        quatriemeParagraphe: aProposData.quatrieme_paragraphe.map((p: Paragraph) => p.children.map(c => c.text).join(' ')).join('\n'),
        quatriemeImage: aProposData.quatrieme_image.url ,
        periodeQuatriemeParagraphe: aProposData.periodeQuatriemeParagraphe,
        cinquiemeParagraphe: aProposData.cinquieme_paragraphe.map((p: Paragraph) => p.children.map(c => c.text).join(' ')).join('\n'),
        cinquiemeImage: aProposData.cinquieme_image.url ,
        periodeCinquiemeParagraphe : aProposData.periodeCinquiemeParagraphe,
        metaTitle: aProposData.seo.metaTitle,
        metaDescription: aProposData.seo.metaDescription,
        createdAt: aProposData.createdAt,
        updatedAt: aProposData.updatedAt,
        publishedAt: aProposData.publishedAt,
        locale: aProposData.locale,

    }
    return aPropos;
};