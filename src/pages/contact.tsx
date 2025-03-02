import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";
import { JSX, useEffect, useState } from "react";
import { fetchContact, postContact } from "@/api/apicalls";
import GithubIcon from "@/components/svg/github";
import LinkedinIcon from "@/components/svg/linkedin";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Footer from "@/components/footer/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function Contact() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getContent = async () => {
      try {
        const data = await fetchContact();
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = {
      nom: formData.get('nom') as string,
      prenom: formData.get('prenom') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string
    }
    console.log(data);
    const response = await postContact(data);
    console.log(response);
    return (
        <p>Message envoyé !</p>
    )
    }

  return (
    <div className="flex flex-col w-full min-h-full p-5 justify-center items-center">
      <section className="flex flex-row w-full justify-around items-center mb-5 p-5">
        <div className="flex flex-col  justify-center w-1/2 items-start gap-3 p-3">
            <h1 className="text-4xl font-bold text-start">{content.title}</h1>
            
            <p className="text-xl font-medium text-justify">{content.description}</p>
        </div>
        <img src="./illucontactfull.png" className="w-1/2 p-2"/>

      </section>
      <section className="flex flex-row w-full justify-around items-start p-5">
        <form className="flex flex-col w-1/2 gap-5 p-5 " onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold text-start">Formulaire de contact</h2>
            <div className="flex flex-row w-full justify-between items-center gap-3">
                <div className="flex flex-col w-1/2 gap-2">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" placeholder="Votre nom..." id="nom" name="nom" className="bg-none w-full border-1 p-2 border-white text-white rounded-full" required/>
                </div>
                <div className="flex flex-col w-1/2 gap-2">
                    <label htmlFor="prenom">Prénom</label>
                    <input type="text" placeholder="Votre prénom..."  id="prenom" name="prenom" className="bg-none w-full border-1 p-2 border-white text-white rounded-full" required/>
                </div>
                
                
            </div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Votre email..." name="email" className="bg-none border-1 p-2 border-white text-white rounded-full" required/>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"  placeholder="Ecrivez votre message ici..." className="bg-none border-1 p-4 border-white text-white rounded w-full" required/>
            <button type="submit" className="bg-orange-500 rounded-full p-3 w-3/4 mx-auto">Envoyer</button>
        </form>
        <div className="w-1/3 mx-auto flex flex-col justify-start items-start px-5 gap-3">
            <h2 className="text-3xl font-bold text-start">Mes coordonnées</h2>
            <a className="flex flex-row gap-3 items-center" href="https://github.com/CharlesLambret/">
                <GithubIcon className="w-10"/>
                Github
            </a>
            <a className="flex flex-row gap-3 items-center" href="https://www.linkedin.com/in/charles-lambret/">
                <LinkedinIcon className="w-10 p-2" />
                Linkedin
            </a>
            <a className="flex flex-row gap-3 items-center" href={`mailto:charleslambretpro@gmail.com`}>
                <EnvelopeIcon className="w-10 p-1"/>
                charleslambretpro@gmail.com
            </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
