import EmptyState from "../components/emptyState/EmptyState";
import ClientOnly from "../components/clientOnly/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getFavoritesListings from "../actions/getFavoritesListings";
import FavoritesClient from "./FavoritesClient";

const FavoritesPage = async () => {
  const favorites = await getFavoritesListings();
  const currentUser = await getCurrentUser();

  if (favorites.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you haven no favorites listings yet!"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient favorites={favorites} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default FavoritesPage;
