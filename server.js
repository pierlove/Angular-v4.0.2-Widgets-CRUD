let express = require("express");
let app = express();

const path = require("path");

let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public/dist'));

let morgan = require("morgan");
app.use(morgan('dev'));

// Widget
// public id: number = (Math.floor(Math.random()*6)+1),
// public name: string = "",
// public description: string = "",
// public price: number = 0,
// public qty: number = 0,
// public editable: boolean = false,
// public created_at: Date = new Date(),
// public updated_at: Date = new Date()

var widgets = [];

// Create
app.post('/widgets', (req, res, next)=>{
    widgets.push(req.body);
    return res.json(true);
})

// Read All
app.get('/widgets', (req, res, next)=>{
    return res.json(widgets);
})

// Update
app.put('/widgets/:id', (req, res, next)=>{
    for(let i=0; i<widgets.length; i++){
        if (widgets[i].id == req.params.id){
            req.body.editable = false;
            widgets[i] = req.body;
            return res.json(widgets[i]);
        }
    }
    return res.send(false);
})

// Destroy
app.delete('/widgets', (req, res, next)=>{
    const idx = widgets.indexOf(req.body.widget)
    widgets.splice(idx,1);
    return res.json(true);
})
app.listen(1337);