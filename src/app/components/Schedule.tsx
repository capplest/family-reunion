import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

const scheduleData = [
  {
    date: "Tuesday, July 15",
    events: [
      { time: "4:00 PM", title: "Check-in at Santa Cruz KOA", location: "KOA Main Office", description: "Arrive and check into your campsite. Pick up your welcome packet and reunion t-shirt!" },
      { time: "Evening", title: "Settle In", location: "Your Campsite", description: "Get settled, set up camp, and relax after your travels." },
    ],
  },
  {
    date: "Wednesday, July 16",
    events: [
      { time: "TBD", title: "Activities & Events", location: "Various", description: "Schedule to be announced - stay tuned for more details!" },
    ],
  },
  {
    date: "Thursday, July 17",
    events: [
      { time: "TBD", title: "Activities & Events", location: "Various", description: "Schedule to be announced - stay tuned for more details!" },
    ],
  },
  {
    date: "Friday, July 18",
    events: [
      { time: "TBD", title: "Activities & Events", location: "Various", description: "Schedule to be announced - stay tuned for more details!" },
    ],
  },
  {
    date: "Saturday, July 19",
    events: [
      { time: "11:00 AM", title: "Check-out from Santa Cruz KOA", location: "KOA Main Office", description: "Say goodbye and safe travels home! Thank you for joining us!" },
    ],
  },
];

export function Schedule() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4">Reunion Schedule</h1>
          <p className="text-lg text-muted-foreground">
            Your guide to all the fun activities and events planned for the weekend
          </p>
        </div>

        {/* Calendar Days */}
        <div className="space-y-8">
          {scheduleData.map((day, dayIndex) => (
            <div key={dayIndex}>
              {/* Day Header */}
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="size-6 text-primary" />
                <h2 className="text-2xl">{day.date}</h2>
              </div>

              {/* Events for this day */}
              <div className="space-y-4 ml-9">
                {day.events.map((event, eventIndex) => (
                  <Card key={eventIndex} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="size-4" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start gap-2 mb-2">
                        <MapPin className="size-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Notes Section */}
        <Card className="mt-12 bg-muted">
          <CardHeader>
            <CardTitle>Important Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• All times are approximate and subject to change</li>
              <li>• Please let us know if you have any dietary restrictions</li>
              <li>• Dress code: Casual for most events, semi-formal for Saturday banquet</li>
              <li>• Weather can vary - bring layers and sunscreen!</li>
              <li>• Optional activities may have additional costs</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}