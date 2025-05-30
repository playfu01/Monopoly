import { Space, SpaceType } from '../types/board/space';
import { RentStructure, ColorGroup } from '../types/board/property';
import { CardSpaces } from '../types/board/special';





export const BOARD_CONFIG: Space[] = [
    {
        position: 0,
        name: 'Go',
        type: 'go',
        action: {
            actionType: 'default',
            amount: 200
        }
    },


]
