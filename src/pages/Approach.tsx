import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Target, BookOpen, ArrowRight, Star } from "lucide-react";

const Approach = () => {
  const approaches = [
    {
      icon: Heart,
      title: "Client-Centered Focus",
      description: "SOMA is about our clients. Our teachers and non-teaching staff are well trained and are committed fully to the curricular and co-curricular aspects of the company.",
      color: "bg-soma-green"
    },
    {
      icon: Users,
      title: "Optimal Learning Environment",
      description: "We provide the best environment for each of our students to learn and develop, ensuring every child feels supported and encouraged.",
      color: "bg-soma-orange"
    },
    {
      icon: Target,
      title: "Individual Development",
      description: "Our approach focuses on developing each student's unique potential, recognizing that every learner has different strengths and learning styles.",
      color: "bg-soma-brown"
    },
    {
      icon: BookOpen,
      title: "Holistic Education",
      description: "We believe in nurturing not just academic excellence but also character development, creativity, and critical thinking skills.",
      color: "bg-soma-green"
    }
  ];

  const principles = [
    "Personalized learning plans for each student",
    "Regular assessment and feedback",
    "Integration of technology in learning",
    "Character development and moral education",
    "Collaborative learning experiences",
    "Real-world application of knowledge",
    "Creative and critical thinking development",
    "Social and emotional learning support"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-soma-cream to-soma-light-orange py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Educational Approach</h1>
            <p className="text-xl text-muted-foreground">
              Discover our student-centered methodology that puts your child's success at the heart of everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Main Philosophy */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">SOMA is About Our Clients</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-soma-light-orange">
                <CardContent className="p-8">
                  <p className="text-lg text-primary leading-relaxed">
                    Our teachers and non-teaching staff are well trained and are committed fully 
                    to the curricular and co-curricular aspects of the company and providing the 
                    best environment for each of our students to learn and develop.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approaches.map((approach, index) => {
              const IconComponent = approach.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`${approach.color} p-3 rounded-full w-fit mb-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{approach.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {approach.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Methodology */}
      <section className="py-16 bg-soma-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Teaching Methodology</h2>
              <p className="text-muted-foreground mb-8">
                We employ proven educational strategies that cater to different learning styles 
                and ensure every student can achieve their full potential.
              </p>
              <div className="space-y-4">
                {principles.map((principle, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-soma-orange mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-primary">Flexible Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We adapt our teaching methods to match each student's pace and learning style, 
                    ensuring optimal comprehension and retention.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-primary">Continuous Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Our dedicated team provides ongoing support to students and families, 
                    ensuring a smooth and successful educational journey.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-primary">Innovation in Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We continuously update our methods and incorporate new technologies 
                    to keep learning engaging and relevant.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">What Makes Our Approach Successful</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our success comes from combining proven educational practices with innovative 
              methods tailored to each student's needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-soma-green p-3 rounded-full w-fit mx-auto mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Goal-Oriented Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every lesson is designed with clear objectives and measurable outcomes 
                  to track student progress effectively.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-soma-orange p-3 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Collaborative Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We foster a supportive community where students, teachers, and parents 
                  work together towards common educational goals.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-soma-brown p-3 rounded-full w-fit mx-auto mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Caring Relationships</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We build strong, caring relationships with our students that form 
                  the foundation for effective learning and personal growth.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-soma-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Experience Our Approach Firsthand
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            See how our student-centered approach can make a difference in your child's 
            educational journey and personal development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">Schedule a Visit <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-soma-brown">
              <Link to="/community">Read Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Approach;