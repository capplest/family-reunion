import { Card, CardContent } from "./ui/card";
import { Shirt } from "lucide-react";

export function TShirtSizes() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Shirt className="size-16 text-primary" />
          </div>
          <h1 className="text-4xl mb-4">Reunion T-Shirt Sizes</h1>
          <p className="text-lg text-muted-foreground">
            Please submit your t-shirt size by April 15, 2026, so we can have them ready for the reunion
          </p>
        </div>

        {/* Embedded Google Form */}
        <Card>
          <CardContent className="pt-6">
            <div className="aspect-[3/4] min-h-[800px] w-full">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSfQmlYJQILUTX_MOfhfcUxoAHRMZ7UxGx2NUg6N9WHAG-t5CQ/viewform?embedded=true"
                width="100%"
                height="100%"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                title="T-Shirt Size Form"
              >
                Loading…
              </iframe>
            </div>
          </CardContent>
        </Card>

        {/* Note */}
        <Card className="mt-6 bg-muted">
          <CardContent className="pt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Please submit one form per family member. If you have any questions or need assistance, contact us at reunion@family.com
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}