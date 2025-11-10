/**
 * reusable card
 * @param {string} title - project title
 * @param {string} description - project description
 * @param {string[]} tags - tech used
 * @param {string} delay - animation delay class
 * @param {string} mediaSrc - src for media (img/gif)
 */
export const PortfolioCard = ({ title, description, tags, delay, mediaSrc }) => {
    return (
        //border style + hover effect + animation delay
        <div className={`circuit-trace-border p-6 h-full ${delay} ${tags.includes("Tailwind CSS") ? "card-hover" : ""}`}>

            <h3 className="text-xl font-bold mb-3 text-blue-900 uppercase">
                {title}
            </h3>
            <p className="text-foreground/80 mb-4 text-sm">
                {description}
            </p>
            
            <div className="flex flex-wrap gap-2 pt-3 border-t border-border/60 justify-center mb-4">
                {tags.map(tag => (
                    <span 
                        key={tag} 
                        className="text-xs font-mono font-bold px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/50"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {mediaSrc && (
                // <img> tag for images and gifs
                <div className="mb-4 overflow-hidden rounded-lg">
                    <img 
                        src={mediaSrc} 
                        alt={`Media for ${title}`} 
                        className="w-full h-auto object-cover"
                    />
                </div>
            )}
        </div>
    );
};