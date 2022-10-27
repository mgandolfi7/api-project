const express = require("express");
const app = express();
const PORT = 8000;

const persons = {
    "michael": {
        "age": 24,
        "birthName": "Michael Gandolfi",
        "birthLocation": "New Orleas, LA"
    },
    "heidi": {
        "age": 59,
        "birtNname": "Heidi Porter",
        "birthLocation": "Baltimore, MD"
    },
    "steve": {
        "age": 63,
        "birthName": "Stephen Gandolfi",
        "birthLocation": "New York, NY"
    },
    "dylan": {
        "age": 29,
        "birthName": "Dylan",
        "birthLocation": "Dylan"
    }
};

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.get("/api/:personName", (req, res) => {
    const personsName = req.params.personName.toLowerCase()
    if(persons[personsName]) {
        res.json(persons[personsName])
    } else {
        res.json(persons["dylan"])
    }
});
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}.`);
});

