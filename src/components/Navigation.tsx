interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  isAdmin: boolean;
}

const navItems = [
  { id: "foundation", label: "Foundation" },
  { id: "rules", label: "Rules" },
  { id: "events", label: "Events" },
  { id: "members", label: "Members" },
  { id: "missions", label: "Missions" },
  { id: "suggestions", label: "Suggestions" },
];

export const Navigation = ({ activeSection, onNavigate, isAdmin }: NavigationProps) => {
  return (
    <nav className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-40">
      <div className="container mx-auto">
        <ul className="flex flex-wrap justify-center items-center py-2 px-4 gap-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-accent text-accent-foreground font-semibold shadow-glow"
                    : "hover:bg-secondary/30"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
          {isAdmin && (
            <li>
              <button
                onClick={() => onNavigate("admin")}
                className={`px-4 py-2 rounded transition-all duration-300 ${
                  activeSection === "admin"
                    ? "bg-accent text-accent-foreground font-semibold shadow-glow"
                    : "hover:bg-secondary/30"
                }`}
              >
                Admin
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
