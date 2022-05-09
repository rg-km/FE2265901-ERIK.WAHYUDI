// function countDown(number) {
//     // display the number
//     console.log(number)
//     // recursive call by decreasing number
//     countDown(number + 1)
//   }
  
//   console.log("Countdown Starts:")
//   countDown(3)

// function countDown(number) {
//     if (number > 0) {
//       console.log(number)
//       countDown(number - 1)
//     } else {
//       console.log("Countdown Stops")
//     }
//   }
  
//   console.log("Countdown Starts:")
//   countDown(3)

function factorialCalc(number) {
    if (number === 0 || number === 1) {
        return 1
    }

    if (number < 0) {
        return "Invalid number"
    }

    return number * factorialCalc(number - 1)
}

console.log(factorialCalc(0))
console.log(factorialCalc(5))
console.log(factorialCalc(-1))
console.log(factorialCalc(10))