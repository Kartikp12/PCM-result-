document.getElementById('marksForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let subject1 = parseFloat(document.getElementById('subject1').value);
    let subject2 = parseFloat(document.getElementById('subject2').value);
    let subject3 = parseFloat(document.getElementById('subject3').value);

    let totalMarks = subject1 + subject2 + subject3;
    let averageMarks = totalMarks / 3;

    document.getElementById('totalMarks').textContent = totalMarks;
    document.getElementById('averageMarks').textContent = averageMarks.toFixed(2);

   
    document.getElementById('result').style.display = 'block';
});