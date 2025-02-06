import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            Contáctanos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Da el primer paso hacia una mejor salud mental
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Input placeholder="Tu Nombre" />
                </div>
                <div className="space-y-2">
                  <Input type="email" placeholder="Correo Electrónico" />
                </div>
                <div className="space-y-2">
                  <Input placeholder="Número de Teléfono" />
                </div>
                <div className="space-y-2">
                  <Textarea placeholder="Tu Mensaje" className="min-h-[150px]" />
                </div>
                <Button className="w-full">Enviar Mensaje</Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Ubicación de la Oficina</h3>
              <p className="text-muted-foreground">
                Calle de la Terapia 123<br />
                Oficina 456<br />
                Ciudad de México, CDMX 10001
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Información de Contacto</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Teléfono: (555) 123-4567</p>
                <p>Email: contacto@milosalgueda.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Horario de Atención</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Lunes - Viernes: 9:00 AM - 7:00 PM</p>
                <p>Sábado: 10:00 AM - 4:00 PM</p>
                <p>Domingo: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}