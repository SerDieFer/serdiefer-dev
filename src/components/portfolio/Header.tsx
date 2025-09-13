import { Button } from '../ui/button';
import { portfolioData } from '../../data/portfolio';

export default function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">{portfolioData.name}</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button asChild variant="outline" size="sm">
              <a href={portfolioData.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
            <Button asChild size="sm">
              <a href={`mailto:${portfolioData.email}`}>
                Contact
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}