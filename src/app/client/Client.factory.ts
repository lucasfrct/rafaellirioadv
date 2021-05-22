import { Client } from './Client'

export class ClientFactory extends Client {

    public constructor({ uid = ''}){
        super({uid: uid})
    }
}