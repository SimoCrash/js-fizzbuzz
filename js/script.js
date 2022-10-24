const squares = document.querySelector(".squares");

for (let i = 1; i <= 100; i++) {
    if ((i % (3 * 5)) == 0){
        console.log("fizzbuzz");
        squares.innerHTML += `<div class="fizzbuzz"> fizzbuzz </div>`;
    } else if ((i % 5) == 0) {
        console.log("buzz");
        squares.innerHTML += `<div class="buzz"> buzz </div>`
    } else if ((i % 3) == 0){
        console.log("fizz");
        squares.innerHTML += `<div class="fizz"> fizz </div>`;
    } else {
        console.log(i);
        squares.innerHTML += `<div> ${i} </div>`;
    }
}
