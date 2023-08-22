import ClientOnly from "../components/common/ClientOnly";
import EmptyState from "../components/common/EmptyState";
import FavouritesClient from "../components/favourites/FavouritesClient";

import getCurrentUser from "../actions/getCurrentUser";
import getFavouriteListings from "../actions/getFavouriteListings";

const ListingPage = async () => {
  const listings = await getFavouriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favourites found"
          subtitle="Looks like you haven't favourited any properties yet."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavouritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default ListingPage;
