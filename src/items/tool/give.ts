import { Selector, Trigger, _, give, tellraw } from 'sandstone'
import { smithed_item, trueN } from '../../utils.ts'

Trigger('give_schematic_tool', () => {
    _.if(Selector('@s', { gamemode: 'creative' }), () => {
        give('@s', 'carrot_on_a_stick', {
            display: { Name: '"Schematic Tool"' },
            schematic_tool: trueN,
            ...smithed_item
        }, 1)
    }).else(() => {
        tellraw('@s', {
            text: 'You must be in creative mode to use world tools!',
            color: 'red'
        })
    })
})