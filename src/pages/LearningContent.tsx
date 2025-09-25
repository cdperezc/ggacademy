import { useSearchParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const LearningContent = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const url = searchParams.get('url');
  const title = searchParams.get('title');

  if (!url) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Learning Center
            </Button>
            {title && (
              <h1 className="text-2xl font-inter font-bold text-primary">
                {title}
              </h1>
            )}
          </div>
          
          <div className="relative w-full bg-white rounded-lg shadow-gps-subtle overflow-hidden">
            <iframe
              src={url}
              className="w-full h-[calc(100vh-200px)] border-0"
              title={title || "Learning Content"}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LearningContent;