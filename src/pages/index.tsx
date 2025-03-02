import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";
import { JSX, useEffect, useState, useRef } from "react";
import { fetchAccueil } from "@/api/accueil";
import { fetchSEO } from "@/api/seo";
import Footer from "@/components/footer/footer";
import styles from '@/styles/home.module.css'; // Importez le fichier CSS
import ChargementComponent from "@/components/chargement/chargement";
import Head from "next/head";
import CustomHead from "@/components/head/head";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const secondSectionRef = useRef(null);
  const pagesRef = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const getContent = async () => {
      try {
        const data = await fetchAccueil();
        const seoData = await fetchSEO();
        setContent(data);
        
      } catch (error) {
        console.error("Error fetching accueil:", error);
      } finally {
        setLoading(false);
      }
    };
    getContent();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.slideInLeft);
        }
      });
    });

    if (secondSectionRef.current) {
      observer.observe(secondSectionRef.current);
    }

    return () => {
      if (secondSectionRef.current) {
        observer.unobserve(secondSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const animatePages = () => {
      pagesRef.current.forEach((page, index) => {
        setTimeout(() => {
          if (page) {
            page.classList.add(styles.liftUp);
          }
        }, index * 300); // Délai entre chaque animation
      });
    };

    animatePages();
  }, []);

  const router = useRouter();
  const Pages = [
    {
      name: 'A propos',
      imgsrc: './illuapropos.png',
      link: '/a-propos',
    },
    {
      name: 'Mes projets',
      imgsrc: './illuprojets.png',
      link: '/projets',
    },
    {
      name: 'Contact',
      imgsrc: './illucontact.png',
      link: '/contact',
    },
  ];

  interface Page {
    name: string;
    illustration: JSX.Element;
    link: string;
  }

  const handleClick = (link: string): void => {
    router.push(link);
  };

  if (loading) {
    return <ChargementComponent/>;
  }

  return (
    <>
    <CustomHead
      pageTitle={content.metaTitle}
      pageDescription={content.metaDescription}
    />
    <div className="flex flex-col w-full min-h-full p-5 justify-center items-center">
      <section className={`flex flex-col-reverse md:flex-row w-full justify-around items-center mb-5 md:p-5 ${styles.fadeIn}`}>
        <div className="flex flex-col justify-center w-full md:w-1/2 items-start gap-3 text-center md:text-start">
          <h1 className="text-4xl font-bold ">{content.title}</h1>
          <h3 className="text-2xl font-semibold text-start">{content.titreParagraphe}</h3>
          <p className="text-xl font-medium text-justify">{content.paragraphe}</p>
        </div>
        <img src="./illuaccueil.png" className={`w-full md:w-1/2 ${styles.floatAnimation}`} alt="Illustration d'accueil" />
      </section>
      <div className="my-5 py-1 h-30 hidden md:block"></div>
      <section ref={secondSectionRef} className="flex flex-col w-full justify-center items-center gap-5 md:my-5 py-5">
        <img src="./photo.png" alt="Photo de Charles Lambret" className="rounded-full w-1/2 mx-auto md:w-1/6 mt-5" />
        <h2 className="text-3xl font-bold">{content.titreDeux}</h2>
        <p className="text-lg text-justify w-full md:w-3/4 mx-auto">
          {content.paragrapheDeux}
        </p>
      </section>
      <section className="flex flex-col w-full justify-center items-center gap-5 my-5 py-5">
        <h2 className="text-3xl font-bold text-center md:text-start">{content.titreTrois}</h2>
        <p className="text-lg text-justify w-full text-justify md:w-3/4 mx-auto my-4">
          {content.paragrapheTrois}
        </p>
        <div className="flex flex-col  md:flex-row justify-center px-5 w-full gap-5">
          {Pages.map((page, index) => (
            <div
              key={page.name}
              ref={(el) => {
                pagesRef.current[index] = el;
              }}
              onClick={() => handleClick(page.link)}
              className="py-5 flex flex-col w-full md:w-1/4 rounded border border-orange-400 hover:p-2 cursor-pointer hover:shadow-lg hover:bg-orange-500 hover:backdrop-blur-md hover:shadow-orange-300/30 justify-center items-center gap-3"
            >
              <img src={page.imgsrc} alt={page.name} className="w-1/2 my-5" />
              <p className="font-semibold">{page.name}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
    </>
    
  );
}
