export class User {
    
    constructor(
        public uid: string, 
        public name: string, 
        public nickname: string, 
        public email: string, 
        public tel: number
    ) { 

    }

    public id(uid: string = ""): string {
        if(uid.length > 10) { this.uid = uid }
        return this.uid
    }

    public getName(): string {
        return this.name
    }

    public setName(name: string): string {
        return this.name = name
    }

    public getNickname(): string {
        return this.nickname
    }

    public setNickname(nickname: string): string {
        return this.nickname = nickname
    }

    public getTel(): number {
        return this.tel
    }
    
    public setTel(tel: number): number {
        return this.tel = tel
    }

    public getEmial(): string {
        return this.email
    }
    
    public setEmail(email: string): string {
        return this.email = email
    }

}