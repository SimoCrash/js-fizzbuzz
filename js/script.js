const squares = document.querySelector(".squares");

for (let i = 1; i <= 100; i++) {
    if ((i % (3 * 5)) == 0){
        squares.innerHTML += `<div class="fizzbuzz"> fizzbuzz </div>`;
    } else if ((i % 5) == 0) {
        squares.innerHTML += `<div class="buzz"> buzz </div>`
    } else if ((i % 3) == 0){
        squares.innerHTML += `<div class="fizz"> fizz </div>`;
    } else {
        squares.innerHTML += `<div class="number"> ${i} </div>`;
    }
}
