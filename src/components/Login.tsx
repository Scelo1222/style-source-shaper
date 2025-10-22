import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface LoginProps {
  onLogin: (username: string, role: string) => void;
}

export const Login = ({ onLogin }: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Demo authentication
    if (username === "admin" && password === "admin123") {
      onLogin(username, "admin");
      toast.success("Welcome back, Admin!");
    } else if (username === "member" && password === "member123") {
      onLogin(username, "member");
      toast.success("Welcome back, Member!");
    } else {
      toast.error("Invalid credentials. Please try the demo accounts.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background p-4">
      <Card className="w-full max-w-md shadow-medium border-none animate-fade-in">
        <CardHeader className="space-y-2 text-center pb-6">
          <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow animate-glow-pulse">
            <span className="text-4xl font-bold text-accent-foreground">O</span>
          </div>
          <CardTitle className="text-3xl font-bold text-primary">
            The Otaku Cast Portal
          </CardTitle>
          <CardDescription className="text-base">
            Enter your credentials to access the portal
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="bg-muted border-input"
                placeholder="Enter username"
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-muted border-input"
                placeholder="Enter password"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-accent hover:opacity-90 transition-opacity shadow-medium text-base py-6"
            >
              Login
            </Button>
          </form>

          <div className="mt-6 p-4 bg-muted rounded-lg space-y-2">
            <p className="text-sm font-semibold text-center text-foreground mb-3">
              Demo Accounts:
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-2 bg-card rounded">
                <span className="font-medium">Admin:</span>
                <code className="text-xs bg-background px-2 py-1 rounded">admin / admin123</code>
              </div>
              <div className="flex justify-between items-center p-2 bg-card rounded">
                <span className="font-medium">Member:</span>
                <code className="text-xs bg-background px-2 py-1 rounded">member / member123</code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
