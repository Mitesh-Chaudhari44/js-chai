// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ", a);
}

console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    console.log(website);
    two()
}
one()

if (true) {
    const username = "mitesh"
    if (username == "mitesh") {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);

}
// console.log(username);


console.log(addOne(5));
function addOne(num) {
    return num + 1
}

addtwo(5)
const addtwo = function (num) {
    return num + 2
}

