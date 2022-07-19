import { ref, set } from "firebase/database";
import { DiaperState } from "../diaper/types";
import { v4 as uuidv4 } from "uuid";
import { database } from "./init";

export const logDiaperState = async (userId: string, state: DiaperState) => {
  const id = uuidv4();
  try {
    await set(ref(database, "users/" + userId + "/diapers/history/" + id), {
      state,
      createdAt: Date.now(),
    });
  } catch (e) {
    console.error(e);
  }
};
