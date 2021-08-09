const fs = require('fs');
const express = require('express');
const axios = require('axios');
const app = express()
const process = require('process')

let filename = process.argv[2];
fs.readFile(filename, 'utf8', function (err, data) {
    if (err){
        process.kill(1);
        throw err;
    } 
    console.log('OK: ' + filename);
    console.log(data)
    data = data.split(/\r?\n/)
    console.log(data)
    write(data)
});

let index = 0;
function write(data) {

    try {
        data.forEach(async function (url) {
            if (url) {
                await axios.get(url)
                    .then(htmlResp => {
                        console.log("The URL is " + htmlResp.config.url)
                        
                        fs.writeFile(index + ".txt", htmlResp.data, err => {
                            if (err) {
                                console.log("The file failed to write with..." + err);
                                process.kill(1);
                            }

                            console.log("sucess")
                            index++
                        })
                    }).catch(err => { console.error("axios failed with error:" + err.message) })
            } else {
                console.log("That one was not valid..")
            }






        })




    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}




