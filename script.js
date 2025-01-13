document.getElementById('calculator-form').addEventListener('submit', function(e) {
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

  // Display results with emojis and styling
  document.getElementById('results').innerHTML = `
    <p><strong>💰 Total Fuel Cost (Current):</strong> $${totalFuelCost.toLocaleString()}</p>
    <p><strong>💡 Estimated Savings:</strong> $${savingsAmount.toLocaleString()}</p>
    <p><strong>⚙️ Fuel Cost with Wayfinder:</strong> $${newFuelCost.toLocaleString()}</p>
    <p><strong>🌱 CO₂ Emissions Reduction:</strong> ${co2Reduction.toFixed(2)} MT</p>
  `;
});
