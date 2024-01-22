
// Function to check if all elements and their backgrounds are loaded
function checkAllLoaded() {
  var elements = document.getElementsByClassName('mark-background');
  var loadedCount = 0;

  if (elements.length === 0) {
    appearPageContent();
    return;
  }

  // Check if all elements and backgrounds are loaded
  function checkBackgroundLoad() {
    loadedCount++;
    if (loadedCount === elements.length) { 
      console.log('All elements and their backgrounds are loaded.');
      appearPageContent();
    }
  }

  // Loop through elements and attach onload event listener to each background image
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var backgroundImage = getComputedStyle(element).getPropertyValue('background-image');

    // Extract the URL of the background image
    // var imageUrl = backgroundImage.match(/url\(['"]?([^'"]+)['"]?\)/i)[1]; 
    var imageUrl = backgroundImage.match(/url\(['"]?(.*?)['"]?\)/i)[1];

    // Create a new Image object and attach the onload event listener
    var img = new Image();
    img.onload = checkBackgroundLoad;
    img.src = imageUrl;
  }
}

window.addEventListener("load", function() {
  console.log('loading....');
  checkAllLoaded();
});

function appearPageContent() {
  var spinner = document.getElementById("spinner");
  var imageContainer = document.getElementById("page");
  imageContainer.style.display = 'block';
  spinner.style.display = 'none';
}




customImage(); 
function customImage() {
  const svgImages = document.querySelectorAll('img[src$=".svg"]');
  const backgroundElements = document.querySelectorAll('.mark-background');
  customImageHrefData(svgImages,true)
  customImageHrefData(backgroundElements,false)
}

function customImageHrefData(elements, isImage) {
  for (let i = 0; i < elements.length; i++) {
    const xhr = new XMLHttpRequest();
    const imageUrl = isImage ? elements[i].src : elements[i].style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
    xhr.open('GET', imageUrl, true);

    xhr.onload = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const svgContent = xhr.responseText;
        const updatedSvgContent = svgContent.replace(/xlink:href="data:img/g, 'xlink:href="data:image');

        if (isImage) {
          elements[i].src = `data:image/svg+xml,${encodeURIComponent(updatedSvgContent)}`; 
        } else {
          elements[i].style.backgroundImage = `url('data:image/svg+xml,${encodeURIComponent(updatedSvgContent)}')`;
        }
      } else {
        console.error('Failed to load image:', imageUrl);
      }
    };

    xhr.onerror = function () {
      console.error('Error occurred while fetching:', imageUrl);
    };

    xhr.send();
  }
}