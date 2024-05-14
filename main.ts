// Upper Case
let personName: string = "Nazia Ahsan"
console.log("uppercase:" , personName.toLocaleUpperCase());


// Lower Case
console.log("lowercase:" , personName.toLowerCase());


// Title Case
console.log("titlecase:" , personName.replace(/\bw/g,c => c.toUpperCase()));