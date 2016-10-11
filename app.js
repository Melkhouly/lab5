const app = require('express')();
const fs = require('fs');
const path=require("path");

    app.set('view engine', 'ejs');
    app.set('trust proxy', true);
    app.set('x-powered-by', false);
    app.enable('case sensitive routing');
    app.set('strict routing', true);

app.get("/inventors", function(request, response){

    const invPath = path.join(__dirname,'/inventors.json');

    const inventors = JSON.parse(fs.readFileSync(invPath, 'utf8'));
    response.render(__dirname+'/home.ejs', {title:'Inventors', inventors:inventors});
});

app.listen(4000);
console.log("The Server is running");
