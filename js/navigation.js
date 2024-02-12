function sendEmail2(name, email, mobile, role, institution, messageDetails, location) {
  const subject = 'email subject';
  var mailtoLink = 'mailto:fatmsalah767@gmail.com' +
    '?subject=' + encodeURIComponent(subject) +
    '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nPhone number: ' + mobile + '\nRole: ' + role + '\nInstitution: ' + institution + '\nMessage Details: ' + messageDetails + 'Location: ' + location);
  
}
 // Get the user's location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      var location = 'Latitude: ' + latitude + ', Longitude: ' + longitude;

      // Call the updated function with the user's location
      sendEmail2('John Doe', 'johndoe@example.com', '1234567890', 'Role', 'Institution', 'Message', location);
    });
  } else {
    console.log('Geolocation is not supported by this browser.');
  }

const tabs = document.querySelectorAll(".tab");
const tabContainer = document.querySelector(".tab-nav-container");  
const activeElement=document.querySelector('.tab.active');
if (activeElement) {
  const containerWidth = tabContainer.offsetWidth;
  const activeElementOffset = activeElement.offsetLeft;
  const activeElementWidth = activeElement.offsetWidth;

  const scrollPosition = activeElementOffset - (containerWidth / 2) + (activeElementWidth / 2);
  
  tabContainer.scrollTo({
    left: scrollPosition,
    behavior: 'smooth'
  });
}

tabs.forEach((clickedTab) => {
  clickedTab.addEventListener('click', () => {
    // Remove "active" class from all tabs
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    clickedTab.classList.add("active");
    let scrollPosition; 
    //  if (clickedTab.offsetLeft + clickedTab.offsetWidth >= tabContainer.clientWidth + tabContainer.scrollLeft) { 
      scrollPosition =  clickedTab.offsetLeft - (tabContainer.offsetWidth / 2) + (clickedTab.offsetWidth / 2) ;
            console.log('STR');
    // }  else{
    //   return
    //   // scrollPosition=0
    // }
    // Scroll to the calculated position
    tabContainer.scrollTo({
      left: scrollPosition - 40 ,
      behavior: 'smooth'
    });
  });
}); 




