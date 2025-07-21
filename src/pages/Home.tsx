import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen, Award, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-soma-cream via-soma-light-orange to-soma-orange py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-soma-green p-4 rounded-full">
                <GraduationCap className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Welcome to Soma Home School
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Providing quality, learner-centered and value-based education to students 
              within Kenya at their family's convenience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-soma-brown hover:bg-soma-brown/90">
                <Link to="/about">Learn More About Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Soma Home School?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive educational experience that transforms lives through quality education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-soma-green p-3 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Experienced Staff</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Knowledgeable and dedicated staff who ensure students get the very best knowledge.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-soma-orange p-3 rounded-full w-fit mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Tailored Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learner-centered curriculum that incorporates technology to make learning interesting.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-soma-brown p-3 rounded-full w-fit mx-auto mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Individual Attention</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Individualized attention to every learner for exemplary results and holistic development.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-soma-green p-3 rounded-full w-fit mx-auto mb-4">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Focus on academic excellence balanced with character development and life skills.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-soma-light-orange">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Transform Your Child's Education?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the Soma Home School community and give your child the education they deserve.
          </p>
          <Button asChild size="lg" className="bg-soma-brown hover:bg-soma-brown/90">
            <Link to="/contact">Contact Us Today <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;