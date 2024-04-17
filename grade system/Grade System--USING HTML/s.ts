// script.ts

interface Student {
  name: string;
  rollNo: string;
  department: string;
  marks: number[];
}

let computerScienceStudents: Student[] = [];
let commerceStudents: Student[] = [];

function showHomePage() {
  const homePage = document.getElementById('homePage');
  const studentForm = document.getElementById('studentForm');
  const addMarks = document.getElementById('addMarks');
  const classAverage = document.getElementById('classAverage');
  const studentDetails = document.getElementById('studentDetails');

  if (homePage && studentForm && addMarks && classAverage && studentDetails) {
    homePage.style.display = 'block';
    studentForm.style.display = 'none';
    addMarks.style.display = 'none';
    classAverage.style.display = 'none';
    studentDetails.style.display = 'none';
  }
}

function showStudentForm() {
  const homePage = document.getElementById('homePage');
  const studentForm = document.getElementById('studentForm');
  const addMarks = document.getElementById('addMarks');
  const classAverage = document.getElementById('classAverage');
  const studentDetails = document.getElementById('studentDetails');

  if (homePage && studentForm && addMarks && classAverage && studentDetails) {
    homePage.style.display = 'none';
    studentForm.style.display = 'block';
    addMarks.style.display = 'none';
    classAverage.style.display = 'none';
    studentDetails.style.display = 'none';
  }
}

function showStudentDetails(event: Event) {
  event.preventDefault();
  const studentDetailsContent = document.getElementById('studentDetailsContent');
  if (studentDetailsContent) {
    studentDetailsContent.innerHTML = ''; // Clear previous content

    // Loop through Computer Science students
    computerScienceStudents.forEach(student => {
      const studentDiv = document.createElement('div');
      studentDiv.classList.add('student');
      studentDiv.innerHTML = `
          <h3>${student.name}</h3>
          <p>Roll Number: ${student.rollNo}</p>
          <p>Department: ${student.department}</p>
          <p>Marks: ${student.marks.join(', ')}</p>
          <p>Grade: ${calculateGrade(calculateTotalMarks(student.marks))}</p>
      `;
      if (studentDetailsContent) studentDetailsContent.appendChild(studentDiv);
    });

    // Loop through Commerce students
    commerceStudents.forEach(student => {
      const studentDiv = document.createElement('div');
      studentDiv.classList.add('student');
      studentDiv.innerHTML = `
          <h3>${student.name}</h3>
          <p>Roll Number: ${student.rollNo}</p>
          <p>Department: ${student.department}</p>
          <p>Marks: ${student.marks.join(', ')}</p>
          <p>Grade: ${calculateGrade(calculateTotalMarks(student.marks))}</p>
      `;
      if (studentDetailsContent) studentDetailsContent.appendChild(studentDiv);
    });

    // Show the student details section
    const studentDetails = document.getElementById('studentDetails');
    if (studentDetails) studentDetails.style.display = 'block';
  }
}

// Function to add marks for a student
function addMarks(event: Event) {
  event.preventDefault();

  // Get input values
  const rollNo = (document.getElementById('rollNo') as HTMLInputElement).value;
  const student = findStudent(rollNo);
  if (!student) {
    alert('Student not found!');
    return;
  }

  // Update student marks
  const marks = [];
  let totalMarks = 0;
  for (let i = 1; i <= 5; i++) {
    const mark = parseInt((document.getElementById(`subject${i}`) as HTMLInputElement).value);
    marks.push(mark);
    totalMarks += mark; // Calculate total marks
  }
  student.marks = marks;

  // Calculate the grade based on total marks
  const grade = calculateGrade(totalMarks);

  // Display grade
  const totalMarksElement = document.getElementById('totalMarks');
  if (totalMarksElement) totalMarksElement.innerText = `Grade: ${grade}`;

  // Reset form
  (document.getElementById('addMarksForm') as HTMLFormElement).reset();
}

// Function to calculate grade
function calculateGrade(totalMarks: number): string {
  if (totalMarks >= 90) {
    return 'A+';
  } else if (totalMarks >= 80) {
    return 'A';
  } else if (totalMarks >= 70) {
    return 'B';
  } else if (totalMarks >= 60) {
    return 'C';
  } else if (totalMarks >= 50) {
    return 'D';
  } else {
    return 'F';
  }
}

// Function to show the add marks section
function showAddMarks() {
  const homePage = document.getElementById('homePage');
  const studentForm = document.getElementById('studentForm');
  const addMarks = document.getElementById('addMarks');
  const classAverage = document.getElementById('classAverage');
  const studentDetails = document.getElementById('studentDetails');

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
  const homePage = document.getElementById('homePage');
  const studentForm = document.getElementById('studentForm');
  const addMarks = document.getElementById('addMarks');
  const classAverage = document.getElementById('classAverage');
  const studentDetails = document.getElementById('studentDetails');

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
function addStudent(event: Event) {
  event.preventDefault();

  const name = (document.getElementById('studentName') as HTMLInputElement).value;
  const rollNo = (document.getElementById('studentRollNo') as HTMLInputElement).value;
  const department = (document.getElementById('department') as HTMLSelectElement).value;

  if (department === 'Computer Science') {
    computerScienceStudents.push({ name, rollNo, department, marks: [] });
  } else {
    commerceStudents.push({ name, rollNo, department, marks: [] });
  }

  (document.getElementById('studentDetailsForm') as HTMLFormElement).reset();
}
function calculateClassAverage() {
  const computerScienceTotalMarks = computerScienceStudents.reduce((acc, student) => acc + calculateTotalMarks(student.marks), 0);
  const commerceTotalMarks = commerceStudents.reduce((acc, student) => acc + calculateTotalMarks(student.marks), 0);

  const computerScienceAverage = computerScienceTotalMarks / computerScienceStudents.length;
  const commerceAverage = commerceTotalMarks / commerceStudents.length;

  document.getElementById('computerScienceAverage')!.innerText = `Computer Science Class Average: ${computerScienceAverage.toFixed(2)}`;
  document.getElementById('commerceAverage')!.innerText = `Commerce Class Average: ${commerceAverage.toFixed(2)}`;
}


function calculateTotalMarks(marks: number[]): number {
  return marks.reduce((acc, mark) => acc + mark, 0);
}

function goBack() {
  showHomePage();
}

function findStudent(rollNo: string): Student | undefined {
  const student = computerScienceStudents.find(s => s.rollNo === rollNo);
  if (student) return student;
  return commerceStudents.find(s => s.rollNo === rollNo);
}