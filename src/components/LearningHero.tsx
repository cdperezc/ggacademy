import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
export function LearningHero() {
  return <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-primary overflow-hidden" style={{
    backgroundImage: `linear-gradient(rgba(11, 28, 43, 0.85), rgba(11, 28, 43, 0.85)), url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
      {/* Subtle tracking dots pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-accent rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-inter font-bold text-white mb-6 tracking-[-0.03em] leading-tight">GpsGate Academy</h1>
        <p className="text-xl md:text-2xl text-gps-off-white mb-8 max-w-3xl mx-auto leading-relaxed">Get to know your fleet better with hands-on training</p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gps-middle-grey w-5 h-5" />
          </div>
        </div>

        <Button variant="hero" size="xl" className="mb-gps-4">
          Start Learning
        </Button>
        
        <p className="text-gps-off-white/80 text-sm">
          Join thousands of fleet managers mastering GpsGate
        </p>
      </div>
    </section>;
}