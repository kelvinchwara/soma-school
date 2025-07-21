import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, ArrowRight, Users, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-soma-cream to-soma-light-orange py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Soma Home School</h1>
            <p className="text-xl text-muted-foreground">
              Founded by a young person who saw the gap for providing education that is 
              tailored to meet each and every student's need and abilities.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Who We Are</h2>
              <p className="text-muted-foreground mb-6">
                Soma Home School is an educational solutions company focused on providing quality, 
                learner-centered and value-based education to students within Kenya at their family's convenience.
              </p>
              <p className="text-muted-foreground mb-8">
                We are committed to transforming lives through education by providing personalized 
                learning experiences that cater to each student's unique needs and learning style.
              </p>
              <Button asChild className="bg-soma-brown hover:bg-soma-brown/90">
                <Link to="/services">Explore Our Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="bg-soma-light-orange p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-soma-green p-3 rounded-full w-fit mx-auto mb-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-primary">Expert Teachers</h3>
                  <p className="text-sm text-muted-foreground">Qualified professionals</p>
                </div>
                <div className="text-center">
                  <div className="bg-soma-orange p-3 rounded-full w-fit mx-auto mb-3">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-primary">Quality Education</h3>
                  <p className="text-sm text-muted-foreground">Proven curriculum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16 bg-soma-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-soma-green p-3 rounded-full w-fit mx-auto mb-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  An oasis where young lives are transformed through a wholesome 
                  education to positively influence society.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-soma-orange p-3 rounded-full w-fit mx-auto mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To train youth of every ability in the highest principles of Leadership, 
                  Individual Responsibility, Self-Discipline, Personal Integrity, and Citizenship.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-soma-brown p-3 rounded-full w-fit mx-auto mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-primary">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Character, Excellence, Integrity and Accountability guide everything 
                  we do in our educational approach.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Seek */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">What We Seek To Achieve</h2>
            <div className="bg-soma-light-orange p-8 rounded-lg">
              <p className="text-lg text-primary font-medium mb-4">
                We seek to mold our students to become confident individuals, responsible 
                citizens and learners who enjoy success.
              </p>
              <p className="text-muted-foreground">
                Our comprehensive approach ensures that every student develops not just academically, 
                but also grows physically, mentally, emotionally and spiritually.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-soma-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Educational Community
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Discover how Soma Home School can provide the personalized education your child needs to thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-soma-brown">
              <Link to="/why-us">Why Choose Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;