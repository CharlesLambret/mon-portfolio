import NotFoundIcon from "../svg/notfound"
export default function NoProjectFoundComponent(){
    return(
        <div className="w-full p-5 flex flex-col justify-center items-center gap-5">
              <NotFoundIcon className="w-20" />
              <p className="text-2xl text-center">Aucun projet trouvé !</p>
        </div>
    )
}