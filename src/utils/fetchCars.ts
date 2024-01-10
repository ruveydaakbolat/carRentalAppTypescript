import { CarType, FilterType } from "../types";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b9c62e627amsh1f711f5429861eep17f6dejsnabd624c5e57e",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export async function fetchCars(filters: FilterType): Promise<CarType[]> {
  // url'de parametrelerin olmama durumunda undefined olmaması için varsayılan değerler belirlendi
  const { make = 'honda', model = '', limit = '5', year = '', fuel_type = '' } = filters;
  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&limit=${limit}&year=${year}&fuel_type=${fuel_type}`,
    options
  );

  return await res.json();
}
