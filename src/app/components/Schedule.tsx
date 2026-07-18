import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Calendar, Clock, MapPin, Utensils } from "lucide-react";
import { Link } from "react-router";

type ScheduleEvent = {
  time: string;
  title: string;
  location: string;
  description?: string;
  details?: string[];
};

type ScheduleDay = {
  date: string;
  subtitle: string;
  events: ScheduleEvent[];
};

const scheduleData: ScheduleDay[] = [
  {
    date: "Wednesday, July 15",
    subtitle: "Arrival Day",
    events: [
      {
        time: "4:00 PM",
        title: "Check-in at Santa Cruz KOA",
        location: "KOA Main Office",
        description: "Arrive and get settled in your cabin.",
      },
      {
        time: "5:30 – 7:00 PM",
        title: "Dinner — Burgers & Hot Dogs",
        location: "KOA",
        description: "Dinner together to kick off the reunion! Please let us know if you won't make it.",
      },
      {
        time: "7:00 PM+",
        title: "S'mores",
        location: "KOA",
      },
    ],
  },
  {
    date: "Thursday, July 16",
    subtitle: "Beach Day, Pizza Night & Golden Hour Photos",
    events: [
      {
        time: "8:30 – 9:30 AM",
        title: "Breakfast at the KOA",
        location: "KOA",
        description: "Bagels, cream cheese, yogurt, and fresh fruit provided.",
      },
      {
        time: "9:30 – 10:00 AM",
        title: "Prep, Pack & Cooler Staging",
        location: "KOA",
        description: "Pack your beach bags and load up the coolers.",
      },
      {
        time: "10:00 AM – 2:00 PM",
        title: "Beach Outing",
        location: "Manresa Main State Beach",
        description: "A morning at the beach. Picnic lunch on the sand at 12:00 PM.",
      },
      {
        time: "2:00 – 5:00 PM",
        title: "KOA Afternoon & Clean Up",
        location: "KOA",
        description: "Relax and enjoy KOA amenities.",
      },
      {
        time: "5:00 – 6:30 PM",
        title: "Dinner — Village Host Pizza and Grill",
        location: "Takeout, eat at KOA",
        description: "Pizza night! Takeout from Village Host Pizza and Grill.",
      },
      {
        time: "6:30 PM",
        title: "📷 Family Pictures",
        location: "Location TBD",
        description: "Group family photos.",
      },
      {
        time: "7:00 PM+",
        title: "Dessert — Marianne's Ice Cream",
        location: "Aptos Location (11 min drive)",
      },
    ],
  },
  {
    date: "Friday, July 17",
    subtitle: "Boardwalk Adventure & Mexican Takeout",
    events: [
      {
        time: "8:30 – 9:30 AM",
        title: "Breakfast",
        location: "Individual Campsites",
        description: "On your own at individual campsites.",
      },
      {
        time: "9:30 – 10:15 AM",
        title: "Carpool to the Santa Cruz Boardwalk",
        location: "Depart KOA",
        description: "Leaving by 9:30 AM ensures you reach the parking lots by 10:15 AM. Rides open at 11:00 AM.",
      },
      {
        time: "11:00 AM – 3:30 PM",
        title: "Santa Cruz Beach Boardwalk",
        location: "Santa Cruz Beach Boardwalk",
        description: "Enjoy historic rides, midway games, and coastal sights. At 12:30 PM the group meets at a pre-designated spot — bring a self-packed lunch or grab food at the Boardwalk.",
      },
      {
        time: "3:30 – 5:30 PM",
        title: "Rest & Regroup at the KOA",
        location: "KOA",
      },
      {
        time: "5:30 – 6:30 PM",
        title: "Dinner — Manuel's Mexican Restaurant",
        location: "Takeout, eat at KOA",
        description: "Takeout from Manuel's Mexican Restaurant.",
      },
      {
        time: "6:45 PM+",
        title: "S'mores",
        location: "KOA",
      },
    ],
  },
  {
    date: "Saturday, July 18",
    subtitle: "Redwood Hike & Optional U-Pick",
    events: [
      {
        time: "9:00 – 10:00 AM",
        title: "Breakfast",
        location: "Individual Campsites",
        description: "On your own at the campsites.",
      },
      {
        time: "10:00 – 10:30 AM",
        title: "Drive to Nisene Marks State Park",
        location: "Aptos Creek Road Entrance",
      },
      {
        time: "10:30 AM – 1:30 PM",
        title: "🌲 Redwoods Hike",
        location: "The Forest of Nisene Marks State Park",
        description:
          "We'll be hiking the beautiful Old Growth Loop Trail (2.2 miles) through some of the most stunning old-growth redwoods in the park, including the famous “Twisted Grove.”",
        details: [
          "Parking: Park at the entrance station lot (by the Emmett Reed picnic area). There's a day-use fee per car, so carpool if you can! If the lot is full, overflow parking is available along Aptos Creek Road below the kiosk.",
          "The hike: The main loop is 2.2 miles and family-friendly. Anyone who wants a longer hike can add the Oak Ridge Trail, which branches off the loop and brings the total to about 4 miles with a good climb to a ridge of oak trees.",
        ],
      },
      {
        time: "12:00 PM",
        title: "Picnic Lunch",
        location: "Pourroy Picnic Area, Nisene Marks",
        description:
          "We'll finish with lunch at the Pourroy Picnic Area, a shady spot right on Aptos Creek. Kids can wade and play alongside the creek — pack water shoes and a towel! Note: the picnic area is on the trail, so lunch gets carried in via backpack.",
      },
      {
        time: "1:30 – 5:30 PM",
        title: "Open Afternoon",
        location: "KOA",
        description: "Free time — relax and enjoy KOA amenities.",
      },
      {
        time: "5:30 – 7:30 PM",
        title: "Dinner — Aptos St. BBQ",
        location: "Takeout, eat at KOA",
        description: "Takeout from Aptos St. BBQ.",
      },
      {
        time: "7:30 PM+",
        title: "S'mores",
        location: "KOA",
      },
    ],
  },
  {
    date: "Sunday, July 19",
    subtitle: "Pack Up & Checkout",
    events: [
      {
        time: "11:00 AM",
        title: "Checkout",
        location: "KOA Main Office",
        description: "Safe travels home! Thank you for a wonderful reunion.",
      },
      {
        time: "After checkout",
        title: "Monterey Bay Aquarium",
        location: "Monterey, CA (~45 min drive)",
        description: "If you're planning to visit the Monterey Bay Aquarium, today is the perfect day to go on your way out. It's about 45 minutes south of the KOA.",
      },
    ],
  },
];

