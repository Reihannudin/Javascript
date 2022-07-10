
 // convert string to number
 const input = "12345"
 const number = Number(input)

console.log(number)

// Number Static Properties
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.NaN)

// Number Static Method
const data = Number("Reihan")

console.log(Number.isInteger(data))
console.log(Number.isNaN(data))


// Number Instance Method
const value = Number("32421")
console.info(value.toString(2))
console.info(value.toLocaleString("id-ID"))
