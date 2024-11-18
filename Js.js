const localVideo = document.getElementById('localVideo');
const socket = io();

let localStream;
let peerConnections = {};

async function initLocalStream() {
  localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  localVideo.srcObject = localStream;
}

socket.on('offer', (offer) => {
  // Handle offer...
});

socket.on('answer', (answer) => {
  // Handle answer...
});

socket.on('candidate', (candidate) => {
  // Handle candidates...
});

initLocalStream();
