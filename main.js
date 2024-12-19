let meetingSerialNumber = 0;

// Function to generate a unique Meeting ID
function generateMeetingID() {
    const currentYear = new Date().getFullYear();
    meetingSerialNumber++;
    const meetingID = `BGR/MEET/${currentYear}/${meetingSerialNumber}`;
    document.getElementById("meetingIDField").value = meetingID;
}

// Function to show or hide the meeting details form based on the selected meeting type
function showForm() {
    const meetingType = document.getElementById('meetingType').value;
    const meetingForm = document.getElementById('meetingForm');
    
    if (meetingType) {
        meetingForm.classList.remove('hidden');
        setCurrentDate(); // Set the current date when the form is shown
    } else {
        meetingForm.classList.add('hidden');
    }
}

// Function to set the current date in the Meeting Date field
function setCurrentDate() {
    const currentDate = new Date().toISOString().split('T')[0]; // Get the current date in YYYY-MM-DD format
    document.getElementById('meetingDate').value = currentDate; // Set it in the "Meeting Date" input field
}

// Function to add a new row for discussion points
function addRow() {
    const tableBody = document.querySelector('#discussionTable tbody');
    const currentDate = new Date().toISOString().split('T')[0]; // Get the current date for the "Target Date" field
    
    const row = `
        <tr>
            <td><textarea placeholder="Enter discussion point" required></textarea></td>
            <td><input type="date" value="${currentDate}" required></td>
            <td><input type="text" required></td>
            <td><button type="button" onclick="removeRow(this)">Remove</button></td>
        </tr>`;
    tableBody.insertAdjacentHTML('beforeend', row); // Insert the new row into the table
}

// Function to remove a row from the discussion points table
function removeRow(button) {
    button.closest('tr').remove();
}

// Handle the form submission
document.getElementById('meetingDetailsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const meetingID = document.getElementById('meetingIDField').value;
    const meetingDate = document.getElementById('meetingDate').value;
    const meetingDesc = document.getElementById('meetingDesc').value;
    const meetingChair = document.getElementById('meetingChair').value;

    const discussionPoints = [];
    const rows = document.querySelectorAll('#discussionTable tbody tr');
    rows.forEach(row => {
        const pointDesc = row.querySelector('textarea').value;
        const targetDate = row.querySelector('input[type="date"]').value;
        const fpr = row.querySelector('input[type="text"]').value;
        discussionPoints.push({ pointDesc, targetDate, fpr });
    });

    const meetingData = {
        meetingID,
        meetingDate,
        meetingDesc,
        meetingChair,
        discussionPoints
    };

    console.log('Meeting Data Submitted:', meetingData);
    
    // Optionally, reset the form after submission
    document.getElementById('meetingDate').value = '';
    document.getElementById('meetingDesc').value = '';
    document.getElementById('meetingChair').value = 'ED & RH'; // Default option
    document.querySelectorAll('#discussionTable tbody tr').forEach(row => row.remove());
    document.getElementById('meetingForm').classList.add('hidden');
});
