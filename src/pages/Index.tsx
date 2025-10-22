import { useState } from "react";
import { Login } from "@/components/Login";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Foundation } from "@/components/sections/Foundation";
import { Rules } from "@/components/sections/Rules";
import { Events } from "@/components/sections/Events";
import { Members } from "@/components/sections/Members";
import { Missions } from "@/components/sections/Missions";
import { Suggestions } from "@/components/sections/Suggestions";
import { Admin } from "@/components/sections/Admin";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [userRole, setUserRole] = useState("");
  const [activeSection, setActiveSection] = useState("foundation");

  const handleLogin = (user: string, role: string) => {
    setUsername(user);
    setUserRole(role);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setUserRole("");
    setActiveSection("foundation");
  };

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header username={username} onLogout={handleLogout} />
      <Navigation 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
        isAdmin={userRole === "admin"} 
      />
      
      <main className="container mx-auto py-8 px-4 max-w-7xl">
        <div className="bg-card rounded-lg shadow-medium p-8">
          {activeSection === "foundation" && <Foundation />}
          {activeSection === "rules" && <Rules />}
          {activeSection === "events" && <Events />}
          {activeSection === "members" && <Members />}
          {activeSection === "missions" && <Missions />}
          {activeSection === "suggestions" && <Suggestions username={username} />}
          {activeSection === "admin" && userRole === "admin" && <Admin />}
        </div>
      </main>

      <footer className="bg-primary text-primary-foreground text-center py-6 mt-12">
        <p className="font-medium">© 2024 The Otaku Cast. All rights reserved.</p>
        <p className="text-sm mt-1 opacity-90">Where Otakus Unite</p>
      </footer>
    </div>
  );
};

export default Index;
