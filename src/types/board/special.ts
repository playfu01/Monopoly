import {Space} from "./space";

export interface GoSpace extends Space{
    type: "go";
    action:{
        actionType: "default"
        amount: number;
    };
    
}

export interface JailSpace extends Space{
    type: "jail";
    action:{
        actionType: "special"
        action: () => void;
    }
}

export interface FreeParkingSpace extends Space{
    type: "free-parking";
    action:{
        actionType: "special";
        action: () => Promise<void>
    }
    collectedFunds: number;
}

export interface GoToJailSpace extends Space{
    type: "go-to-jail";
    action:{
        actionType: "special"
        action: () => void;
    }
}

export interface TaxSpace extends Space{
    type: "tax";
    action:{
        actionType: "default"
        amount: number
    }
}

export interface CardSpaces extends Space{
    type: "chance" | "community-chest";
    action:{
        actionType: "special"
        action: () => void;
    }
}

