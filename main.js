let meetingSerialNumber = 0; // Keeps track of the serial number for generating meeting IDs.

function showForm() {
    const meetingType = document.getElementById('meetingType').value;
    const meetingForm = document.getElementById('meetingForm');
    
    if (meetingType) {
        meetingForm.classList.remove('hidden');
    } else {
        meetingForm.classList.add('hidden');
    }
}

// Function to generate and display the Meeting ID
function generateMeetingID() {
    const currentYear = new Date().getFullYear(); // Get the current year
    meetingSerialNumber++; // Increment serial number for the meeting

    // Generate the Meeting ID
    const meetingID = `BGR/MEET/${currentYear}/${meetingSerialNumber}`;

    // Display the Meeting ID in the input field
    document.getElementById('meetingIDField').value = meetingID;
}

// Function to handle the form submission
document.getElementById('meetingDetailsForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent page reload

    // Gather form data
    const meetingData = {
        meetingID: document.getElementById('meetingIDField').value,
        meetingDate: document.getElementById('meetingDate').value,
        meetingDesc: document.getElementById('meetingDesc').value,
        meetingChair: document.getElementById('meetingChair').value,
        meetingPoints: document.getElementById('meetingPoints').value,
        targetDate: document.getElementById('targetDate').value,
    };

    try {
        // Here, you can send the meeting data to your server via fetch.
        console.log(meetingData);
        
        // Display a confirmation message
        const confirmationMessage = document.getElementById('confirmationMessage');
        confirmationMessage.classList.remove('hidden');
        confirmationMessage.innerHTML = `
            <p>Meeting has been successfully registered!</p>
        `;
    } catch (error) {
        console.error('Error registering meeting:', error);
        alert('Failed to register meeting');
    }

    // Clear the form
    document.getElementById('meetingDetailsForm').reset();
    document.getElementById('meetingForm').classList.add('hidden');
});

// Handle the dynamic dropdown for the 'CGM' selection (sub-roles)
function showCGMOptions() {
    const chairValue = document.getElementById('meetingChair').value;
    const cgmOptions = document.getElementById('cgmOptions');

    // If 'CGM' is selected, display the sub-role options
    if (chairValue === 'CGM') {
        cgmOptions.style.display = 'block';
    } else {
        cgmOptions.style.display = 'none';
    }
}

// Remove a row from the discussion table
function removeRow(button) {
    const row = button.closest('tr');
    row.remove();
}

// Add event listener to show/hide CGM options dynamically
document.getElementById('meetingChair').addEventListener('change', showCGMOptions);
