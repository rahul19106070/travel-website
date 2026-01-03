// src/app/page.tsx
import ContentSection from "../app/components/ContentSection";
import SectionWrapper from "../app/components/SectionWrapper";
import TripGrid from "../app/components/TripGrid";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">
      {/* 1. HERO: THE FEELINGS ENGINE (Clean, Centered, No Blocks) */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070"
            alt="Hero Background"
            fill
            priority
            className="object-cover opacity-60 brightness-90"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Centered Typography exactly as Image 1 */}
        <div className="relative z-10 w-full max-w-screen-xl mx-auto flex flex-col items-center text-center">
          <span className="text-[12px] md:text-[14px] uppercase tracking-[0.6em] font-bold mb-4 opacity-90">
            The
          </span>
          <h1 className="font-serif text-[50px] md:text-[130px] lg:text-[150px] font-bold uppercase tracking-tight leading-none mb-10">
            Feelings Engine
          </h1>
          <p className="font-sans text-[11px] md:text-[14px] tracking-[0.4em] uppercase font-bold mb-12">
            Feel the world with our team
          </p>
          <Link
            href="#"
            className="border-2 border-white/60 hover:border-white px-10 py-4 text-[11px] uppercase tracking-[0.25em] font-bold transition-all hover:bg-white hover:text-black"
          >
            Try The Feelings Engine
          </Link>
        </div>

        {/* Centered Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest font-bold">
            Scroll
          </span>
          <div className="w-[1px] h-10 bg-white/50"></div>
        </div>
      </section>

      {/* 2. WHAT WE DO (Image 2 - Side-by-side layout) */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-20 max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="space-y-10">
            <h2 className="font-serif text-[45px] md:text-[60px] font-bold uppercase leading-[1] tracking-tight">
              What we do <br /> and why we do it
            </h2>
            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                Since our founding in 2005, Trip Planner has always been about
                crafting remarkable, tailor-made trips for clients around the
                world.
              </p>
              <p>
                Tom and James – our co-founders – know this better than anyone.
                You can meet them in our new video.
              </p>
            </div>
            <Link
              href="#"
              className="inline-block bg-black text-white px-10 py-4 text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-[#e61e77] transition-colors"
            >
              Watch the Film
            </Link>
          </div>
          <div className="relative aspect-video md:aspect-[4/3] w-full shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071"
              alt="Founders"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. START YOUR JOURNEY (Image 3) */}
      <section className="py-24 bg-white text-center">
        <h2 className="font-serif text-[45px] font-bold uppercase mb-12 tracking-tight">
          Start Your Journey
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mb-16 text-[11px] font-bold uppercase tracking-widest border-b border-gray-100 pb-4 max-w-2xl mx-auto">
          <span className="text-[#e61e77] border-b-2 border-[#e61e77] pb-4 cursor-pointer">
            By Traveller
          </span>
          <span className="text-gray-400 cursor-pointer">Most Popular</span>
          <span className="text-gray-400 cursor-pointer">By Month</span>
          <span className="text-gray-400 cursor-pointer">In the Spotlight</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 max-w-7xl mx-auto">
          {["Family", "Couples", "Groups", "Honeymoon", "Solo"].map((item) => (
            <div
              key={item}
              className="relative aspect-[3/5] group overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
                alt={item}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white font-bold uppercase tracking-[0.2em] text-sm">
                  {item}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-16 bg-black text-white px-12 py-4 text-[11px] uppercase font-bold tracking-widest">
          View More
        </button>
      </section>

      {/* 4. GUIDE TO LUXURY TRAVEL (Image 4) */}
      <section className="py-24 grid md:grid-cols-2 items-center bg-white border-t border-gray-100">
        <div className="p-10 md:p-24 space-y-8">
          <h2 className="font-serif text-[45px] font-bold uppercase leading-none">
            Our Guide to Luxury Travel
          </h2>
          <p className="text-gray-400 text-[11px] uppercase tracking-widest font-bold">
            The Luxury Travel Experts
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Luxury holidays are personal. They mean something different for each
            and every one of us. For some, luxury is hiking in peaceful
            solitude...
          </p>
          <button className="bg-black text-white px-10 py-4 text-[11px] uppercase font-bold tracking-widest">
            Continue Reading
          </button>
        </div>
        <div className="relative h-[650px] shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074"
            alt="Guide"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* 5. EXPLORE OUR TRIPS (Image 5) */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-5xl font-bold uppercase mb-2">
            Explore Our Trips
          </h2>
          <p className="italic text-gray-400 mb-12 text-lg">
            Remarkable experiences to inspire the mind
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <TripCard
              title="Selous to Zanzibar"
              nights="8"
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801"
            />
            <TripCard
              title="Highlights of France"
              nights="10"
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
            />
            <TripCard
              title="Highlights of Italy"
              nights="9"
              src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9"
            />
            <TripCard
              title="Athens & Crete"
              nights="10"
              src="https://images.unsplash.com/photo-1533105079780-92b9be482077"
            />
          </div>
        </div>
      </section>

      {/* 6. PURSUIT OF FEELING (Image 6 with Ghost Text) */}
      <section className="grid md:grid-cols-2 items-center bg-white">
        <div className="relative h-[650px]">
          <Image
            src="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070"
            alt="Feeling"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="text-white/20 text-[10vw] font-bold uppercase select-none">
              Feeling
            </h2>
          </div>
        </div>
        <div className="p-10 md:p-24 space-y-8">
          <h2 className="font-serif text-5xl font-bold uppercase leading-none">
            Pursuit of <br /> Feeling
          </h2>
          <p className="text-gray-600 leading-relaxed italic text-lg">
            "It’s not where you want to go; it’s how you want to feel."
          </p>
          <p className="text-gray-600 leading-relaxed">
            Travel has always been about more than just going 'somewhere else'.
            For us, travel is about feeling somewhere else.
          </p>
          <button className="bg-black text-white px-10 py-3 text-[10px] uppercase font-bold tracking-widest">
            Find Out More
          </button>
        </div>
      </section>

      {/* 7. PRESS LOGOS (Image 7) */}
      <section className="py-24 border-y border-gray-100 flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale px-10">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg"
          alt="CNBC"
          width={90}
          height={40}
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/3/30/Inc._magazine_logo.svg"
          alt="Inc"
          width={90}
          height={40}
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/0/07/Cond%C3%A9_Nast_Traveler_logo.svg"
          alt="Conde"
          width={130}
          height={40}
        />
        <span className="text-2xl font-serif font-bold uppercase tracking-widest">
          Robb Report
        </span>
      </section>

      {/* 8. TESTIMONIALS & TRUSTPILOT (Image 8) */}
      <section className="py-24 text-center px-6 max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl font-bold uppercase mb-10 tracking-widest">
          The Luxury Travel Experts
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto mb-16 text-lg">
          The world is vast, full of wonders. But information engulfs us. See
          this, do that, don't miss this. It seems the more choice there is, the
          more overwhelmed we feel.
        </p>
        <button className="bg-black text-white px-12 py-4 text-[10px] uppercase font-bold tracking-widest mb-24 hover:bg-[#e61e77] transition-colors">
          Get In Touch
        </button>
        <div className="grid md:grid-cols-4 gap-12 text-center">
          <Testimonial
            quote="Trip Planner will change the way you travel"
            author="Micah, Egypt"
          />
          <Testimonial
            quote="A dream come true - from riads to fortress"
            author="Kim, Morocco"
          />
          <Testimonial
            quote="Highly recommend Trip Planner's help in planning"
            author="Susan, Sweden"
          />
          <Testimonial
            quote="Glamping, hiking, icebergs, gourmet food"
            author="Jimmy, Greenland"
          />
        </div>
        <div className="mt-20 flex flex-col items-center">
          <div className="flex text-[#e61e77] text-2xl mb-2">★★★★★</div>
          <span className="text-xs uppercase font-bold tracking-widest">
            Trustpilot
          </span>
        </div>
      </section>

      {/* 9. PUT THE WORLD IN YOUR HANDS (Image 9) */}
      <section className="relative h-screen flex flex-col items-center justify-center text-white text-center">
        <Image
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070"
          alt="Ocean"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 space-y-10">
          <h2 className="font-serif text-5xl md:text-[100px] font-bold uppercase tracking-tighter leading-none">
            Put the world <br /> in your hands
          </h2>
          <button className="border-2 border-white px-12 py-4 text-[11px] uppercase font-bold tracking-[0.4em] backdrop-blur-sm hover:bg-white hover:text-black transition-all">
            Inspire Me
          </button>
          <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-widest font-bold mb-4">
              Scroll
            </span>
            <div className="w-[1px] h-12 bg-white" />
          </div>
        </div>
      </section>

      {/* 10. WHY TRIP PLANNER & FOOTER (Image 10) */}
      <section className="py-24 bg-white text-center">
        <h2 className="font-serif text-[50px] font-bold uppercase mb-20">
          Why Trip Planner?
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 px-6 max-w-7xl mx-auto mb-32">
          <Benefit icon="🏆" text="Award-winning planners" />
          <Benefit icon="💡" text="No-obligation quotes" />
          <Benefit icon="🗺️" text="No planning fees" />
          <Benefit icon="📞" text="24/7 Support" />
          <Benefit icon="HAT" text="Expert private guides" />
        </div>

        {/* Footer CTA */}
        <div className="bg-[#c16d47] py-32 text-white">
          <h2 className="font-serif text-5xl md:text-9xl font-bold uppercase mb-16 tracking-tighter leading-none">
            So, Ready to Start?
          </h2>
          <Link
            href="#"
            className="bg-black text-white px-16 py-5 text-xs uppercase font-bold tracking-[0.4em] hover:scale-105 transition-transform inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}

// Reusable Sub-components
function TripCard({
  title,
  nights,
  src,
}: {
  title: string;
  nights: string;
  src: string;
}) {
  return (
    <div className="group relative aspect-[3/5] overflow-hidden shadow-xl">
      <Image
        src={`${src}?q=80&w=800`}
        alt={title}
        fill
        className="object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
      <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
        <span className="text-[11px] font-bold uppercase tracking-widest self-end text-white/70">
          {nights} Nights
        </span>
        <div className="space-y-4">
          <h3 className="font-serif text-3xl font-bold uppercase leading-tight">
            {title}
          </h3>
          <button className="border-b-2 border-white text-[10px] uppercase font-bold tracking-widest pb-1 hover:text-[#e61e77] hover:border-[#e61e77] transition-all">
            Explore Trip
          </button>
        </div>
      </div>
    </div>
  );
}

function Testimonial({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <span className="text-4xl font-serif text-[#e61e77]">“</span>
      <p className="text-[12px] font-bold uppercase tracking-widest leading-relaxed h-[60px]">
        {quote}
      </p>
      <p className="text-[11px] text-[#e61e77] font-bold">{author}</p>
    </div>
  );
}

function Benefit({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="text-5xl">{icon === "HAT" ? "🎩" : icon}</div>
      <p className="text-[11px] font-bold uppercase tracking-widest max-w-[150px] leading-relaxed">
        {text}
      </p>
    </div>
  );
}
