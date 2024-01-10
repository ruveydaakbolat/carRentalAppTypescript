import { MouseEventHandler } from "react"; // mouse olaylarında çalışan fonksiyonların tipi

// Gelen propların tipini tanımlama
export type ButtonPropsType = {
  title: string;
  designs?: string;
  btnType?: "button" | "submit" | "reset"; // hem union types hem de string literal kullanıldı
  disabled?: boolean;
  rIcon?: string; 
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

// Api'dan gelen araba verisinin tipi
export interface CarType {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: "fwd" | "rwd" | "awd" | "4wd";
  fuel_type: "gas" | "electricity" | "diesel";
  highway_mpg: number;
  make: string;
  model: string;
  transmission: "a" | "m";
  year: number;
};

// url'deki paramların tipi
export type FilterType = {
  make?: string;
  model?: string;
  limit?: string;
  fuel_type?: string;
  year?: string;
}
