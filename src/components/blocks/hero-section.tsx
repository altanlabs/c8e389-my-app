import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
            Tu Camino Hacia el Bienestar Emocional
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Con Milos Salgueda, encuentra el apoyo profesional que necesitas para 
            transformar tu vida. Un espacio seguro y confidencial para tu desarrollo personal.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">
              Agenda tu Consulta
            </Button>
            <Button variant="outline" size="lg">
              Conoce Más
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}