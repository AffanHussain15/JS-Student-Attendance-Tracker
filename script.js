var user = prompt("Enter the number of students:");
var studentNames = [];
var presentStudents = [];
var absentStudents = [];
for (var i = 0; i < user; i++) {
    var studentName = prompt("Enter the name of student:");
    var attendance = prompt("Is " + studentName + " present or absent?");

    if (attendance === "present") {
        studentNames.push(studentName)
        presentStudents.push(studentName)
    } else if (attendance === "absent") {
        studentNames.push(studentName)
        absentStudents.push(studentName)
    } else {
        alert("Invalid input.")
    }
}

var usernumber = user.length;

alert("Number of students: " + user);
alert("Presents students: " + presentStudents.join(", "));
alert("Absent students: " + absentStudents.join(", "));
