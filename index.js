import express from 'express'
import csv from 'csvtojson'
import fs from 'fs'

const app = express()
const port = 3000

function GetData(id) {
    let rawdata = fs.readFileSync('./data_uuid.json');
    let data = JSON.parse(rawdata);

    var searchField = "uuid";
    var searchVal = id;

    for (let i=0; i<data.length; i++) {
        let x = data[i];
        if (x[searchField] == searchVal){
            return [{"LAT": x['LAT'], "LONG": x['LONG'], "VALUE": x['VALUE']}, 200];
        }
    }

    return [{"error": "Not Found"}, 404];
}

app.get('/', (req, res) => {
    let data = GetData(req.query.id)
    res.send(data[0], data[1])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})