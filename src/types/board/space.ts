export interface Space {
    position: number;
    name: string;
    type: SpaceType;
    action: SpaceAction;
}

export type SpaceType = 
  | 'property'
  | 'railroad'
  | 'utility'
  | 'chance'
  | 'community-chest'
  | 'go'
  | 'jail'
  | 'free-parking'
  | 'go-to-jail'
  | 'tax';

  export type SpaceAction = {
    type: "default" | "special"
    amount?: number;
    action?: () => void;
  }