let meetingSerialNumber = 0;

function showForm() {
    const meetingType = document.getElementById('meetingType').value;
    const meetingForm = document.getElementById('meetingForm');
    meetingForm.classList.toggle('hidden', !meetingType);
}

function generateMeetingID() {
    const currentYear = new Date().getFullYear();
    meetingSerialNumber++;
    const meetingID = `BGR/MEET/${currentYear}/${meetingSerialNumber}`;
    document.getElementById('meetingIDField').value = meetingID;
}

document.getElementById('meetingDetailsForm').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Meeting registered successfully!');
    event.target.reset();
});

function showCGMOptions() {
    const chairValue = document.getElementById('meetingChair').value;
    document.getElementById('cgmOptions').style.display = chairValue === 'CGM' ? 'block' : 'none';
}

function addRow() {
    const table = document.getElementById('discussionTable').querySelector('tbody');
    const newRow = `
        <tr>
            <td><textarea placeholder="Enter discussion point" required></textarea></td>
            <td><input type="date" required></td>
            <td><button type="button" class="remove-row-btn" onclick="removeRow(this)">Remove</button></td>
        </tr>`;
    table.insertAdjacentHTML('beforeend', newRow);
}

function removeRow(button) {
    button.closest('tr').remove();
}
