const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
// 27.1 Take control of the decline btn
const declineBtn = document.getElementById("decline-btn");
// 30.1 Take control of the div holding the buttons
const modalChoiceBtns = document.getElementById("modal-choice-btns");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// 27.2 Set up an eventListener that is triggered
//  when a user's cursor hovers over the decline
//  button.
declineBtn.addEventListener("mouseenter", function () {
  // console.log("hovered");
  // 30.3 Toggle that class on the div holding the buttons
  // when a user's cursor hovers over the decline button.
  // user won't be able to choose the 'decline button'
  modalChoiceBtns.classList.toggle("modal-choice-btns-reverse");
});

consentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // 24.1 Create a const to store the user's name and
  // use a FormData method to extract the
  // submitted name from the FormData object.
  const consentFormData = new FormData(consentForm);
  const fullName = consentFormData.get("fullName");

  modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`;

  setTimeout(function () {
    document.getElementById("upload-text").innerText = `
        Making the sale...`;
  }, 1500);

  // 24.2 Insert the user's name into the HTML string
  // that contains the final message we show our
  // users.
  setTimeout(function () {
    document.getElementById("modal-inner").innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
    `;
    // 26.2 Make the 'modal-close-btn' button become usable when the final
    // modal message has been displayed to the user.
    modalCloseBtn.disabled = false;
  }, 3000);
});
