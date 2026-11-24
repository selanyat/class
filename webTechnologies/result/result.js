function addGrade() {
	var subject = prompt("Enter subject name");

	while ( subject == "" ){
		alert("Subject can't be empty");
		subject = prompt("Enter subject name")
	}
	var score = parseFloat(prompt("Enter Score"));

	while ( isNaN(score) || score > 100 || score < 0) {
		prompt("Invalid Score; Please try again");
		score = parseInt(prompt("Enter Score"));
	}

	var grade;

	if (score >= 80) {
		grade = "A";
	} else if (score >= 70) {
		grade = "B";

	} else if (score >= 50) {
		grade = "C";

	} else if (score >= 40) {
		grade = "D";

	} else if (score >= 30) {
		grade = "E";

	} else {
		grade = "F";

	}

	scoreSheet = document.getElementById("scoreSheet")
	scoreSheet.innerHTML += "<tr><td>" + subject + "</td><td>" + score + "</td><td>" + grade + "</td></tr>";
}
