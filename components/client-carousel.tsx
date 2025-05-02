// components/ClientCarousel.tsx
import Image from "next/image";
import React from "react";

interface Client {
  src: string;
  alt: string;
}

interface ClientCarouselProps {
  clients: Client[];
}

const ClientCarousel: React.FC<ClientCarouselProps> = ({ clients }) => {
  // Duplicate clients for seamless looping
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="flex gap-8 animate-scroll">
        {duplicatedClients.map((client, index) => (
          <div
            key={`${client.alt}-${index}`}
            className="flex-shrink-0 flex h-32 w-40 items-center justify-center rounded-lg bg-gray-50 p-4 shadow-sm transition-all hover:shadow-md"
          >
            <div className="relative w-full h-full">
              <Image
                src={client.src}
                alt={client.alt}
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 100px, 160px"
              />
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll-left 40s linear infinite;
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default ClientCarousel;