// ===== Enquiry form validation =====
const enquiryForm = document.getElementById("enquiryForm");

// Shows or clears an error for one field. Returns true if the field is valid.
function checkField(input, errorId, isBad, message) {
    const errorEl = document.getElementById(errorId);
    if (isBad) {
        errorEl.textContent = message;
        input.classList.add("invalid");
        return false;
    }
    errorEl.textContent = "";
    input.classList.remove("invalid");
    return true;
}

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const itemType = document.getElementById("item-type");
        const quantity = document.getElementById("quantity");
        const details = document.getElementById("details");

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9+\-\s]{10,15}$/;
        const qty = Number(quantity.value);

        // Run every check (no short-circuit, so all errors show at once)
        const results = [
            checkField(name, "nameError", name.value.trim() === "", "Please enter your full name."),
            checkField(email, "emailError", !emailPattern.test(email.value.trim()), "Please enter a valid email address."),
            checkField(phone, "phoneError", phone.value.trim() !== "" && !phonePattern.test(phone.value.trim()), "Please enter a valid phone number."),
            checkField(itemType, "itemTypeError", itemType.value === "", "Please choose a type of item."),
            checkField(quantity, "quantityError", !Number.isInteger(qty) || qty < 1 || qty > 50, "Quantity must be between 1 and 50."),
            checkField(details, "detailsError", details.value.trim().length < 10, "Please give at least 10 characters of detail.")
        ];

        if (results.includes(false)) {
            return;   // at least one field failed, so stop here
        }

        showEnquiryResponse(name.value.trim(), itemType.value, qty);
    });
}

// ===== Cost and availability response =====
function showEnquiryResponse(name, itemType, qty) {
    // Starting prices per item in rand (placeholders: replace with the owner's real prices)
    const prices = {
        "earrings": 120,
        "prayer-beads": 250,
        "bookmarker": 60,
        "bangle": 90,
        "other": 0
    };

    const box = document.getElementById("enquiryResponse");
    const unit = prices[itemType];

    let costLine;
    if (unit === 0) {
        costLine = "Because your request is a custom item, we'll send you a personal quote.";
    } else {
        costLine = "Estimated cost: <strong>R" + (unit * qty) + "</strong> (from R" + unit + " each).";
    }

    // Larger orders take longer
    const days = qty > 5 ? "14 to 21" : "7 to 10";

    box.innerHTML =
        "<h2>Thank you, " + name + "!</h2>" +
        "<p>" + costLine + "</p>" +
        "<p>Availability: we can usually complete this order in <strong>" + days + " working days</strong>.</p>" +
        "<p>We'll email you to confirm the final price and delivery details.</p>";

    box.scrollIntoView({ behavior: "smooth" });
    enquiryForm.reset();
}

// ===== Contact form validation + email =====
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const cName = document.getElementById("c-name");
        const cEmail = document.getElementById("c-email");
        const cSubject = document.getElementById("c-subject");
        const cMessage = document.getElementById("c-message");

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const results = [
            checkField(cName, "cNameError", cName.value.trim() === "", "Please enter your full name."),
            checkField(cEmail, "cEmailError", !emailPattern.test(cEmail.value.trim()), "Please enter a valid email address."),
            checkField(cSubject, "cSubjectError", cSubject.value === "", "Please choose a type of message."),
            checkField(cMessage, "cMessageError", cMessage.value.trim().length < 10, "Please write at least 10 characters.")
        ];

        if (results.includes(false)) {
            return;
        }

        // Recipient is set here in the code. Change this to the address that should get the messages.
        const recipient = "taylor.shamiel@gmail.com";
        const subjectText = cSubject.options[cSubject.selectedIndex].text;
        const subject = "Website message: " + subjectText;
        const body =
            "Name: " + cName.value.trim() + "\n" +
            "Email: " + cEmail.value.trim() + "\n" +
            "Type: " + subjectText + "\n\n" +
            cMessage.value.trim();

        document.getElementById("contactStatus").innerHTML =
            "<p>Thank you, " + cName.value.trim() + "! Your email is ready to send. " +
            "If it didn't open, email us directly at " + recipient + ".</p>";

        window.location.href =
            "mailto:" + recipient +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        contactForm.reset();
    });
}