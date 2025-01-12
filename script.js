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

  function downloadPDF() {
    const results = `
      Fleet Size: ${document.getElementById('fleetSize').value}
      Voyage Length: ${document.getElementById('voyageLength').value} days
      Fuel Consumption: ${document.getElementById('fuelConsumption').value} MT/Day
      Fuel Price: $${document.getElementById('fuelPrice').value} USD/MT
      Estimated Fuel Savings: ${document.getElementById('savingsPercent').value}%
      
      Results:
      Total Fuel Cost (Current): ${document.getElementById('totalFuelCost').innerText}
      Estimated Savings (USD): ${document.getElementById('estimatedSavings').innerText}
      Fuel Cost with Wayfinder: ${document.getElementById('fuelCostWithWayfinder').innerText}
      CO₂ Emissions Reduction (MT): ${document.getElementById('co2Reduction').innerText}
    `;
  
    const blob = new Blob([results], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Fuel_Savings_Report.pdf';
    link.click();
  }
  
}
