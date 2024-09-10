function submitHobby() {
    const hobby = document.getElementById("hobby").value;
    const reason = document.getElementById("reason").value;
  
    if (hobby && reason) {
      alert("Hobby: " + hobby + "\nReason: " + reason);
    } else {
      alert("Please fill in both fields.");
    }
  }