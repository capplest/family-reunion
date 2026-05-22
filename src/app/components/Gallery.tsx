import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";
import { X } from "lucide-react";
import photo2017 from "figma:asset/adb88c91250efa23a620fbb3a45a767db80a6cb7.png";
import photo2019 from "figma:asset/697034871a2eac7f00810abaf20c2e15269a97fd.png";
import photo2021 from "figma:asset/4a9a0fb7f009388d5501a0802820ed31d14d1ceb.png";
import photoBearLake from "figma:asset/a56a12066e95fd5931ce230fa80092758f7c8dbc.png";
import photo2025 from "figma:asset/b685e2bca67ea0939d0700f1917dd757b9eb7c46.png";

const photos = [
  {
    url: photo2017,
    caption: "2017 Rocky Mountain National Park",
    year: "2017",
  },
  {
    url: photo2019,
    caption: "2019 Smithfield, Utah",
    year: "2019",
  },
  {
    url: photo2021,
    caption: "2021 Zion National Park",
    year: "2021",
  },
  {
    url: photoBearLake,
    caption: "2024 Bear Lake",
    year: "",
  },
  {
    url: photo2025,
    caption: "2025 Glenwood Springs, Colorado",
    year: "2025",
  },
];

export function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4">Memory Lane</h1>
          <p className="text-lg text-muted-foreground">
            Photos from past family reunions and gatherings
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <Card 
              key={index} 
              className="overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 group"
              onClick={() => setSelectedPhoto(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <ImageWithFallback
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <CardContent className="p-4">
                <h3 className="mb-1">{photo.caption}</h3>
                <p className="text-sm text-muted-foreground">{photo.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Photos Message */}
        <Card className="mt-12 bg-secondary text-secondary-foreground">
          <CardContent className="pt-6 text-center">
            <h3 className="text-xl mb-2">Share Your Memories!</h3>
            <p>
              Bring your favorite family photos to the reunion. We'll create a new album together with everyone's contributions.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <X className="size-8" />
          </button>
          <div className="max-w-5xl max-h-[90vh] flex flex-col items-center">
            <ImageWithFallback
              src={photos[selectedPhoto].url}
              alt={photos[selectedPhoto].caption}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-white mt-4 text-center">
              <h3 className="text-xl mb-1">{photos[selectedPhoto].caption}</h3>
              <p className="text-white/70">{photos[selectedPhoto].year}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}