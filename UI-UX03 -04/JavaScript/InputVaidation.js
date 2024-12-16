function isName() {

    console.log("in isName function..");
    let form = document.forms["SignUp"];
    let firstName = form.firstName.value;
    //   let lastName = form.lastName.value;
    console.log("value = " + firstName);
    let regx = "^[^-\\s][\\p{L} .'-]+$";
    if (!(firstName.match(regx))) {

        document.getElementById("isName").innerHTML = "FirstName contains only alphabates";

    }

}

function isAge() {
    let form = document.forms["SignUp"];
    let age = form.age.value;
    if (age === "") {
        document.getElementById("isAge").innerHTML = "age is require"
    } else if (isNaN(age)) {
        document.getElementById("isAge").innerHTML = "age in number formate"
    } else if (age < 0) {
        document.getElementById("isAge").innerHTML = "nagative age kabse hone lagi..."
    } else if (age > 0 && age < 18) {
        document.getElementById("isAge").innerHTML = "bhai bada hoja fir anaa.."
    } else if (age > 110) {
        document.getElementById("isAge").innerHTML = "dekho ye abhi jindaa hai"
    } else {
        document.getElementById("isAge").innerHTML = "you can cast vote"
        document.getElementById("isAge").style.color = "green";
    }
}

