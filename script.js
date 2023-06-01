function previewForm() {
	// Get form data
	var form = document.getElementById("myForm");
	var formData = new FormData(form);
  
	// Convert form data to JSON
	var jsonData = {};
	formData.forEach(function(value, key) {
	  jsonData[key] = value;
	});
  
	// Store form data in sessionStorage
	sessionStorage.setItem("formData", JSON.stringify(jsonData));
  
	// Redirect to the preview page
	window.location.href = "preview.html";
  }

  window.onload = function() {
	// Retrieve form data from sessionStorage
	var formData = JSON.parse(sessionStorage.getItem("formData"));
  
	// Get the previewData element
	var previewData = document.getElementById("previewData");
  
	// Create a table to display the form data
	var table = document.createElement("table");
  
	// Iterate over the form data and create table rows
	for (var key in formData) {
	  if (formData.hasOwnProperty(key)) {
		var row = document.createElement("tr");
		var labelCell = document.createElement("td");
		var valueCell = document.createElement("td");
  
		labelCell.textContent = key;
		valueCell.textContent = formData[key];
  
		row.appendChild(labelCell);
		row.appendChild(valueCell);
		table.appendChild(row);
	  }
	}
  
	// Append the table to the previewData element
	previewData.appendChild(table);
  };
  
  
 