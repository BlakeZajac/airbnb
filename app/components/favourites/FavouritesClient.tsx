"use client";

import { SafeListing, SafeUser } from "@/app/types";
import Container from "../common/Container";
import Heading from "../common/Heading";
import ListingCard from "../listings/ListingCard";

interface FavouritesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const FavouritesClient: React.FC<FavouritesClientProps> = ({
  listings,
  currentUser,
}) => {
  return (
    <Container>
      <Heading
        title="Favourites"
        subtitle="List of experiences you have favourited!"
      />

      <div
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
      lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8"
      >
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            currentUser={currentUser}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
};

export default FavouritesClient;
