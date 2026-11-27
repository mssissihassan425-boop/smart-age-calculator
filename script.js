const birthDateInput = document.getElementById("birthDate");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");
const ageOutput = document.getElementById("ageOutput");

calculateBtn.addEventListener("click", () => {
    const value = birthDateInput.value;

    if (!value) {
        alert("Please enter your date of birth.");
        return;
    }

    const [year, month, day] = value.split("-").map(Number);
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    if (birthDate > today) {
        alert("Birth date cannot be in the future.");
        return;
    }

    let years = today.getFullYear() - year;
    let months = today.getMonth() - (month - 1);
    let days = today.getDate() - day;

    if (days < 0) {
        months--;
        const previousMonthDays = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();

        days += previousMonthDays;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    ageOutput.textContent =
        `${years} years, ${months} months, ${days} days`;

    result.style.display = "block";
});