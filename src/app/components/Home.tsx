import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router";
import { Calendar, MapPin, Images, Quote } from "lucide-react";

const quotes = [
  {
    text: "Gonna be at the pool if anyone wants to come chill",
    author: "Nate Crockett",
  },
  {
    text: "We only have one pair of sunglasses. A water bottle. and a hat.",
    author: "Ryan Severts",
  },
  {
    text: "On my way",
    author: "Kirk Lindahl when he hears about the Peanut Man.",
  },
  {
    text: "I'm full of gratitude for the time we were able to spend together this week. I love you all incredibly much <3",
    author: "Debbie Crockett",
  },
  {
    text: "I'm taking the cocoa powder",
    author: "Maya Bingham",
  },
  {
    text: "Can anybody who's using the internet right now go into airplane mode for like 10 minutes while I try to upload some documents please, thanks",
    author: "Will Crockett",
  },
  {
    text: "Send pictures of the gym. Is there a weight bench?",
    author: "Rob Crockett",
  },
  {
    text: "There's like...banging going on",
    author: "Cindy Crockett",
  },
  {
    text: "We had a couple of bags of ashes still in the van. Does anyone need/want them?",
    author: "Lindsay Severts",
  },
  {
    text: "Can anyone hook me up with a lactose pill",
    author: "Carly Bingham",
  },
];

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1704494942286-6c61941ecece?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxpZm9ybmlhJTIwcmVkd29vZCUyMGZvcmVzdHxlbnwxfHx8fDE3NzE4MTYzODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Redwood Forest"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-3xl">
            <h1 className="text-5xl md:text-6xl mb-4 drop-shadow-lg">
              Crocketts do Santa Cruz
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Calendar className="size-5" />
                <span>July 15-19, 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <MapPin className="size-5" />
                <span>Santa Cruz KOA</span>
              </div>
            </div>
            <Link to="/schedule">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                View Schedule
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Beach Image Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl mb-4">Where Redwoods Meet the Sea</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Santa Cruz offers the perfect backdrop for our family gathering. From towering redwoods to stunning Pacific beaches, we'll enjoy the best of California's natural beauty. (AI wrote that)
              </p>
              <p className="text-lg text-muted-foreground">
                But really, we're looking forward to good food in beautiful places with our favorite people.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1697658466016-27423957f14d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50YSUyMGNydXolMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3NzE4MTYzODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Santa Cruz Beach"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl text-center mb-8">Plan Your Visit</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link to="/schedule">
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <Calendar className="size-12 text-primary mb-4" />
                <h3 className="text-xl mb-2">Schedule</h3>
                <p className="text-muted-foreground">
                  Check out our packed schedule of activities and events
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/map">
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <MapPin className="size-12 text-accent mb-4" />
                <h3 className="text-xl mb-2">Location</h3>
                <p className="text-muted-foreground">
                  Find directions to our reunion venue and nearby attractions
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/gallery">
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <Images className="size-12 text-secondary mb-4" />
                <h3 className="text-xl mb-2">Catch some highlights from the last reunion</h3>
                <p className="text-muted-foreground">
                  Browse photos from past Crockett reunions
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl mb-4">Crockett Reunion testimonials</h2>
              <p className="text-lg text-muted-foreground">
                What Crocketts have to say about the Crockett Reunion
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {quotes.map((quote, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all hover:-translate-y-1 bg-gradient-to-br from-card to-muted/30"
                >
                  <CardContent className="pt-6">
                    <Quote className="size-8 text-primary/20 mb-4" />
                    <blockquote className="text-lg mb-4 italic leading-relaxed">
                      "{quote.text}"
                    </blockquote>
                    <p className="text-right text-muted-foreground">
                      — {quote.author}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}