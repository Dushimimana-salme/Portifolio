function calculateGPA() {
    let marks =document.querryselectorAll(".marks");
    let credits =document.querryselectorAll(".credits");
    let totalpoints =0;
    let totalcredits =0;
    for (let i = 0; i < marks.length; i++){
        let mark =parseFloat(marks[i].value);
        let credit =parseFloat(credits[i].value);
        if (isNaN(mark) || isNaN(credit)){
            document.getElementById("gpaResult").innerText = "Fill all fields.";
            return;
        }
        if (mark < 0 || mark > 100) {
            document.getElementById("gpaResult").innerText = "Marks must be 0-100.";
            return;
        }
        let gradePoint =getGradePoint(mark);
        totalPoints += gradePoint * credit;
        totalcredits += credit;
    }
    let gpa = totalPoints /totalcredits;
    document.getElementById("gpaResult").innerHTML ="GPA: " + gpa.toFixed(2);
}
function getGradePoint(mark) {
    if (mark >= 80) return 4.0;
    if (mark >= 70) return 3.5;
    if (mark >= 60) return 3.0;
    if (mark >= 50) return 2.5;
    if (mark >= 40) return 2.0;
    return 0.0;
}