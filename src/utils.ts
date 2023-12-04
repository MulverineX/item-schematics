import { RootNBT } from "sandstone/arguments/index"
import { DataPointClass, NBT } from "sandstone/variables/index"

export const trueN = NBT.byte(1)

export const smithed_item = {
    smithed: {ignore: {
        functionality: trueN,
        crafting: trueN
    }}
} as RootNBT

export type Storage = DataPointClass<'storage'>