/* YOU ARE IN: js/script.js */
(function(){  // PROTECT THE LEMMINGS


console.log("that's all folks");


// F R E E W A L L

function initFreewall() {
	var wall = new freewall("#freewall");         

	wall.reset({
		selector: '.brick',
		animate: true,
		cellW: 250,
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
			$('.spinner').addClass('disp-none');
			setTimeout(function() {
				images.css({visibility: 'visible'});
				wall.fitWidth();
			}, 1);
		}
	});
}
initFreewall();


// H A R V E S T  C H O S E N
function initChosen() {
	$("#artist-jump").chosen({
		search_contains: true,
		width: "100%",
		no_results_text: "We couldn't find an artist named"
	});
<<<<<<< HEAD
	$('#artist-jump').on('change', function(evt, params) {
		if(document.getElementById('artist-jump').value){
			window.location.href = document.getElementById('artist-jump').value;
		}
  	});
=======
>>>>>>> e7f7462b4936d3cd384ef85a7f0f840b470dc639
	$("#state").chosen({
		search_contains: true,
		width: "100%",
		no_results_text: "We couldn't find a state called"
	});
	$("#artists-of-interest").chosen({
		search_contains: true,
		width: "100%",
		placeholder_text_multiple: "Select Artist(s)",
		no_results_text: "We couldn't find an artist named"
	});
	$("#works-of-interest").chosen({
		search_contains: true,
		width: "100%",
		placeholder_text_multiple: "Select Work(s)",
		no_results_text: "We couldn't find an artist named"
	});
}
initChosen();


// G E N E R A L  F O R M S
// function submitForm() {
// 	var submit = $( '.submit-button' );
// 	if ( submit.length == 0 ) return false;

// 	submit.click(
// 		function( event ) {
// 			event.preventDefault();

// 			var form = $( '#email-form' );
// 			alert('about to submit, yo');
// 			form.submit();
// 		}
// 	);
// }	



// P A R S L E Y  V A L I D A T I O N  +  F O R M  S U B M I T
function submitParsley() {
	var form = $( '#email-form' );
	var confirmMsg = $( '#submit-confirm' );
	var errorMsg = $( '#submit-error' );
	var formCont = $( '#email-form' )

	confirmMsg.addClass( 'disp-none' );
	errorMsg.addClass( 'disp-none' );
	
	if ( form.length == 0 ) return;
	// 	alert('1')
	
	$( '#submit' ).click( function( e ) {
		var emailFrom = $( '#email_from' ).val()
		, emailSubj = $( '#email_subject' ).val()
		, emailTo = $( '#email_to' ).val()
		, emailText = "First Name: " + $( '#firstname' ).val() + "\n" +
			"Last Name: " + $( '#lastname' ).val() + "\n" +
			"Email: " + $( '#email_from' ).val() + "\n" +
			"Phone: " + $( '#phone' ).val() + "\n" +
			"Address Line 1: " + $( '#address1' ).val() + "\n" +
			"Address Line 2: " + $( '#address2' ).val() + "\n" +
			"City: " + $( '#city' ).val() + "\n" +
			"State: " + $( '#state' ).val() + "\n" +
			"Zip: " + $( '#zip' ).val() + "\n" +
			"Artist(s) of Interest: " + $( '#artists-of-interest' ).val() + "\n" +
			"Work(s) of Interest: " + $( '#works-of-interest' ).val() + "\n" +
			"Subscribe to Newsletter: " + $( '#subscribe' ).is( ':checked' ) + "\n" +
			"Additional Comments: " + "\n" +
			$( '#comments' ).val();

        e.preventDefault();
        if ( form.parsley('validate') ) {
            // alert('about to submit');
            // do ajax here  
			$.ajax({
				type: "POST",
				url: 'http://projects.katietully.com/stewartstewart/email.php',
				data: {
					email_to: emailTo
					, email_subject: emailSubj
					, email_message: emailText
					, email_from: emailFrom
				},
				success: function( data ) { console.log( data ); }
				// if ( data == "1" )
			});

			$.post("email.php", $(this).serialize());

			confirmMsg.removeClass('disp-none');
			formCont.addClass('disp-none');
			// alert('after submit');   
        } else {
        	errorMsg.removeClass('disp-none');
        	// alert('not validated');
        }
	});
}
submitParsley();





})();

