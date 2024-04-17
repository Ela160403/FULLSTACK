import * as readlineSync from 'readline-sync';

interface SubjectMarks {
    subject: string;
    marks: number;
}

interface Student {
    name: string;
    rollNo: string;
    course: string;
    marks: SubjectMarks[];
}

const students: Student[] = [];

function addStudent(): void {
    const name = readlineSync.question("Enter student name: ");
    const rollNo = readlineSync.question("Enter roll number: ");
    const course = readlineSync.question("Enter course (Computer Science / Commerce): ");
    students.push({ name, rollNo, course, marks: [] });
    console.log("Student details added successfully.");
}

function enterMarks(): void {
    const rollNo = readlineSync.question("Enter roll number: ");
    const student = students.find(s => s.rollNo === rollNo);
    if (!student) {
        console.log("Student not found.");
        return;
    }

    console.log(`Enter marks for ${student.name} (${student.course}):`);
    const subjects = getSubjects(student.course);
    subjects.forEach(subject => {
        const marks = readlineSync.questionInt(`Enter marks for ${subject}: `);
        student.marks.push({ subject, marks });
    });
    console.log("Marks entered successfully.");
}

function calculateMaxMarks(student: Student): number {
    let maxMarks = 0;
    student.marks.forEach(subject => {
        if (subject.marks > maxMarks) {
            maxMarks = subject.marks;
        }
    });
    return maxMarks;
}

function getClassAverage(course: string): number {
    const totalStudents = students.filter(s => s.course === course).length;
    if (totalStudents === 0) {
        return 0;
    }

    const subjects = getSubjects(course);
    let totalMarks = 0;
    students.forEach(student => {
        if (student.course === course) {
            student.marks.forEach(subject => {
                totalMarks += subject.marks;
            });
        }
    });
    return totalMarks / (subjects.length * totalStudents);
}

function viewClassAverage(): void {
    const course = readlineSync.question("Enter course (Computer Science / Commerce): ");
    const classAverage = getClassAverage(course);
    if (classAverage === 0) {
        console.log("No students found for the entered course.");
        return;
    }
    console.log(`Class average for ${course}: ${classAverage.toFixed(2)}`);
}

function viewStudentInfo(): void {
    const rollNo = readlineSync.question("Enter roll number: ");
    const student = students.find(s => s.rollNo === rollNo);
    if (!student) {
        console.log("Student not found.");
        return;
    }

    console.log(`Student Information:`);
    console.log(`Name: ${student.name}`);
    console.log(`Roll Number: ${student.rollNo}`);
    console.log(`Course: ${student.course}`);
    console.log(`Marks:`);
    student.marks.forEach(subject => {
        console.log(`${subject.subject}: ${subject.marks}`);
    });
    console.log(`Total Marks: ${calculateMaxMarks(student)}`);
}

function getSubjects(course: string): string[] {
    switch (course.toLowerCase()) {
        case 'computer science':
            return ['Java', 'Python', 'CSS', 'HTML'];
        case 'commerce':
            return ['Business Maths', 'Tamil', 'English', 'Computer Application'];
        default:
            return [];
    }
}

function displayMenu(): void {
    console.log("Grading System:");
    console.log("1. Add Student Details");
    console.log("2. Enter Marks");
    console.log("3. View Class Average");
    console.log("4. View Student Information");
    console.log("5. Exit");
}

function main(): void {
    let choice: number;

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