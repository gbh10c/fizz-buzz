let input = prompt("Type a positive number:");
for (let i = 1; i <= input; i++) {
    let output = "";
    if (i % 3 == 0) output += 'Fizz';
    if (i % 5 == 0) output += 'Buzz';
    console.log (output || i);
}
