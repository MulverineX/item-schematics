import { Data, MCFunction, Objective, comment, raw } from 'sandstone'

class Main {
    private readonly loop = MCFunction('main_loop', { runEveryTick: true })

    public readonly playerDB = Data('storage', 'player_db', 'player_db')

    public readonly rootObjective = Objective.create('root', 'dummy')

    add(name: string, callback: () => any) {
        this.loop.push(() => {
            comment(name)
            callback()
            raw('')
        })
    }
}

export const main = new Main()