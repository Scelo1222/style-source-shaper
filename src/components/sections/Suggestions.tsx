import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface Suggestion {
  id: string;
  animeName: string;
  genre: string;
  synopsis: string;
  reason: string;
  missionRank: string;
  submittedBy: string;
  date: string;
}

interface SuggestionsProps {
  username: string;
}

export const Suggestions = ({ username }: SuggestionsProps) => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([
    {
      id: "1",
      animeName: "Steins;Gate",
      genre: "Sci-Fi",
      synopsis: "A group of friends discover time travel through a modified microwave.",
      reason: "Mind-bending plot with exceptional character development and emotional depth.",
      missionRank: "high",
      submittedBy: "Admin",
      date: "2024-01-15",
    },
  ]);

  const [formData, setFormData] = useState({
    animeName: "",
    genre: "",
    synopsis: "",
    reason: "",
    missionRank: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newSuggestion: Suggestion = {
      id: Date.now().toString(),
      ...formData,
      submittedBy: username,
      date: new Date().toISOString().split("T")[0],
    };

    setSuggestions([newSuggestion, ...suggestions]);
    setFormData({
      animeName: "",
      genre: "",
      synopsis: "",
      reason: "",
      missionRank: "",
    });

    toast.success("Suggestion submitted successfully!");
  };

  const getRankColor = (rank: string) => {
    switch (rank) {
      case "low": return "border-l-4 border-success";
      case "intermediate": return "border-l-4 border-warning";
      case "high": return "border-l-4 border-destructive";
      default: return "";
    }
  };

  return (
    <section className="animate-fade-in">
      <h2 className="text-3xl font-bold text-primary mb-4 pb-2 border-b-2 border-muted">
        Suggestion Box
      </h2>
      
      <Card className="bg-muted border-none shadow-medium mb-8">
        <CardHeader>
          <CardTitle className="text-secondary">Submit Anime Suggestion</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="animeName" className="text-foreground">Anime Name</Label>
              <Input
                id="animeName"
                value={formData.animeName}
                onChange={(e) => setFormData({ ...formData, animeName: e.target.value })}
                required
                className="bg-card border-input"
              />
            </div>

            <div>
              <Label htmlFor="genre" className="text-foreground">Genre</Label>
              <Select value={formData.genre} onValueChange={(value) => setFormData({ ...formData, genre: value })}>
                <SelectTrigger className="bg-card border-input">
                  <SelectValue placeholder="Select Genre" />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="action">Action</SelectItem>
                  <SelectItem value="fantasy">Fantasy</SelectItem>
                  <SelectItem value="romance">Romance</SelectItem>
                  <SelectItem value="sci-fi">Sci-Fi</SelectItem>
                  <SelectItem value="comedy">Comedy</SelectItem>
                  <SelectItem value="drama">Drama</SelectItem>
                  <SelectItem value="mystery">Mystery</SelectItem>
                  <SelectItem value="horror">Horror</SelectItem>
                  <SelectItem value="slice-of-life">Slice of Life</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="synopsis" className="text-foreground">Synopsis</Label>
              <Textarea
                id="synopsis"
                value={formData.synopsis}
                onChange={(e) => setFormData({ ...formData, synopsis: e.target.value })}
                required
                className="bg-card border-input"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="reason" className="text-foreground">Why We Should Watch It</Label>
              <Textarea
                id="reason"
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                required
                className="bg-card border-input"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="missionRank" className="text-foreground">Suggested Mission Rank</Label>
              <Select value={formData.missionRank} onValueChange={(value) => setFormData({ ...formData, missionRank: value })}>
                <SelectTrigger className="bg-card border-input">
                  <SelectValue placeholder="Select Rank" />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full bg-gradient-accent hover:opacity-90 transition-opacity shadow-medium">
              Submit Suggestion
            </Button>
          </form>
        </CardContent>
      </Card>

      <h3 className="text-2xl font-bold text-primary mb-4">Recent Suggestions</h3>
      <div className="space-y-4">
        {suggestions.map((suggestion) => (
          <Card key={suggestion.id} className={`${getRankColor(suggestion.missionRank)} bg-card shadow-soft hover:shadow-medium transition-all duration-300`}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-secondary">{suggestion.animeName}</CardTitle>
                <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  {suggestion.genre}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Synopsis:</p>
                <p className="text-foreground/80">{suggestion.synopsis}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Why watch:</p>
                <p className="text-foreground/80">{suggestion.reason}</p>
              </div>
              <div className="flex justify-between items-center text-sm text-muted-foreground pt-2 border-t border-border">
                <span>Submitted by: <strong>{suggestion.submittedBy}</strong></span>
                <span>{suggestion.date}</span>
                <span className="capitalize font-semibold">{suggestion.missionRank} Rank</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
