import { Space, SpaceType, SpaceAction } from "./space";

export interface GoSpace extends Space{
    type: "go";
    action:{
        type: "default"
        amount: number;
    };
    
}

export interface JailSpace extends Space{
    type: "jail";
    action:{
        type: "special"
        action: () => void;
    }
}

export interface FreeParkingSpace extends Space{
    type: "free-parking";
    action:{
        type: "default"
    }
}

export interface GoToJailSpace extends Space{
    type: "go-to-jail";
    action:{
        type: "special"
        action: () => void;
    }
}

export interface TaxSpace extends Space{
    type: "tax";
    action:{
        type: "default"
        amount: number
    }
}

export interface CardSpaces extends Space{
    type: "chance" | "community-chest";
    action:{
        type: "special"
        action: () => void;
    }
}

