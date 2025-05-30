export interface Space {
    position: number;
    name: string;
    type: SpaceType;
    action: SpaceAction;
}

export type SpaceAction = {
  actionType: "default" | "special"
  amount?: number;
  action?: () => void;
}

export type SpaceType = 
  | 'property'           // Buyable property spaces (e.g., Baltic Avenue)
  | 'railroad'           // Railroad spaces (e.g., Reading Railroad)
  | 'utility'            // Utility spaces (e.g., Electric Company)
  | 'chance'             // Chance card draw space
  | 'community-chest'    // Community Chest card draw space
  | 'go'                 // Starting space (collect $200)
  | 'jail'               // Visiting or being in jail
  | 'free-parking'       // Free Parking (often house-ruled)
  | 'go-to-jail'         // Sends player to jail
  | 'tax';               // Tax spaces (e.g., Income Tax)

  