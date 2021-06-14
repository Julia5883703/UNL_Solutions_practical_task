// MOBILE MENU
let menu = document.querySelector(".menu");
let ham = document.querySelector(".ham");
let closeIcon = document.querySelector(".close_icon");
let menuIcon = document.querySelector(".menu_icon");
let menuLinks = document.querySelectorAll(".menu_link");

ham.addEventListener("click", toggleMenu);

// FUNCTION FOR CLOSE/OPEN MENU BUTTON
function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}
// LOOP FOR CLOSE MENU ON CLICK ON LINK
for (let link of menuLinks) {
    link.addEventListener("click", toggleMenu);
}

// VALIDATE FORM WITH SAVING IN LOCAL STORAGE
const inputEmail = document.getElementById("input_email");
const inputSubject = document.getElementById("input_subject");
const inputMessage = document.getElementById("input_message");
const sendButton = document.querySelector("#button_send");
const errorBlock = document.getElementById("errors");
let messageId = 1;
let messages = [];
let result = true;

function NewMessage(messageId, email, subject, message) {
    this.messageId = messageId;
    this.email = email;
    this.subject = subject;
    this.message = message;
}

sendButton.addEventListener("click", () => {
    errorBlock.innerHTML = "";

    if (inputEmail.value && inputSubject.value && inputMessage.value) {
        checkEmail(inputEmail);
        if (result) {
            savingToLocal(inputEmail, inputSubject, inputMessage);
            alert("Your message sent.");
            resetForm(inputEmail, inputSubject, inputMessage);
        } else {
            errorBlock.style.display = "block";
            errorBlock.innerHTML += '<p>Check email format email@mail.com</p>';
        }
    } else {
        errorBlock.style.display = "block";
        errorBlock.innerHTML += '<p>Fill in all fields</p>';
    }
})

function resetForm(email, subject, message) {
    email.value = "";
    subject.value = "";
    message.value = "";
}

function checkEmail(input) {
    let regexp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    let test = regexp.test(input.value);
    if (test == false) {
        result = false;
        return result;
    }
    result = true;
    return result
}

function savingToLocal(email, subject, message) {
    let finish = new NewMessage(messageId, email.value.trim(), subject.value.trim(), message.value.trim());
    messages.push(finish);
    messageId++;
    localStorage.setItem("messages", JSON.stringify(messages));
}


//POPUP FORM

//OPEN/CLOSE POPUP
const popupOpenButton = document.querySelector(".nav_contact-link");
const popup = document.querySelector(".contact-form_popup");
const popupCloseButton = document.querySelector(".close_form");

popupOpenButton.addEventListener("click", () => {
    popup.classList.add("visible");
})

popupCloseButton.addEventListener("click", () => {
    closePopup();
})

function closePopup() {    
    popup.classList.remove("visible");    
}

// VALIDATE POPUP
const inputEmailPopup = document.getElementById("input_email_popup");
const inputSubjectPopup = document.getElementById("input_subject_popup");
const inputMessagePopup = document.getElementById("input_message_popup");
const sendButtonPopup = document.querySelector("#button_send_popup");
const errorBlockPopup = document.getElementById("errors_popup");

sendButtonPopup.addEventListener("click", () => {
    errorBlockPopup.innerHTML = "";

    if (inputEmailPopup.value && inputSubjectPopup.value && inputMessagePopup.value) {
        checkEmail(inputEmailPopup);
        if (result) {
            savingToLocal(inputEmailPopup, inputSubjectPopup, inputMessagePopup);            
            resetForm(inputEmailPopup, inputSubjectPopup, inputMessagePopup);            
            closePopup();
            alert("Your message sent.");
        } else {
            errorBlockPopup.style.display = "block";
            errorBlockPopup.innerHTML += '<p>Check email format email@mail.com</p>';
        }
    } else {
        errorBlockPopup.style.display = "block";
        errorBlockPopup.innerHTML += '<p>Fill in all fields</p>';
    }
})