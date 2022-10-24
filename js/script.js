const squares = document.querySelector(".squares");

for (let i = 1; i <= 100; i++) {
    if ((i % (3 * 5)) == 0){
        squares.innerHTML += `<div> fizzbuzz </div>`;
    } else if ((i % 5) == 0) {
        squares.innerHTML += `<div> buzz </div>`
    } else if ((i % 3) == 0){
        squares.innerHTML += `<div> fizz </div>`;
    } else {
        squares.innerHTML += `<div> ${i} </div>`;
    }
}
