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
    💰 <strong>Total Fuel Cost (Current):</strong> $${totalFuelCost.toLocaleString()}<br>
    💸 <strong>Estimated Savings:</strong> $${savingsAmount.toLocaleString()}<br>
    ⚙️ <strong>Fuel Cost with Wayfinder:</strong> $${newFuelCost.toLocaleString()}<br>
    🌱 <strong>CO₂ Emissions Reduction:</strong> ${co2Reduction.toFixed(2)} MT
  `;

  // Show the "Download PDF" button
  document.getElementById('download-pdf').style.display = 'block';
});

document.getElementById('download-pdf').addEventListener('click', function() {
  const { jsPDF } = window.jspdf;

  // Create a new PDF document
  const doc = new jsPDF();

  // Add Sofar Ocean logo
  doc.addImage('logo.png', 'PNG', 10, 10, 50, 20);
  doc.setFontSize(20);
  doc.text('Fuel Savings Report', 70, 25);

  // Add user input summary
  doc.setFontSize(12);
  doc.text('User Inputs:', 10, 50);
  doc.text(`Fleet Size: ${document.getElementById('fleetSize').value}`, 10, 60);
  doc.text(`Average Voyage Length (Days): ${document.getElementById('voyageLength').value}`, 10, 70);
  doc.text(`Fuel Consumption (MT/Day): ${document.getElementById('fuelConsumption').value}`, 10, 80);
  doc.text(`Fuel Price (USD/MT): ${document.getElementById('fuelPrice').value}`, 10, 90);
  doc.text(`Estimated Fuel Savings (%): ${document.getElementById('fuelSavings').value}`, 10, 100);

  // Add results
  doc.text('Results:', 10, 120);
  doc.text(`Total Fuel Cost (Current): $${totalFuelCost.toLocaleString()}`, 10, 130);
  doc.text(`Estimated Savings: $${savingsAmount.toLocaleString()}`, 10, 140);
  doc.text(`Fuel Cost with Wayfinder: $${newFuelCost.toLocaleString()}`, 10, 150);
  doc.text(`CO₂ Emissions Reduction: ${co2Reduction.toFixed(2)} MT`, 10, 160);

  // Add date and signature
  const date = new Date().toLocaleDateString();
  doc.text(`Report Generated: ${date}`, 10, 180);
  doc.text('Created by Shane Swiderek', 10, 190);

  // Save the PDF
  doc.save('fuel-savings-report.pdf');
});
