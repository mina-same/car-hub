import { MouseEventHandler } from "react";


type Result = {
  pageid: string;
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
};

type SearchResult = {
  query?: {
    pages?: Result[];
  };
};


export interface CustomButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  isDisabled?: boolean;
  rightIcon?: string;
};

export interface CustomFilterProps {
  title: string;
  options: OptionsProps[];
};

export interface OptionsProps {
  title: string;
  value: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) =>  void;
};

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number; 
}

export interface FilterProps {
  manufacturer: string;
  model?: string;
  year?: number;
  fuel?: string;
  limit?: number;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface ShowMoreProps {
  pageNumber: number,
  isNext: boolean;
}
