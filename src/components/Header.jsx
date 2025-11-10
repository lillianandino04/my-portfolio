import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    //nav links
    const navItems = [
        { name: "Work Experience", path: "/experience" },
        { name: "Projects", path: "/projects" },
        { name: "Skills & Education", path: "/skills" },
        { name: "Leadership", path: "/leadership" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-background/80 border-b border-border">
            <div className="container flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                
                {/*name*/}
                <Link to="/" className="text-xl font-bold tracking-wider text-primary hover:text-primary/70 transition-colors">
                    MY PORTFOLIO
                </Link>
                
                {/*nav links*/}
                <nav className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <Link 
                            key={item.name} 
                            to={item.path} 
                            className="text-foreground/90 hover:text-primary transition-colors font-mono uppercase text-sm tracking-widest"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};