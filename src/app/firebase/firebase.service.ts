import { Injectable, OnInit } from '@angular/core';

declare let firebase: any

@Injectable({
    providedIn: 'root'
})

export class FirebaseService implements OnInit {

    private config: any
    public firebase: any
    public db: any

    public collection: any = {
        users: 'users',
        person: 'person',
        addresses: "addresses"
    }

    constructor() {

        this.config = {
            apiKey: "AIzaSyAGDALSRE0172rQYScNXtNa68lVI1LqTl4",
            authDomain: "rafaellirioadvogados.firebaseapp.com",
            projectId: "rafaellirioadvogados",
            storageBucket: "rafaellirioadvogados.appspot.com",
            messagingSenderId: "724305065537",
            appId: "1:724305065537:web:f4833c957681ff6a6f78c0",
            measurementId: "G-ECCQ4HH8KV"
        };


        if(firebase.apps.length === 0) { firebase.initializeApp(this.config) }

       
        this.firebase = firebase
        this.db = this.firebase.firestore();

    }

    ngOnInit() { }

    public genId() {
        return this.firebase.database().ref().child('users').push().key;
    }
    public user(data: any = null) {
        return this.db.collection(this.collection.users).add(data)
    }

    public person(data: any = null) {
        return this.db.collection(this.collection.person).add(data)
    }

    public address(data: any = null) {
        return this.db.collection(this.collection.addresses).add(data)
    }

    public users(callback: any) {
        let docs: any = []
        this.db.collection(this.collection.users).get().then((querySnapshot: any)=> {
            querySnapshot.forEach((doc: any) => { docs.push(doc.data()) })
            callback(docs)
        })
    }

    public loadAddress(id: any, callback: any) {
        console.log("load address", id)
        this.db
            .collection(this.collection.addresses)
            .where("id", "==", id)
            .get()
            .then((query: any)=> {
                query.forEach((doc: any)=> {
                    callback(doc.data())
                })
            })
    }

    public loadPerson(id: any, callback: any) {
        console.log("load person", id)
        this.db
            .collection(this.collection.person)
            .where("id", "==", id)
            .get()
            .then((query: any)=> {
                query.forEach((doc: any)=> {
                    callback(doc.data())
                })
            })
    }
}
