let meetingSerialNumber = 0;

function showForm() {
    const meetingType = document.getElementById('meetingType').value;
    document.getElementById('meetingForm').classList.toggle('hidden', !meetingType);
}

function generateMeetingID() {
    const currentYear = new Date().getFullYear();
    meetingSerialNumber++;
    const meetingID = `BGR/MEET/${currentYear}/${meetingSerialNumber}`;
    document.getElementById('meetingIDField').value = meetingID;
}

document.getElementById('meetingDetailsForm').addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('confirmationMessage').classList.remove('hidden');
    event.target.reset();
    setTimeout(() => {
        document.getElementById('confirmationMessage').classList.add('hidden');
    }, 3000);
});

function showCGMOptions() {
    const chairValue = document.getElementById('meetingChair').value;
    document.getElementById('cgmOptions').classList.toggle('hidden', chairValue !== 'CGM');
}

function addRow() {
    const table = document.getElementById('discussionTable').querySelector('tbody');
    const newRow = `
        <tr>
            <td><textarea placeholder="Enter discussion point" required></textarea></td>
            <td><input type="date" required></td>
            <td><button type="button" onclick="removeRow(this)">Remove</button></td>
        </tr>`;
    table.insertAdjacentHTML('beforeend', newRow);
}

function removeRow(button) {
    button.closest('tr').remove();
}
