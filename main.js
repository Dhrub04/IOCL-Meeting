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
    const meetingID = BGR/MEET/${currentYear}/${meetingSerialNumber};

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

// Function to handle the "Enter" key press in the input field
function handlePointInput(event) {
    // Check if "Enter" is pressed and input is not empty
    if (event.key === "Enter" && event.target.value.trim() !== "") {
        addPoint(event.target.value.trim());
        event.target.value = ""; // Clear the input field
        event.preventDefault(); // Prevent form submission
    }
}

// Function to add a new bullet point
function addPoint(pointText) {
    const pointsList = document.getElementById("pointsList"); // Ordered list container

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = pointText; // Set the point text

    // Add an "Add Next" button to the list item
    const addNextButton = document.createElement("button");
    addNextButton.textContent = "Add Next";
    addNextButton.style.marginLeft = "10px";
    addNextButton.onclick = () => {
        const newInput = document.getElementById("newPointInput");
        newInput.focus(); // Focus back to the input field for adding the next point
    };

    listItem.appendChild(addNextButton); // Append the button to the list item
    pointsList.appendChild(listItem); // Append the list item to the ordered list
}

    document.getElementById("sideBox").addEventListener("click", function () {
    alert("This box contains additional information about discussion points.");
});