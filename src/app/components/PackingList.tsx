import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { 
  Shirt, 
  Waves, 
  Sun, 
  Wind, 
  Camera, 
  Utensils, 
  Heart,
  Luggage
} from "lucide-react";

const packingCategories = [
  {
    title: "Clothing",
    icon: Shirt,
    items: [
      "Casual everyday clothes (3-4 outfits)",
      "Semi-formal outfit for Saturday banquet",
      "Comfortable walking shoes",
      "Sandals or flip-flops",
      "Light jacket or sweater (evenings can be cool)",
      "Pajamas",
      "Socks and undergarments",
      "Reunion t-shirt (optional - one will be provided)",
    ],
  },
  {
    title: "Beach & Outdoor",
    icon: Waves,
    items: [
      "Swimsuit",
      "Beach towel",
      "Sunscreen (SPF 30+)",
      "Sunglasses",
      "Hat or cap",
      "Water bottle",
      "Hiking shoes or comfortable sneakers",
      "Backpack or day bag",
    ],
  },
  {
    title: "Weather Essentials",
    icon: Sun,
    items: [
      "Layers (mornings/evenings can be foggy)",
      "Rain jacket (just in case)",
      "Umbrella",
    ],
  },
  {
    title: "Personal Items",
    icon: Heart,
    items: [
      "Toiletries (toothbrush, toothpaste, etc.)",
      "Medications",
      "Phone charger",
      "Camera or extra memory cards",
      "Reading material for downtime",
      "Insect repellent",
    ],
  },
  {
    title: "Optional but Fun",
    icon: Camera,
    items: [
      "Photos to share from past reunions",
      "Musical instruments",
      "Games or cards",
      "Camping chair",
      "Binoculars for wildlife viewing",
      "Flashlight or headlamp for evening activities",
    ],
  },
  {
    title: "Food & Drinks",
    icon: Utensils,
    items: [
      "Snacks for the road",
      "Reusable water bottle",
      "Special dietary items if needed",
      "Coffee/tea if you're particular",
    ],
  },
];

export function PackingList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Luggage className="size-16 text-primary" />
          </div>
          <h1 className="text-4xl mb-4">What to Pack</h1>
          <p className="text-lg text-muted-foreground">
            Make sure you're prepared for all our reunion activities
          </p>
        </div>

        {/* Packing Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {packingCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="size-5 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <Checkbox id={`item-${categoryIndex}-${itemIndex}`} />
                        <label
                          htmlFor={`item-${categoryIndex}-${itemIndex}`}
                          className="text-sm cursor-pointer leading-relaxed"
                        >
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Weather Notice */}
        <Card className="mb-6 bg-accent text-accent-foreground">
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

        {/* Important Reminders */}
        <Card className="bg-muted">
          <CardHeader>
            <CardTitle>Don't Forget!</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Check your welcome email for your confirmation number</li>
              <li>✓ Bring any dietary restriction notes for meal planning</li>
              <li>✓ Camera or phone charged and ready for photos</li>
              <li>✓ Positive attitude and open heart for family time!</li>
              <li>✓ COVID-19 safety items if preferred (masks, hand sanitizer)</li>
            </ul>
          </CardContent>
        </Card>

        {/* Pro Tips */}
        <Card className="mt-6 bg-secondary text-secondary-foreground">
          <CardContent className="pt-6">
            <h4 className="mb-3">Pro Tips from Previous Reunions</h4>
            <ul className="space-y-2 text-sm">
              <li>💡 Label your belongings - lots of similar items around!</li>
              <li>💡 Bring a phone battery pack - you'll be taking lots of photos</li>
              <li>💡 Pack snacks for kids (and adults) for between-meal hunger</li>
              <li>💡 Bring a small first aid kit with basics like bandaids and pain relievers</li>
              <li>💡 Don't overpack - there's laundry available on-site if needed</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
