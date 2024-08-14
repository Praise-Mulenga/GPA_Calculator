let courseCount = 1;

function addCourse() {
    courseCount++;
    
    // Create new course entry elements
    const newCourseEntry = document.createElement('div');
    newCourseEntry.className = 'course-entry';
    newCourseEntry.id = `course-entry-${courseCount}`;
    
    newCourseEntry.innerHTML = `
        <label for="course${courseCount}">Course ${courseCount}:</label>
        <input type="text" id="course${courseCount}" name="course${courseCount}" placeholder="Course Name" required>
        <input type="number" id="credits${courseCount}" name="credits${courseCount}" placeholder="Credits" min="1" required>
        <select id="grade${courseCount}" name="grade${courseCount}" required>
            <option value="" disabled selected>Grade</option>
            <option value="4.0">A (4.0)</option>
            <option value="3.7">A- (3.7)</option>
            <option value="3.3">B+ (3.3)</option>
            <option value="3.0">B (3.0)</option>
            <option value="2.7">B- (2.7)</option>
            <option value="2.3">C+ (2.3)</option>
            <option value="2.0">C (2.0)</option>
            <option value="1.7">C- (1.7)</option>
            <option value="1.0">D (1.0)</option>
            <option value="0.0">F (0.0)</option>
        </select>
    `;
    
    // Append the new course entry to the form
    document.getElementById('course-entries').appendChild(newCourseEntry);
}

function calculateGPA() {
    let totalCredits = 0;
    let totalPoints = 0;
    
    for (let i = 1; i <= courseCount; i++) {
        const credits = parseFloat(document.getElementById(`credits${i}`).value);
        const grade = parseFloat(document.getElementById(`grade${i}`).value);
        
        if (!isNaN(credits) && !isNaN(grade)) {
            totalCredits += credits;
            totalPoints += credits * grade;
        }
    }
    
    const gpa = totalPoints / totalCredits || 0;
    document.getElementById('gpa').innerText = gpa.toFixed(2);
}
