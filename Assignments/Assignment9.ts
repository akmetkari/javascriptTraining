let number = 5;
for (let i = 1; i <= number; i++) {
  let row = "";
  // Add spaces for alignment
  for (let k = 1; k <= number - i; k++) {
    row += " ";
  }
  // Add stars
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  // Print the complete row to the console
  console.log(row);
}
