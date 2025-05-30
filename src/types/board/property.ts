import {Space} from "./space";

export interface Property extends Space {
    type: 'property';
    color: ColorGroup;
    price: number;
    rent: RentStructure;
    mortgageValue: number;
    houses: number;
    hotels: number;
  }

  export type ColorGroup = 
    | 'brown'
    | 'light-blue'
    | 'purple'
    | 'orange'
    | 'red'
    | 'yellow'
    | 'green'
    | 'blue' 



export interface RentStructure{
  base: number;
  oneHouse: number;
  twoHouses: number;
  threeHouses: number;
  fourHouses: number;
  hotel: number;
}


