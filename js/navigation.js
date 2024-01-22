
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
      left: scrollPosition,
      behavior: 'smooth'
    });
  });
}); 

