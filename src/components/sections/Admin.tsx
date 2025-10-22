import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { UserPlus, Download } from "lucide-react";

export const Admin = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    role: "",
  });

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`User ${newUser.username} added successfully!`);
    setNewUser({ username: "", password: "", role: "" });
  };

  const handleExportData = () => {
    toast.success("Data exported successfully!");
  };

  return (
    <section className="animate-fade-in">
      <h2 className="text-3xl font-bold text-primary mb-4 pb-2 border-b-2 border-muted">
        Admin Panel
      </h2>

      <Tabs defaultValue="users" className="space-y-6">
        <TabsList className="bg-muted border border-border">
          <TabsTrigger value="users" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
            Manage Users
          </TabsTrigger>
          <TabsTrigger value="suggestions" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
            Manage Suggestions
          </TabsTrigger>
          <TabsTrigger value="meetings" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
            Manage Meetings
          </TabsTrigger>
          <TabsTrigger value="export" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
            Export Data
          </TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-6">
          <Card className="bg-muted border-none shadow-medium">
            <CardHeader>
              <CardTitle className="text-secondary flex items-center gap-2">
                <UserPlus className="w-5 h-5" />
                Add New User
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddUser} className="space-y-4">
                <div>
                  <Label htmlFor="newUsername">Username</Label>
                  <Input
                    id="newUsername"
                    value={newUser.username}
                    onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                    required
                    className="bg-card border-input"
                  />
                </div>

                <div>
                  <Label htmlFor="newPassword">Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    value={newUser.password}
                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                    required
                    className="bg-card border-input"
                  />
                </div>

                <div>
                  <Label htmlFor="role">Role</Label>
                  <Select value={newUser.role} onValueChange={(value) => setNewUser({ ...newUser, role: value })}>
                    <SelectTrigger className="bg-card border-input">
                      <SelectValue placeholder="Select Role" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="vice-admin">Vice Admin</SelectItem>
                      <SelectItem value="member">Member</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full bg-gradient-accent hover:opacity-90 transition-opacity shadow-medium">
                  Add User
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {["admin", "member"].map((user, index) => (
              <Card key={index} className="bg-card border-none shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-foreground capitalize">{user}</p>
                      <p className="text-sm text-muted-foreground capitalize">{user === "admin" ? "Admin" : "Member"}</p>
                    </div>
                    <Button variant="destructive" size="sm">
                      Remove
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="suggestions">
          <Card className="bg-muted border-none shadow-medium">
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">
                Suggestion management tools coming soon...
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="meetings">
          <Card className="bg-muted border-none shadow-medium">
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">
                Meeting management tools coming soon...
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="export">
          <Card className="bg-muted border-none shadow-medium">
            <CardHeader>
              <CardTitle className="text-secondary">Export Portal Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80">
                Export all portal data including members, suggestions, and meetings.
              </p>
              <Button 
                onClick={handleExportData} 
                className="w-full bg-gradient-accent hover:opacity-90 transition-opacity shadow-medium"
              >
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};
