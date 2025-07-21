import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, Target, Lightbulb, ArrowRight, CheckCircle } from "lucide-react";

const WhyUs = () => {
  const uniqueFeatures = [
    {
      icon: Users,
      title: "Experienced & Dedicated Staff",
      description: "We have experienced, knowledgeable and dedicated staff who ensure that our students get the very best of knowledge.",
      color: "bg-soma-green"
    },
    {
      icon: BookOpen,
      title: "Learner-Centered Curriculum",
      description: "We have tailored the curriculum to be learner-centred making it effective for the student to grasp alot.",
      color: "bg-soma-orange"
    },
    {
      icon: Target,
      title: "Technology Integration",
      description: "We also incorporate technology in our lessons to make learning interesting and engaging for all students.",
      color: "bg-soma-brown"
    },
    {
      icon: Lightbulb,
      title: "Individualized Attention",
      description: "Every student receives personalized attention to help them achieve their full potential and excel in their studies.",
      color: "bg-soma-green"
    }
  ];

  const benefits = [
    "Flexible learning schedules that fit your family's lifestyle",
    "Small class sizes ensuring personalized attention",
    "Modern teaching methods with technology integration",
    "Comprehensive character development programs",
    "Regular progress monitoring and feedback",
    "Preparation for various recognized curricula",
    "Holistic development approach - academic, social, and emotional",
    "Experienced counselling and mentorship programs"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-soma-cream to-soma-light-orange py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Why Choose Soma Home School?</h1>
            <p className="text-xl text-muted-foreground">
              Discover what makes us unique and why families trust us with their children's education.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">What Makes Us Unique?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence and innovation sets us apart in the educational landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {uniqueFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`${feature.color} p-3 rounded-full w-fit mb-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-soma-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                The Soma Home School Advantage
              </h2>
              <p className="text-muted-foreground mb-8">
                When you choose Soma Home School, you're choosing a comprehensive educational 
                experience that goes beyond traditional learning methods.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-soma-green mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Ready to Experience the Difference?</h3>
              <p className="text-muted-foreground mb-6">
                Join hundreds of families who have trusted us with their children's education and seen remarkable results.
              </p>
              <Button asChild className="bg-soma-brown hover:bg-soma-brown/90 w-full mb-4">
                <Link to="/contact">Get Started Today <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">What Our Community Says</h2>
            <p className="text-muted-foreground">
              Hear from the families who have experienced the Soma Home School difference.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-soma-light-orange">
              <CardContent className="p-8">
                <blockquote className="text-lg italic text-primary mb-4">
                  "The personalized attention and flexible learning approach at Soma Home School 
                  has transformed my child's attitude towards learning. The teachers truly care 
                  about each student's success."
                </blockquote>
                <div className="text-center">
                  <p className="font-semibold text-primary">Parent Testimonial</p>
                  <p className="text-sm text-muted-foreground">Soma Home School Community</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-soma-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join the Soma Home School Family
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Experience personalized education that nurtures your child's unique potential and prepares them for a successful future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-soma-brown">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;