import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-6">
              Lic. Milos Salgueda
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Como psicólogo clínico con amplia experiencia, me dedico a ayudar a las personas 
                a encontrar su mejor versión y superar los desafíos emocionales que enfrentan en su vida diaria.
              </p>
              <p>
                Mi enfoque combina técnicas terapéuticas probadas con un cuidado empático y personalizado, 
                creando un espacio seguro para tu desarrollo y crecimiento personal.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-none bg-muted">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary mb-2">+500</div>
                  <div className="text-sm text-muted-foreground">Pacientes Atendidos</div>
                </CardContent>
              </Card>
              <Card className="border-none bg-muted">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Años de Experiencia</div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-muted object-cover shadow-xl">
              {/* Placeholder para la foto del psicólogo */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                Foto Profesional
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}