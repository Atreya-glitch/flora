import Image from "next/image";

interface ReviewCardProps {
  name: string;
  rating: number;
  quote: string;
  avatar: string;
}

const ReviewCard = ({ name, rating, quote, avatar }: ReviewCardProps) => {
  return (
    <div className="bg-bg-card border border-white/5 rounded-xl p-8 flex flex-col h-full">
      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10">
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-sans font-semibold text-white">{name}</h4>
          <div className="flex gap-0.5 mt-1" aria-label={`Rating: ${rating} out of 5 stars`}>
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill={i < rating ? "#e8e8d8" : "none"}
                stroke="#e8e8d8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className="text-text-secondary font-sans leading-relaxed">
        {quote}
      </p>
    </div>
  );
};

export default ReviewCard;
