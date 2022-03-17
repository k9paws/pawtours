// Check for Valid EMAIL ADDRESS Code, taken from: "https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript"
function isEmailValid(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//CONTACT-PAGE FORM CODE

function contactPage() {
  const contactFormElement = document.getElementById("contact-form");

  // Event handler function
  contactFormElement.onsubmit = handleContactFormSubmit;

  // Taking an event object, which is passed by the form natively in the browser
  function handleContactFormSubmit(event1) {
    let isValid = true;

    let contactErrorSummaryMsg = [];

    // Retrieve the NAME Element value
    const contactNameEl = document.getElementById("contact-form-user-name");
    if (contactNameEl.value === "") {
      isValid = false;
      contactNameEl.classList.add("invalid-form-field");
      contactErrorSummaryMsg.push("Name is Invalid");
    } else {
      contactNameEl.classList.remove("invalid-form-field");
    }

    // Retrieve the EMAIL Element value AND check if Valid
    const contactEmailEl = document.getElementById("contact-form-user-email");
    if (contactEmailEl.value === "") {
      isValid = false;
      contactEmailEl.classList.add("invalid-form-field");
      contactErrorSummaryMsg.push("An Email is Required");
    } else if (!isEmailValid(contactEmailEl.value)) {
      isValid = false;
      contactEmailEl.classList.add("invalid-form-field");
      contactErrorSummaryMsg.push("Enter a VALID Email Address");
    } else {
      contactEmailEl.classList.remove("invalid-form-field");
    }

    // Retrieve the COMMENT Element value
    const contactCommentEl = document.getElementById(
      "contact-form-user-comment"
    );
    if (contactCommentEl.value === "") {
      isValid = false;
      contactCommentEl.classList.add("invalid-form-field");
      contactErrorSummaryMsg.push("Please Enter a Comment");
    } else {
      contactCommentEl.classList.remove("invalid-form-field");
    }

    if (isValid === false) {
      event1.preventDefault();
      // ^ Now form has been preventing from submitting until I tell it to

      const contactErrorMsgEl = document.getElementById(
        "contact-form-error-summary"
      );
      // Remove HIDDEN Class from ^ element

      contactErrorMsgEl.classList.remove("hidden");
      contactErrorMsgEl.innerHTML = contactErrorSummaryMsg.join(" <br> ");
    } else {
      event1.preventDefault();
      window.location = "submission-page.html";
    }
  }

  // EMAIL Validation
  function isEmailValid(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
