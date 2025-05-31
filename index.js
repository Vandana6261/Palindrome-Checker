const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const message = document.getElementById("message");

checkBtn.addEventListener("click", checkPalindrome);

function checkPalindrome() {
    const userText = userInput.value.trim().toLowerCase();

    // Basic validation
    if(userText === ""){
        message.textContent = "Please enter a word or phrase.";
        message.style.color = "red";
        return;
    }

    // Step 1: Clean the user input by removing all characters 
    // except lowercase letters (a-z) and digits (0-9), 
    // so that spaces, punctuation, and symbols don't affect palindrome checking.
    const cleanedText = userText.replace(/[^a-z0-9]/g, "");

    // Step 2: Reverse the cleaned text to check if it's a palindrome.
    // - split("") ➝ converts the string into an array of characters.
    // - reverse() ➝ reverses the array elements.
    // - join("") ➝ joins the reversed array back into a string.
    const reversedText = cleanedText.split("").reverse().join("");

    if(cleanedText === reversedText){
        message.textContent = "It's a palindrome!";
        message.style.color = "green";
    }
    else {
        message.textContent = "Oops! Not a palindrome";
        message.style.color = "red"
    }
}