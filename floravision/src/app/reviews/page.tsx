import ReviewCard from "@/src/components/Reviewcard";
import SectionHeading from "@/src/components/sectionHeading";

const reviews = [
  {
    name: "Shelly Russel",
    rating: 5,
    quote: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
    avatar: "/plants/avatar_3.png"
  },
  {
    name: "Lula Rolfson",
    rating: 5,
    quote: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
    avatar: "/plants/avatar_2.png"
  },
  {
    name: "Carol Huels",
    rating: 5,
    quote: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
    avatar: "/plants/avatar_1.png"
  }
];

export default function ReviewsPage() {
  return (
    <section className="py-16 bg-bg-primary min-h-screen">
      <div className="container mx-auto px-8">
        <SectionHeading>Customer Review</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}
