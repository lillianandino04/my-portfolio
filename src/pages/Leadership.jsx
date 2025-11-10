import { Header } from "@/components/Header";
import { TechBackground } from "@/components/TechBackground";
import { Link } from 'react-router-dom';
import { PortfolioCard } from "@/components/PortfolioCard";

import ai from '../assets/ai.jpg';
import cia from '../assets/cia.jpg';
import lcc from '../assets/lcc.jpg';
import wics from '../assets/wics.jpg';


export const Leadership = () => {
    return (
        <div className="min-h-screen text-foreground relative overflow-x-hidden">
            <Header />
            <TechBackground />
            
            <div className="relative z-10 p-4 sm:p-8 pt-16 container">
                <h1 className="text-4xl font-bold mb-10 text-primary text-glow tracking-wide uppercase text-center">
                    _
                </h1>
                <h1 className="text-4xl font-bold mb-10 text-primary text-glow tracking-wide uppercase text-center">
                    // [LEADERSHIP_LOG]
                </h1>
                <p className="text-foreground/80 text-lg text-center">
                    This page highlights my leadership roles and community.
                </p>
                {/*content here*/}
                <section id="projects" className="py-16 animate-fade-in-delay-1">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
                        {/*cards*/}
                        <PortfolioCard 
                            title="LSU Women in Computer Science Club" 
                            description="Advocated on behalf of members to major companies 
                            by connecting with representatives of diverse associations. Increased 
                            capital through monthly donation drives and merchandise sales to 
                            strengthen the financial position."
                            tags={["Fundraising Chair", "Apr 2024 - May 2025"]}
                            delay="animate-fade-in-delay-2"
                            mediaSrc={wics}
                        />
                        <PortfolioCard 
                            title="LSUCIA&CRM Artificial Intelligence Club" 
                            description="Arranged weekly meetings and invited guest speakers 
                            to broaden the scope of perspective transmitted to members. Pioneered 
                            conversations around a holistic view of AI to be well-versed in its 
                            applications, future opportunities, and risks."
                            tags={["Secretary", "Aug 2024 - May 2025"]}
                            delay="animate-fade-in-delay-3"
                            mediaSrc={ai}
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