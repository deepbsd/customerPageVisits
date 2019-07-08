let fs = require("fs");
const DATAFILE = "./data.csv";

let customerVisits = {};
let customers = process.argv;

fs.readFile(DATAFILE, function(err,buf) {
    
    let data = buf.toString().split("\n");
    data.forEach(function(line){
        let customer = line.split(",")[1]
        if (typeof customer === 'string') customer = customer.trim()
        let page = line.split(",")[2];
        if (typeof page === 'string') page = page.trim();
        if (Object.keys(customerVisits).includes(customer)){
            customerVisits[customer].push(page);
        } else {
            if (typeof customer === 'string') customerVisits[customer] = [page];
        }
    });
    customers.forEach(function(customer){
        let line = customerVisits[customer];
        if (line) console.log(line.join(', ') );
        return '';
    });
});

