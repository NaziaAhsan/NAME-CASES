// Upper Case
var personName = "Nazia Ahsan";
console.log("uppercase:", personName.toLocaleUpperCase());
// Lower Case
console.log("lowercase:", personName.toLowerCase());
// Title Case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
