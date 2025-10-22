import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Crown, Star } from "lucide-react";

export const Members = () => {
  const members = [
    { name: "Admin User", role: "admin", initial: "A" },
    { name: "Vice Admin", role: "vice-admin", initial: "V" },
    { name: "Member One", role: "member", initial: "M" },
    { name: "Member Two", role: "member", initial: "M" },
    { name: "Member Three", role: "member", initial: "M" },
    { name: "Member Four", role: "member", initial: "M" },
  ];

  const getRoleBadge = (role: string) => {
    if (role === "admin") {
      return (
        <div className="absolute -top-2 -right-2 bg-accent rounded-full p-1.5 shadow-glow">
          <Crown className="w-4 h-4 text-accent-foreground" />
        </div>
      );
    }
    if (role === "vice-admin") {
      return (
        <div className="absolute -top-2 -right-2 bg-secondary rounded-full p-1.5 shadow-soft">
          <Star className="w-4 h-4 text-secondary-foreground" />
        </div>
      );
    }
    return null;
  };

  const getRoleBorder = (role: string) => {
    if (role === "admin") return "border-2 border-accent shadow-glow";
    if (role === "vice-admin") return "border-2 border-secondary";
    return "";
  };

  return (
    <section className="animate-fade-in">
      <h2 className="text-3xl font-bold text-primary mb-4 pb-2 border-b-2 border-muted">
        Members & Leadership
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {members.map((member, index) => (
          <Card 
            key={index} 
            className={`bg-muted border-none shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 cursor-pointer ${getRoleBorder(member.role)}`}
          >
            <CardContent className="pt-6 pb-4 text-center relative">
              <div className="flex justify-center mb-3">
                <Avatar className="w-16 h-16 bg-gradient-accent shadow-medium">
                  <AvatarFallback className="bg-gradient-accent text-accent-foreground text-xl font-bold">
                    {member.initial}
                  </AvatarFallback>
                </Avatar>
                {getRoleBadge(member.role)}
              </div>
              <p className="font-semibold text-foreground">{member.name}</p>
              <p className="text-sm text-muted-foreground capitalize">{member.role.replace("-", " ")}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
