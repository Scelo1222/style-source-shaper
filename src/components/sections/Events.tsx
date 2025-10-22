import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MessageCircle, PartyPopper } from "lucide-react";

export const Events = () => {
  const events = [
    {
      icon: Calendar,
      title: "Weekly Events",
      description: "Each week, members convene online to provide suggestions for fresh anime to watch, followed by substantial reasons for their choices.",
    },
    {
      icon: MessageCircle,
      title: "Monthly Events",
      description: "Four suggested ideas from the previous month are discussed in a series of debates, allowing for deeper analysis and discussion.",
    },
    {
      icon: PartyPopper,
      title: "Annual Celebration",
      description: "A celebration of completed quests throughout the year, with possible in-person meetings to socialize and strengthen bonds.",
    },
  ];

  return (
    <section className="animate-fade-in">
      <h2 className="text-3xl font-bold text-primary mb-4 pb-2 border-b-2 border-muted">
        Events & Activities
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {events.map((event, index) => {
          const Icon = event.icon;
          return (
            <Card 
              key={index} 
              className="bg-muted border-none shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-3 shadow-glow">
                  <Icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-secondary">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{event.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="bg-gradient-to-br from-muted to-muted/50 border-none shadow-medium">
        <CardHeader>
          <CardTitle className="text-primary">Next Meeting Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-card rounded-lg p-4 shadow-soft">
              <p className="font-semibold text-secondary mb-1">Date:</p>
              <p className="text-foreground">Every Saturday</p>
            </div>
            <div className="bg-card rounded-lg p-4 shadow-soft">
              <p className="font-semibold text-secondary mb-1">Time:</p>
              <p className="text-foreground">8:00 PM JST</p>
            </div>
            <div className="bg-card rounded-lg p-4 shadow-soft">
              <p className="font-semibold text-secondary mb-1">Focus:</p>
              <p className="text-foreground">Weekly Anime Suggestions</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
