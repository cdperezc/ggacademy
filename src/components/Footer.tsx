import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import gpsgateLogo from "@/assets/gpsgate-logo.png";
export function Footer() {
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-gps-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-gps-3">
          {/* Brand Section */}
          

          {/* Learning Resources */}
          <div>
            <h3 className="font-inter font-semibold mb-4">Learning Resources</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gps-off-white hover:text-accent transition-colors">Getting Started</a></li>
              <li><a href="#" className="text-gps-off-white hover:text-accent transition-colors">Signal Processing</a></li>
              <li><a href="#" className="text-gps-off-white hover:text-accent transition-colors">Team Administration</a></li>
              <li><a href="#" className="text-gps-off-white hover:text-accent transition-colors">Video Tutorials</a></li>
              <li><a href="#" className="text-gps-off-white hover:text-accent transition-colors">Certification</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-inter font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gps-off-white hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gps-off-white hover:text-accent transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gps-off-white hover:text-accent transition-colors">Community Forum</a></li>
              <li><a href="#" className="text-gps-off-white hover:text-accent transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-gps-off-white hover:text-accent transition-colors">Device Compatibility</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-inter font-semibold mb-4">Stay Updated</h3>
            <p className="text-gps-off-white text-sm mb-4 leading-relaxed">
              Get the latest tutorials and platform updates
            </p>
            <div className="space-y-3">
              <Input type="email" placeholder="Enter your email" className="bg-gps-white/10 border-gps-white/20 text-white placeholder:text-gps-off-white/60" />
              <Button variant="hero" size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gps-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gps-off-white/80 text-sm">© 2025 GpsGate. All rights reserved.</div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gps-off-white hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-gps-off-white hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="text-gps-off-white hover:text-accent transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>;
}