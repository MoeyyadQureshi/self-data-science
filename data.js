var app = require("electron").remote
var fs = require("fs")
var dialog = app.dialog

/*  Function takes in a list of x y coordinates seperated by spaces.
    Returns an array with a dictionary of x and y arrays for Plotly to consume.
*/
function formatData(data){
    var xy = data.split('\n')
    var x = []
    var y = []
    xy.forEach((element) => {
        var coordinates = element.split(' ')
        x.push(coordinates[0])
        y.push(coordinates[1])
    })

    return [{
        x: x,
        y: y
    }]
}


//Reads in data from file and displays it using Plotly
var data = fs.readFileSync("dummy.txt").toString()
var graph = document.getElementById("data-viz")
Plotly.newPlot(graph, formatData(data))


//Adds new data to file and updates graph accordingly
document.getElementById("data-update").onclick = () => {
    data = data + '\n' + document.getElementById("data-entry").value 
    fs.writeFile("dummy.txt", data)
    Plotly.newPlot(graph, formatData(data))
}
