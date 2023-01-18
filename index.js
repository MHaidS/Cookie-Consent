const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

/*   
1. Inside the body of this event listener, 
   create a const and set it equals to a new 
   instance of FormData which takes in our HTML 
   form element as a parameter.
2. Log out the const (you should just get 
   a FormData object).
*/
consentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const consentFormData = new FormData(consentForm);
  console.log(consentFormData);

  modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`;

  setTimeout(function () {
    document.getElementById("upload-text").innerText = "Making the sale...";
  }, 1500);

  /*   
   1. Make it so that 1.5 seconds after seeing the 
      "Making the sale..." message, the modal is 
      cleared of its content and the following 
      string of HTML is displayed instead.
      
      `<h2>Thanks you sucker! </h2>
      <p>We just sold the rights to your eternal soul.</p>
      <div class="idiot-gif">
         <img src="images/pirate.gif">
      </div>
      ` 
   */

  setTimeout(function () {
    document.getElementById("modal-inner").innerHTML = `
      <h2>Thanks you sucker! </h2>
      <p>We just sold the rights to your eternal soul.</p>
      <div class="idiot-gif">
         <img src="images/pirate.gif">
      </div>
   `;
  }, 3000);
});