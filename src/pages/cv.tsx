// filepath: c:\Users\charl\Documents\Dev\siteperso\portfolio\src\pages\CV.tsx
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";
import { JSX, useEffect, useState } from "react";
import { fetchCV } from "@/api/cv";
import GithubIcon from "@/components/svg/github";
import LinkedinIcon from "@/components/svg/linkedin";
import { EnvelopeIcon, CheckIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Footer from "@/components/footer/footer";
import ChargementComponent from "@/components/chargement/chargement";
import CustomHead from "@/components/head/head";
import { useTheme } from "@/context/theme";
import ExperienceItem from "@/components/cv/experience";
import FormationComponent from "@/components/cv/formation";
import SideContentComponent from "@/components/cv/sidecontent";
import Separator from "@/components/cv/separator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function CV() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { theme } = useTheme();

  useEffect(() => {
    const getContent = async () => {
      try {
        const data = await fetchCV();
        setContent(data);
      } catch (error) {
        console.error("Error fetching cv page:", error);
        setError("Failed to load content");
      } finally {
        setLoading(false);
      }
    };
    getContent();
  }, []);

  const router = useRouter();

  if (loading) {
    return <ChargementComponent />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!content) {
    return <div>No content available</div>;
  }
  const Formations = [{
    title: "Mastère CTO Tech Lead",
    institution: "HETIC",
    duration: "2023 - 2025"
  }, {
    title: "Bachelor Coding & Digital Innovation",
    institution: "IIM",
    duration: "2020 - 2023"
  }]

  const sideContents = [{
    title:"Soft Skills",
    texts: content.sotfskills.map((skill: any) => skill.mot)
  }, {
    title:"Hard Skills",
    texts: content.hardskills.map((skill: any) => skill.mot)
  }, {
    title:"Langues",
    texts: content.langues.map((langue: any) => langue.mot)
  }]
  const isLast = (index: number, array: any[]) => index === array.length - 1;
  return (
    <>
      <CustomHead
        pageTitle={content.metaTitle}
        pageDescription={content.metaDescription}
      />
      <div className="flex flex-col w-full min-h-full md:p-5 justify-center items-center">
        <section className="flex flex-col-reverse md:flex-row w-full justify-around items-center mb-5 md:p-5">
          <div className="flex flex-col justify-center w-full md:w-1/2 items-start gap-3 p-3">
            <h1 className="text-4xl font-bold w-full text-center md:text-start">{content.title}</h1>
            <h2 className="text-3xl font-medium w-full text-center md:text-start">{content.subtitle}</h2>
            {content.introduction.split('\n').map((line: string, index: number) => (
              <p key={index} className="text-xl font-medium w-full text-justify">{line}</p>
            ))}
          </div>
          <img src="./illucontactfull.png" className="w-full md:w-1/2 p-2" />
        </section>
        <a href={content.downloadurl} className={`text-medium p-3 rounded ${theme.ctaColor} cursor-pointer w-3/4 md:w-1/3 text-center m-5 font-bold`} download>
          Télécharger mon CV
        </a>
        <section
          id="cv"
          className={`flex flex-col ${theme.bg} w-full md:w-4/5 justify-start md:justify-around items-start p-5 rounded-lg gap-4 shadow my-5 ${theme.ctaShadow}`}
        >
          <div className="flex flex-col-reverse md:p-4 gap-3 md:flex-row w-full h-max-content">
            <div className="flex flex-col gap-2 px-2 w-full items-center md:items-start md:w-4/6 justify-between">
                <h3 className="text-2xl font-bold">Charles Lambret</h3>
                <h4 className="text-xl font-bold text-center md:text-justify">Chef de projet Technique / Développeur Full-Stack</h4>
                <p className="text-justify">{content.premierparagraphe}</p>
            </div>
            <div className="flex flex-col gap-2 px-2 items-center md:items-start md:w-2/6 ">
                <img src="./photo.png" alt="Photo de Charles Lambret" className="rounded-full h-30 p-2" />
                <p className={`${theme.secondary_text} text-sm`}>charleslambretpro@gmail.com</p>
                <p className={`${theme.secondary_text} text-sm`}>+06 66 87 12 43</p>
                <p className={`${theme.secondary_text} text-sm`}>Paris</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:p-4 gap-3 w-full">
            <div className="flex flex-col w-full px-2 md:w-4/6">
              <div className="flex flex-col items-center md:items-start gap-5">
                <h5 className="text-xl font-bold">Expériences</h5>
                {
                  content.experiences &&
                  content.experiences.map((experience: any, index: number) => (
                  <>
                    <ExperienceItem
                    key={index}
                    Poste={experience.Poste}
                    Entreprise={experience.Entreprise}
                    Periode={experience.Periode}
                    description={experience.description}
                    motsclefs={experience.motsclefs}
                    />
                    {!isLast(index, content.experiences) && <Separator type="item" />}
                  </>
                  ))}
              </div>
              <Separator type="section" />
              <div className="flex flex-col items-center md:items-start gap-5 my-5">
                <h5 className="text-xl font-bold">Formations</h5>
                {Formations.map((formation, index) => (
                  <FormationComponent
                    key={index}
                    title={formation.title}
                    institution={formation.institution}
                    duration={formation.duration}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col w-full px-2 md:w-2/6 ">
              {sideContents.map((sideContent, index) => (
                <>
                  
                  <SideContentComponent key={index} title={sideContent.title} texts={sideContent.texts} />
                  <Separator type="section" />
                </>
              ))}
              <div className="flex flex-col gap-2">
                <h5 className="text-xl font-bold text-center md:text-start">Social</h5>
                <a
                  className={`${theme.secondary_text} text-sm underline underline-offset-2 text-center md:text-start`}
                  href="https://linkedin.com/in/charleslambret"
                >
                  Linkedin
                </a>
                <a
                  className={`${theme.secondary_text} text-sm underline underline-offset-2 text-center md:text-start`}
                  href="https://github.com/CharlesLambret"
                >
                  GitHub
                </a>
              </div>
              <Separator type="section" />
              <div className="flex flex-col gap-2">
                <h5 className="text-xl font-bold text-center md:text-start">Associatif</h5>
                {content.associatif &&
                  content.associatif.map((associatif: any, index: number) => (
                    <ExperienceItem
                      key={index}
                      Poste={associatif.Poste}
                      Entreprise={associatif.Entreprise}
                      Periode={associatif.Periode}
                      description={associatif.description}
                      motsclefs={associatif.motsclefs}
                    />
                  ))}
              </div>
            </div>
          </div>
        
          
        </section>
      <Footer />
      </div>
    </>
  );
}