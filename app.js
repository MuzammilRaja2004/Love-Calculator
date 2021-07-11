function lovepercent() {

    var name = document.getElementById('name').value;
    var lname = document.getElementById('lname').value;

    if (name == "") {
        alert("Required Enter Your Name Field")
    }
    else if (name.length <= 2) {
        alert("Required 3 Later")
    }
    else if (!isNaN(name)) {
        alert("You Can't Write Number")
    }

    else if (lname == "") {
        alert("Required Enter Your Partner Name Field")
    }
    else if (lname.length <= 2) {
        alert("Required 3 Later")
    }
    else if (!isNaN(lname)) {
        alert("You Can't Write Number")
    }
    else {
        var lovers = Math.random() * 100;
        lovers = Math.floor(lovers);
        document.getElementById('lover-percent').value = lovers + "%"
    }



}