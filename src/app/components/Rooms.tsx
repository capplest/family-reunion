import { ImageWithFallback } from "./figma/ImageWithFallback";
import campgroundMap from "@/imports/campground_map.jpg";
import { Users, BedDouble, Bed } from "lucide-react";

const rooms = [
  {
    id: "DC108",
    capacity: 6,
    layout: "1 room / bunk beds",
    occupants: ["Owen", "Tibby"],
    spotsLeft: 4,
  },
  {
    id: "DC109",
    capacity: 4,
    layout: "cabin",
    occupants: ["Mom"],
    spotsLeft: 3,
  },
  {
    id: "DC110",
    capacity: 6,
    layout: "1 room / bunk beds",
    occupants: ["Nate", "Will", "Tucker"],
    spotsLeft: 2,
  },
  {
    id: "DC155",
    capacity: 6,
    layout: "1 room queen loft",
    occupants: ["Cindy Crockett"],
    spotsLeft: 3,
  },
  {
    id: "DC156",
    capacity: 6,
    layout: "2 room queen / bunk beds",
    occupants: ["Tadd Crocketts"],
    spotsLeft: 2,
  },
  {
    id: "DC157",
    capacity: 6,
    layout: "1 room queen loft",
    occupants: ["Severts"],
    spotsLeft: 0,
    over: true,
  },
  {
    id: "DC181",
    capacity: 4,
    sleeps: 6,
    layout: "1 room queen loft",
    occupants: ["Rob Crocketts"],
    spotsLeft: 0,
  },
  {
    id: "DC182",
    capacity: 6,
    layout: "1 room queen loft",
    occupants: ["Scott Crocketts"],
    spotsLeft: 1,
  },
  {
    id: "DC183",
    capacity: 6,
    layout: "1 room queen loft",
    occupants: ["Lindahls"],
    spotsLeft: 0,
  },
  {
    id: "DC184",
    capacity: 6,
    layout: "1 room queen loft",
    occupants: ["Binghams"],
    spotsLeft: 1,
  },
];

function SpotDots({ capacity, spotsLeft }: { capacity: number; spotsLeft: number }) {
  const filled = capacity - spotsLeft;
  return (
    <div className="flex gap-1 mt-3 flex-wrap">
      {Array.from({ length: capacity }).map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full ${
            i < filled ? "bg-primary" : "bg-muted-foreground/25"
          }`}
        />
      ))}
    </div>
  );
}

export function Rooms() {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl mb-2">Room Assignments</h1>
          <p className="text-muted-foreground text-lg">Deluxe Cabins — Santa Cruz KOA</p>
        </div>

        {/* Subheader note */}
        <div className="mb-10 max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground">
            Here are cabin assignments and their respective capacities. Feel free to mix things up but talk to people and don't be weird about it.
          </p>
        </div>

        {/* Map */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-xl border border-border">
          <ImageWithFallback
            src={campgroundMap}
            alt="Santa Cruz KOA campground map showing cabin locations"
            className="w-full object-contain"
          />
        </div>

        {/* Room grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rooms.map((room) => {
            const isFull = room.spotsLeft === 0;
            return (
              <div
                key={room.id}
                className={`rounded-xl border p-5 flex flex-col gap-2 transition-shadow hover:shadow-md ${
                  isFull
                    ? "bg-muted/40 border-border"
                    : "bg-card border-primary/30"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xl font-semibold tracking-tight">{room.id}</span>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      isFull
                        ? "bg-muted text-muted-foreground"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {isFull ? "Full" : `${room.spotsLeft} spot${room.spotsLeft > 1 ? "s" : ""} left`}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <BedDouble className="size-4 shrink-0" />
                  <span>{room.layout}</span>
                </div>

                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Users className="size-4 shrink-0" />
                  <span>Sleeps {room.sleeps ?? room.capacity}</span>
                </div>

                <div className="mt-1">
                  <p className="text-sm font-medium text-foreground">
                    {room.occupants.join(", ")}
                    {room.over && (
                      <span className="ml-1 text-xs text-muted-foreground">(7 — over capacity)</span>
                    )}
                  </p>
                </div>

                <SpotDots capacity={room.capacity} spotsLeft={room.spotsLeft} />
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-8 flex items-center gap-5 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span>Filled spot</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-muted-foreground/25" />
            <span>Open spot</span>
          </div>
        </div>
      </div>
    </div>
  );
}
