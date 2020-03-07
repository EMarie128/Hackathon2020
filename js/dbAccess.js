//Hi I'm DB stuff
import { createConnection } from './mysql';

var con = createConnection({
    host: "localhost",
    user: "root",
    password: "toor"
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected bitch");
});