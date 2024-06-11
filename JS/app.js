const dateInput = document.querySelector("#date-input");
const moonPhases = document.querySelectorAll(".moon-phase");
const moonPhase = document.querySelector(".paragraph");

const calculateMoonPhase = (date) => {
  const day = date.getDate();
  const synodicMonth = 29.530588;
  const phaseIndex = Math.floor((((day - 1) / synodicMonth) * 8) % 8);
  console.log(phaseIndex);
  const moonPhases = [
    "new-moon",
    "waxing-crescent",
    "first-quarter",
    "waxing-gibbous",
    "full-moon",
    "waning-gibbous",
    "last-quarter",
    "waning-crescent",
  ];
  console.log(`Moon phase : ${moonPhases[phaseIndex]}`);
  console.log(moonPhases[phaseIndex]);

  moonPhase.textContent = `Moon Phase: ${moonPhases[phaseIndex].charAt(0).toUpperCase() + moonPhases[phaseIndex].slice(1).replace('-' ,' ')}`
    
  return moonPhases[phaseIndex];
};

dateInput.addEventListener("change", () => {
  const selectedDate = new Date(dateInput.value);

  const moonPhaseClass = calculateMoonPhase(selectedDate);
  console.log(moonPhaseClass);

  moonPhases.forEach((phase) => {
    phase.className = "moon-phase";
    phase.classList.add(moonPhaseClass);
  });
});


