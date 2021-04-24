export class User {

    public uid: string = ''
    public birthday: any = ''
    public name: string = ''
    public nickname: string = ''
    public tel: string =  ''
    public email: string = ''

    constructor({ uid = '', birthday = '', name = '', nickname = '', email = '', tel = ''}) { 
        this.uid = uid
        this.birthday = birthday
        this.name = name
        this.nickname = nickname
        this.email = email
        this.tel = tel
    }
}