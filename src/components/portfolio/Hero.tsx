import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { portfolioData } from '../../data/portfolio';

export default function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">{portfolioData.name}</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              {portfolioData.title}
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {portfolioData.description}
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {portfolioData.skills.slice(0, 6).map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button asChild size="lg">
              <a href="#projects">
                View My Work
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`mailto:${portfolioData.email}`}>
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}