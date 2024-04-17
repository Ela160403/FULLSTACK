"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function calculateAverageMark(marks) {
    var studentMarks = marks.marks;
    var totalMarks = studentMarks.reduce(function (total, mark) { return total + mark; }, 0);
    return totalMarks / studentMarks.length;
}
function calculateClassAverageMarks(students) {
    var totalMarks = students.reduce(function (total, marks) {
        return total + calculateAverageMark(marks);
    }, 0);
    return totalMarks / students.length;
}
function getStudentMarks() {
    var name = readlineSync.question('Enter student name: ');
    var marks = [];
    for (var i = 0; i < 5; i++) {
        var mark = parseFloat(readlineSync.question("Enter mark ".concat(i + 1, ": ")));
        marks.push(mark);
    }
    return { name: name, marks: marks };
}
function calculateGrade(subjectMarks) {
    var averageMark = calculateAverageMark(subjectMarks);
    if (averageMark >= 90) {
        return 'A';
    }
    else if (averageMark >= 80) {
        return 'B';
    }
    else if (averageMark >= 70) {
        return 'C';
    }
    else if (averageMark >= 60) {
        return 'D';
    }
    else {
        return 'F';
    }
}
var studentsMarks = [];
var continueInput = true;
while (continueInput) {
    var studentMarks = getStudentMarks();
    studentsMarks.push(studentMarks);
    var userInput = readlineSync.question('Do you want to enter marks for another student? (yes/no): ');
    continueInput = userInput.toLowerCase() === 'yes';
}
console.log("Average marks for each student:");
studentsMarks.forEach(function (studentMarks, index) {
    console.log("Student ".concat(index + 1, ":"), calculateAverageMark(studentMarks));
});
console.log("\nClass average mark:", calculateClassAverageMarks(studentsMarks));
