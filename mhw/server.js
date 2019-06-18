const express = require("express");
const PORT = 8080;

const app = express();
const armorURL = "https://mhw-db.com/armor/sets";
const weaponURL = "https://mhw-db.com/weapons"
const request = require('request');
const armorArr = [];

app.get('/armor', (req, res) =>{{
    request(armorURL, (err, response, body)=>{
        if(armorArr.length > 0){
            return res.json(armorArr)
        }
        if(err){
            console.log(err);
        }
        const data = JSON.parse(body)
        for(let key in data){
            armorArr.push(data[key])
        }
        console.log(armorArr);
    })
}} )
app.get('/weapon', (req, res) =>{{
    request(weaponURL, (err, response, body)=>{
        if(err){
            console.log(err);
        }
        const data = JSON.parse(body)
        console.log(data);
    })
}} )



app.listen(PORT, ()=>{
    console.log("Port Running")
})