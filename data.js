var app = require("electron").remote
var fs = require("fs")
var dialog = app.dialog

document.getElementById("data-submit").onclick = () => {
    dialog.showSaveDialog((filename) => {
        if (filename === undefined){
            alert("You didn't save the file")
            return
        }

        // TODO: create/update save file without asking user to choose save location
        var content = document.getElementById("data-entry").value
        fs.writeFile(filename, content, (err) => {
            if (err) console.log(err)
            alert("The file has been succesfully saved")
        })
    })
}

