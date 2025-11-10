import { Header } from "@/components/Header";
import { TechBackground } from "@/components/TechBackground";
import { Link } from 'react-router-dom';
import { PortfolioCard } from "@/components/PortfolioCard";

import exoskeletonGloveImage from '../assets/exoskeleton_glove.jpg';
import bottleOpenerGif from '../assets/bottle_opener.gif';

export const Projects = () => {
    return (
        <div className="min-h-screen text-foreground relative overflow-x-hidden">
            <Header />
            <TechBackground />
            
            <div className="relative z-10 p-4 sm:p-8 pt-16 container">
                <h1 className="text-4xl font-bold mb-10 text-primary text-glow tracking-wide uppercase text-center">
                    _
                </h1>
                <h1 className="text-4xl font-bold mb-10 text-primary text-glow tracking-wide uppercase text-center">
                    // [PROJECTS]
                </h1>
                <p className="text-foreground/80 text-lg text-center">
                Curious about what I've built?
                </p>
                <p className="text-foreground/80 text-lg text-center">
                Take a look at the initiatives that have allowed me to grow and learn.
                </p>

                {/*content here*/}
                <section id="projects" className="py-16 animate-fade-in-delay-1">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
                        {/*cards*/}
                        <PortfolioCard 
                            title="Wearable Exoskeleton Glove" 
                            description="Prototyped a hand rehabilitation tool for individuals with impaired hand function."
                            tags={["Robotics", "Myoware Sensors", "Flywheel Tension Mechanism"]}
                            delay="animate-fade-in-delay-2"
                            mediaSrc={exoskeletonGloveImage}
                        />
                        <PortfolioCard 
                            title="Automatic Bottle Opener" 
                            description="Built a tabletop design for individuals with reduced dexterity."
                            tags={["Robotics", "VEX System", "3D Printing"]}
                            delay="animate-fade-in-delay-3"
                            mediaSrc={bottleOpenerGif}
                        />
                    </div>
                </section>




                <div className="mt-10 text-center">
                    <Link to="/" className="neon-command-button inline-block">
                        &lt; BACK TO MAIN PAGE
                    </Link>
                </div>
            </div>
        </div>
    );
};