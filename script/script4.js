class Student {
    id;
    firstName;
    lastName;

    average(lessons = []) {
        return
    }
}


var Arian = Student
Arian.id = 1
Arian.firstName = "Arian"
Arian.lastName = "Esmaeili"

console.log(Arian.firstName)
console.log(Arian.lastName)





function calculate() {
    const numberOne = parseFloat(document.querySelector('#inputNumberOne').value)
    const numberTwo = parseFloat(document.querySelector('#inputNumberTwo').value)

    const average = (numberOne + numberTwo) / 2

    const h1Result = document.querySelector('#result')
    h1Result.textContent = average
}