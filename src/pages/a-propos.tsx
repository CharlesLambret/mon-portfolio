import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";
import { JSX, useEffect, useState } from "react";
import { fetchAPropos } from "@/api/apropos";
import Footer from "@/components/footer/footer";
import Section from "@/components/section/section";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function APropos() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getContent = async () => {
      try {
        const data = await fetchAPropos();
        setContent(data);
      } catch (error) {
        console.error("Error fetching a-propos:", error);
      } finally {
        setLoading(false);
      }
    };
    getContent();
  }, []);

  const router = useRouter();

  const handleClick = (link: string): void => {
    router.push(link);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col w-full min-h-full p-5 justify-center items-center">
      <section className="flex flex-col md:flex-row w-full justify-around items-center mb-5 md:p-5">
        <img src="./illuaproposfull.png" className="w-full md:w-1/2 p-2"/>
        <div className="flex flex-col justify-center w-full md:w-1/2 items-start gap-3 md:p-3">
          <div className="flex flex-col w-full md:flex-row gap-3 items-center">
            <img src="./photo.png" className="hidden md:block md:w-1/5 p-5"/>
            <h1 className="text-4xl font-bold text-center w-full md:text-start">{content.title}</h1>
          </div>
          <p className="text-xl font-medium w-full text-justify">{content.introduction}</p>
        </div>
      </section>
      {content.sections.map((section: any, index: number) => (
        <Section
          key={index}
          imageSrc={section.image}
          text={section.paragraphe}
          date={section.periode}
          reverse={index % 2 !== 0}
          isFirst={index === 0}
          isSecond={index === 1}
        />
      ))}
      <Footer />
    </div>
  );
}