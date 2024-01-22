
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





// Sample multi-dimensional array of objects
const multiArray =[
  {nam:'sdz'},
  [
     
[
  [{name:'sd'},
    [{ id: 'as', name: 'A-1-1', parent: 'P1' },
    { id: 'abc', name: 'B', parent: 'P2' }],
    { id: null, name: 'B-1', parent: 'P2' },
  ],
  [{name:'sd'},
    [{ id: null, name: 'A-2-1', parent: 'P1' },
    { id: null, name: 'A-2-1', parent: 'P1' },
    { id: 'abc', name: 'B', parent: 'P2' }]
  ],
  [{name:'skd'},
    { id: null, name: 'C-2-2', parent: 'P3' },
    { id: 'def', name: 'D', parent: 'P4' }
  ],
  [{name:'skd'},
    { id: 'j', name: 'C', parent: 'P3' },
    { id: null, name: 'D-2-3', parent: 'P4' }
  ], 
  [{name:'sd'},
    [{ id: null, name: 'A-2-4', parent: 'P1' },
    { id: 'abc', name: 'B', parent: 'P2' }]
  ],
  [{name:'skd'},
    { id: null, name: 'C-2-5', parent: 'P3' },
    { id: 'def', name: 'D', parent: 'P4' }
  ],
  [{name:'skd'},
    { id: 'j', name: 'C', parent: 'P3' },
    { id: null, name: 'D-2-6', parent: 'P4' }
  ]
]
  ], 
  [
    [{name:'sd'},
      [{ id: 'as', name: 'A-1-1', parent: 'P1' },
      { id: 'abc', name: 'B', parent: 'P2' }],
      { id: null, name: 'B-1', parent: 'P2' },
    ],
    [{name:'sd'},
      [{ id: null, name: 'A-2-1', parent: 'P1' },
      { id: null, name: 'A-2-1', parent: 'P1' },
      { id: 'abc', name: 'B', parent: 'P2' }]
    ],
    [{name:'skd'},
      { id: null, name: 'C-2-2', parent: 'P3' },
      { id: 'def', name: 'D', parent: 'P4' }
    ],
    [{name:'skd'},
      { id: 'j', name: 'C', parent: 'P3' },
      { id: null, name: 'D-2-3', parent: 'P4' }
    ], 
    [{name:'sd'},
      [{ id: null, name: 'A-2-4', parent: 'P1' },
      { id: 'abc', name: 'B', parent: 'P2' }]
    ],
    [{name:'skd'},
      { id: null, name: 'C-2-5', parent: 'P3' },
      { id: 'def', name: 'D', parent: 'P4' }
    ],
    [{name:'skd'},
      { id: 'j', name: 'C', parent: 'P3' },
      { id: null, name: 'D-2-6', parent: 'P4' }
    ]
  ]
   

]

function filterNestedArray1(arr, result = [], parentData = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      filterNestedArray(arr[i], result, parentData.concat(i));
    } else if (arr[i] && typeof arr[i] === 'object' && arr[i].id === null) {
      result.push({ data: arr[i], parent: [...parentData, i] });
    }
  }
  return result;
} 
////////////////////////2
function filterNestedArray2(arr, result = [], parentData = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      filterNestedArray(arr[i], result, parentData.concat(i));
    } else if (arr[i] && typeof arr[i] === 'object' && arr[i].id === null) {
      result.push({ data: arr, parent: parentData });
    }
  }
  return result;
}
////////////////////////3  return all parent
function filterNestedArray3(arr, result = []) {
  arr.forEach((item, index) => {
    if (Array.isArray(item)) {
      filterNestedArray(item, result);
    } else if (item && typeof item === 'object' && item.id === null) {
      // result.push({ parent: arr, data: item });
      result.push({ parent: arr});
    }
  }); 
  return result;
}
////////////////////////////////4
function filterNestedArray(arr, result = [], parentData = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      filterNestedArray(arr[i], result, parentData.concat(i)); 
    } else if (arr[i] && typeof arr[i] === 'object' && arr[i].id === null) {
      // result.push({ parent: arr, data: arr[i] });
      result.push({ parent: arr });
    }
  }
  return result;
}



const filteredNestedArray = filterNestedArray(multiArray);

// Log the filtered nested array
console.log(filteredNestedArray);
