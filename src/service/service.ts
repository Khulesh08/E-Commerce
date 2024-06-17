import { Product } from "@/interface/interface";

export const getLocalStorage = (key: any) => {
  try {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch (error) {
    console.error("Error retrieving data from localStorage:", error);
    return null;
  }
};

export const setLocalStorage = (key: any, value : any) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving data to localStorage:", error);
  }
};
