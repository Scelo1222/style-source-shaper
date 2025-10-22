import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

interface HeaderProps {
  username: string;
  onLogout: () => void;
}

export const Header = ({ username, onLogout }: HeaderProps) => {
  return (
    <header className="bg-gradient-primary text-primary-foreground py-6 px-4 shadow-medium relative">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
          THE OTAKU CAST
        </h1>
        <p className="text-lg md:text-xl italic opacity-90">
          Where Otakus convene to discuss all matters anime and comics
        </p>
        
        <div className="absolute top-4 right-4 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Avatar className="bg-accent border-2 border-primary-foreground">
              <AvatarFallback className="bg-accent text-accent-foreground font-bold">
                {username.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="hidden md:inline font-medium">{username}</span>
          </div>
          <Button 
            onClick={onLogout} 
            variant="secondary" 
            size="sm"
            className="bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground border border-primary-foreground/30"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};
