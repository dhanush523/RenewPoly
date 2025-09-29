function navigate(page) {
  try {
    // Simulate navigation
    window.location.href = page;
  } catch (error) {
    alert("Unable to open screen. Please try again.");
    console.error("Navigation error:", error);
  }
}



















const sellerForm = document.getElementById("sellerForm");
const sellerList = document.getElementById("sellerList");
const messageDiv = document.getElementById("message");

// Store sellers in an array
let sellers = [];

sellerForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const companyName = document.getElementById("companyName").value.trim();
  const contactPerson = document.getElementById("contactPerson").value.trim();
  const mobileNumber = document.getElementById("mobileNumber").value.trim();
  const gpayNumber = document.getElementById("gpayNumber").value.trim();
  const accountNumber = document.getElementById("accountNumber").value.trim();
  const gstNumber = document.getElementById("gstNumber").value.trim();
  const address = document.getElementById("address").value.trim();
  const plasticType = document.getElementById("plasticType").value.trim();

  // Validation
  if (!companyName) {
    showMessage("Company Name is required!", "red");
    return;
  }

  if (sellers.find(s => s.companyName.toLowerCase() === companyName.toLowerCase())) {
    showMessage("Company Name must be unique!", "red");
    return;
  }

  if (!mobileNumber || !/^\d{10}$/.test(mobileNumber)) {
    showMessage("Mobile Number is required and must be 10 digits!", "red");
    return;
  }

  if (!address) {
    showMessage("Address is required!", "red");
    return;
  }

  // Add seller
  const seller = {
    companyName,
    contactPerson,
    mobileNumber,
    gpayNumber,
    accountNumber,
    gstNumber,
    address,
    plasticType
  };

  sellers.push(seller);
  showMessage("Seller added successfully!", "green");
  displaySellers();
  sellerForm.reset();
});

function showMessage(msg, color) {
  messageDiv.textContent = msg;
  messageDiv.style.color = color;
  setTimeout(() => {
    messageDiv.textContent = "";
  }, 3000);
}

function displaySellers() {
  sellerList.innerHTML = "";
  sellers.forEach(s => {
    const li = document.createElement("li");
    li.textContent = `${s.companyName} - ${s.contactPerson} - ${s.mobileNumber}`;
    sellerList.appendChild(li);
  });
}























const tabs = document.querySelectorAll('.tab-btn');
const widgets = document.querySelectorAll('.widget');

// Show default widget
document.getElementById('buy-monthly').style.display = 'block';

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Hide all widgets
    widgets.forEach(w => w.style.display = 'none');

    // Show selected widget
    const reportId = tab.getAttribute('data-report');
    document.getElementById(reportId).style.display = 'block';
  });
});
