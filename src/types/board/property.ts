import { Space, SpaceType, SpaceAction } from "./space";

export interface Property extends Space {
    type: 'property';
    color: ColorGroup;
    price: number;
    rent: RentStructure;
    mortgageValue: number;
    houses: number;
    hotels: number;
  }

export type ColorGroup=
    | "brown" 



export interface RentStructure{

}


