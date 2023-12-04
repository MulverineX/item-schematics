import { MCFunction, Macro } from 'sandstone'
import { Storage } from '../../utils.ts'

const $ = Macro

export const convert_to_schematic = MCFunction('convert_to_schematic', (_: any, cornerX: Storage, cornerY: Storage, cornerZ: Storage) => {
    $.execute.positioned($`${cornerX} ${cornerY} ${cornerZ}`).run(() => {
        
    })
})