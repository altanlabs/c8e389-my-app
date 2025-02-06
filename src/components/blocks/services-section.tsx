import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Terapia Individual",
    description: "Sesiones personalizadas adaptadas a tus necesidades específicas y objetivos personales.",
    icon: "🤝",
  },
  {
    title: "Terapia de Pareja",
    description: "Construye relaciones más sólidas a través de una comunicación efectiva y comprensión mutua.",
    icon: "💑",
  },
  {
    title: "Manejo de Ansiedad",
    description: "Aprende estrategias efectivas para gestionar y superar la ansiedad en tu vida diaria.",
    icon: "🧘‍♀️",
  },
  {
    title: "Acompañamiento en Depresión",
    description: "Encuentra tu camino hacia la alegría y el propósito con guía profesional especializada.",
    icon: "🌅",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            Servicios Profesionales
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Atención psicológica personalizada para cada etapa de tu vida
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="border-none shadow-lg">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}