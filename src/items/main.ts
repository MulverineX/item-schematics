import { Data, MCFunction, comment, raw } from 'sandstone'

class Main {
    private loop = MCFunction('main_loop', { runEveryTick: true })

    public playerDB = Data('storage', 'player_db', 'player_db')

    add(name: string, callback: () => any) {
        this.loop.push(() => {
            comment(name)
            callback()
            raw('')
        })
    }
}

export const main = new Main()