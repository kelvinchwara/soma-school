import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote, Star, Users, ArrowRight, Heart } from "lucide-react";

const Community = () => {
  const testimonials = [
    {
      name: "Janet Wariui",
      content: "I have learnt that success is me and that you can be a big car or a big house but where preparedness meets opportunities and through that I can impact people and build a better society through which I can leave.",
      role: "Student"
    },
    {
      name: "Jane Martin", 
      content: "For me the various teaching systems present at Soma homeschool is amazing. For the few years I have been a student, the teaching has been amazing because it is more of student based, where the teacher gives instruction and encourages me to ask questions. This teaching method has made me have a deeper understanding of concepts and improve in my academics.",
      role: "Student"
    },
    {
      name: "Okute Joshua",
      content: "My journey at Soma home school has been amazing. I always get motivated my how teaching is carried out in a school system. An also given opportunity to give my talents out as a pianist. I believe that happiness and determination will end any student in the field of success I am motivated to learn as the occasion arises at my corner of my home.",
      role: "Student"
    }
  ];

  const communityValues = [
    {
      icon: Heart,
      title: "Supportive Environment",
      description: "We create a caring community where every student feels valued and supported in their educational journey.",
      color: "bg-soma-green"
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Students learn from each other in a collaborative environment that encourages sharing and growth.",
      color: "bg-soma-orange"
    },
    {
      icon: Star,
      title: "Individual Success",
      description: "We celebrate each student's unique achievements and help them reach their personal best.",
      color: "bg-soma-brown"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-soma-cream to-soma-light-orange py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Soma Community</h1>
            <p className="text-xl text-muted-foreground">
              Hear from our amazing students and families who are part of the Soma Home School community.
            </p>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Student Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our students share their experiences and how Soma Home School has impacted their lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="h-8 w-8 text-soma-orange" />
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-soma-orange text-soma-orange" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Values */}
      <section className="py-16 bg-soma-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Community Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What makes the Soma Home School community special and how we support each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`${value.color} p-3 rounded-full w-fit mx-auto mb-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Our Community */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Join Our Growing Community
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Become part of a supportive educational community where students thrive, 
              families connect, and success stories are created every day.
            </p>
            
            <div className="bg-soma-light-orange p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                What Our Community Offers
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-soma-green p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">Regular community events and activities</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-soma-green p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">Parent support groups and workshops</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-soma-green p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">Student clubs and special interest groups</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-soma-green p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">Educational trips and experiences</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-soma-green p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">Mentorship and guidance programs</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-soma-green p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">Academic and personal development resources</span>
                  </div>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="bg-soma-brown hover:bg-soma-brown/90">
              <Link to="/contact">Join Our Community Today <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-soma-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Become Part of Our Story?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join the Soma Home School community and help your child create their own success story 
            in a supportive, nurturing environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
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

export default Community;