import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full" >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Analista de Sistemas</span>
            <h1 className="h1">
              Hello, I'm <br /><span className="text-accent">Joziane Oliveira</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia culpa, deserunt odit sunt, libero cum architecto placeat temporibus reiciendis ipsam ipsum. Laborum tempora voluptate rem. Aperiam vel quis sed laudantium!
            </p>
          </div>
          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  )
};

export default Home;