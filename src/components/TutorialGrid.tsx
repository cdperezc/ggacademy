import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Play } from "lucide-react";

const tutorials = [
  {
    id: 1,
    title: "Introduction to Signal Processing",
    description: "Learn the basics of processing raw signals from vehicle trackers with Wendy's fresh food delivery service example.",
    instructor: "GpsGate Academy",
    duration: "45 min",
    level: "Beginner",
    category: "Signal Processing",
    categoryColor: "bg-gps-purple",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=225&fit=crop&auto=format",
    isNew: true
  },
  {
    id: 2,
    title: "Terminal Window Deep Dive",
    description: "Master the terminal window to view raw incoming data and troubleshoot tracker issues effectively.",
    instructor: "Technical Team",
    duration: "30 min",
    level: "Intermediate",
    category: "Signal Processing",
    categoryColor: "bg-gps-purple",
    image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=400&h=225&fit=crop&auto=format"
  },
  {
    id: 3,
    title: "Device Mapper Configuration",
    description: "Configure device mappings to transform raw signals into meaningful fleet data visualizations.",
    instructor: "Platform Experts",
    duration: "60 min",
    level: "Intermediate",
    category: "Configuration",
    categoryColor: "bg-gps-orange",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=225&fit=crop&auto=format"
  },
  {
    id: 4,
    title: "Fleet Management Essentials",
    description: "Complete guide to basic fleet tracking, reports, and dashboard setup for new users.",
    instructor: "GpsGate Academy",
    duration: "90 min",
    level: "Beginner",
    category: "Getting Started",
    categoryColor: "bg-gps-blue",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop&auto=format",
    featured: true
  },
  {
    id: 5,
    title: "Custom Dashboards & Reports",
    description: "Build powerful custom dashboards and automated reports for comprehensive fleet insights.",
    instructor: "Analytics Team",
    duration: "75 min",
    level: "Advanced",
    category: "Advanced Features",
    categoryColor: "bg-gps-yellow",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop&auto=format"
  },
  {
    id: 6,
    title: "Asset Status Templates",
    description: "Create and customize vehicle status templates with action buttons for operational efficiency.",
    instructor: "UX Specialists",
    duration: "40 min",
    level: "Intermediate",
    category: "Templates",
    categoryColor: "bg-gps-red",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=225&fit=crop&auto=format"
  }
];

export function TutorialGrid() {
  return (
    <section className="py-gps-5 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-gps-4">
          <h2 className="text-3xl md:text-4xl font-inter font-bold text-primary mb-4 tracking-[-0.03em]">
            Featured Tutorials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hands-on tutorials designed to help you master GpsGate platform features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <Card 
              key={tutorial.id}
              className="group hover:shadow-gps-subtle transition-all duration-300 cursor-pointer overflow-hidden border-border hover:border-accent/50"
            >
              <div className="relative">
                <img 
                  src={tutorial.image} 
                  alt={tutorial.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  {tutorial.isNew && (
                    <Badge className="bg-accent text-accent-foreground text-xs font-medium">
                      New
                    </Badge>
                  )}
                  {tutorial.featured && (
                    <Badge className="bg-gps-orange text-white text-xs font-medium">
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Play className="w-5 h-5 text-primary" />
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge 
                    variant="secondary" 
                    className={`${tutorial.categoryColor} text-white text-xs font-medium`}
                  >
                    {tutorial.category}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {tutorial.level}
                  </Badge>
                </div>
                <h3 className="text-lg font-inter font-semibold text-card-foreground leading-tight tracking-[-0.02em]">
                  {tutorial.title}
                </h3>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {tutorial.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{tutorial.instructor}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{tutorial.duration}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-gps-3">
          <Button variant="outline" size="lg">
            View All Tutorials
          </Button>
        </div>
      </div>
    </section>
  );
}