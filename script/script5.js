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
    const title = document.querySelector('#courseTitle').value
    const time = document.querySelector('#courseTime').value
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
            <button>Add Student</button>
        </div>
    `

    main.innerHTML = briefContainer
}

function AddStudent() {

}