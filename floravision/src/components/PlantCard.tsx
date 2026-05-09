import Image from "next/image";

interface PlantCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

const PlantCard = ({ name, description, price, image }: PlantCardProps) => {
  return (
    <div className="bg-bg-card border border-white/5 rounded-xl p-6 flex flex-col h-full hover:border-white/10 transition-all duration-300">
      <div className="relative aspect-square w-full mb-6">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-sans font-semibold text-white mb-2">{name}</h3>
        <p className="text-sm text-text-secondary font-sans leading-relaxed mb-6">
          {description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-sans font-medium text-white">{price}</span>
          <button aria-label={`Add ${name} to cart`} className="p-3 border border-white/20 rounded-xl hover:bg-white/10 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
