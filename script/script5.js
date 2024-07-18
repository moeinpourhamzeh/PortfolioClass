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

    course.title = title
    course.time = time

    console.log(course)
}