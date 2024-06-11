
// 1 =
function emp(id, name , salary){
    this.id=id;
    this.name=name;
    this.salary=salary;
}

var e = new emp(2, 'Vijay', 40000);
document.write(e.id + " " + e.name + " " + e.salary);

// 2 =
var emp1 = new Object();

emp1.id=3;
emp1.name='Ajay';
emp1.salary=50000;

document.write('<br>' + emp1.id + " " + emp1.name + " " + emp1.salary);

// 3 = 

var emp2 = {"id":3, "name":"Sanjay", "salary":6000};

document.write("<br>" + emp2.id + " " + emp2.name + " " + emp2.salary);

for (const x in emp2) {

    document.getElementById("demo").innerHTML += emp2[x] + '<br>';
   
}
