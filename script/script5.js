class Student {
    firstName
    lastName
    age
    constructor(firstName = '', lastName = '', age = 0) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
}

class Course {
    title
    time
    students
    constructor(title = '', time = new Date(), students = []) {
        this.title = title
        this.time = time
        this.students = students
    }
}

var course = new Course()


function saveCourse() {
    const title = '' + document.querySelector('#courseTitle').value
    const time = '' + document.querySelector('#courseTime').value
    const main = document.querySelector('main');

    course.title = title
    course.time = time

    var briefContainer = `
        <div id="briefContainer">
           <div>${course.title}</div>
           <div>${course.time}</div>
        </div>
        <div id="studentInputContainer">
            <input type="text" placeholder="First name ..." id="firstName">
            <input type="text" placeholder="Last name ..." id="lastName">
            <input type="number" placeholder="Age ..." id="age">
            <button onclick="addStudent()">Add Student</button>
        </div>
    `

    main.innerHTML = briefContainer
}

function addStudent() {
    var firstName = '' + document.querySelector('#firstName').value
    var lastName = '' + document.querySelector('#lastName').value
    var age = parseInt(document.querySelector('#age').value)

    var student = new Student(firstName, lastName, age)

    course.students.push(student)

    showCards()
}

function deleteStudent(index) {
    course.students.splice(index, 1)
    showCards()
}

function showCards() {
    var studentsContainer = document.querySelector('#studentsContainer')

    var cardsArray = ''

    course.students.forEach((student, index) => {
        var card = `
            <div class="card">
                <h2>${student.firstName}</h2>
                <h2>${student.lastName}</h2>
                <h2>${student.age}</h2>
                <button style="color: red" onclick="deleteStudent(${index})">Delete Student</button>
                <button style="color: green">Edit Student</button>
            </div>
        `
        cardsArray = cardsArray + card
    })

    studentsContainer.innerHTML = cardsArray
}