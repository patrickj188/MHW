class ArmorService {
    constructor(){
        this.armor =[];
        // this.url = 'https://mugenmonkey.com/api/v0/ds3_weapons'
        this.url = 'http://localhost:8080/armor'
    }
    getAll(cb){
        fetch(this.url, {
            mode: 'cors',
        })
        .then(res => res.json())
        .then(body => {
            console.log(body)

            cb(body)
        })
    }
}

export default new ArmorService();