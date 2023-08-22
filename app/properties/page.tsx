import EmptyState from "../components/common/EmptyState";
import ClientOnly from "../components/common/ClientOnly";
import TripsClient from "../components/trips/TripsClient";

import getCurrentUser from "../actions/getCurrentUser";
import getListings from "../actions/getListings";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState
          title="Unauthorised"
          subtitle="Please login to view properties."
        />
      </ClientOnly>
    );
  }

  const listings = await getListings({
    userId: currentUser?.id,
  });

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No properties found"
          subtitle="Looks like you have no properties."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <PropertiesClient reservations={reservations} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default PropertiesPage;
