 
 const form =document.getElementById('emailForm');
form.addEventListener('submit', function(event) {
event.preventDefault(); // Prevent form submission 
changeContentBtn(false);
var nameInput = document.getElementsByName('name')[0];
var emailInput = document.getElementsByName('email')[0];
var roleInput = document.getElementsByName('Role')[0];
var institutionInput = document.getElementsByName('institution')[0];
var mobileInput = document.getElementsByName('mobile')[0];
var messageDetailsInput = document.getElementsByName('message_details')[0];
console.log(roleInput);
console.log(institutionInput);
var name = nameInput.value;
var email = emailInput.value;
var role = roleInput.value;
var institution = institutionInput.value;
var mobile=mobileInput.value || 'not inserted';
var messageDetails=messageDetailsInput.value;
console.log(role);
// Send email
sendEmail(name, email,mobile, role, institution,messageDetails);

});

function sendEmail2(name, email,mobile, role, institution,messageDetails) {
const subject='email subject';
var mailtoLink = 'mailto:fatmsalah767@gmail.com' +
'?subject=' + encodeURIComponent(subject) +
'&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email+'\n Phone number : ' + mobile + '\nRole:  ' + role+'\n Institution : ' + institution +'\n Message Details : ' + messageDetails);
window.location.href = mailtoLink;
}
 

// close-contact
function closeContact(){
    const parentElement=document.getElementById('parent'); 

    parentElement.classList.add('hide-contact');
    parentElement.classList.remove('show-contact')  ;
    let parentElementDiv=document.getElementById('parent'); 
    
  let parentContactElement=parentElementDiv.parentElement;
  while(parentContactElement &&!parentContactElement.id){
    parentContactElement=parentContactElement.parentElement
  }
  const parentContactElementH2=parentContactElement.getElementsByTagName('h2')[0];
  const parentContactElementBtn=parentContactElement.getElementsByTagName('button')[0];
  const parentContactElementContainer=parentContactElement.getElementsByClassName('container')[0];
  parentContactElementH2?.classList.remove('hide');
  parentContactElementBtn?.classList.remove('hide'); 
  parentContactElementContainer?.classList.remove('hide'); 
  parentContactElement?.classList.remove('padding-0'); 
  while(!parentContactElement.id){
   parentContactElement= parentContactElement.parentElement
  }
  console.log(parentContactElement);
   
}
// function closeContact() {
//   const parentElement = document.getElementById('parent');
//   parentElement.classList.add('hide-contact');
//   parentElement.classList.remove('show-contact');

//   const parentContactElement = parentElement.closest('[id]');
//   const parentContactElementH2 = parentContactElement.querySelector('h2');
//   const parentContactElementBtn = parentContactElement.querySelector('button');
//   const parentContactElementContainer = parentContactElement.querySelector('.container');

//   parentContactElementH2?.classList.remove('hide');
//   parentContactElementBtn?.classList.remove('hide');
//   parentContactElementContainer?.classList.remove('hide');
//   parentContactElement?.classList.remove('padding-0');

//   console.log(parentContactElement);
// }
function openContact(){
    const parentElement=document.getElementById('parent'); 
    parentElement.classList.add('show-contact');
    parentElement.classList.remove('hide-contact') ;  
    // scrollToTop()
    console.log(parentElement.parentElement.id);
    scrollToElement('parent',`${parentElement.parentElement.id}`)

}



function sendEmail(name, email,mobile, role, institution,messageDetails) {
    // Replace these values with your own
const service_id = 'service_8k2wsaf';
const template_id = 'template_wxlspqk';
const public_key = '-LMa6RybqWxaFObf2';
 
  
  // Prepare the email parameters
  const templateParams = {
    user_email: email, 
    user_name:name,
    phone_number:mobile,
    user_role:role,
    user_instituation:institution,
    message:messageDetails
  }; 

  // Send the email
  emailjs.send(service_id, template_id, templateParams, public_key)
    .then(function(response) {
      console.log('Email sent successfully!', response.status, response.text);
      alert('Email sent successfully!');
        
    }, function(error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending the email.');
    }).then(()=>{
        changeContentBtn(true);
    }); 
    }
 
    function changeContentBtn(appearContent=true){
        const sendEmailBtn = document.getElementById('emailForm').getElementsByClassName('button')[0];
    const btnContent=sendEmailBtn.querySelector('span')
    const spinnerDiv=sendEmailBtn.querySelector('div')  
        if(appearContent){
            btnContent.classList.add('show')
            btnContent.classList.remove('hide');
            spinnerDiv.classList.add('hide')
            spinnerDiv.classList.remove('show')
        }else{
            btnContent.classList.remove('show')
            btnContent.classList.add('hide');  
            spinnerDiv.classList.remove('hide')
            spinnerDiv.classList.add('show')
        }
    }
 
 //////////scroll all window
    function scrollToTop() { 
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
 

    /////////// scroll parent element only 
    function scrollToElement(elementId,parentElementId) {
      var element = document.getElementById(elementId);
      let parentElement=document.getElementById(parentElementId) 
      if (element) {
        var rect = element.getBoundingClientRect(); 
        parentElement.style.height=`${rect.height}px`; 
        var scrollTop =  document.documentElement.scrollTop; 
        var targetScrollTop = rect.top + scrollTop;
        
        window.scrollTo({
          top: targetScrollTop,
          behavior: "smooth"
        });
      }
    }
    function returnParentElementToDefaultHeight(parentElementId){
      let parentElement=document.getElementById(parentElementId)
      console.log(parentElement); 
      parentElement.style.height='max-content'
    }
