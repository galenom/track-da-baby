import { ref, set, child, get } from "firebase/database";
import { DiaperState } from "../diaper/types";
import { v4 as uuidv4 } from "uuid";
import { database } from "./init";

export const logDiaperState = async (userId: string, state: DiaperState) => {
  const id = uuidv4();
  try {
    await set(ref(database, `users/${userId}/diapers/history/${id}`), {
      id,
      state,
      createdAt: Date.now(),
    });
  } catch (e) {
    console.error(e);
  }
};

export const getLastDiaper = async (userId: string) => {
  try {
    const dbRef = ref(database);
    const snapshot = await get(
      child(dbRef, `users/${userId}/diapers/history/`)
    );
    if (snapshot.exists()) {
      const history: Record<string, any> = snapshot.val();
      const historySortedDesc = Object.values(history).sort((a, b) => {
        const dateA: any = new Date(a.createdAt);
        const dateB: any = new Date(b.createdAt);
        return dateB - dateA;
      });

      if (historySortedDesc.length > 0) {
        return historySortedDesc[0];
      }
    }

    return null;
  } catch (e) {
    console.error(e);
  }
};
