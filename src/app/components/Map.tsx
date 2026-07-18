import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MapPin, Phone, Clock, Navigation, ShoppingCart, ExternalLink } from "lucide-react";

type Location = {
  name: string;
  when: string;
  description: string;
  mapsUrl: string;
  note?: string;
};

const dayLocations: { date: string; subtitle: string; locations: Location[] }[] = [
  {
    date: "Thursday, July 16",
    subtitle: "Beach Day & Pizza Night",
    locations: [
      {
        name: "Manresa Main State Beach",
        when: "10:00 AM – 2:00 PM",
        description: "Our beach outing for the day. Pack your beach gear — picnic lunch on the sand at noon.",
        mapsUrl: "https://maps.google.com/?q=Manresa+State+Beach+Aptos+CA",
        note: "~15 min drive from KOA",
      },
      {
        name: "Village Host Pizza and Grill",
        when: "Dinner pickup ~5:30 PM",
        description: "Pizza night takeout. Someone will coordinate the pickup order.",
        mapsUrl: "https://maps.google.com/?q=Village+Host+Pizza+and+Grill+Aptos+CA",
        note: "Takeout — eat at KOA",
      },
    ],
  },
  {
    date: "Friday, July 17",
    subtitle: "Boardwalk Adventure & Mexican Takeout",
    locations: [
      {
        name: "Santa Cruz Beach Boardwalk",
        when: "11:00 AM – 3:30 PM",
        description: "Carpool from KOA at 9:30 AM to arrive before rides open at 11 AM. Historic rides, midway games, and beach views.",
        mapsUrl: "https://maps.google.com/?q=Santa+Cruz+Beach+Boardwalk",
        note: "400 Beach St, Santa Cruz · ~30 min drive",
      },
      {
        name: "Manuel's Mexican Restaurant",
        when: "Dinner pickup ~5:30 PM",
        description: "Mexican takeout dinner. Someone will coordinate the pickup order.",
        mapsUrl: "https://maps.google.com/?q=Manuel's+Mexican+Restaurant+Watsonville+CA",
        note: "Takeout — eat at KOA",
      },
      {
        name: "Marianne's Ice Cream (Aptos)",
        when: "6:45 – 8:30 PM",
        description: "Dessert run! The Aptos location of a Santa Cruz classic.",
        mapsUrl: "https://maps.google.com/?q=Marianne's+Ice+Cream+Aptos+CA",
        note: "11 min drive from KOA",
      },
    ],
  },
  {
    date: "Saturday, July 18",
    subtitle: "Redwood Hike & Optional U-Pick",
    locations: [
      {
        name: "The Forest of Nisene Marks State Park",
        when: "10:30 AM – 1:30 PM",
        description: "Park at the entrance station lot (by the Emmett Reed picnic area) — day-use fee per car, so carpool if you can! Overflow parking along Aptos Creek Road below the kiosk if the lot is full. Hike the Old Growth Loop Trail (2.2 mi, family-friendly) through old-growth redwoods, including the famous Twisted Grove. Add the Oak Ridge Trail for a longer ~4 mi hike with a climb to a ridge of oak trees.",
        mapsUrl: "https://maps.google.com/?q=Forest+of+Nisene+Marks+State+Park+Aptos+CA",
        note: "~20 min drive from KOA",
      },
      {
        name: "Epicenter Cycling",
        when: "Before hike if biking",
        description: "Bike rentals and trail recommendations just outside the Nisene Marks park entrance.",
        mapsUrl: "https://maps.google.com/?q=Epicenter+Cycling+Aptos+CA",
        note: "Just outside Nisene Marks entrance",
      },
      {
        name: "Crystal Bay Farms U-Pick",
        when: "Optional — 1:30 – 5:30 PM",
        description: "Pick your own strawberries and flowers. A short drive from the KOA — great afternoon activity after the hike.",
        mapsUrl: "https://maps.google.com/?q=Crystal+Bay+Farms+Watsonville+CA",
        note: "3 min drive from KOA",
      },
      {
        name: "Aptos St. BBQ",
        when: "Dinner pickup ~5:30 PM",
        description: "BBQ takeout dinner to close out our last night together.",
        mapsUrl: "https://maps.google.com/?q=Aptos+Street+BBQ+Aptos+CA",
        note: "Takeout — eat at KOA",
      },
    ],
  },
];

