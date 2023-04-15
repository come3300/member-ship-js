import {AiFillYoutube,AiFillGithub,AiOutlineFile,} from "react-icons/ai";
import Image from "next/image";
import pr from "../public/pr.png";

export  function Mv() {


    return (
  
        <div className="text-center py-15">

            <div className="mx-auto from-teal-500 rounded-full w-80 h-80 relative overflow-hidden py-10 mt-20 md:h-96 md:w-96">
              <Image src={pr} layout="fill" objectFit="cover" />
            </div>
            <h2 className="text-5xl py-2 text-sky-800 font-bold dark:text-yellow-500 md:text-6xl">
             Daisuke Yonekura
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
             WebEngineer and MovieCreater
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/come3300"><AiFillGithub /></a>
              <a href="https://www.youtube.com/@komesuke4755"><AiFillYoutube /></a>
              <a href="https://note.com/suke3300_blog"><AiOutlineFile/></a>
            </div>
           
          </div>
  
    )
  }