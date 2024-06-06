var num = 152;
var temp = num;
var r = 0;
var sum = 0;


while (temp != 0) {

    r = temp % 10;
    sum += r * r * r;
    temp = parseInt(temp / 10);

}

console.log(sum);

if (sum == num) {

    console.log('this is armstrong no.');

} else {

    console.log('this is not armstrong no.');

}