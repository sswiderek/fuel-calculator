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
  
    // Display results
    document.getElementById('results').innerHTML = `
      Total Fuel Cost (Current): $${totalFuelCost.toLocaleString()}
      <br>Estimated Savings: $${savingsAmount.toLocaleString()}
      <br>Fuel Cost with Wayfinder: $${newFuelCost.toLocaleString()}
      <br>CO₂ Emissions Reduction: ${co2Reduction.toFixed(2)} MT
    `;
  });
  