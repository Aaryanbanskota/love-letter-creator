const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const sendBtn = document.getElementById("sendBtn");
const sentMessage = document.getElementById("sentMessage");

// Open envelope on click
envelope.addEventListener("click", () => {
  envelope.classList.add("open");
});

// Send letter animation
sendBtn.addEventListener("click", () => {
  // 1. Close envelope
  envelope.classList.remove("open");
  
  // 2. Fly away animation
  envelope.style.transition = "transform 2s, opacity 2s";
  envelope.style.transform = "translateY(-200px) rotate(-10deg)";
  envelope.style.opacity = "0";
  
  // 3. Show sent message
  setTimeout(() => {
    envelope.style.display = "none";
    sentMessage.style.display = "block";
  }, 2000);
  
  // (Optional) Save letter to localStorage
  const loveText = document.getElementById("loveText").innerText;
  localStorage.setItem("myLoveLetter", loveText);
});