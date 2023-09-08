import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, model, year, fuel, limit } = filters;

  const headers = {
		'X-RapidAPI-Key': '1aa928ca55msh4b9f8fad2c39cdap1db477jsnae6a256a8725',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&fuel_type=${fuel}&year=${year}&limit=${limit}`,{
    headers: headers, 
  });

  const data = await response.json();

  return data;
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, year, model } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");

  url.searchParams.append('make',make);
  url.searchParams.append('modelFamily',model.split(' ')[0]);
  url.searchParams.append('zoomType',"fullscreen");
  url.searchParams.append('modelYear',`${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
}


export const calculateCarRent = (city_mpg: number, year: number) => {

  const bestPricePerDay = 50;

  const mileageFactor = 0.1;

  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerPrice = bestPricePerDay + mileageRate + ageRate;

  return rentalRatePerPrice.toFixed(0);
}

export const updateSearchParams= (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname; 
}