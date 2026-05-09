import PlantCard from "@/src/components/Plantcard";
import SectionHeading from "@/src/components/sectionHeading";

const topSellingPlants = [
  {
    name: "Aglaonema plant",
    description: "The Aglaonema plant, commonly known as Chinese Evergreen, is famous for its attractive foliage and ease of care.",
    price: "Rs. 300/-",
    image: "/plants/aglaonema.png"
  },
  {
    name: "Plantain Lilies",
    description: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes and sizes.",
    price: "Rs. 380/-",
    image: "/plants/hosta.png"
  },
  {
    name: "Cactus",
    description: "Cacti are known for their ability to thrive in arid environments and their unique architectural forms.",
    price: "Rs. 259/-",
    image: "/plants/cactus.png"
  },
  {
    name: "Swiss Cheese Plant",
    description: "A popular tropical houseplant known for its distinctive perforated leaves and striking appearance.",
    price: "Rs. 400/-",
    image: "/plants/monstera.png"
  },
  {
    name: "Sansevieria plant",
    description: "Commonly known as the Snake Plant, it is a hardy and air-purifying plant with tall, upright leaves.",
    price: "Rs. 450/-",
    image: "/plants/sansevieria.png"
  },
  {
    name: "Agave plant",
    description: "The Agave plant is known for its striking rosette of thick, fleshy leaves and sculptural presence.",
    price: "Rs. 359/-",
    image: "/plants/agave.png"
  }
];

export default function TopSellingPage() {
  return (
    <section className="py-16 bg-bg-primary min-h-screen">
      <div className="container mx-auto px-8">
        <SectionHeading>Our Top Selling Plants</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topSellingPlants.map((plant, index) => (
            <PlantCard key={index} {...plant} />
          ))}
        </div>
      </div>
    </section>
  );
}
