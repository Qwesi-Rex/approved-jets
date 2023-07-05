$(function() {

  var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 


		  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */

//   let selectHeader = select('#header')
//   if (selectHeader) {
//     const headerScrolled = () => {
//       if (window.scrollY > 100) {
//         selectHeader.classList.add('site-header-scrolled')
//       } else {
//         selectHeader.classList.remove('site-header-scrolled')
//       }
//     }
//     window.addEventListener('load', site-headerScrolled)
//     onscroll(document, site-headerScrolled)
//   }


		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('#mainer').hasClass('offcanvas-menu') ) {
					$('#mainer').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();
	

});

	// Carousel Examples ( Services Page)
	$(document).ready(function(){
		$('#carouselExampleControls-1, carouselExampleControls-2, carouselExampleControls-3, carouselExampleControls-4, carouselExampleControls-5, carouselExampleControls-6, carouselExampleControls-7, carouselExampleControls-8, carouselExampleControls-9, carouselExampleControls-10, carouselExampleControls-11, carouselExampleControls-12, carouselExampleControls-13, carouselExampleControls-14, carouselExampleControls-15, carouselExampleControls-16, carouselExampleControls-17, carouselExampleControls-18 ').carousel({
			interval: 2000,
			keyboard: false,
			pause: hover
		});
	})

	// Empty Legs

	$(document).ready(function(){
		$("#myInput").on("keyup",function(){
		var value = $(this).val().toLowerCase();
		$("#myTable tr").filter(function(){
		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
	
		});
	
		});
	
		});


		



	// MORE ABOUT PJ KEV

	$(document).ready(function() {
		$("#extra-kev").click(function() {
			$("#portfolio").toggle(1000);
		});
	});


	// Intitialize Slick
	
	// Flight Types Hidden Forms 

	$(document).ready(function() {
		$("#toggle").click(function() {
			$("#round-trip").show(1000);
		});
	});

	$(document).ready(function() {
		$("#multi-leg").click(function() {
			$("#booking_2").show(1000);
		});
	});

	$(document).ready(function() {
		$("#add_fl").click(function() {
			$("#booking_3").show(1000);
		});
	});

	$(document).ready(function() {
		$("#add_fl").click(function() {
			$("#booking_4").show(1000);
		});
	});

	$(document).ready(function() {
		$("#closer").click(function() {
			$("#round-trip").hide(1000);
		});
	});

	$(document).ready(function() {
		$("#closer_x").click(function() {
			$("#booking_2").hide(1000);
		});
	});

	$(document).ready(function() {
		$("#remove_fl1").click(function() {
			$("#booking_3").hide(1000);
		});
	});

	$(document).ready(function() {
		$("#remove_fl2").click(function() {
			$("#booking_4").hide(1000);
		});
	});
	

	
	  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

   /**
   * Disable AOS animation of mobile view
   */
  AOS.init({disable: 'mobile'});
	

   /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });


	
// Auto-complete Helpers

const DEFAULTS = {
	treshold: 2,
	maximumItems: 5,
	highlightTyped: true,
	highlightClass: 'text-primary',
	label: 'label',
	value: 'value',
	showValue: false,
  };
  
  class Autocomplete {
	constructor(field, options) {
	  this.field = field;
	  this.options = Object.assign({}, DEFAULTS, options);
	  this.dropdown = null;
  
	  field.parentNode.classList.add('dropdown');
	  field.setAttribute('data-bs-toggle', 'dropdown');
	  field.classList.add('dropdown-toggle');
  
	  const dropdown = ce(`<div class="dropdown-menu"></div>`);
	  if (this.options.dropdownClass)
		dropdown.classList.add(this.options.dropdownClass);
  
	  insertAfter(dropdown, field);
  
	  this.dropdown = new bootstrap.Dropdown(field, this.options.dropdownOptions);
  
	  field.addEventListener('click', (e) => {
		if (this.createItems() === 0) {
		  e.stopPropagation();
		  this.dropdown.hide();
		}
	  });
  
	  field.addEventListener('input', () => {
		if (this.options.onInput)
		   his.options.onInput(this.field.value);
		this.renderIfNeeded();
	  });
  
	  field.addEventListener('keydown', (e) => {
		if (e.keyCode === 27) {
		  this.dropdown.hide();
		  return;
		}
		if (e.keyCode === 40) {
		  this.dropdown._menu.children[0]?.focus();
		  return;
		}
	  });
	}
  
	setData(data) {
	  this.options.data = data;
	  this.renderIfNeeded();
	}
  
	renderIfNeeded() {
	  if (this.createItems() > 0)
		this.dropdown.show();
	  else
		this.field.click();
	}
  
	createItem(lookup, item) {
	  let label;
	  if (this.options.highlightTyped) {
		const idx = item.label.toLowerCase().indexOf(lookup.toLowerCase());
		const className = Array.isArray(this.options.highlightClass) ? this.options.highlightClass.join(' ')
		  : (typeof this.options.highlightClass == 'string' ? this.options.highlightClass : '');
		label = item.label.substring(0, idx)
		  + `<span class="${className}">${item.label.substring(idx, idx + lookup.length)}</span>`
		  + item.label.substring(idx + lookup.length, item.label.length);
	  } else {
		label = item.label;
	  }
  
	  if (this.options.showValue) {
		label += ` ${item.value}`;
	  }
  
	  return ce(`<button type="button" class="dropdown-item" data-label="${item.label}" data-value="${item.value}">${label}</button>`);
	}
  
	createItems() {
	  const lookup = this.field.value;
	  if (lookup.length < this.options.treshold) {
		this.dropdown.hide();
		return 0;
	  }
  
	  const items = this.field.nextSibling;
	  items.innerHTML = '';
  
	  const keys = Object.keys(this.options.data);
  
	  let count = 0;
	  for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		const entry = this.options.data[key];
		const item = {
			label: this.options.label ? entry[this.options.label] : key,
			value: this.options.value ? entry[this.options.value] : entry
		};
  
		if (item.label.toLowerCase().indexOf(lookup.toLowerCase()) >= 0) {
		  items.appendChild(this.createItem(lookup, item));
		  if (this.options.maximumItems > 0 && ++count >= this.options.maximumItems)
			break;
		}
	  }
  
	  this.field.nextSibling.querySelectorAll('.dropdown-item').forEach((item) => {
		item.addEventListener('click', (e) => {
		  let dataLabel = e.target.getAttribute('data-label');
		  let dataValue = e.target.getAttribute('data-value');
  
		  this.field.value = dataLabel;
  
		  if (this.options.onSelectItem) {
			this.options.onSelectItem({
			  value: dataValue,
			  label: dataLabel
			});
		  }
  
		  this.dropdown.hide();
		})
	  });
  
	  return items.childNodes.length;
	}
  }
  
  /**
   * @param html
   * @returns {Node}
   */
  function ce(html) {
	let div = document.createElement('div');
	div.innerHTML = html;
	return div.firstChild;
  }
  
  /**
   * @param elem
   * @param refElem
   * @returns {*}
   */
  function insertAfter(elem, refElem) {
	return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
  }
  