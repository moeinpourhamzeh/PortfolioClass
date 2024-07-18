function calculate() {
    const numberOne = parseFloat(document.querySelector('#inputNumberOne').value)
    const numberTwo = parseFloat(document.querySelector('#inputNumberTwo').value)

    const average = (numberOne + numberTwo) / 2

    const h1Result = document.querySelector('#result')
    h1Result.textContent = average
}




// ============== Object Oriented Programming =========================================
class Student {
    id;
    firstName;
    lastName;

    average(lessons = []) {
        return
    }
}

class Course {
    id;
    title;
    time;
    students;
    constructor(id, title, time, students) {
        this.id = id
        this.title = title
        this.time = time
        this.students = students
    }
}


var Arian = Student
Arian.id = 1
Arian.firstName = "Arian"
Arian.lastName = "Esmaeili"

console.log(Arian.firstName)
console.log(Arian.lastName)

var htmlClass = new Course(0, 'html class', new Date(), [Arian])

console.log(htmlClass)