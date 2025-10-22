import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, AlertTriangle, Sparkles } from "lucide-react";

export const Rules = () => {
  const rules = [
    {
      icon: Shield,
      title: "Respect is Earned, Respect is a Must-Have",
      description: "We remain within boundaries of personal spaces and do not insult our own or outsiders. Respect is fundamental to being human.",
    },
    {
      icon: Users,
      title: "Participation is Optional",
      description: "Members are not forced to participate in discussions. However, when joining, contribute meaningfully to enrich minds with knowledge.",
    },
    {
      icon: AlertTriangle,
      title: "No Spoilers Policy",
      description: "Spoiling shows for others is strictly prohibited. Always confirm if others are up to speed before discussing recent developments.",
    },
    {
      icon: Sparkles,
      title: "Have Fun!",
      description: "While rules are important, the ultimate goal is to have fun and enjoy our shared passion for anime and comics.",
    },
  ];

  return (
    <section className="animate-fade-in">
      <h2 className="text-3xl font-bold text-primary mb-4 pb-2 border-b-2 border-muted">
        Rules & Regulations
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {rules.map((rule, index) => {
          const Icon = rule.icon;
          return (
            <Card 
              key={index} 
              className="bg-muted border-none shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shrink-0 shadow-soft">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-secondary text-lg leading-tight">
                    {rule.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{rule.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
