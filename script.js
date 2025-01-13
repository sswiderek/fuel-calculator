document.addEventListener("DOMContentLoaded", function () {
  console.log("Script is running");

  const form = document.querySelector("form");
  const results = document.getElementById("results");

  document.getElementById("calculateButton").addEventListener("click", function () {
    console.log("Form submitted");

    // Get input values
    const fleetSize = parseFloat(document.getElementById("fleetSize").value);
    const voyageLength = parseFloat(document.getElementById("voyageLength").value);
    const fuelConsumption = parseFloat(document.getElementById("fuelConsumption").value);
    const fuelPrice = parseFloat(document.getElementById("fuelPrice").value);
    const fuelSavings = parseFloat(document.getElementById("fuelSavings").value);

    // Validate inputs
    if (isNaN(fleetSize) || isNaN(voyageLength) || isNaN(fuelConsumption) || isNaN(fuelPrice) || isNaN(fuelSavings)) {
      results.innerHTML = `<p style="color: red;">Please fill in all fields with valid numbers.</p>`;
      return;
    }

    // Perform calculations
    const totalFuelCost = fleetSize * voyageLength * fuelConsumption * fuelPrice;
    const estimatedSavings = (totalFuelCost * fuelSavings) / 100;
    const fuelCostWithWayfinder = totalFuelCost - estimatedSavings;
    const co2Reduction = fuelConsumption * fleetSize * voyageLength * 3.15 * (fuelSavings / 100);

    // Display results
    results.innerHTML = `
      <p>💰 <strong>Total Fuel Cost (Current):</strong> $${totalFuelCost.toLocaleString()}</p>
      <p>💸 <strong>Estimated Savings (USD):</strong> $${estimatedSavings.toLocaleString()}</p>
      <p>🔧 <strong>Fuel Cost with Wayfinder:</strong> $${fuelCostWithWayfinder.toLocaleString()}</p>
      <p>🌎 <strong>CO₂ Emissions Reduction:</strong> ${co2Reduction.toFixed(2)} MT</p>
    `;
  });
});
