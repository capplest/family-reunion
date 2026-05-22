import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MapPin, Phone, Clock, Navigation, TreePine, Wind } from "lucide-react";

export function Map() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4">Location & Directions</h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about getting to the reunion
          </p>
        </div>

        {/* Main Venue Info */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="size-6 text-primary" />
              Reunion Venue
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="mb-2">Santa Cruz KOA</h3>
              <p className="text-muted-foreground">1186 San Andreas Rd, Watsonville, CA 95076</p>
            </div>
            
            <div className="flex items-start gap-2">
              <Phone className="size-4 mt-1 text-accent" />
              <div>
                <p className="font-medium">Contact</p>
                <p className="text-muted-foreground">(831) 722-0551</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Clock className="size-4 mt-1 text-accent" />
              <div>
                <p className="font-medium">Check-in</p>
                <p className="text-muted-foreground">Tuesday, July 15 • 4:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Clock className="size-4 mt-1 text-accent" />
              <div>
                <p className="font-medium">Check-out</p>
                <p className="text-muted-foreground">Saturday, July 19 • 11:00 AM</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Embedded Map */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Map View</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102969.5384882656!2d-122.13126848359376!3d36.97454929999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e441b7c36d549%3A0x52ca104b2ad7f985!2sSanta%20Cruz%2C%20CA!5e0!3m2!1sen!2sus!4v1645564892123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Santa Cruz Location Map"
              ></iframe>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Click to open in Google Maps for directions
            </p>
          </CardContent>
        </Card>

        {/* Driving Directions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Navigation className="size-5 text-primary" />
                From San Jose Airport
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-2 text-muted-foreground">
                <li>1. Head south on Airport Blvd toward N 1st St</li>
                <li>2. Merge onto US-101 S</li>
                <li>3. Take exit 397A for CA-152 W/CA-156 W toward Watsonville</li>
                <li>4. Continue on CA-152 W</li>
                <li>5. Turn right onto San Andreas Rd</li>
                <li>6. Santa Cruz KOA will be on your right</li>
              </ol>
              <p className="mt-4 text-sm">
                <strong>Approximate time:</strong> 45 minutes
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Navigation className="size-5 text-primary" />
                From San Francisco Airport
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-2 text-muted-foreground">
                <li>1. Head southeast on Link Rd toward US-101 S</li>
                <li>2. Merge onto US-101 S toward San Jose</li>
                <li>3. Take exit 397A for CA-152 W/CA-156 W toward Watsonville</li>
                <li>4. Continue on CA-152 W</li>
                <li>5. Turn right onto San Andreas Rd</li>
                <li>6. Santa Cruz KOA will be on your right</li>
              </ol>
              <p className="mt-4 text-sm">
                <strong>Approximate time:</strong> 1 hour 30 minutes
              </p>
            </CardContent>
          </Card>
        </div>

        {/* LA Directions */}
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Navigation className="size-5 text-primary" />
                From Los Angeles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-2 text-muted-foreground">
                <li>1. Take US-101 N toward San Luis Obispo</li>
                <li>2. Continue on US-101 N past Salinas</li>
                <li>3. Take CA-156 W toward Castroville</li>
                <li>4. Merge onto CA-1 N toward Santa Cruz</li>
                <li>5. Turn left on Redwood Drive</li>
              </ol>
              <p className="mt-4 text-sm">
                <strong>Approximate time:</strong> 5 hours 30 minutes
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Nearby Attractions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TreePine className="size-5 text-accent" />
              Nearby Attractions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="mb-1">Santa Cruz Beach Boardwalk</h4>
                <p className="text-sm text-muted-foreground mb-1">5 minutes away</p>
                <p className="text-sm text-muted-foreground">
                  Classic seaside amusement park with rides and games
                </p>
              </div>
              
              <div>
                <h4 className="mb-1">Natural Bridges State Beach</h4>
                <p className="text-sm text-muted-foreground mb-1">8 minutes away</p>
                <p className="text-sm text-muted-foreground">
                  Beautiful beach with tide pools and rock formations
                </p>
              </div>
              
              <div>
                <h4 className="mb-1">Henry Cowell Redwoods State Park</h4>
                <p className="text-sm text-muted-foreground mb-1">12 minutes away</p>
                <p className="text-sm text-muted-foreground">
                  Ancient redwood groves with hiking trails
                </p>
              </div>
              
              <div>
                <h4 className="mb-1">Downtown Santa Cruz</h4>
                <p className="text-sm text-muted-foreground mb-1">7 minutes away</p>
                <p className="text-sm text-muted-foreground">
                  Shopping, restaurants, and Pacific Avenue
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Parking Info */}
        <Card className="mt-6 bg-muted">
          <CardContent className="pt-6">
            <h4 className="mb-2">Parking Information</h4>
            <p className="text-sm text-muted-foreground">
              Free parking is available on-site for all reunion guests. Overflow parking is located in the adjacent lot. 
              Please display your reunion parking pass (included in your welcome packet) on your dashboard.
            </p>
          </CardContent>
        </Card>

        {/* Weather Tips */}
        <Card className="mt-6 bg-accent text-accent-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wind className="size-5" />
              Santa Cruz Weather Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Santa Cruz has a coastal Mediterranean climate. In July, you can expect:
            </p>
            <ul className="space-y-2">
              <li>• <strong>Daytime temperatures:</strong> 65-75°F (18-24°C)</li>
              <li>• <strong>Morning/evening:</strong> Can be foggy and cool, especially near the coast</li>
              <li>• <strong>Dress in layers:</strong> You'll be comfortable no matter the weather</li>
              <li>• <strong>Sun protection:</strong> Even on foggy days, UV rays can be strong</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}