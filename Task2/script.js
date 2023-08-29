function convertCtoF() {
  const fahrenheitInput = document.getElementById("fahrenheit");
  const celsiusInput = document.getElementById("celsius");

  if (celsiusInput.value === "" && fahrenheitInput.value === "") {
    alert("Please enter any one of the fields.");
    return; // Stop further processing
  }

  const celsiusValue = parseFloat(celsiusInput.value);
  const fahrenheitValue = (celsiusValue * 9/5) + 32;
  fahrenheitInput.value = fahrenheitValue.toFixed(2);
}

function convertFtoC() {
  const fahrenheitInput = document.getElementById("fahrenheit");
  const celsiusInput = document.getElementById("celsius");

  if (celsiusInput.value === "" && fahrenheitInput.value === "") {
    alert("Please enter any one of the fields.");
    return; // Stop further processing
  }

  const fahrenheitValue = parseFloat(fahrenheitInput.value);
  const celsiusValue = (fahrenheitValue - 32) * 5/9;
  celsiusInput.value = celsiusValue.toFixed(2);
}
