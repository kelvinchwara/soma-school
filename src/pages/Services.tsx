import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, GraduationCap, MapPin, Music, Award, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Tuition and Homeschool",
      description: "Our institution is mainly focused on training students towards learning different curricular recognized in the country and the outside world at their convenience.",
      color: "bg-soma-green"
    },
    {
      icon: Users,
      title: "Talent Discovery and Training", 
      description: "We have a peer guidance and counselling team which helps learners discover their potential, gifts and talents.",
      color: "bg-soma-orange"
    },
    {
      icon: GraduationCap,
      title: "Mentorship and Training",
      description: "Mentorship at its core equips the young one with security that they are not alone but will always have someone to walk with them in this academic journey.",
      color: "bg-soma-brown"
    },
    {
      icon: MapPin,
      title: "Educational Trips",
      description: "We lobby for students to have an experience of what they have learnt in class to different parts of the world through scholarships application.",
      color: "bg-soma-green"
    }
  ];

  const otherServices = [
    "University and college application",
    "Scholarship application", 
    "Training of musical instruments"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-soma-cream to-soma-light-orange py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive educational solutions designed to meet every student's unique needs and aspirations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Core Educational Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide a range of educational services tailored to help students excel academically 
              and develop their full potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className={`${service.color} p-3 rounded-full w-fit mb-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-soma-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Additional Services</h2>
              <p className="text-muted-foreground">
                Beyond our core educational offerings, we provide specialized services to support 
                your child's complete development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherServices.map((service, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="bg-soma-brown p-3 rounded-full w-fit mx-auto mb-4">
                      {index === 0 && <GraduationCap className="h-6 w-6 text-white" />}
                      {index === 1 && <Award className="h-6 w-6 text-white" />}
                      {index === 2 && <Music className="h-6 w-6 text-white" />}
                    </div>
                    <CardTitle className="text-lg">{service}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Why Our Services Stand Out</h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-soma-green p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-muted-foreground">Personalized learning approaches for each student</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-soma-green p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-muted-foreground">Flexible scheduling to fit family needs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-soma-green p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-muted-foreground">Technology-integrated learning experiences</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-soma-green p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-muted-foreground">Comprehensive support for university applications</span>
                </li>
              </ul>
            </div>
            <div className="bg-soma-light-orange p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Contact us today to learn more about how our services can benefit your child's education.
              </p>
              <Button asChild className="bg-soma-brown hover:bg-soma-brown/90 w-full">
                <Link to="/contact">Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-soma-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Transform Your Child's Educational Journey
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Experience the difference our personalized approach can make in your child's academic and personal development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">Contact Us Today <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-soma-brown">
              <Link to="/approach">Learn Our Approach</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;