export function Schedule() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-4">Reunion Schedule</h1>
          <p className="text-lg text-muted-foreground">July 15–19, 2026 · Santa Cruz KOA</p>
        </div>

        {/* Meal Note */}
        <div className="mb-10 p-5 bg-secondary rounded-xl flex items-start gap-3">
          <Utensils className="size-5 text-secondary-foreground mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold text-secondary-foreground mb-1">Note on Meals</p>
            <p className="text-sm text-secondary-foreground/90">
              All dinners and breakfast on Thursday (7/16) will be provided together as a group.
              For all other meals you'll need to pack your own food. Nearest grocery stores are
              listed on the{" "}
              <Link to="/map" className="underline underline-offset-2 font-medium">
                Maps tab
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Days */}
        <div className="space-y-10">
          {scheduleData.map((day, dayIndex) => (
            <div key={dayIndex}>
              <div className="flex items-start gap-3 mb-5">
                <Calendar className="size-6 text-primary shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl leading-tight">{day.date}</h2>
                  <p className="text-muted-foreground text-sm">{day.subtitle}</p>
                </div>
              </div>

              <div className="space-y-3 ml-9">
                {day.events.map((event, eventIndex) => (
                  <Card key={eventIndex} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <CardTitle className="text-base">{event.title}</CardTitle>
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground shrink-0">
                          <Clock className="size-4" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center gap-1.5 mb-2 text-sm text-muted-foreground">
                        <MapPin className="size-4 shrink-0 text-accent" />
                        <span>{event.location}</span>
                      </div>
                      {event.description && (
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      )}
                      {event.details && (
                        <ul className="mt-2 space-y-1.5">
                          {event.details.map((detail, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-primary shrink-0">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
