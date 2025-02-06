import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-6">
              Dr. Sarah Johnson
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 15 years of experience in clinical psychology, I am dedicated to helping individuals navigate life's challenges and achieve emotional well-being.
              </p>
              <p>
                My approach combines evidence-based techniques with compassionate care, creating a safe space for healing and growth.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-none bg-muted">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="border-none bg-muted">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Clients Helped</div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-muted object-cover shadow-xl">
              {/* Placeholder for psychologist image */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                Professional Photo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}