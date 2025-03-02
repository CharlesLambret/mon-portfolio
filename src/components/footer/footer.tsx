
export default function Footer(){
    return (
        <footer className="flex flex-col justify-center items-center bg-sky-600 w-full text-center text-white p-5 my-5">
            <h4 className="mb-5">Copyright Charles Lambret - Tous droits réservés</h4>
            <div className="flex flex-col md:flex-row justify-evenly items-center w-3/4">
                <a href="./politique_confidentialite" className="text-white">Politique de confidentialité</a>
                <a href="./mentions_legales" className="text-white">Mentions légales</a>
            </div>
        </footer>
    )
}