function populate(num){
    let entries = [];
    let fNamels = ["Wallace","Emily","Mat","Arron","Alice","Bobby","Beth","Cate","Charly","Dalton","Dina","Erin","Eva","Franklin","Felicia","Gary","Gwen","Henry","Hellen","Isabel","Ivan","Jason","Jen","Karl","Katie","Luis","Lauren","Marty","Monica","Owen","Oliva","Patric","Patricia","Quin","Robert","Rose","Steven","Sara","Terry","Talya","Ustof","Uriel","Vince", "Violet", "Wilma"];
    let lNames = ["Alester", "Boris", "Coleman", "Davidson", "Ericson", "Falmer", "Gamer", "Hall", "Igris", "Jacobson", "Karrison", "Law", "Martin", "Nobody", "Owens", "Perry", "Quiter", "Roberts", "Stencils", "Terance", "Ulfrik", "Vance", "Wallace","Xero"];
    for(let i = 0; i < num; i++){
        let year = Math.floor(Math.random() * 75 + 1940);
        let month = Math.floor(Math.random() * 8)+1;
        let day = Math.floor(Math.random() * 17)+10;
        let bDay = year.toString() + "-0" + month.toString() + "-" + day.toString();
        let height = Math.floor(Math.random() * 48) + 48;
        let weight = Math.floor(Math.random() * 150) + 90;
        let lname = lNames[Math.floor(Math.random() * lNames.length)];
        let x = [i, fNames[Math.floor(Math.random() * fNames.length)], fNames[Math.floor(Math.random() * fNames.length)], lname, lname + i.toString() + "@hawtmail.hot", bDay, "Password", height, weight];
        entries[i] = x;
        console.log(x);
        //addUser(x);
    }
    console.log(entries);
}