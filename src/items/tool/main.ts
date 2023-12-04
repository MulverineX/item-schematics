import { Data, DataVariable, MCFunction, Macro, Objective, Selector, Trigger, Variable, _, execute, functionCmd, sandstonePack, tellraw } from 'sandstone'
import { main } from '../main.ts'
import { convert_to_schematic, distance_x, distance_y, distance_z, give_schematic } from '../index.ts'

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

            _.if(selectionState['=='](0), () => main.playerDB.select($`"${UUID}"`, 'Corner').set(selection))

            _.if(selectionState['=='](0), () => _.return.run(() => { 
                selectionState['+='](1)
                tellraw('@s', ['Selected the first corner, ', selection ,', of the region.'])
            }))
            // Only use one Macro
            const corner = DataVariable()
            _.if(selectionState['=='](1), () => corner.set(main.playerDB.select($`"${UUID}"`, 'Corner')))

            _.if(selectionState['=='](1), () => _.return.run(() => {
                selectionState['+='](1)

                const [x1, y1, z1] = [
                    Variable(corner.select('[0]')),
                    Variable(corner.select('[1]')),
                    Variable(corner.select('[2]'))
                ]
                const [x2, y2, z2] = [
                    Variable(selection.select('[0]')),
                    Variable(selection.select('[1]')),
                    Variable(selection.select('[2]'))
                ]
                distance_x['='](x2['-'](x1))
                distance_y['='](y2['-'](y1))
                distance_z['='](z2['-'](z1))

                tellraw('@s', [
                    'Selected second corner, ', selection, ', of the region. ',
                    { text: '[Click to Save]', bold: true, color: 'green', clickEvent: {
                        action: 'run_command',
                        value: `trigger ${Trigger('save_schematic', MCFunction('save_selection', [UUID], () => {
                            give_schematic()

                            // This will not run in sync, so we need to set this again in-case another player uses the tool
                            const currentCorner = corner.set(main.playerDB.select($`"${UUID}"`, 'Corner'))

                            convert_to_schematic(
                                currentCorner.select('[0]'),
                                currentCorner.select('[1]'),
                                currentCorner.select('[2]')
                            )

                            selectionState['='](0)
                        }))}`
                    }},
                    ' (Right click again to clear selection)']
                )
            }))
            _.if(selectionState['=='](2), () => main.playerDB.select($`"${UUID}"`, 'Corner').set({}))
            _.if(selectionState['=='](2), () => {
                selectionState['='](0)
                tellraw('@s', 'Cleared selection.')
            })
        })()
    })
})