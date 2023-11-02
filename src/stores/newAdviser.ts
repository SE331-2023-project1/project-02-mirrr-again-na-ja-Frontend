import type { AdviserItem } from "@/type";
import { defineStore } from "pinia";

export const useAdviserStore = defineStore("advisert", {
  state: () => ({
    temporaryAdviser: [] as AdviserItem[],
    professer: null as AdviserItem | null
  }),
  actions: {
    addTemporaryAdviser(adviser: AdviserItem) {
      this.temporaryAdviser.unshift(adviser);
    },
    getTemporaryAdviser() {
      return this.temporaryAdviser;
    },
    clearTemporaryAdviser() {
      this.temporaryAdviser = [];
    },
    setAdviser(professer: AdviserItem ){
      this.professer = professer
  }
  },
});
