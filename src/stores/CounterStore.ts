// src/store/CounterStore.ts
import { makeAutoObservable } from "mobx";

class CounterStore {
  count: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
    this.saveState();
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
      this.saveState();
    }
  }

  reset() {
    this.count = 0;
    this.saveState();
  }

  saveState() {
    if (typeof window !== "undefined") {
      localStorage.setItem("counterStore", JSON.stringify(this.count));
    }
  }

  loadState() {
    if (typeof window !== "undefined") {
      const savedState = localStorage.getItem("counterStore");
      if (savedState) {
        this.count = JSON.parse(savedState);
      }
    }
  }
}

const counterStore = new CounterStore();
export default counterStore;
