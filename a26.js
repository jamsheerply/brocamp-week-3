let s = "1234";

try {
  s = s.split("").reverse().join("");
  console.log(`Reverse: ${s}`);
} catch (error) {
  console.log(error.message);
} finally {
  console.log(`Type: ${typeof s}`);
}
