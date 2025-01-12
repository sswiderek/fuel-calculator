function calculate() {
  const fleetSize = parseInt(document.getElementById('fleetSize').value);
  const voyageLength = parseInt(document.getElementById('voyageLength').value);
  const fuelConsumption = parseFloat(document.getElementById('fuelConsumption').value);
  const fuelPrice = parseFloat(document.getElementById('fuelPrice').value);
  const savingsPercent = parseFloat(document.getElementById('savingsPercent').value);

  // Total Fuel Cost (Current)
  const totalFuelCost = fleetSize * voyageLength * fuelConsumption * fuelPrice;
  document.getElementById('totalFuelCost').innerText = `$${totalFuelCost.toFixed(2)}`;

  // Estimated Savings (USD)
  const estimatedSavings = totalFuelCost * (savingsPercent / 100);
  document.getElementById('estimatedSavings').innerText = `$${estimatedSavings.toFixed(2)}`;

  // Fuel Cost with Wayfinder
  const fuelCostWithWayfinder = totalFuelCost - estimatedSavings;
  document.getElementById('fuelCostWithWayfinder').innerText = `$${fuelCostWithWayfinder.toFixed(2)}`;

  // CO₂ Emissions Reduction (MT)
  const co2Reduction = fleetSize * voyageLength * fuelConsumption * (savingsPercent / 100);
  document.getElementById('co2Reduction').innerText = `${co2Reduction.toFixed(2)} MT`;
}
