"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var students = [];
function addStudent() {
    var name = readlineSync.question("Enter student name: ");
    var rollNo = readlineSync.question("Enter roll number: ");
    var course = readlineSync.question("Enter course (Computer Science / Commerce): ");
    students.push({ name: name, rollNo: rollNo, course: course, marks: [] });
    console.log("Student details added successfully.");
}
function enterMarks() {
    var rollNo = readlineSync.question("Enter roll number: ");
    var student = students.find(function (s) { return s.rollNo === rollNo; });
    if (!student) {
        console.log("Student not found.");
        return;
    }
    console.log("Enter marks for ".concat(student.name, " (").concat(student.course, "):"));
    var subjects = getSubjects(student.course);
    subjects.forEach(function (subject) {
        var marks = readlineSync.questionInt("Enter marks for ".concat(subject, ": "));
        student.marks.push({ subject: subject, marks: marks });
    });
    console.log("Marks entered successfully.");
}
function calculateMaxMarks(student) {
    var maxMarks = 0;
    student.marks.forEach(function (subject) {
        if (subject.marks > maxMarks) {
            maxMarks = subject.marks;
        }
    });
    return maxMarks;
}
function getClassAverage(course) {
    var totalStudents = students.filter(function (s) { return s.course === course; }).length;
    if (totalStudents === 0) {
        return 0;
    }
    var subjects = getSubjects(course);
    var totalMarks = 0;
    students.forEach(function (student) {
        if (student.course === course) {
            student.marks.forEach(function (subject) {
                totalMarks += subject.marks;
            });
        }
    });
    return totalMarks / (subjects.length * totalStudents);
}
function viewClassAverage() {
    var course = readlineSync.question("Enter course (Computer Science / Commerce): ");
    var classAverage = getClassAverage(course);
    if (classAverage === 0) {
        console.log("No students found for the entered course.");
        return;
    }
    console.log("Class average for ".concat(course, ": ").concat(classAverage.toFixed(2)));
}
function viewStudentInfo() {
    var rollNo = readlineSync.question("Enter roll number: ");
    var student = students.find(function (s) { return s.rollNo === rollNo; });
    if (!student) {
        console.log("Student not found.");
        return;
    }
    console.log("Student Information:");
    console.log("Name: ".concat(student.name));
    console.log("Roll Number: ".concat(student.rollNo));
    console.log("Course: ".concat(student.course));
    console.log("Marks:");
    student.marks.forEach(function (subject) {
        console.log("".concat(subject.subject, ": ").concat(subject.marks));
    });
    console.log("Total Marks: ".concat(calculateMaxMarks(student)));
}
function getSubjects(course) {
    switch (course.toLowerCase()) {
        case 'computer science':
            return ['Java', 'Python', 'CSS', 'HTML'];
        case 'commerce':
            return ['Business Maths', 'Tamil', 'English', 'Computer Application'];
        default:
            return [];
    }
}
function displayMenu() {
    console.log("Grading System:");
    console.log("1. Add Student Details");
    console.log("2. Enter Marks");
    console.log("3. View Class Average");
    console.log("4. View Student Information");
    console.log("5. Exit");
}
function main() {
    var choice;
    do {
        displayMenu();
        choice = readlineSync.questionInt("Please enter your choice: ");
        switch (choice) {
            case 1:
                addStudent();
                break;
            case 2:
                enterMarks();
                break;
            case 3:
                viewClassAverage();
                break;
            case 4:
                viewStudentInfo();
                break;
            case 5:
                console.log("Exiting program...");
                break;
            default:
                console.log("Invalid choice.");
        }
        if (choice !== 5) {
            readlineSync.question("Press Enter to continue...");
        }
    } while (choice !== 5);
}
main();
