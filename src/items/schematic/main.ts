import { Data, DataVariable, MCFunction, Macro, Objective, _, execute } from 'sandstone'
import { Block, BlockSet, defaultBlocks } from '@sandstone-mc/block'
import { Storage } from '../../utils.ts'
import { main } from '../main.ts'
import { Condition } from 'sandstone/flow/Flow'

const $ = Macro

export const distance_x = Objective.create('distance_x', 'dummy')('@s')
export const distance_y = Objective.create('distance_y', 'dummy')('@s')
export const distance_z = Objective.create('distance_z', 'dummy')('@s')

export const convert_to_schematic = MCFunction('convert_to_schematic', (l: any, corner_x: Storage, corner_y: Storage, corner_z: Storage) => {
    const air = BlockSet([
        'minecraft:air',
        'minecraft:bubble_column',
        'minecraft:cave_air',
        'minecraft:lava',
        'minecraft:light',
        'minecraft:moving_piston',
        'minecraft:void_air',
        'minecraft:water'
    ] as const)

    const schematic = Data('storage', 'schematic', 'Schematic')

    $.execute.positioned($`${corner_x} ${corner_y} ${corner_z}`).run(() => {
        const block_count = main.rootObjective('block_count')
        const not_max_size = _.not(block_count['<='](10000))

        _.for([0, distance_x], 'iterate', (i, _continue) => {
            schematic.append('[]')
            _.if(not_max_size, () => {
                _.for([0, distance_y], 'iterate', (i, _continue) => {
                    schematic.select('[-1]').append('[]')
                    _.if(not_max_size, () => _.for([0, distance_z], 'iterate', (i, _continue) => {
                        _.if(not_max_size, () => {
                            // TODO: Remove this crap once I release beta 1
                            _.if(_.not(air as unknown as Condition), () => {
                                block_count['+='](1)

                                const block_num = DataVariable(undefined, 'block_num')

                                execute.store.result.storage(block_num.currentTarget, block_num.path, 'int').run(() => defaultBlocks._generateWorldToNum())

                                schematic.select('[-1][-1]').append(block_num)
                            })
                        })
                        execute.positioned('~ ~ ~1').run(_continue)
                    }))
                    execute.positioned('~ ~1 ~').run(_continue)
                })
            })
            execute.positioned('~1 ~ ~').run(_continue)
        })
    })
})