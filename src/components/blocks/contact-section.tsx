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
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Take the first step towards better mental health
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Input placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <Input type="email" placeholder="Email Address" />
                </div>
                <div className="space-y-2">
                  <Input placeholder="Phone Number" />
                </div>
                <div className="space-y-2">
                  <Textarea placeholder="Your Message" className="min-h-[150px]" />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Office Location</h3>
              <p className="text-muted-foreground">
                123 Therapy Street<br />
                Suite 456<br />
                New York, NY 10001
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Phone: (555) 123-4567</p>
                <p>Email: contact@drjohnson.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}