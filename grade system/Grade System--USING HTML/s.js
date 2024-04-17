// script.ts
var computerScienceStudents = [];
var commerceStudents = [];
function showHomePage() {
    var homePage = document.getElementById('homePage');
    var studentForm = document.getElementById('studentForm');
    var addMarks = document.getElementById('addMarks');
    var classAverage = document.getElementById('classAverage');
    var studentDetails = document.getElementById('studentDetails');
    if (homePage && studentForm && addMarks && classAverage && studentDetails) {
        homePage.style.display = 'block';
        studentForm.style.display = 'none';
        addMarks.style.display = 'none';
        classAverage.style.display = 'none';
        studentDetails.style.display = 'none';
    }
}
function showStudentForm() {
    var homePage = document.getElementById('homePage');
    var studentForm = document.getElementById('studentForm');
    var addMarks = document.getElementById('addMarks');
    var classAverage = document.getElementById('classAverage');
    var studentDetails = document.getElementById('studentDetails');
    if (homePage && studentForm && addMarks && classAverage && studentDetails) {
        homePage.style.display = 'none';
        studentForm.style.display = 'block';
        addMarks.style.display = 'none';
        classAverage.style.display = 'none';
        studentDetails.style.display = 'none';
    }
}
function showStudentDetails(event) {
    event.preventDefault();
    var studentDetailsContent = document.getElementById('studentDetailsContent');
    if (studentDetailsContent) {
        studentDetailsContent.innerHTML = ''; // Clear previous content
        // Loop through Computer Science students
        computerScienceStudents.forEach(function (student) {
            var studentDiv = document.createElement('div');
            studentDiv.classList.add('student');
            studentDiv.innerHTML = "\n          <h3>".concat(student.name, "</h3>\n          <p>Roll Number: ").concat(student.rollNo, "</p>\n          <p>Department: ").concat(student.department, "</p>\n          <p>Marks: ").concat(student.marks.join(', '), "</p>\n          <p>Grade: ").concat(calculateGrade(calculateTotalMarks(student.marks)), "</p>\n      ");
            if (studentDetailsContent)
                studentDetailsContent.appendChild(studentDiv);
        });
        // Loop through Commerce students
        commerceStudents.forEach(function (student) {
            var studentDiv = document.createElement('div');
            studentDiv.classList.add('student');
            studentDiv.innerHTML = "\n          <h3>".concat(student.name, "</h3>\n          <p>Roll Number: ").concat(student.rollNo, "</p>\n          <p>Department: ").concat(student.department, "</p>\n          <p>Marks: ").concat(student.marks.join(', '), "</p>\n          <p>Grade: ").concat(calculateGrade(calculateTotalMarks(student.marks)), "</p>\n      ");
            if (studentDetailsContent)
                studentDetailsContent.appendChild(studentDiv);
        });
        // Show the student details section
        var studentDetails = document.getElementById('studentDetails');
        if (studentDetails)
            studentDetails.style.display = 'block';
    }
}
// Function to add marks for a student
function addMarks(event) {
    event.preventDefault();
    // Get input values
    var rollNo = document.getElementById('rollNo').value;
    var student = findStudent(rollNo);
    if (!student) {
        alert('Student not found!');
        return;
    }
    // Update student marks
    var marks = [];
    var totalMarks = 0;
    for (var i = 1; i <= 5; i++) {
        var mark = parseInt(document.getElementById("subject".concat(i)).value);
        marks.push(mark);
        totalMarks += mark; // Calculate total marks
    }
    student.marks = marks;
    // Calculate the grade based on total marks
    var grade = calculateGrade(totalMarks);
    // Display grade
    var totalMarksElement = document.getElementById('totalMarks');
    if (totalMarksElement)
        totalMarksElement.innerText = "Grade: ".concat(grade);
    // Reset form
    document.getElementById('addMarksForm').reset();
}
// Function to calculate grade
function calculateGrade(totalMarks) {
    if (totalMarks >= 90) {
        return 'A+';
    }
    else if (totalMarks >= 80) {
        return 'A';
    }
    else if (totalMarks >= 70) {
        return 'B';
    }
    else if (totalMarks >= 60) {
        return 'C';
    }
    else if (totalMarks >= 50) {
        return 'D';
    }
    else {
        return 'F';
    }
}
// Function to show the add marks section
function showAddMarks() {
    var homePage = document.getElementById('homePage');
    var studentForm = document.getElementById('studentForm');
    var addMarks = document.getElementById('addMarks');
    var classAverage = document.getElementById('classAverage');
    var studentDetails = document.getElementById('studentDetails');
    if (homePage && studentForm && addMarks && classAverage && studentDetails) {
        homePage.style.display = 'none';
        studentForm.style.display = 'none';
        addMarks.style.display = 'block';
        classAverage.style.display = 'none';
        studentDetails.style.display = 'none';
    }
}
// Function to show the class average section
function showClassAverage() {
    var homePage = document.getElementById('homePage');
    var studentForm = document.getElementById('studentForm');
    var addMarks = document.getElementById('addMarks');
    var classAverage = document.getElementById('classAverage');
    var studentDetails = document.getElementById('studentDetails');
    if (homePage && studentForm && addMarks && classAverage && studentDetails) {
        homePage.style.display = 'none';
        studentForm.style.display = 'none';
        addMarks.style.display = 'none';
        classAverage.style.display = 'block';
        studentDetails.style.display = 'none';
        calculateClassAverage();
    }
}
// Function to add a new student
function addStudent(event) {
    event.preventDefault();
    var name = document.getElementById('studentName').value;
    var rollNo = document.getElementById('studentRollNo').value;
    var department = document.getElementById('department').value;
    if (department === 'Computer Science') {
        computerScienceStudents.push({ name: name, rollNo: rollNo, department: department, marks: [] });
    }
    else {
        commerceStudents.push({ name: name, rollNo: rollNo, department: department, marks: [] });
    }
    document.getElementById('studentDetailsForm').reset();
}
function calculateClassAverage() {
    var computerScienceTotalMarks = computerScienceStudents.reduce(function (acc, student) { return acc + calculateTotalMarks(student.marks); }, 0);
    var commerceTotalMarks = commerceStudents.reduce(function (acc, student) { return acc + calculateTotalMarks(student.marks); }, 0);
    var computerScienceAverage = computerScienceTotalMarks / computerScienceStudents.length;
    var commerceAverage = commerceTotalMarks / commerceStudents.length;
    document.getElementById('computerScienceAverage').innerText = "Computer Science Class Average: ".concat(computerScienceAverage.toFixed(2));
    document.getElementById('commerceAverage').innerText = "Commerce Class Average: ".concat(commerceAverage.toFixed(2));
}
function calculateTotalMarks(marks) {
    return marks.reduce(function (acc, mark) { return acc + mark; }, 0);
}
function goBack() {
    showHomePage();
}
function findStudent(rollNo) {
    var student = computerScienceStudents.find(function (s) { return s.rollNo === rollNo; });
    if (student)
        return student;
    return commerceStudents.find(function (s) { return s.rollNo === rollNo; });
}
