document.addEventListener("click", function (event) {
    var sidebarToggler = document.getElementById("sidebar_toggler");
    var burgerBtn = document.getElementById("burgerBtn").getElementsByTagName('img')[0];
    var mobOverlay = document.querySelector(".mob-overlay");
    var sidebarWrapper = document.querySelector(".sidebar-wrapper");
    var body = document.body;

    if (event.target === sidebarToggler || event.target.closest("#menuIcon")) {
        sidebarWrapper.classList.add("sidebar-show");
        mobOverlay.classList.add("active");
        body.classList.add("overflow__hidden");
    } else if (event.target === burgerBtn) {
        sidebarWrapper.classList.remove("sidebar-show");
        mobOverlay.classList.remove("active");
        body.classList.remove("overflow__hidden");
    } else if (event.target === mobOverlay) {
        sidebarWrapper.classList.remove("sidebar-show");
        mobOverlay.classList.remove("active");
    } 
});



//////////////////////////////////////////////select js 

(function ($) {

    $.fn.select3 = function (options) {
      var dataItems = [];
      var selectorID = '#' + this.attr('id');
  
      $(selectorID).find('option').each(function (index, element) { 
        if (element.text != '') {
          dataItems.push(element.text.trim());
        } else
        {
          dataItems.push(element.value.trim());
        }
  
      });
  
      var opts = $.extend({}, $.fn.select3.defaults, options);  
      var idDiv = this.attr('id') + 'searchSelect3';
      var idInput = this.attr('id') + 'searchSelect3_Input'; 
      var idDown = this.attr('id') + 'searchSelect3_Caret_Down';
      var idList = this.attr('id') + 'searchSelect3_List';
      var idListLi = this.attr('id') + 'searchSelect3_List_LI';
  
      var selectorDiv = '#' + this.attr('id') + 'searchSelect3';
      var selectorInput = '#' + this.attr('id') + 'searchSelect3_Input'; 
      var selectorDown = '#' + this.attr('id') + 'searchSelect3_Caret_Down';
      var selectorList = '#' + this.attr('id') + 'searchSelect3_List';
      var selectorListLi = '#' + this.attr('id') + 'searchSelect3_List_LI';
  
      var buildELement = $('<div class="searchSelect3" id="' + idDiv + '" ><input class="searchSelect3_Input" placeholder="' + opts.placeholder +  '" id="' + idInput + '"><span class="fa fa-caret-down searchSelect3_Caret_Down" id="' + idDown + '"></span></div>');
 
       if ($(selectorDiv).length > 0) {
        $(selectorDiv).remove();
      }
  
      this.after(buildELement); 
      var cache = {};
      var drew = false;
      this.hide();
      $(document).on('click', function (e) { 
        if ($(e.target).parent().is("li[id*='" + idListLi + "']") == false) {
          if ($(e.target).attr('id') != idInput && $(e.target).attr('id') != idDown) {
            $(selectorList).empty();
            $(selectorList).css('z-index', -1); 
          }
        }
  
      });
  
      var showList = function (query, valuee) { 
        if (query in cache) {
          results = cache[query];
        } else { 
          var results = $.grep(dataItems, function (item) {
            return item.search(RegExp(query, "i")) != -1;
          });
   
          cache[query] = results;
        }
   
        $(selectorList).css('z-index', opts.zIndex);
  
  
        if (drew == false) { 
          $(selectorInput).after('<ul id="' + idList + '" class="searchSelect3_List" style="z-index:' + opts.zIndex + '"></ul>');
  
          if (opts.width > 0) {
  
            $(selectorList).css('width', opts.width);
  
          }
  
          if (opts.widthList > 0)
          {
            $(selectorList).css('width', opts.widthList);
          }
  
          //Prevent redrawing/binding of list
          drew = true;
  
          //Bind click event to list elements in results
          $(selectorList).on("click", "li", function () {
            var nilai = $(this).text();
            $(selectorInput).val(nilai);
            $(selectorID).val(nilai);
            $(selectorList).empty(); 
            $(selectorList).css('z-index', -1);
            $(selectorID).change();
          });
  
  
        }
        //Clear old results
        else {
            $(selectorList).empty();
          }
  
        var counter = 0;
        //Add results to the list
        for (term in results) {
          counter++;
          $(selectorList).append("<li id=" + idListLi + counter + "><label>" + results[term] + "</label></li>");
        }
  
  
      };
  
  
  
      $(selectorInput).on('click', function (e) {
        var query = $(this).val();
  
        showList('', query);
   
      });
  
      $(selectorInput).on('keyup', function (e) {
        $(selectorList).empty();
        var query = $(selectorInput).val();
        showList(query, query);
   
  
        $(selectorID).change();
      });
  
      //bila key tab di tekan maka akan pindah ke DOM lain, maka dari itu mesti di HIDE LIST nya
      $(selectorInput).on('keydown', function (e) { 
        if (e.which == 9) {
          $(selectorList).empty();
          $(selectorList).css('z-index', -1); 
        }
      });
  
      $(selectorDown).on('click', function (e) {
        var query = $(this).val();
        if ($(selectorList).find('li').length == 0) {
          showList('', query);
        } else
        { 
          $(selectorList).empty();
          $(selectorList).css('z-index', -1);
        }
   
  
      });  
      return this;
    };
  
    $.fn.select3.defaults = {
      placeholder: "",
      zIndex: 1,
      defaultvalue: "",
      width: 0,
      widthList: 0 };
  
  
  })(jQuery);
  /* END select3.js */
  console.log($('#selectBankList')[0].name);
  
  $(document).ready(function (e) {
  
    $('#selectBankList').select3({ placeholder: `${$('#selectBankList')[0].name} * ` });
   
  });

