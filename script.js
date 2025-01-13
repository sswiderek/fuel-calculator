// Event listener for the calculator form submission
document.getElementById('calculator-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Retrieve input values
  const fleetSize = parseFloat(document.getElementById('fleetSize').value);
  const voyageLength = parseFloat(document.getElementById('voyageLength').value);
  const fuelConsumption = parseFloat(document.getElementById('fuelConsumption').value);
  const fuelPrice = parseFloat(document.getElementById('fuelPrice').value);
  const fuelSavings = parseFloat(document.getElementById('fuelSavings').value);

  // Perform calculations
  const totalFuelCost = fleetSize * voyageLength * fuelConsumption * fuelPrice;
  const savingsAmount = totalFuelCost * (fuelSavings / 100);
  const newFuelCost = totalFuelCost - savingsAmount;
  const co2Reduction = savingsAmount / fuelPrice;

  // Display results
  document.getElementById('results').innerHTML = `
    <p>💰 <strong>Total Fuel Cost (Current):</strong> $${totalFuelCost.toLocaleString()}</p>
    <p>💸 <strong>Estimated Savings:</strong> $${savingsAmount.toLocaleString()}</p>
    <p>⚙️ <strong>Fuel Cost with Wayfinder:</strong> $${newFuelCost.toLocaleString()}</p>
    <p>🌱 <strong>CO₂ Emissions Reduction:</strong> ${co2Reduction.toFixed(2)} MT</p>
  `;
});

// Event listener for the "Download PDF" button
document.getElementById('download-pdf').addEventListener('click', function () {
  // Target the calculator container
  const calculatorElement = document.querySelector('.calculator');

  // Set PDF options
  const options = {
    margin: 1,
    filename: 'Fuel_Savings_Report.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  // Generate the PDF
  html2pdf().from(calculatorElement).set(options).save();
});
