import * as readlineSync from 'readline-sync';

interface Marks { name: string, marks: number[] }

function calculateAverageMark(marks: Marks): number {
    const { marks: studentMarks } = marks;
    const totalMarks = studentMarks.reduce((total, mark) => total + mark, 0);
    return totalMarks / studentMarks.length;
}

function calculateClassAverageMarks(students: Marks[]): number {
    const totalMarks = students.reduce((total, marks) => {
        return total + calculateAverageMark(marks);
    }, 0);
    return totalMarks / students.length;
}

function getStudentMarks(): Marks {
    const name = readlineSync.question('Enter student name: ');
    const marks = [];
    for (let i = 0; i < 5; i++) {
        const mark = parseFloat(readlineSync.question(`Enter mark ${i + 1}: `));
        marks.push(mark);
    }
    return { name, marks };
}

function calculateGrade(subjectMarks: Marks): string {
    const averageMark = calculateAverageMark(subjectMarks);
    if (averageMark >= 90) {
        return 'A';
    } else if (averageMark >= 80) {
        return 'B';
    } else if (averageMark >= 70) {
        return 'C';
    } else if (averageMark >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

const studentsMarks: Marks[] = [];
let continueInput = true;
while (continueInput) {
    const studentMarks = getStudentMarks();
    studentsMarks.push(studentMarks);
    const userInput = readlineSync.question('Do you want to enter marks for another student? (yes/no): ');
    continueInput = userInput.toLowerCase() === 'yes';
}

console.log("Average marks for each student:");
studentsMarks.forEach((studentMarks, index) => {
    console.log(`Student ${index + 1}:`, calculateAverageMark(studentMarks));
});

console.log("\nClass average mark:", calculateClassAverageMarks(studentsMarks));
