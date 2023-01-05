
const fizz = (number) => {
    if (number % 3 !== 0 && number % 5 !== 0) {
        return number
    }
    else if (number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz'
    }
    else if (number % 3 === 0) {
        return 'Fizz'
    }
    else if (number % 5 === 0) {
        return 'Buzz'
    }

}
for (let i = 0; i <= 100; i++) {
    console.log(i, fizz(i));
}