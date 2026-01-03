// src/components/TripGrid.tsx
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import Link from "next/link";

interface Trip {
  title: string;
  imageSrc: string;
  subtitle?: string;
  nights?: number;
  link: string;
}

interface TripGridProps {
  title: string;
  trips: Trip[];
  categories?: string[];
}

export default function TripGrid({ title, trips, categories }: TripGridProps) {
  return (
    <SectionWrapper>
      <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-tight text-center mb-12">
        {title}
      </h2>
      {categories && (
        <div className="flex justify-center gap-8 mb-12 border-b border-gray-200 pb-4 overflow-x-auto">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`text-xs uppercase tracking-[0.15em] font-bold pb-4 ${
                index === 0
                  ? "text-bt-pink border-b-2 border-bt-pink"
                  : "text-gray-500 hover:text-bt-pink"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trips.map((trip, index) => (
          <Link
            href={trip.link}
            key={index}
            className="group relative aspect-[3/4] overflow-hidden block"
          >
            <Image
              src={trip.imageSrc}
              alt={trip.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
              {trip.nights && (
                <span className="text-xs font-bold uppercase tracking-widest self-end">
                  {trip.nights} Nights
                </span>
              )}
              <div className="mt-auto">
                <h3 className="font-serif text-2xl font-bold uppercase mb-2">
                  {trip.title}
                </h3>
                {trip.subtitle && (
                  <p className="font-sans text-sm mb-4 line-clamp-3">
                    {trip.subtitle}
                  </p>
                )}
                {trip.subtitle && (
                  <span className="text-xs uppercase tracking-[0.15em] font-bold border-b border-white/50 pb-1">
                    Explore Trip
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
