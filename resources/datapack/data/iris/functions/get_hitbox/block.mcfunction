#> iris:get_hitbox/block
#
# Returns a list of surfaces of the current blockg
#
# @within iris:raycast/on_block_found
# @output
#	storage iris:data Shape: compound[]
#       A list of cuboids given by two corners in the format {min: [x, y, z], max: [x, y z]}

execute if block ~ ~ ~ #iris:tree/0 run return run function iris:get_hitbox/block/tree/0
execute if block ~ ~ ~ #iris:tree/1 run return run function iris:get_hitbox/block/tree/1
execute if block ~ ~ ~ #iris:tree/2 run return run function iris:get_hitbox/block/tree/2
execute if block ~ ~ ~ #iris:tree/3 run return run function iris:get_hitbox/block/tree/3
execute if block ~ ~ ~ #iris:tree/4 run return run function iris:get_hitbox/block/tree/4
