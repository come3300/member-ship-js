import Image from "next/image";
import web1 from "public/h&y.png";
import web2 from "public/unirage-creative.png";
import web3 from "public/unirage.png";
import web4 from "public/wabisabi.png";


export  function Port() {
    return (
        <section className="py-10">
        <div>
          <h3 className="text-3xl py-1 dark:text-white font-bold">Portfolio</h3>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 ">
            <a href="https://unirage.co.jp/"> 
              <Image className="rounded-lg object-cover w-fit"
              layout="responsive"
              src={web3}
            />
            </a>
          </div>
          <div className="basis-1/3 flex-1">
             <a href="https://interior.unirage.co.jp/">
            <Image className="rounded-lg object-cover w-fit"
              layout="responsive"
              src={web2}
            />
            </a>
          </div>
          <div className="basis-1/3 flex-1">
             <a href="https://handy-duple.co.jp/">
            <Image className="rounded-lg object-cover w-fit"
              layout="responsive"
              src={web1}
            />
            </a>
          </div>
          <div className="basis-1/3 flex-1">
             <a href="https://wabi-sabi-hakko.com/">
            <Image className="rounded-lg object-cover w-fit"
              layout="responsive"
              src={web4}
            />
            </a>
          </div>
          
         
        </div>
      </section>
    )
  }
