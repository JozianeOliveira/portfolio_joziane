import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";

const Home = () => {
  return (
    <section className="h-full" >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Analista de Sistemas</span>
            <h1 className="h1 mb-6">
              Olá, eu sou <br /><span className="text-accent">Joziane Oliveira</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia culpa, deserunt odit sunt, libero cum architecto placeat temporibus reiciendis ipsam ipsum. Laborum tempora voluptate rem. Aperiam vel quis sed laudantium!
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  )
};

export default Home;