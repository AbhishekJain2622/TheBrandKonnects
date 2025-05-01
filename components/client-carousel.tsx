// components/ClientCarousel.tsx
import Image from "next/image";
import React from "react";

interface Client {
  name: string;
  logo: string;
}

interface ClientCarouselProps {
  clients: Client[];
}

const ClientCarousel: React.FC<ClientCarouselProps> = ({ clients }) => {
  const duplicatedClients = [...clients, ...clients]; // for seamless scroll

  return (
    <div className="relative w-full overflow-hidden py-8 bg-white">
      <div className="animate-scroll flex w-max gap-8">
        {duplicatedClients.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex h-24 w-32 items-center justify-center rounded-lg bg-white p-4 shadow-md"
          >
            <div className="relative h-20 w-20">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientCarousel;
