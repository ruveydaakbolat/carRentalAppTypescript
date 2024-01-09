import { CarType } from "../types";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b9c62e627amsh1f711f5429861eep17f6dejsnabd624c5e57e",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export async function fetchCars(): Promise<CarType[]> {
    const res = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=civic`, options)

    return await res.json();
}
