import { Header } from "@/components/Header";
import { TechBackground } from "@/components/TechBackground";
import { Link } from 'react-router-dom';
import { PortfolioCard } from "@/components/PortfolioCard";


import ai from '../assets/ai.jpg';
import cia from '../assets/cia.jpg';
import lcc from '../assets/lcc.jpg';
import wics from '../assets/wics.jpg';
import vulcan from '../assets/vulcan.jpg';

export const WorkExperience = () => {
    return (
        <div className="min-h-screen text-foreground relative overflow-x-hidden">
            <Header />
            <TechBackground />
            
            <div className="relative z-10 p-4 sm:p-8 pt-16 container">
                <h1 className="text-4xl font-bold mb-10 text-primary text-glow tracking-wide uppercase text-center">
                    _
                </h1>
                <h1 className="text-4xl font-bold mb-10 text-primary text-glow tracking-wide uppercase text-center">
                    // [WORK_EXPERIENCE]
                </h1>
                <p className="text-foreground/80 text-lg text-center">
                Welcome to my journey!
                </p>
                <p className="text-foreground/80 text-lg text-center">
                This page is where I share the story of my professional growth, driven by a commitment to innovation, integrity, and excellence.
                </p>
                {/*content here*/}

                <section id="projects" className="py-16 animate-fade-in-delay-1">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {/*cards*/}
                        <PortfolioCard 
                            title="Center for Internal Auditing & Cybersecurity Risk Management Graduate Assistant" 
                            description="I coordinate events, meetings, and special projects for over 
                            120 students while supporting faculty, staff, and recruiters. I elevate the 
                            premier internal auditing program by refining three auditing courses 
                            and cultivating key relationships with practitioners and alumni."
                            tags={["LSU College of Business", "Aug 2024 - Present"]}
                            delay="animate-fade-in-delay-3"
                            mediaSrc={cia}
                        />
                        <PortfolioCard 
                            title="Internal Audit Information Technology Intern" 
                            description="I developed new procedures and led the testing of 26 automated 
                            SOX controls during a GRC control language overhaul. Additionally, I executed 
                            operational and plant audit fieldwork, including testing controls, assessing 
                            cloud governance, and drafting audit findings using the CCCE framework."
                            tags={["Vulcan Materials Company", "Jun 2025 - Aug 2025"]}
                            delay="animate-fade-in-delay-2"
                            mediaSrc={vulcan}
                        />
                        <PortfolioCard 
                            title="Cybersecurity Risk Assessment Consultant" 
                            description="I guided three cycles of comprehensive cybersecurity audits focused 
                            on policy and configuration analysis. I also presented seminars to over 20 small 
                            businesses on applied cybersecurity theories while conducting research on emerging 
                            threats and gaining hands-on experience with CIS Controls and CMMC assessments."
                            tags={["LSU Cybersecurity Clinic", "Aug 2024 - Dec 2024"]}
                            delay="animate-fade-in-delay-3"
                            mediaSrc={lcc}
                        />
                    </div>
                </section>

                <section id="projects" className="py-0.1 animate-fade-in-delay-1">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
                        {/*cards*/}
                        <PortfolioCard 
                            title="Computer Science Assistant Systems Analyst" 
                            description="I configured and maintained over 6,000 Microsoft Windows and Linux 
                            lab desktops to ensure seamless computer lab use. My duties also included weekly 
                            computer restoration and optimization, ensuring data integrity, and enforcing 
                            secure data protocol and systematic equipment organization."
                            tags={["LSU College of Engineering", "Sep 2022 - May 2025"]}
                            delay="animate-fade-in-delay-3"
                        />
                        <PortfolioCard 
                            title="Financial Aid & Scholarships Consultant" 
                            description="I counseled approximately 15,000 prospective students using in-depth 
                            knowledge of LSU programs and state/federal procedures. Furthermore, I supervised 
                            daily reception duties, assisting parents and students with documentation, and aided 
                            over 3,000 students during bimonthly admissions events to clarify fee bills, financial 
                            aid, and loans."
                            tags={["LSU Enrollment and Management Office", "Feb 2023 - Aug 2024"]}
                            delay="animate-fade-in-delay-3"
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