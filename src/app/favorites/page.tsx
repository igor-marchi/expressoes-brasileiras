import type { Metadata } from "next";

import { FavoritesList } from "@/components/favorites-list";

export const metadata: Metadata = {
  title: "Favoritas",
};

export default function FavoritesPage() {
  return <FavoritesList />;
}
