// Responsive Menu
$(document).ready(function() {
	$('.menu-button').click(function() {
        $('.mobile-nav').addClass('active');        
    });
	$('.close-icon').click(function() {
        $('.mobile-nav').removeClass('active');        
    });
	$('.menu-item-has-children').append('<span class="toggle-menu"></span>');
	$('.menu-item-has-children .toggle-menu').click(function() {
        $(this).parent().toggleClass('active');
		$(this).toggleClass('open');
    });
});

// Accordion
$(document).ready(function() {
	$( "#custom_accordion" ).accordion({
		  heightStyle: "content"
	});
});
// Standard Order Function
function GenerateStandardOrderLink(product_type_id, product_name,total, quantity , words , deadline) {
	var sid = '1412583';
	var source_id = '1';
	var urgent = 'standard';
	var query = product_type_id + ";" + source_id + ";" + product_name + ";" + total+";"+quantity+";"+words+";"+deadline+";"+urgent ;
	  $.get('/security.php?data=' + query, function (data) {
		document.location = "https://clients.contentdevelopmentpros.com/cdporder.aspx?data=" + data;
	});
}
// Monthly Order Function
function GenerateMonthlyOrderLink(product_type_id, product_name,total, quantity , words , deadline) {
	var sid = '1412583';
	var source_id = '1';
	var urgent = 'standard';
	var query = product_type_id + ";" + source_id + ";" + product_name + ";" + total+";"+quantity+";"+words+";"+deadline+";"+urgent ;
	  $.get('/security.php?data=' + query, function (data) {
		document.location = "https://clients.contentdevelopmentpros.com/cdporder.aspx?data=" + data+"&recurring=yes";
	});
}
//Validate
function validate(evt) {
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode(key);
	var regex = /[0-9]|\./;
	if (!regex.test(key)) {
		theEvent.returnValue = false;
		if (theEvent.preventDefault) theEvent.preventDefault();
	}
}
// Sample Tab
function openCity(evt, cityName) {
 var i, tabcontent, tablinks;
 tabcontent = document.getElementsByClassName("tabcontent");
 for (i = 0; i < tabcontent.length; i++) {
	 tabcontent[i].style.display = "none";
 }
 tablinks = document.getElementsByClassName("tablinks");
 for (i = 0; i < tablinks.length; i++) {
	 tablinks[i].className = tablinks[i].className.replace(" active", "");
 }
 document.getElementById(cityName).style.display = "block";
 evt.currentTarget.className += " active";
}
// Form 2
function Validate2() {
    var flag = true;
    var Name = document.getElementById("Name_il").value;
    var CompanyName = document.getElementById("CompanyName_il").value;
    var Numb = document.getElementById("Number_il").value;
    var Email = document.getElementById("Email_il").value;
    var Website = document.getElementById("Website_il").value;
	var Budget = document.getElementById("Budget_il").value;
    var RequiredServices = document.getElementById("RequiredServices_il").value;
    var ctry = document.getElementById("country_il").value;
    var Details = document.getElementById("Details_il").value + "\n" + "Budget:" + Budget;
    var Subject = document.getElementById("Subject_il").value;
    var VisitorID = readCookie("VisitorID");
		var gclidData = document.getElementById("gclid_field").value;	
	var currentURL = $(location).attr("href");
    var Source = 6;
    $(document).ready(function() {
        $(".form-submit-btn").append(
            '<img src="/images/spinner.gif" class="loader-img" style="display: none;">'
        );
    });
    if (Name == "" || Email == "" || Details == "") {
        flag = false;
    }
    if (flag) {
        var code = $("#form1 input[name='code']").val();
        if ($("#userCaptcha_il").val() == code) {
            jQuery(".form-submit-btn").addClass("loading");
            window.location =
                "https://clients.contentdevelopmentpros.com/proposal_submit.aspx?Name=" +
                Name +
                "&Subject=" +
                Subject +
                "&CompanyName=" +
                CompanyName +
                "&Number=" +
                Numb +
                "&Email=" +
                Email +
                "&Website=" +
                Website +
                "&RequiredServices=" +
                RequiredServices +
                "&Source=" +
                Source +
                "&Country=" +
                ctry +
                "&Details=" +
                Details +
                "&VisitorID=" +
                VisitorID + "&gclidData=" + gclidData + "&currentURL=" + currentURL;
        } else {
            $("#captcha_err_il").html('<img src="/new-assets/images/incorrect.webp" height="20px" width="20px">');			
        }
    } else {
        alert("One or more required field(s) are empty. \n\nRequired fields are: \n\nName \n\nEmail address \n\nProject details");
    }
}
// Captcha 2
function get_captcha_2() {
    var captcha = Math.floor(Math.random() * 8888) + parseFloat("1111");	
	$("#captcha_il").append('<span class="code1">' + captcha + '</span>');
	//console.log(captcha);
    $("#userCaptcha_il").val(captcha);
}


$(document).ready(function() {

   $(window).width() < 992 && ($(".solutionRange").addClass("owl-carousel"), $(".solutionRange").owlCarousel({
      loop: !0,
      nav: !0,
      mouseDrag: !1,
      autoplay: !1,
      autoplayTimeout: 3e3,
      autoplayHoverPause: !0,
      dots: !1,
      items: 3,
      autoHeight: !1,
      responsive : {
    // breakpoint from 0 up
    0 : {
        items: 1,
    },
    // breakpoint from 768 up
    768 : {
        items: 3,
    }
}
   }));
   
      $(window).width() < 992 && ($(".slider-mob").addClass("owl-carousel"), $(".slider-mob").owlCarousel({
      loop: false,
      nav: !0,
      mouseDrag: !1,
      autoplay: false,
      autoplayTimeout: 3e3,
      autoplayHoverPause: !0,
      dots: !1,
      items: 3,
      autoHeight: !1,
      responsive : {
    // breakpoint from 0 up
    0 : {
        items: 1,
    },
    // breakpoint from 768 up
    768 : {
        items: 3,
    }
}
   }));
});