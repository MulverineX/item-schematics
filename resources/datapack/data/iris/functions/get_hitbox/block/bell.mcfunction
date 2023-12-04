execute if block ~ ~ ~ minecraft:bell[attachment=floor, facing=north] run data modify storage iris:data Shape set value [{min: [0.0, 0.0, 0.25], max: [1.0, 1.0, 0.75]}]
execute if block ~ ~ ~ minecraft:bell[attachment=floor, facing=south] run data modify storage iris:data Shape set value [{min: [0.0, 0.0, 0.25], max: [1.0, 1.0, 0.75]}]
execute if block ~ ~ ~ minecraft:bell[attachment=floor, facing=west] run data modify storage iris:data Shape set value [{min: [0.25, 0.0, 0.0], max: [0.75, 1.0, 1.0]}]
execute if block ~ ~ ~ minecraft:bell[attachment=floor, facing=east] run data modify storage iris:data Shape set value [{min: [0.25, 0.0, 0.0], max: [0.75, 1.0, 1.0]}]
execute if block ~ ~ ~ minecraft:bell[attachment=ceiling, facing=north] run data modify storage iris:data Shape set value [{min: [0.25, 0.25, 0.25], max: [0.75, 0.375, 0.75]}, {min: [0.3125, 0.375, 0.3125], max: [0.6875, 0.8125, 0.6875]}, {min: [0.4375, 0.8125, 0.4375], max: [0.5625, 1.0, 0.5625]}]
execute if block ~ ~ ~ minecraft:bell[attachment=ceiling, facing=south] run data modify storage iris:data Shape set value [{min: [0.25, 0.25, 0.25], max: [0.75, 0.375, 0.75]}, {min: [0.3125, 0.375, 0.3125], max: [0.6875, 0.8125, 0.6875]}, {min: [0.4375, 0.8125, 0.4375], max: [0.5625, 1.0, 0.5625]}]
execute if block ~ ~ ~ minecraft:bell[attachment=ceiling, facing=west] run data modify storage iris:data Shape set value [{min: [0.25, 0.25, 0.25], max: [0.75, 0.375, 0.75]}, {min: [0.3125, 0.375, 0.3125], max: [0.6875, 0.8125, 0.6875]}, {min: [0.4375, 0.8125, 0.4375], max: [0.5625, 1.0, 0.5625]}]
execute if block ~ ~ ~ minecraft:bell[attachment=ceiling, facing=east] run data modify storage iris:data Shape set value [{min: [0.25, 0.25, 0.25], max: [0.75, 0.375, 0.75]}, {min: [0.3125, 0.375, 0.3125], max: [0.6875, 0.8125, 0.6875]}, {min: [0.4375, 0.8125, 0.4375], max: [0.5625, 1.0, 0.5625]}]
execute if block ~ ~ ~ minecraft:bell[attachment=single_wall, facing=north] run data modify storage iris:data Shape set value [{min: [0.25, 0.25, 0.25], max: [0.75, 0.375, 0.75]}, {min: [0.3125, 0.375, 0.3125], max: [0.6875, 0.8125, 0.6875]}, {min: [0.4375, 0.8125, 0.0], max: [0.5625, 0.9375, 0.8125]}]
execute if block ~ ~ ~ minecraft:bell[attachment=single_wall, facing=south] run data modify storage iris:data Shape set value [{min: [0.25, 0.25, 0.25], max: [0.75, 0.375, 0.75]}, {min: [0.3125, 0.375, 0.3125], max: [0.6875, 0.8125, 0.6875]}, {min: [0.4375, 0.8125, 0.1875], max: [0.5625, 0.9375, 1.0]}]
execute if block ~ ~ ~ minecraft:bell[attachment=single_wall, facing=west] run data modify storage iris:data Shape set value [{min: [0.25, 0.25, 0.25], max: [0.75, 0.375, 0.75]}, {min: [0.3125, 0.375, 0.3125], max: [0.6875, 0.8125, 0.6875]}, {min: [0.0, 0.8125, 0.4375], max: [0.8125, 0.9375, 0.5625]}]
execute if block ~ ~ ~ minecraft:bell[attachment=single_wall, facing=east] run data modify storage iris:data Shape set value [{min: [0.25, 0.25, 0.25], max: [0.75, 0.375, 0.75]}, {min: [0.3125, 0.375, 0.3125], max: [0.6875, 0.8125, 0.6875]}, {min: [0.1875, 0.8125, 0.4375], max: [1.0, 0.9375, 0.5625]}]
execute if block ~ ~ ~ minecraft:bell[attachment=double_wall, facing=north] run data modify storage iris:data Shape set value [{min: [0.25, 0.25, 0.25], max: [0.75, 0.375, 0.75]}, {min: [0.3125, 0.375, 0.3125], max: [0.6875, 0.8125, 0.6875]}, {min: [0.4375, 0.8125, 0.0], max: [0.5625, 0.9375, 1.0]}]
execute if block ~ ~ ~ minecraft:bell[attachment=double_wall, facing=south] run data modify storage iris:data Shape set value [{min: [0.25, 0.25, 0.25], max: [0.75, 0.375, 0.75]}, {min: [0.3125, 0.375, 0.3125], max: [0.6875, 0.8125, 0.6875]}, {min: [0.4375, 0.8125, 0.0], max: [0.5625, 0.9375, 1.0]}]
execute if block ~ ~ ~ minecraft:bell[attachment=double_wall, facing=west] run data modify storage iris:data Shape set value [{min: [0.25, 0.25, 0.25], max: [0.75, 0.375, 0.75]}, {min: [0.3125, 0.375, 0.3125], max: [0.6875, 0.8125, 0.6875]}, {min: [0.0, 0.8125, 0.4375], max: [1.0, 0.9375, 0.5625]}]
execute if block ~ ~ ~ minecraft:bell[attachment=double_wall, facing=east] run data modify storage iris:data Shape set value [{min: [0.25, 0.25, 0.25], max: [0.75, 0.375, 0.75]}, {min: [0.3125, 0.375, 0.3125], max: [0.6875, 0.8125, 0.6875]}, {min: [0.0, 0.8125, 0.4375], max: [1.0, 0.9375, 0.5625]}]
