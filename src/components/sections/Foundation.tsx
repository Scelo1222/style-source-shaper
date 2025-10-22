import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

export const Foundation = () => {
  const cards = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To expand on the knowledge that can be gathered in anime and comic discussions while fostering analytical and debating skills.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To create a safe refuge where members can indulge in their Otaku hobbies without concerns, while growing individually and as a group.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Respect, flexibility, trust, and loyalty to the Otaku culture while maintaining order and a comfortable environment for all.",
    },
  ];

  return (
    <section className="animate-fade-in">
      <h2 className="text-3xl font-bold text-primary mb-4 pb-2 border-b-2 border-muted">
        Foundation & Purpose
      </h2>
      <p className="text-foreground/90 mb-6 leading-relaxed">
        The Otaku Cast is built with the sole purpose of purely debating about anime and comics matters. 
        It serves as a sanctuary for each individual to never shun their Otaku parts, creating a comfortable 
        environment free of judgment, prejudice, and disorder.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Card 
              key={index} 
              className="bg-muted border-none shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-3 shadow-glow">
                  <Icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-secondary">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80">
                  {card.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
