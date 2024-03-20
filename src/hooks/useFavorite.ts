import {
  arrayRemove,
  arrayUnion,
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

import { auth, db } from "../firebase";

interface Favorite {
  id: number;
}

export const useFavorite = (characterId?: number | null) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState<Favorite[]>([]);
  const currentUser = auth.currentUser;

  useEffect(() => {
    const fetchFavorite = () => {
      if (currentUser) {
        setIsLoading(true);
        onSnapshot(doc(db, "favorite", currentUser!.uid), (collection) => {
          const heroes = collection.data();
          if (heroes && heroes.isFavorite) {
            setIsFavorite(
              heroes.isFavorite.some(
                (item: Favorite) => item.id === characterId,
              ),
            );
            setCharacters(heroes.isFavorite);
          }
          setIsLoading(false);
        });
      }
    };
    return fetchFavorite();
  }, [currentUser, setIsFavorite, characterId]);

  const toggleFavorite = () => {
    if (currentUser) {
      const favoriteRef = doc(db, "favorite", currentUser.uid);
      setDoc(favoriteRef, {}, { merge: true });

      const character = {
        id: characterId,
      };

      updateDoc(favoriteRef, {
        isFavorite: isFavorite ? arrayRemove(character) : arrayUnion(character),
      });

      setIsFavorite(!isFavorite);
    }
  };
  return { toggleFavorite, isFavorite, isLoading, characters };
};
