import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tent, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export function KOAActivities() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Tent className="size-16 text-primary" />
          </div>
          <h1 className="text-4xl mb-4">Santa Cruz KOA Activities</h1>
          <p className="text-lg text-muted-foreground">
            Explore all the fun activities and amenities available at the KOA
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-accent text-accent-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ExternalLink className="size-5" />
                KOA Recreation Page
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Check out all the activities, amenities, and recreation options available at Santa Cruz KOA.
              </p>
              <a 
                href="https://koa.com/campgrounds/santa-cruz/recreation/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="w-full">
                  View Recreation & Activities
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="bg-accent text-accent-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ExternalLink className="size-5" />
                KOA Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                View the campground map to see where everything is located and plan your stay.
              </p>
              <a 
                href="https://koa.com/campgrounds/santa-cruz/map/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="w-full">
                  View Campground Map
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Info Card */}
        <Card className="bg-muted">
          <CardHeader>
            <CardTitle>About Santa Cruz KOA</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              The Santa Cruz KOA offers a perfect blend of camping comfort and coastal adventure. 
              Located near beautiful beaches and towering redwoods, it's the ideal base for our family reunion.
            </p>
            <ul className="space-y-2">
              <li>✓ Swimming pool and hot tub</li>
              <li>✓ Game room and playground</li>
              <li>✓ Camp store with essentials</li>
              <li>✓ Clean restrooms and showers</li>
              <li>✓ Wi-Fi available</li>
              <li>✓ Pet-friendly sites</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
