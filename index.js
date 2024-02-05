 //getting control to our div element with modal
 const modal=document.getElementById("modal")
 //getting control of our close modal button
 const closeModalBtn=document.querySelector("#modal-close-btn")
 //getting control of our form
 const consentFormEl=document.querySelector("#consent-form")
 //getting control of our modal text
 const modalTextEl=document.getElementById("modal-text")
 //take cntrol of the decline button
 const declineBtn=document.querySelector("#decline-btn")
 //taking control of the container storing our two buutons ie: accept and decline
 const modalChoiceBtns=document.getElementById("modal-choice-btns")
  
setTimeout(()=>{
    //setting display inline for our modal to reappear
   modal.style.display="inline"
},1500)

//adding event listener to btn so that when button is clicked the modal disapears
closeModalBtn.addEventListener("click", ()=>{
    modal.style.display="none"
}) 
//adding event listener to btn so that when data is filled in input it prevents page from refreshing
consentFormEl.addEventListener("submit", (e)=>{
    e.preventDefault()

    //creating a FormData
    const consentFormData=new FormData(consentFormEl)
    //a const to store the user's name and use a FormData method to extract the submitted name from the FormData object
    const userName=consentFormData.get("fullName")
    //inserting the user's name into the HTML string that contains the final message we show our users. on line 46


    //adding a modal message uploading the data filled by user
    modalTextEl.innerHTML=`
    <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="upload-text">
        Uploading your data to the dark web...
    </p>
</div>`

    //setting timout to change the p in upload text to "making sales" after 1.5 sec
  setTimeout(function(){
    document.getElementById('upload-text').innerText = `Making the sale...`
        }, 1500)
       //setting timout to change the p to this message after 1.5 sec  
        setTimeout(()=>{
         document.getElementById('modal-inner').innerHTML= `
         <h2>Thanks <span class="modal-display-name">${userName}</span>, you sucker! </h2>
         <p>We just sold the rights to your eternal soul.</p>
         <div class="idiot-gif">
             <img src="images/pirate.gif">
         </div>
          ` 
         // Making that button become usable when the final modal message has been displayed to the user.
         // by now enabling the user to be able to close the modal using the X button
            closeModalBtn.disabled=false
        },3000)

})
//event listener to set once user hovers to decline button the buttons are swapped
  declineBtn.addEventListener("mouseenter",()=>{
     modalChoiceBtns.classList.toggle("modal-choice-btns-reverse")   
  })


