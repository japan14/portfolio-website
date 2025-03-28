document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    emailjs.init("yL41ld55_7_JSeCwe"); //server ID with emailjs

    emailjs
      .sendForm("service_5oiy98d", "template_mnutuvs", this)
      .then((response) => {
        alert("Email sent successfully!");
        console.log("Success:", response);

         document.getElementById("contactForm").reset();
      })
      .catch((error) => {
        alert("Failed to send email.");
        console.error("Error:", error);
      });
  });
