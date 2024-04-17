<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Grade Program</title>
</head>
<body>
<h1>Grade Program</h1>
<div id="inputForm">
  <label for="name">Student Name:</label>
  <input type="text" id="name"><br><br>
  <label for="marks">Marks (comma-separated):</label>
  <input type="text" id="marks"><br><br>
  <button onclick="addStudent()">Add Student</button>
</div>
<hr>
<div id="output">
  <h2>Results</h2>
  <table id="resultsTable">
    <thead>
      <tr>
        <th>Student</th>
        <th>Subject 1</th>
        <th>Subject 2</th>
        <th>Subject 3</th>
        <th>Average Grade</th>
      </tr>
    </thead>
    <tbody id="resultsBody">
    </tbody>
  </table>
  <div id="classAverage"></div>
</div>

<script src="script.js"></script>
</body>
</html>
