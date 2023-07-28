// participants.js

// Sample array to store participant information
const participants = [];

// Function to add participant information
function addParticipant(name, switchedToLinux, eventSuggestion) {
  participants.push({ name, switchedToLinux, eventSuggestion });
}

// Sample data to be filled by participants during the event
addParticipant("nammahari", true, "Front-end development");
addParticipant("Ansh Arora", false,"new opensource technologies");

// Exporting the participants array to make it accessible from other files
module.exports = participants;
