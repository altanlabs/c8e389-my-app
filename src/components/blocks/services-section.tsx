import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Individual Therapy",
    description: "One-on-one sessions tailored to your unique needs and goals.",
    icon: "🤝",
  },
  {
    title: "Couples Counseling",
    description: "Build stronger relationships through effective communication and understanding.",
    icon: "💑",
  },
  {
    title: "Anxiety Treatment",
    description: "Learn effective strategies to manage and overcome anxiety.",
    icon: "🧘‍♀️",
  },
  {
    title: "Depression Support",
    description: "Find your way back to joy and purpose with professional guidance.",
    icon: "🌅",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            Services Offered
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Professional psychological services tailored to your needs
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