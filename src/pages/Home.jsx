import { TechBackground } from "@/components/TechBackground";
import { PortfolioCard } from "@/components/PortfolioCard";
import { AboutMe } from "@/components/AboutMe";
import { Header } from "@/components/Header";

import headshot from '../assets/headshot.jpg'; 


export const Home = () => {

    const combinedAboutText = `From a young age, I have been driven by curiosity and the 
    desire to understand how the world works. This curiosity evolved into a passion for 
    innovation and continuous learning, motivating me to pursue a career where I can 
    merge technical skills with ethical leadership. My journey has been guided by a belief 
    that growth begins with purpose and that excellence is achieved through dedication 
    and integrity. I have always loved working in teams (which might be why I love to 
    play volleyball), and my family is my biggest motivation in life. Everything I do 
    is rooted in the hope of making them proud and giving back to the community that shaped me. 
    As I continue to grow both personally and professionally, I invite you to explore my 
    portfolio and learn more about my journey, my projects, and my vision for the future. 
    Together, let’s create opportunities where innovation, integrity, and family values 
    meet to make a lasting impact.`;

    return (
        <div className="min-h-screen text-foreground relative overflow-x-hidden">            
            
            <Header />

            {/*background*/}
            <TechBackground />

            {/*content*/}
            <div className="relative z-10 p-4 sm:p-8 pt-16">
                
                {/*global container*/}
                <div className="container">
                    <AboutMe /> 
                    {/*Contact Me*/}
                    <section id="contact" className="py-4 text-center animate-fade-in">
                        <h2 className="text-3xl font-bold mb-8 text-foreground/90">
                            &gt; INITIATE_COMMUNICATION()
                        </h2>
                        {/*neon-command-button*/}
                        <a 
                            href="/Lillian_Andino_Resume.pdf" //path
                            download="Lillian_Andino_Resume.pdf" //filename for download
                            className="neon-command-button inline-block" //make <a> behave like a button
                        >
                            DOWNLOAD MY RESUME HERE
                        </a>
                    </section>

                    <section id="projects" className="py-16 animate-fade-in-delay-1">
                        <p className="text-lg text-primary mb-2 font-mono tracking-widest">
                            // ABOUT ME !
                        </p>
                        <p className="text-lg text-primary mb-2 font-mono tracking-widest">
                            _
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center max-w-3xl mx-auto">
                            
                            <PortfolioCard 
                                title="WELCOME!" 
                                description=""
                                tags={["MY-HEADSHOT"]}
                                delay="animate-fade-in-delay-2"
                                mediaSrc={headshot}
                            />

                            <PortfolioCard 
                                title="A LITTLE BIT ABOUT ME" 
                                description={combinedAboutText}
                                tags={["ABOUT-ME"]}
                                delay="animate-fade-in-delay-3"
                            />
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};
