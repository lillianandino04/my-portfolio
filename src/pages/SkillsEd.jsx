import { Header } from "@/components/Header";
import { TechBackground } from "@/components/TechBackground";
import { Link } from 'react-router-dom';
import { PortfolioCard } from "@/components/PortfolioCard";

export const SkillsEd = () => {
    return (
        <div className="min-h-screen text-foreground relative overflow-x-hidden">
            <Header />
            <TechBackground />
            
            <div className="relative z-10 p-4 sm:p-8 pt-16 container">
                <h1 className="text-4xl font-bold mb-10 text-primary text-glow tracking-wide uppercase text-center">
                    _
                </h1>
                <h1 className="text-4xl font-bold mb-10 text-primary text-glow tracking-wide uppercase text-center">
                    // [SKILLS_&_EDUCATION]
                </h1>
                <p className="text-foreground/80 text-lg text-center">
                Here you'll find the details of my educational foundation and technical skills.
                </p>
                {/*content here*/}
                <section id="projects" className="py-16 animate-fade-in-delay-1">
                    <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 justify-center">
                        {/*cards*/}
                        <PortfolioCard 
                            title="Educational Background" 
                            description="Born and raised in Honduras, I graduated from the Escuela
                            Internacional Sampedrana as Class Valedictorian. I chose to take ten 
                            Advanced Placement classes and four honors classes in High School, allowing
                            me to explore what academic areas I liked the most. I moved to the USA to
                            study Computer Science at Louisiana State University in August of 2022."
                            tags ={["Escuela Internacional Sampedrana", "Louisiana State University"]}
                            delay="animate-fade-in-delay-2"
                        />
                        <PortfolioCard 
                            title="Skills" 
                            description=""
                            tags ={["Java", "C", "C#", "Python", "SQL", "Bash", "JavaScript", "MATLAB", "CSET (CISA)", "AuditBoard", "SQL Server", "GitHub", "Alteryx", "Fluent in Spanish"]}
                            delay="animate-fade-in-delay-2"
                        />
                    </div>
                </section>

                <section id="projects" className="py-0.1 animate-fade-in-delay-1">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
                        {/*cards*/}
                        <PortfolioCard 
                            title="Relevant Coursework" 
                            description=""
                            tags ={["Cyberclinic Strategies for Security", "Cyber Risk Management", "Info Systems Audit", "Assistive Robotics", "Computer Networks", "Computer Organization & Design", "Systems Programming", "Database Management", "Operating Systems", "Advanced Data Structures", "Discrete Structures", "Internal Audit I/II", "Case Studies"]}
                            delay="animate-fade-in-delay-2"
                        />
                        <PortfolioCard 
                            title="FALL 2025" 
                            description="I am currently enrolled in the following courses:"
                            tags ={["Software Vulnerabilities and Exploits", "Software Systems Development", "Engineering Statistics", "Ethics in Computing", "Microprocessors"]}
                            delay="animate-fade-in-delay-2"
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