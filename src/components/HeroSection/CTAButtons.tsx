import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTAButtonsProps {
  className?: string;
}

const CTAButtons: React.FC<CTAButtonsProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col space-y-4 w-full max-w-xs", className)}>
      <Button
        size="lg"
        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg w-full shadow-md hover:shadow-lg focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 transition-all duration-300 ease-in-out"
        onClick={() => console.log("Start Free Trial clicked")}
      >
        Start Your Free Trial
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="border-primary text-primary hover:bg-primary/10 hover:text-primary rounded-lg w-full shadow-md hover:shadow-lg focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 transition-all duration-300 ease-in-out"
        onClick={() => console.log("Learn More clicked")}
      >
        Learn More
        <ArrowDown className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
};

export default CTAButtons;
