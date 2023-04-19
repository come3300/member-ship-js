import code from "public/support-team.png";
import movie from "public/movie.png";
import teach from "public/teaching.png";
import Image from "next/image";



export  function Service() {
    return (
        <section>
        <div>
          <h3 className="text-3xl py-1 dark:text-white font-bold">Services</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Web制作、動画制作、プログラミング講師を中心に現在個人事業主として活動中
          </p>
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <Image src={code} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2  ">
             WebEngineer
            </h3>
            <p className="py-2">
             react/Nextjs/Laravel/WPを使って
             Web制作,アプリ制作,システム開発を行います。
            </p>
            <h4 className="py-4 text-sky-800 dark:text-yellow-500">Tools</h4>
            <p className="text-gray-800 py-1">Javascript</p>
            <p className="text-gray-800 py-1">PHP</p>
            <p className="text-gray-800 py-1">React/Next.js</p>
            <p className="text-gray-800 py-1">Laravel</p>
            <p className="text-gray-800 py-1">WordPress</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <Image src={movie} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2 ">
             MovieCreater
            </h3>
            <p className="py-2">
             動画編集、動画制作を行います。YouTube等のSNSでバズる動画制作が得意です。
            </p>
            <h4 className="py-4 text-sky-800 dark:text-yellow-500">Tools</h4>
            <p className="text-gray-800 py-1">AdobePremire</p>
            <p className="text-gray-800 py-1">AdobeAffterEfect</p>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-7 text-xs">総再生数150万以上のチャンネル<br/>2チャンネル運営中</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <Image src={teach} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2 ">Teacher</h3>
            <p className="py-2">
              PHP,Laravelをはじめてとしたプログラミング言語を教えております
            </p>
            <h4 className="py-4 text-sky-800 dark:text-yellow-500">Im teaching</h4>
            <p className="text-gray-800 py-1">PHP</p>
            <p className="text-gray-800 py-1">Laravel</p>
            <p className="text-gray-800 py-1">ITパスポート</p>
          </div>
        </div>
      </section>
     

      
      
    )
  }
