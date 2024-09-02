const myobj = [
    {
    "name": "Vivek",
    "age": 22,
    "projects": {
        "p1": "color changer",
        "p2": "Todo App"
        }
    },
    {
    "name": "Karan",
    "age": 22,
    "projects": {
        "p1": "K1",
        "p2": "K2"
        }   
    },
]

myobj.forEach(element => {
    for (const key in element) {
        if (Object.prototype.hasOwnProperty.call(element, key)) {
            const myele = element[key];
            console.log(key +" : "+ JSON.stringify(myele,null,2))
        }
    }
});