const groceryStores: { name: string; note: string; mapsUrl: string }[] = [
  {
    name: "New Leaf Community Market",
    note: "~10 min from KOA · Full grocery + deli",
    mapsUrl: "https://maps.google.com/?q=New+Leaf+Community+Market+Aptos+CA",
  },
  {
    name: "Safeway",
    note: "~10 min from KOA · Large grocery store",
    mapsUrl: "https://maps.google.com/?q=Safeway+Watsonville+CA",
  },
  {
    name: "Trader Joe's",
    note: "~25 min · Santa Cruz",
    mapsUrl: "https://maps.google.com/?q=Trader+Joe's+Santa+Cruz+CA",
  },
];

export function Map() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4">Location & Directions</h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about getting around
          </p>
        </div>

        {/* KOA Base */}
        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="size-6 text-primary" />
              Home Base — Santa Cruz KOA
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-muted-foreground">1186 San Andreas Rd, Watsonville, CA 95076</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="size-4 text-accent" />
              <span>(831) 722-0551</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="size-4 text-accent" />
              <span>Check-in: Wednesday, July 15 · 4:00 PM &nbsp;·&nbsp; Check-out: Sunday, July 19 · 11:00 AM</span>
            </div>
            <a
              href="https://maps.google.com/?q=Santa+Cruz+KOA+1186+San+Andreas+Rd+Watsonville+CA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline mt-1"
            >
              <ExternalLink className="size-4" />
              Open in Google Maps
            </a>
          </CardContent>
        </Card>

        {/* Getting There */}
        <div className="mb-10">
          <h2 className="text-2xl mb-5 flex items-center gap-2">
            <Navigation className="size-6 text-primary" />
            Getting There
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { from: "San Jose Airport (SJC)", time: "~45 min", directions: "US-101 S → CA-152 W → San Andreas Rd" },
              { from: "San Francisco Airport (SFO)", time: "~1 hr 30 min", directions: "US-101 S → CA-152 W → San Andreas Rd" },
              { from: "Los Angeles", time: "~5 hr 30 min", directions: "US-101 N → CA-156 W → CA-1 N → Redwood Dr" },
            ].map((item) => (
              <Card key={item.from}>
                <CardContent className="pt-5">
                  <p className="font-medium mb-1">{item.from}</p>
                  <p className="text-sm text-primary mb-2">{item.time}</p>
                  <p className="text-sm text-muted-foreground">{item.directions}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Activity Locations by Day */}
        <div className="mb-10">
          <h2 className="text-2xl mb-6">Activity Locations</h2>
          <div className="space-y-8">
            {dayLocations.map((day) => (
              <div key={day.date}>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">{day.date}</h3>
                  <p className="text-sm text-muted-foreground">{day.subtitle}</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {day.locations.map((loc) => (
                    <Card key={loc.name} className="flex flex-col">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">{loc.name}</CardTitle>
                        <p className="text-xs text-primary font-medium">{loc.when}</p>
                      </CardHeader>
                      <CardContent className="pt-0 flex flex-col flex-1 gap-2">
                        <p className="text-sm text-muted-foreground flex-1">{loc.description}</p>
                        {loc.note && (
                          <p className="text-xs text-muted-foreground/70">{loc.note}</p>
                        )}
                        <a
                          href={loc.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline mt-1"
                        >
                          <ExternalLink className="size-4" />
                          Get Directions
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grocery Stores */}
        <div>
          <h2 className="text-2xl mb-5 flex items-center gap-2">
            <ShoppingCart className="size-6 text-primary" />
            Nearby Grocery Stores
          </h2>
          <p className="text-muted-foreground mb-4 text-sm">
            For breakfasts, lunches, and snacks you're packing yourself — see the Schedule tab for which meals are covered.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {groceryStores.map((store) => (
              <Card key={store.name}>
                <CardContent className="pt-5">
                  <p className="font-medium mb-1">{store.name}</p>
                  <p className="text-sm text-muted-foreground mb-3">{store.note}</p>
                  <a
                    href={store.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline"
                  >
                    <ExternalLink className="size-4" />
                    View on Maps
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
