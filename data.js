var app = require("electron").remote
var fs = require("fs")
var dialog = app.dialog

document.getElementById("data-submit").onclick = () => {
    var content = document.getElementById("data-entry").value
    fs.writeFile("dummy.txt", content, (err) => {
        if (err) console.log(err)
        alert("The file has been succesfully saved")
    })
}

document.getElementById("data-retrieve").onclick = () => {
    fs.readFile("dummy.txt", "utf-8", (err, data) => {
        if (err) {
            console.log(err)
            return
        }

        var textbox = document.getElementById("data-entry")
        textbox.value = data
    })
}

