import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Users } from "lucide-react";

const videoTutorials = [
  {
    id: 1,
    title: "GpsGate Platform Overview",
    description: "Complete walkthrough of the GpsGate platform interface and core features.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=560&h=315&fit=crop&auto=format",
    duration: "12:45",
    views: "2.1k",
    category: "Platform Overview",
    isPopular: true
  },
  {
    id: 2,
    title: "Setting Up Your First Fleet",
    description: "Step-by-step guide to adding vehicles and configuring your fleet dashboard.",
    thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=560&h=315&fit=crop&auto=format",
    duration: "8:32",
    views: "1.8k",
    category: "Getting Started"
  },
  {
    id: 3,
    title: "Advanced Signal Processing Techniques",
    description: "Deep dive into device mapper scripting and custom signal transformations.",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=560&h=315&fit=crop&auto=format",
    duration: "15:20",
    views: "950",
    category: "Advanced"
  }
];

export function VideoSection() {
  return (
    <section className="py-gps-5 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-gps-4">
          <h2 className="text-3xl md:text-4xl font-inter font-bold text-primary mb-4 tracking-[-0.03em]">
            Video Tutorials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Watch step-by-step video guides to master GpsGate features quickly
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-gps-3">
          {/* Featured Video */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden border-border hover:border-accent/50 transition-colors duration-300">
              <div className="relative">
                <img 
                  src={videoTutorials[0].thumbnail} 
                  alt={videoTutorials[0].title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors duration-300 cursor-pointer"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gps-red text-white font-medium">
                    Most Popular
                  </Badge>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="icon" className="w-16 h-16 bg-white/20 hover:bg-white/30 border-2 border-white/50">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </Button>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
                  {videoTutorials[0].duration}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-gps-blue text-white">
                    {videoTutorials[0].category}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{videoTutorials[0].views} views</span>
                  </div>
                </div>
                <h3 className="text-2xl font-inter font-semibold text-card-foreground mb-2 tracking-[-0.02em]">
                  {videoTutorials[0].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {videoTutorials[0].description}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Smaller Video Cards */}
          {videoTutorials.slice(1).map((video) => (
            <Card 
              key={video.id}
              className="overflow-hidden border-border hover:border-accent/50 transition-colors duration-300 cursor-pointer group"
            >
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" className="bg-white/20 hover:bg-white/30 border-2 border-white/50">
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  </Button>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                  {video.duration}
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge 
                    variant="secondary" 
                    className={`text-white text-xs ${
                      video.category === 'Getting Started' ? 'bg-gps-orange' : 'bg-gps-purple'
                    }`}
                  >
                    {video.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="w-3 h-3" />
                    <span>{video.views}</span>
                  </div>
                </div>
                <h3 className="text-lg font-inter font-semibold text-card-foreground mb-2 leading-tight tracking-[-0.02em]">
                  {video.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {video.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            Browse All Videos
          </Button>
        </div>
      </div>
    </section>
  );
}