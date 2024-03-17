import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

import { useEffect, useState } from "react";

import { auth, db } from "../firebase";
import { HistoryQuery } from "../pages/History/History";

import { useAuth } from ".";

export const useHistory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const currentUser = auth.currentUser;
  const [queryHistory, setQueryHistory] = useState<HistoryQuery[]>([]);
  const { email } = useAuth();

  useEffect(() => {
    const fetchHistory = () => {
      const user = auth.currentUser;
      if (user) {
        setIsLoading(true);
        const queryHistory = query(
          collection(db, "history"),
          where("userId", "==", user.uid),
        );

        onSnapshot(queryHistory, (coll) => {
          setQueryHistory(
            coll.docs
              .sort((a, b) => b.data().date - a.data().date)
              .map((item) => ({
                id: item.id,
                name: email,
                url: item.data().url,
                date: item.data().date,
              })),
          );
          setIsLoading(false);
        });
      }
    };

    return () => fetchHistory();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const saveHistory = (query: string) => {
    if (currentUser) {
      addDoc(collection(db, "history"), {
        userId: currentUser.uid,
        url: query,
        date: new Date(),
      }).catch((error) => alert(error));
    }
  };

  const deleteHistory = (id: string) => {
    if (currentUser) {
      deleteDoc(doc(db, "history", id)).catch((error) => alert(error));
    }
  };

  return { saveHistory, deleteHistory, queryHistory, isLoading };
};
