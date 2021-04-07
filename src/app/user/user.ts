export class User {
    id: string = ''
    date:  any = ''
    name: string = ''
    nickname: string = ''
    tel:string =  ''

    constructor( { id = '', date = '', name = '', nickname = '', tel = ''}) {
        this.id = id
        this.date = date
        this.name = name
        this.nickname = nickname
        this.tel = tel
    }
}