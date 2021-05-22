import { User } from './User'
import { FirebaseService } from '../firebase/firebase.service'

export class UserFactory extends User {

    public constructor({
        uid = '',
        name = '',
        nickname = '',
        email = '',
        tel = 0
    }) {
        
        if(uid.length < 10) {
            let firebase = new FirebaseService
            uid = firebase.getId()
        }

        super(uid, name, nickname, email, tel)

    }
}