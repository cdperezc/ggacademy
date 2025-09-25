import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  BookOpen, 
  Video, 
  Code, 
  Settings, 
  Users, 
  Shield,
  ArrowRight 
} from "lucide-react";

const categories = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Essential basics for new users",
    icon: BookOpen,
    color: "bg-gps-blue",
    courses: 8,
    level: "Beginner",
    url: "https://vtcontent.gpsgateservices.com/en-us/academy/1.0-introduction-to-gpsgate"
  },
  {
    id: "signal-processing",
    title: "Signal Processing", 
    description: "Advanced data handling and device mapping",
    icon: Code,
    color: "bg-gps-purple",
    courses: 12,
    level: "Intermediate",
    url: "https://vtcontent.gpsgateservices.com/en-us/academy/3.0-introduction-to-gpsgate"
  },
  {
    id: "administration",
    title: "Team Administration",
    description: "User management and permissions",
    icon: Users,
    color: "bg-gps-orange",
    courses: 6,
    level: "Intermediate",
    url: "https://vtcontent.gpsgateservices.com/en-us/academy/2.0-introduction-to-gpsgate"
  },
  {
    id: "integration",
    title: "Integration & API",
    description: "Connect with external systems",
    icon: Settings,
    color: "bg-gps-yellow",
    courses: 15,
    level: "Advanced",
    url: "https://support.gpsgate.com/hc/en-us/categories/360000321413-Developer"
  },
  {
    id: "security",
    title: "Security & Compliance",
    description: "Data protection and regulatory compliance",
    icon: Shield,
    color: "bg-gps-red",
    courses: 4,
    level: "Advanced",
    url: "https://support.gpsgate.com/hc/en-us/sections/360003331359-Security"
  },
  {
    id: "video-tutorials",
    title: "Video Tutorials",
    description: "Step-by-step visual guides",
    icon: Video,
    color: "bg-gps-neon-green",
    courses: 25,
    level: "All Levels",
    url: "https://www.youtube.com/@GpsGate"
  }
];

export function CategorySection() {
  const navigate = useNavigate();

  const handleCategoryClick = (category: typeof categories[0]) => {
    navigate(`/learning?url=${encodeURIComponent(category.url)}&title=${encodeURIComponent(category.title)}`);
  };

  return (
    <section className="py-gps-5 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-gps-4">
          <h2 className="text-3xl md:text-4xl font-inter font-bold text-primary mb-4 tracking-[-0.03em]">
            Learning Paths
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose your learning journey based on your role and experience level
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className="group hover:shadow-gps-subtle transition-all duration-300 cursor-pointer border-border hover:border-accent/50"
                onClick={() => handleCategoryClick(category)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.level}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-inter font-semibold text-card-foreground mb-2 tracking-[-0.02em]">
                    {category.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {category.courses} courses
                    </span>
                    <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}