
// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  menuToggle.textContent = isOpen ? "×" : "☰";
});


// Close menu when clicking navigation links
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {

    mainNav.classList.remove("open");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    menuToggle.textContent = "☰";
  });
});


// Automatically display current year
document.getElementById("year").textContent =
  new Date().getFullYear();


// Enquiry form
document.getElementById("enquiryForm").addEventListener(
  "submit",
  (event) => {

    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = data.get("name").trim();
    const email = data.get("email").trim();
    const product = data.get("product");
    const message = data.get("message").trim();

    const subject = encodeURIComponent(
      `Website enquiry: ${product}`
    );

    const body = encodeURIComponent(
      `Hello Sreekandha Weaving Works,

Name: ${name}
Email: ${email}
Interested in: ${product}

Requirements:
${message}`
    );

    // Add the verified business email address here.
    const businessEmail = "";

    const status = document.getElementById("formMessage");

    if (!businessEmail) {
      status.textContent =
        "Please add the verified business email address in script.js before sending enquiries.";

      return;
    }

    window.location.href =
      `mailto:${businessEmail}?subject=${subject}&body=${body}`;
  }
);
