import { item } from 'sandstone'
import { smithed_item, trueN } from '../../utils.ts'

export const give_schematic = () => item.replace.entity('@s', 'weapon.offhand').with('paper', {
    display: { Name: '"Schematic"' },
    schematic: trueN,
    Enchantments: [{ id: 'sharpness', lvl: 1 }],
    ...smithed_item
}, 1)