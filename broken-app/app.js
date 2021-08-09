const express = require('express');
let axios = require('axios');
var app = express();



app.get('/', function(req, res, next) {
  console.log(req)
  try {
    let results = req.body.developers.map(async d => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));
    

    return res.send(JSON.stringify(out));
  } catch(err) {
    console.log(err)
    next();
  }
});
 
app.get('/'), function(req,res){
  res.send("yay")
}

app.listen(3000, function(){
  console.log("app starting on port 3000")
})
