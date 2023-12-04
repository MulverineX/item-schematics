import { Data, DataVariable, MCFunction, Macro, Objective, Selector, Trigger, _, execute, functionCmd, sandstonePack, tellraw } from 'sandstone'
import { main } from '../main.ts'
import { convert_to_schematic, give_schematic } from '../index.ts'

const $ = Macro

sandstonePack.loadTags.load.push('iris:setup/load')

main.add('tool', () => {
    const use_tool = Objective.create('use_tool', 'minecraft.used:minecraft.carrot_on_a_stick')

    execute.as(Selector('@a', { scores: { [`${use_tool}`]: [1, null] } })).at('@s').run(() => {
        use_tool('@s')['='](0)

        const UUID = DataVariable(Data('entity', '@s', 'UUID'))

        const selectionState = Objective.create('selection_state', 'dummy')('@s')

        const selection = Data('storage', 'iris:output', 'TargetedBlock')

        MCFunction('use_tool', [UUID], () => {
            _.if(selectionState['!='](2), () => functionCmd('iris:get_target'))

            _.if(selectionState['=='](0), () => $.data.modify.storage('player_db', $`player_db."${UUID}".Corner`)
                .set.from.storage(selection))

            _.if(selectionState['=='](0), () => {
                selectionState['+='](1)
                tellraw('@s', ['Selected the first corner, ', selection ,', of the region.'])
            })
            _.if(selectionState['=='](1), () => {
                selectionState['+='](1)
                tellraw('@s', [
                    'Selected second corner, ', selection, ', of the region. ',
                    { text: '[Click to Save]', bold: true, color: 'green', clickEvent: {
                        action: 'run_command',
                        value: `trigger ${Trigger('save_schematic', MCFunction('save_selection', [UUID], () => {
                            give_schematic()

                            const corner = Data('storage', 'player_db', $`player_db."${UUID}".Corner`)

                            convert_to_schematic(
                                corner.select('[0]'),
                                corner.select('[1]'),
                                corner.select('[2]')
                            )

                            selectionState['='](0)
                        }))}`
                    }},
                    ' (Right click again to clear selection)']
                )
            })
            _.if(selectionState['=='](2), () => $.data.modify.storage('player_db', $`player_db."${UUID}".Corner`).set.value({}))
            _.if(selectionState['=='](2), () => {
                selectionState['='](0)
                tellraw('@s', 'Cleared selection.')
            })
        })()
    })
})