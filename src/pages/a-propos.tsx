import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";
import { JSX, useEffect, useState } from "react";
import { fetchAPropos } from "@/api/apicalls";
import Footer from "@/components/footer/footer";
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
      }finally {
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
      <section className="flex flex-row w-full justify-around items-center mb-5 p-5">
        <img src="./illuaproposfull.png" className="w-1/2 p-2"/>
        <div className="flex flex-col  justify-center w-1/2 items-start gap-3 p-3">
          <div className="flex flex-row gap-3 items-center">
            <img src="./photo.png" className="w-1/5 p-5"/>
            <h1 className="text-4xl font-bold text-start">{content.title}</h1>
          </div>
            
            <p className="text-xl font-medium text-justify">{content.introduction}</p>
        </div>
      </section>
      <section className="flex flex-row w-full justify-center items-center p-5">
        <div className="w-1/3">
        </div>
        <div className="w-1/3 flex flex-col justify-center items-center">
          <div className="w-7 h-7 rounded-full border-3 border-fuchsia-700"></div>
          <div className=" w-1 h-15 bg-fuchsia-700"></div>
            <img 
                src={`${process.env.NEXT_PUBLIC_BASE_UPLOADS_URL}${content.premiereImage}`}
                className='p-5'

            />
          <div className=" w-1 h-15 bg-fuchsia-700"></div>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <p className="text-md text-justify">{content.premierParagraphe}</p>
        </div>
      </section>
      <section className="flex flex-row w-full justify-center items-center">
        <div className="w-1/3">
          <p className="text-md text-justify">{content.secondParagraphe}</p>

        </div>
        <div className="w-1/3 flex justify-center items-center">
          <div className=" w-1 h-40 bg-fuchsia-700"></div>

        </div>
        <div className="w-1/3 flex justify-center items-center">
        </div>
      </section>
      <section className="flex flex-row w-full justify-center items-center">
        <div className="w-1/3">
        </div>
        <div className="w-1/3 flex flex-col justify-center items-center">
        <div className=" w-1 h-15 bg-fuchsia-700"></div>

          <img 
              src={`${process.env.NEXT_PUBLIC_BASE_UPLOADS_URL}${content.troisiemeImage}`}
              className='p-5'

          />
                  <div className=" w-1 h-15 bg-fuchsia-700"></div>

        </div>
        <div className="w-1/3 flex justify-center items-center">
          <p className="text-md text-justify">{content.troisiemeParagraphe}</p>
        </div>
      </section>
      <section className="flex flex-row w-full justify-center items-center">
        <div className="w-1/3">
          <p className="text-md text-justify">{content.quatriemeParagraphe}</p>

        </div>
        <div className="w-1/3 flex flex-col justify-center items-center">
        <div className=" w-1 h-15 bg-fuchsia-700"></div>

          <img 
                src={`${process.env.NEXT_PUBLIC_BASE_UPLOADS_URL}${content.quatriemeImage}`}
                className='p-5'

            />
                    <div className=" w-1 h-15 bg-fuchsia-700"></div>

        </div>
        <div className="w-1/3 flex justify-center items-center">
        </div>
      </section>
      <section className="flex flex-row w-full justify-center items-center">
        <div className="w-1/3">
        </div>
        <div className="w-1/3 flex flex-col justify-center items-center">
        <div className=" w-1 h-15 bg-fuchsia-700"></div>

          <img 
              src={`${process.env.NEXT_PUBLIC_BASE_UPLOADS_URL}${content.cinquiemeImage}`}
              className='p-5'
          />
        <div className=" w-1 h-15 bg-fuchsia-700"></div>

        </div>
        <div className="w-1/3 flex justify-center items-center">
          <p className="text-md text-justify">{content.troisiemeParagraphe}</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
