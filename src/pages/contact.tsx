
import { useRouter } from "next/router";
import {  useEffect, useState } from "react";
import { fetchContact, postContact } from "@/api/contact";
import GithubIcon from "@/components/svg/github";
import LinkedinIcon from "@/components/svg/linkedin";
import { EnvelopeIcon, CheckIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Footer from "@/components/footer/footer";
import ChargementComponent from "@/components/chargement/chargement";
import CustomHead from "@/components/head/head";
import { useTheme } from "@/context/theme";
export default function Contact() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formLocked, setFormLocked] = useState(false);
  const [alreadySent, setAlreadySent] = useState(false);
  const { theme } = useTheme();
  useEffect(() => {
    const getContent = async () => {
      try {
        const data = await fetchContact();
        setContent(data);
      } catch (error) {
        console.error("Error fetching contact:", error);
      } finally {
        setLoading(false);
      }
    };
    getContent();

    // Check if the form is locked
    const formSent = localStorage.getItem('formSent');
    if (formSent === 'true') {
      setFormLocked(true);
    }
  }, []);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = {
      nom: formData.get('nom') as string,
      prenom: formData.get('prenom') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string
    };

    // Check if all fields are filled
    if (!data.nom || !data.prenom || !data.email || !data.message) {
      setError("Tous les champs sont requis");
      return;
    }

    try {
      const response = await postContact(data);
      console.log(response);

      // Store the date of the last submit and formSent status
      localStorage.setItem('lastSubmitDate', new Date().toISOString());
      localStorage.setItem('formSent', 'true');
      setFormLocked(true);
      setError(null);
    } catch (error: any) {
      if (error.response && error.response.status === 429) {
        setFormLocked(true);
        setAlreadySent(true);
      } else {
        console.error("Error submitting contact form:", error);
      }
    }
  };

  if (loading) {
    return <ChargementComponent />;
  }

  return (
    <>
        <CustomHead
          pageTitle={content.metaTitle}
          pageDescription={content.metaDescription}
        />
      <div className="flex flex-col w-full min-h-full p-5 justify-center items-center">
        <section className="flex flex-col-reverse md:flex-row w-full justify-around items-center mb-5 md:p-5">
          <div className="flex flex-col justify-center w-full  md:w-1/2 items-start gap-3 p-3">
            <h1 className="text-4xl font-bold w-full text-center md:text-start">{content.title}</h1>
            <p className="text-xl font-medium w-full text-justify">{content.description}</p>
          </div>
          <img src="./illucontactfull.png" className="w-full md:w-1/2 p-2" />
        </section>
        <section className="flex flex-col md:flex-row w-full justify-center md:justify-around items-start py-5 md:p-5">
          {!formLocked && 
            <form className="flex flex-col w-full md:w-1/2 gap-5 md:p-5" onSubmit={handleSubmit}>
              <h2 className="text-3xl font-bold w-full text-center md:text-start">Formulaire de contact</h2>
              {error && <p className="text-red-500">{error}</p>}
              <div className="flex flex-col md:flex-row w-full justify-between items-center gap-3">
                <div className="flex flex-col w-full md:w-1/2 gap-2">
                  <label htmlFor="nom">Nom</label>
                  <input type="text" placeholder="Votre nom..." id="nom" name="nom" className={`"bg-none w-full border-1 p-2 border-${theme.main_color} text-${theme.main_color} rounded-full`}required />
                </div>
                <div className="flex flex-col w-full md:w-1/2 gap-2">
                  <label htmlFor="prenom">Prénom</label>
                  <input type="text" placeholder="Votre prénom..." id="prenom" name="prenom" className={`"bg-none w-full border-1 p-2 border-${theme.main_color} text-${theme.main_color} rounded-full`}required />
                </div>
              </div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Votre email..." name="email" className={`"bg-none border-1 p-2 border-${theme.main_color} text-${theme.main_color} rounded-full`} required />
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Ecrivez votre message ici..." className={`bg-none border-1 p-4 border-${theme.main_color} min-h-50 text-${theme.main_color} rounded w-full`} required />
              <button type="submit" className={`${theme.ctaColor} cursor-pointer rounded-full p-3 w-3/4 mx-auto text-white`} disabled={formLocked}>Envoyer</button>
            </form>
          } 
          {formLocked && !alreadySent &&
            <div className="flex flex-col items-center justify-center w-full py-5 md:py-0">
              <CheckIcon className="w-15 "/>
              <p className="text-md text-center">Vous avez déjà envoyé un message aujourd'hui. Vous pourrez en renvoyer un nouveau demain.</p>
            </div>
          }
          {formLocked && alreadySent &&
            <div className="flex flex-col items-center justify-center w-full py-5 md:py-0">
              <XCircleIcon className="w-15 "/>
              <p className="text-md text-center">Vous avez déjà envoyé un message aujourd'hui. Vous pourrez en renvoyer un nouveau demain.</p>
            </div>
          }
          <div className="w-full md:w-1/3 mx-auto flex flex-col justify-center md:justify-start items-center md:items-start md:px-5 py-5 md:py-0 gap-3">
            <h2 className="text-3xl font-bold text-start py-3 md:py-0">Mes coordonnées</h2>
            <a className="flex flex-row gap-3 items-center w-full" href="https://github.com/CharlesLambret/">
              <GithubIcon className="w-10" />
              Github
            </a>
            <a className="flex flex-row gap-3 items-center w-full" href="https://www.linkedin.com/in/charles-lambret/">
              <LinkedinIcon className="w-10 p-2" />
              Linkedin
            </a>
            <a className="flex flex-row gap-3 items-center w-full" href={`mailto:charleslambretpro@gmail.com`}>
              <EnvelopeIcon className="w-10 p-1" />
              charleslambretpro@gmail.com
            </a>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}