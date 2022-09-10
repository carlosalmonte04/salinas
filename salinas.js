/**
 * name: salinas
 * author: Carlos Almonte
 * description: This is a small compression algorithm of HEX to HEX.
 */

let zeroes = [];
let nonZeroes = [];
let beginComp = false;

const sample = "0x010007cf5dab000000000000000000000000000000000000000000000000000000000000000052100009839000000000038298300002"

sample
  .split("")
  .map((char, i, arr) => {
    if (i <= 1) return char; // To keep the leading 0x

    if (char === "0") {
      if (!beginComp) {
        zeroes.push(i);
        beginComp = true;
      }
    } else {
      if (beginComp) {
        nonZeroes.push(i);
        beginComp = false;
      };
    } 
    return char;
  });

let original = sample.slice();
let compressed = [];

zeroes.forEach((zero, i, arr) => {
  const nonZero = nonZeroes[i];

  if (i === 0) {
   compressed.push(`${c.slice(0, zero).join("")}+${nonZero - zero}^`);
  } else {
    compressed.push(`${c.slice(nonZero, zeroes[i + 1]).join("")}+${nonZero - zero}^`)
  };
});
