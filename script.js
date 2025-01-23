//your code here
 const textBox = document.getElementById('evaluatedText');
    const letterCountDisplay = document.getElementById('letterCount');

    // Event listener to count letters in real-time
    textBox.addEventListener('input', function() {
      const letterCount = textBox.value.length; // Get the length of the input value
      letterCountDisplay.textContent = letterCount; // Update the h3 element with the letter count
    });