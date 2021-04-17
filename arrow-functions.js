const numbers = [13, 12, 65, 23]

function double(number) {
  return number * 2
}
const doubledNumbers = numbers.map(function (number) {
  return double(number)
})

const triple = number => {
  return number * 3
}
const tripledNumbers = numbers.map(number => {
  return triple(number)
})

const quadruple = number => number * 4
const quadrupledNumbers = numbers.map(number => quadruple(number))
