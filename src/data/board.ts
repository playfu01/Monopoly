// src/data/board.ts
import { Space, SpaceType } from '../types/board/space';
import { RentStructure, ColorGroup, Property } from '../types/board/property';
import { CardSpaces, FreeParkingSpace, GoSpace, GoToJailSpace, JailSpace, TaxSpace } from '../types/board/special';

const boardLength = 40;

// Type definitions
interface PropertyConfig {
    name: string;
    position: number;
    color: ColorGroup;
    price: number;
    rent: RentStructure;
    mortgageValue: number;
}

interface SpecialConfig {
    name: string;
    position: number;
    type: SpaceType;
    action: {
        actionType: 'default' | 'special';
        amount?: number;
        action?: string;
    };
}

interface UtilityConfig {
    name : string;
    position: number;
}

interface RailRoadConfig{
    name: string;
    position: number;
}

type BoardConfig = {
    properties: PropertyConfig[];
    specials: SpecialConfig[];
    railroads: RailRoadConfig[];
    utilities: UtilityConfig[];
}

import boardConfig from './board.json';
import propertiesConfig from './properties.json';
import specialsConfig from './specials.json';
const railRoadConfig = boardConfig.railroads;
const utilityConfig = boardConfig.utilities;

function isValidColor(color: string): color is ColorGroup {
    return ['brown', 'light-blue', 'purple', 'orange', 'red', 'yellow', 'green', 'blue'].includes(color);
}

// Helper functions
function createProperty(config: PropertyConfig): Property {
    if (!isValidColor(config.color)) {
        throw new Error(`Invalid color: ${config.color}. Must be one of: brown, light-blue, purple, orange, red, yellow, green, blue`);
    }
    return {
        ...config,
        type: "property",
        houses: 0,
        hotels: 0,
        action: {
            actionType: 'default'
        }
    };
}

function createUtitlity(config: UtilityConfig): Space{
    return{
        ...config,
        type: "utility",
        action: {
            actionType: 'default'
        }
    }

}

function createRailRoad(config: RailRoadConfig): Space{
    return{
        ...config,
        type: "railroad",
        action: {
            actionType: 'default'
        }
    }
}

function createSpecial(config: SpecialConfig): CardSpaces | FreeParkingSpace | GoSpace | JailSpace | GoToJailSpace | TaxSpace {
    switch (config.type) {
        case 'chance':
        case 'community-chest':
            return {
                ...config,
                type: config.type, // Preserve the literal type
                action: {
                    actionType: 'special',
                    action: () => {}
                }
            };
        case 'tax':
            return {
                ...config,
                type: 'tax',
                action: {
                    actionType: 'default',
                    amount: config.action.amount ? config.action.amount : 0
                }
            };
        case 'go':
            return {
                ...config,
                type: 'go',
                action: {
                    actionType: 'default',
                    amount: config.action.amount ? config.action.amount : 0
                }
            };
        case 'jail':
            return {
                ...config,
                type: 'jail',
                action: {
                    actionType: 'special',
                    action: () => {}
                }
            };
        case 'go-to-jail':
            return {
                ...config,
                type: 'go-to-jail',
                action: {
                    actionType: 'special',
                    action: () => {}
                }
            };
        default:
            throw new Error(`Unknown special space type: ${config.type}`);
    }
}

// Main board loading function
export function loadBoard(): Space[] {
    
    // Create a map to store spaces by position
    const spaces = new Map<number, Space>();

    // Add properties
    (propertiesConfig as PropertyConfig[]).forEach(propConfig => {
        const property = createProperty(propConfig);
        spaces.set(property.position, property);
    });

    // Add special spaces
    (specialsConfig as SpecialConfig[]).forEach(specialConfig => {
        const special = createSpecial(specialConfig);
        spaces.set(special.position, special);
    });

    // Add railroads
    (railRoadConfig as RailRoadConfig[]).forEach(railRoadConfig => {
        const railroad = createRailRoad(railRoadConfig);
        spaces.set(railroad.position, railroad);
    });

     // Add utilities
    (utilityConfig as UtilityConfig[]).forEach(utilityConfig => {
        const utility = createUtitlity(utilityConfig);
        spaces.set(utility.position, utility);
    });


    // Validate positions
    const positions = Array.from(spaces.keys());
    if (positions.length !== boardLength) {
        throw new Error(`Board must have exactly 40 spaces, found ${positions.length}`);
    }
    if (new Set(positions).size !== boardLength) {
        throw new Error('Duplicate positions found on board');
    }

    // Convert map to array and sort by position
    return Array.from(spaces.values()).sort((a, b) => a.position - b.position);
}