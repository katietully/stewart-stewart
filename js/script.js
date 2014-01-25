/* YOU ARE IN: js/script.js */
(function(){  // PROTECT THE LEMMINGS


console.log("that's all folks");

// // M A S O N R Y
// var container = $('#container');
// var gridWidth = $('#container').width();
// // initialize
// container.masonry({
//   columnWidth: '.grid-sizer',
//   itemSelector: '.item',
//   // gutter: function (gridWidth) {
//   //       return gridWidth / 50;
//   //   };
//   gutter: 18
// });



// F R E E W A L L

function initFreewall() {
	var wall = new freewall("#freewall");         

	wall.reset({
		selector: '.brick',
		animate: true,
		cellW: cellWidth(),
		cellH: 'auto',
		onResize: function() {
			this.fitWidth();
		}
	});
 
    //     wall.fitWidth();
    // 
	var images = wall.container.find('.brick');
	var length = images.length;
	images.css({visibility: 'hidden'});
	images.find('img').load(function() {
		-- length;
		if (!length) {
			setTimeout(function() {
				images.css({visibility: 'visible'});
				wall.fitWidth();
			}, 1);
		}
	});
}
initFreewall();


// var downsize = true;
// var resizeTimeout;

// $(window).resize(function(){
// 	clearTimeout( resizeTimeout );
// 	resizeTimeout = setTimeout( function() {
// 		var newwidth = $(window).width();
// 		if ((newwidth<800 && downsize) || 
// 			(newwidth>=800 && !downsize)) {
// 			    //location.reload();
// 			wall.reset({
// 	            selector: '.brick',
// 	            animate: true,
// 	            cellW: cellWidth(),
// 				cellH: 'auto',
// 	            onResize: function() {
// 	                this.fitWidth();
// 	            }
// 	        });
// 	        wall.refresh();
// 	        console.log( cellWidth() );
// 	        console.log( '###HERE' );
// 			    downsize = !downsize;
// 		}
// 	}, 500 );


// });



function cellWidth() {
	var myWindow = $(window)
	if 	(myWindow.width()<800) {
		return 150;
	} else {
		return 250;
	}
}

// $(function() {
// 	app.setup({
// 		share: 1,
// 		color: 1,
// 		logo: 1,
// 		layout: 1,
// 		events: 1,
// 		methods: 1,
// 		options: 1,
// 		preload: 1
// 	});
// });

//$(function() {
  //    var wall = new freewall("#freewall");
      
  //    wall.fitWidth();
   // });


// // W A T E R F A L L
// function initWaterfall() {
// $(function(){
// 	$(".container").waterfall();
// });
// }
// initWaterfall();



// H A R V E S T  C H O S E N
function initChosen() {
	$("#artists-of-interest").chosen({
		search_contains: true,
		width: "100%",
		placeholder_text_multiple: "Select Artist(s)",
		no_results_text: "We couldn't an artist named"
	});
	$("#works-of-interest").chosen({
		search_contains: true,
		width: "100%",
		placeholder_text_multiple: "Select Artist(s)",
		no_results_text: "We couldn't an artist named"
	});
	$('.form-field').chosen({
		width: "100%",
	});
}
initChosen();

function submitForm() {
	var submit = $( '.submit-button' );
	if ( submit.length == 0 ) return false;

	submit.click(
		function( event ) {
			event.preventDefault();

			var form = $( '#email-form' );
			alert('about to submit, yo');
			form.submit();
		}
	);
}	
submitForm();

})();

