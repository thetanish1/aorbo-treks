import React from 'react';
import { motion } from 'framer-motion';

interface Review {
  name: string;
  location: string;
  trek: string;
  rating: number;
  quote: string;
}

const reviews: Review[] = [
  {
    name: 'Arjun Mehta',
    location: 'Mumbai, Maharashtra',
    trek: 'Kedarkantha Summit',
    rating: 5,
    quote:
      'Absolutely life-changing experience! The snow-covered trails and breathtaking sunrise at the summit were beyond anything I ever imagined. TrekNest made booking so effortless.',
  },
  {
    name: 'Priya Nair',
    location: 'Bangalore, Karnataka',
    trek: 'Chopta Tungnath',
    rating: 5,
    quote:
      'The organiser was incredibly professional and the campsite arrangements were top-notch. I felt safe throughout. Would recommend TrekNest to every adventure lover out there.',
  },
  {
    name: 'Rahul Verma',
    location: 'Delhi, NCR',
    trek: 'Triund Trek',
    rating: 4,
    quote:
      'Great value for money and a seamless booking process. The views from Triund were absolutely jaw-dropping. The team was supportive and the trail well-guided from start to finish.',
  },
  {
    name: 'Sneha Kapoor',
    location: 'Pune, Maharashtra',
    trek: 'Sandakphu Phalut',
    rating: 5,
    quote:
      'Seeing Everest, Kanchenjunga, and Lhotse together from Sandakphu was surreal. TrekNest connected me with a stellar organiser who knew every corner of the trail deeply.',
  },
  {
    name: 'Vikram Singh',
    location: 'Hyderabad, Telangana',
    trek: 'Hampta Pass Crossing',
    rating: 5,
    quote:
      'The dramatic landscape change from Kullu to Spiti via Hampta Pass left me speechless. Booking through TrekNest was smooth — instant confirmation and detailed packing checklist included.',
  },
  {
    name: 'Ananya Reddy',
    location: 'Chennai, Tamil Nadu',
    trek: 'Valley of Flowers',
    rating: 4,
    quote:
      "A magical riot of colour unlike anything I had seen before. The UNESCO World Heritage trail was pristine and the guide from TrekNest's partner was both knowledgeable and caring.",
  },
  {
    name: 'Karthik Iyer',
    location: 'Coimbatore, Tamil Nadu',
    trek: 'Kuari Pass Trek',
    rating: 5,
    quote:
      "Spectacular views of Nanda Devi and Dronagiri made every steep climb worth it. TrekNest's platform gave me transparent pricing and I got exactly what was promised — no surprises.",
  },
  {
    name: 'Deepika Joshi',
    location: 'Ahmedabad, Gujarat',
    trek: 'Roopkund Lake Trek',
    rating: 5,
    quote:
      'Standing beside the mysterious skeleton lake at 5,000 metres was surreal and humbling. The organiser ensured safety at every high-altitude camp, and the food was surprisingly excellent.',
  },
  {
    name: 'Suresh Babu',
    location: 'Vijayawada, Andhra Pradesh',
    trek: 'Kudremukh Trek',
    rating: 4,
    quote:
      'The lush shola forests and rolling grasslands of Kudremukh were a refreshing change from the Himalayas. Easy online booking and a WhatsApp update system made coordination stress-free.',
  },
  {
    name: 'Meera Pillai',
    location: 'Kochi, Kerala',
    trek: 'Bali Pass Trek',
    rating: 5,
    quote:
      'One of the most remote and rewarding treks I have done. The TrekNest verified organiser handled logistics like a pro. I will definitely be booking my next Himalayan adventure here again.',
  },
  {
    name: 'Aditya Sharma',
    location: 'Jaipur, Rajasthan',
    trek: 'Pin Bhaba Pass',
    rating: 5,
    quote:
      'Crossing from Kinnaur to Spiti through the high-altitude Pin Bhaba Pass was a dream come true. TrekNest provided all the safety briefings and emergency contacts upfront — real peace of mind.',
  },
  {
    name: 'Ritu Gupta',
    location: 'Lucknow, Uttar Pradesh',
    trek: 'Har Ki Dun Valley',
    rating: 4,
    quote:
      'The ancient Har Ki Dun valley felt like stepping into mythology. The organiser was warm and the homestay meals were delicious. TrekNest is my go-to platform for all trek bookings now.',
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-slate-200'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <div className="bg-white rounded-xl shadow-soft border border-slate-100 p-5 mb-4 flex flex-col gap-3">
    <StarRating rating={review.rating} />
    <p className="text-sm text-slate-700 leading-relaxed">"{review.quote}"</p>
    <div className="flex items-center justify-between flex-wrap gap-2 mt-auto">
      <div>
        <p className="text-sm font-semibold text-slate-900">{review.name}</p>
        <p className="text-xs text-slate-400">{review.location}</p>
      </div>
      <span className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
        {review.trek}
      </span>
    </div>
  </div>
);

const col1 = reviews.slice(0, 6);
const col2 = reviews.slice(6, 12);

const keyframesStyle = `
@keyframes scrollUp {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}
`;

const MarqueeColumn: React.FC<{ items: Review[]; duration: string }> = ({ items, duration }) => (
  <div className="relative overflow-hidden flex-1">
    <div
      className="hover:[animation-play-state:paused]"
      style={{
        animation: `scrollUp ${duration} linear infinite`,
        animationPlayState: 'running',
      }}
    >
      {/* Doubled for seamless loop */}
      {[...items, ...items].map((review, idx) => (
        <ReviewCard key={`${review.name}-${idx}`} review={review} />
      ))}
    </div>
  </div>
);

export const ReviewsMarquee: React.FC = () => {
  return (
    <>
      <style>{keyframesStyle}</style>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mt-12"
      >
        <div className="relative overflow-hidden" style={{ maxHeight: '640px' }}>
          {/* Top fade */}
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 z-10 bg-gradient-to-b from-surface-alt to-transparent" />
          {/* Bottom fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 z-10 bg-gradient-to-t from-surface-alt to-transparent" />

          <div className="flex gap-5 overflow-hidden" style={{ maxHeight: '640px' }}>
            <MarqueeColumn items={col1} duration="32s" />
            <MarqueeColumn items={col2} duration="26s" />
          </div>
        </div>
      </motion.div>
    </>
  );
};
