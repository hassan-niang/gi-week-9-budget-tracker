let entries = [];
const newEntryBtn = document.querySelector(".new-entry");
// let date = document.querySelector(".input input-date")
// let description = document.querySelector(".input input-description")
// let type = document.querySelector(".input input-type")
// let amount = document.querySelector("input input-amount")
let currentBalence = 0


class Entry {
    constructor(date, description, type, amount) {
        this.date = date;
        this.description = description;
        this.type = type;
        this.amount = Number(amount);
        this.updateCurrentBalance();
    }
    updateCurrentBalance() {
        if (this.type == "Income") {
            currentBalence += this.amount;
        } else {
            currentBalence -= this.amount;
        }
    }
}

newEntryBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let entry = new Entry(document.getElementById("date").value,
        document.getElementById("description").value,
        document.getElementById("type").value,
        document.getElementById("amount").value)
    entries.push(entry);
    console.log(entries);
    displayNew();
    deleteEntryArray();
})


function displayNew() {
    let displayEntries = "<table border = 1 ><tr><td>Date</td><td>Description</td><td>Type</td><td>Amount</td></tr>";
    entries.forEach(entry => {
        displayEntries += "<tr><td>" + entry.date + "</td><td>"
            + entry.description + "</td><td>"
            + entry.type + "</td><td>"
            + entry.amount + "</td><td>"
            + "<button name='delete-entry' onclick='deleteEntryArray'> &#10005 </button></td></tr>";
    });
    displayEntries += "</table>"
    document.getElementById("display-entries").innerHTML = displayEntries;
    document.getElementById("current-balance").innerHTML = "Total : $" + currentBalence;
}

let deleteEntry = document.getElementsByName("delete-entry")
let deletions = []
function deleteEntryArray() {
    deleteEntry.forEach(function (value, i) {
        deletions.push(deleteEntry);
        let delBtnClick = deletions.findIndex((x) => x == 'click');
        console.log("hey " + delBtnClick);
        let del = deletions.toSpliced(1, 1);
    })
}



