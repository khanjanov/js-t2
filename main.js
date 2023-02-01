// 5 defe ad
// let a = "Karim";
// for (let i = 0; i < 5; i++) {
//   console.log(a);
// }

// 5 defe input ad
// let a = prompt("enter your name");
// for (let i = 0; i < 5; i++) {
//   console.log(a);
// }

// input eded qeder input ad
// let a = prompt("enter your name");
// let b = prompt("enter a number");
// for (let i = 0; i < b; i++) {
//   console.log(a);
// }

// 1den inputa qeder cut
// let a = +prompt("enter a number");
// for (let i = 1; i < a; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// 5 eded, - topla, + vur
// let sum = 0;
// let multply = 1;
// let b;
// for (let i = 0; i < 5; i++) {
//   let a = +prompt("enter a number");
//   b = a;
//   a > 0 ? (multply *= b) : (sum += b);
// }
// console.log(
//   `negative's sum = ${sum} and positive's multiplication = ${multply}`
// );

// 5 fenn ortalama
// let sum = 0;
// for (let i = 0; i < 5; i++) {
//   let a = +prompt("enter a score");
//   a <= 100 ? (sum += a) : alert("score can't be over 100");
// }
// let final = sum / 5;
// if (final > 90 && final <= 100) {
//   console.log(`final result is A (${final})`);
// } else if (final <= 90 && final > 80) {
//   console.log(`final result is B (${final})`);
// } else if (final <= 80 && final > 70) {
//   console.log(`final result is C (${final})`);
// } else if (final <= 70 && final > 60) {
//   console.log(`final result is D (${final})`);
// } else if (final <= 60 && final > 50) {
//   console.log(`final result is E (${final})`);
// } else {
//   console.log(`failed (${final}) `);
// }

// // 7-ye qeder 1 12 so on...
// let a = "";
// for (let i = 1; i <= 7; i++) {
//   for (let k = 1; k <= i; k++) {
//     a += k + " ";
//   }
//   a += "\n";
// }
// console.log(a);

// 5 row 4 column *
let a = "";
for (let i = 0; i < 5; i++) {
  for (let k = 0; k < 4; k++) {
    a += "* ";
  }
  a += "\n";
}
console.log(a);
