import type { DatapackConfig, ResourcePackConfig, SandstoneConfig } from 'sandstone'

export default {
  name: 'item-schematics',
  packs: {
    datapack: {
      description: [ 'A ', { text: 'Sandstone', color: 'gold' }, ' datapack.' ],
      packFormat: 19,
    } as DatapackConfig,
    resourcepack: {
      description: [ 'A ', { text: 'Sandstone', color: 'gold' }, ' resource pack.' ],
      packFormat: 18,
    } as ResourcePackConfig
  },
  onConflict: {
    default: 'warn',
  },
  namespace: 'item_schematics',
  packUid: 'X2zRNsbl',
  mcmeta: 'latest',
  saveOptions: { clientPath: '/home/mulverine/.var/app/org.prismlauncher.PrismLauncher/data/PrismLauncher/instances/23w41a/.minecraft', world: 'Sandstone Testing' },
} as SandstoneConfig
