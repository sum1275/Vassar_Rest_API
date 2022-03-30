import { v4 as uuidv4 } from 'uuid';
import csv from 'csvtojson'
import fs from 'fs'

const csvFilePath='./data.csv'

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    let data = [];
    for (let i=0; i<jsonObj.length; i++) {
        data.push({
            "uuid" : uuidv4(),
            "LAT": jsonObj[i]['LAT'],
            "LONG": jsonObj[i]['LONG'],
            "VALUE": jsonObj[i]['VALUE']
        })
    }
    return data
})
.then((data)=>{
    // console.log(data);
    fs.writeFile("data_uuid.json",JSON.stringify(data), function(err) {
        if (err) {
            console.log(err);
        }
    });
})

