const palindromeValue = document.querySelector("#palinValue");
const checkBtn = document.querySelector("#checkBtn");
const hasil = document.querySelector(".hasil");

let filterInput;

palindromeValue.addEventListener("keyup", () => {
    filterInput = palindromeValue.value.replace(/[^A-Z0-9]/ig, "");
    if (filterInput) {
        return checkBtn.classList.add("active");
    }
    hasil.style.display = "none";
    checkBtn.classList.remove("active");
});

checkBtn.addEventListener("click", () => {
    let reverseInput = filterInput.split("").reverse().join("");
    hasil.style.display = "block";
    if (filterInput != reverseInput) {
        return hasil.innerHTML = `No, <span>'${palindromeValue.value}'</span> isn't a palindrome!`;
    }
    hasil.innerHTML = `Yes, <span>'${palindromeValue.value}'</span> is a palindrome!`;
});



