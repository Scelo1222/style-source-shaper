import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Missions = () => {
  const missionTypes = [
    {
      rank: "Low Rank/Difficulty",
      color: "border-l-4 border-success",
      description: "New generation anime with simpler plots, minimal world-building, and often lacking follow-up seasons. Perfect for testing group dynamics and fundamental skills.",
      requirements: "1 season (12-13 episodes), predictable plot, easily discerned themes.",
    },
    {
      rank: "Intermediate Rank/Difficulty",
      color: "border-l-4 border-warning",
      description: "Above-average missions with decent influence in the anime community. Helps understand fundamental structures for high-difficulty missions.",
      examples: "Naruto, Gintama, Bleach",
    },
    {
      rank: "High Rank/Difficulty",
      color: "border-l-4 border-destructive",
      description: "Exceptionally detailed anime with distinct storytelling that captures hearts of the community. Requires significant time investment but offers great rewards.",
      examples: "Dragon Ball Z, Attack on Titan",
    },
  ];

  const rankingSystem = [
    {
      title: "Low Rank",
      advancement: "Complete 10 intermediate missions + 20 individual/team matches",
    },
    {
      title: "Intermediate Rank",
      advancement: "Complete 15 high-difficulty missions + 30 individual/team matches",
    },
    {
      title: "High Difficulty Rank",
      advancement: "Elite members who can complete missions with little trouble. Their rank can be challenged by qualified lower-ranked members.",
    },
  ];

  return (
    <section className="animate-fade-in">
      <h2 className="text-3xl font-bold text-primary mb-4 pb-2 border-b-2 border-muted">
        Mission System
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {missionTypes.map((mission, index) => (
          <Card 
            key={index} 
            className={`${mission.color} bg-card border-none shadow-soft hover:shadow-medium transition-all duration-300`}
          >
            <CardHeader>
              <CardTitle className="text-secondary">{mission.rank}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-foreground/80">{mission.description}</p>
              {mission.requirements && (
                <p className="text-sm">
                  <strong className="text-secondary">Requirements:</strong> {mission.requirements}
                </p>
              )}
              {mission.examples && (
                <p className="text-sm">
                  <strong className="text-secondary">Examples:</strong> {mission.examples}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <h3 className="text-2xl font-bold text-primary mb-4">Individual Ranking System</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {rankingSystem.map((rank, index) => (
          <Card 
            key={index} 
            className="bg-muted border-none shadow-soft hover:shadow-medium transition-all duration-300"
          >
            <CardHeader>
              <CardTitle className="text-secondary">{rank.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">
                <strong>To advance:</strong> {rank.advancement}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
