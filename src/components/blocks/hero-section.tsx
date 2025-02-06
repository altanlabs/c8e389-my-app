import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
            Your Path to Mental Wellness Begins Here
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Professional psychological support in a safe and confidential environment. 
            Take the first step towards a healthier mind and a more fulfilling life.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">
              Book a Consultation
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}