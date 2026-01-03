// src/components/ContentSection.tsx
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import Link from "next/link";

interface ContentSectionProps {
  title: string;
  text: string[];
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
  buttonLink: string;
  imageLeft?: boolean;
}

export default function ContentSection({
  title,
  text,
  imageSrc,
  imageAlt,
  buttonText,
  buttonLink,
  imageLeft = true,
}: ContentSectionProps) {
  return (
    <SectionWrapper>
      <div
        className={`flex flex-col ${
          imageLeft ? "md:flex-row" : "md:flex-row-reverse"
        } items-center gap-12 md:gap-20`}
      >
        <div className="w-full md:w-1/2">
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-tight">
            {title}
          </h2>
          {text.map((paragraph, index) => (
            <p
              key={index}
              className="font-sans text-lg leading-relaxed text-gray-700"
            >
              {paragraph}
            </p>
          ))}
          <Link
            href={buttonLink}
            className="inline-block bg-black text-white px-8 py-3 text-xs uppercase tracking-[0.15em] font-bold transition-colors hover:bg-bt-pink"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
