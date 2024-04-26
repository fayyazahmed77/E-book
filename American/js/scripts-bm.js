// Captcha
function get_captcha() {
    var captcha = Math.floor(Math.random() * 8888) + parseFloat("1111");	
	$("#captcha").append('<span class="code1">' + captcha + '</span>');
    $("#userCaptcha").val(captcha);
}
get_captcha();
// Footer Form Captcha
function get_captcha_footer() {
    var captcha = Math.floor(Math.random() * 8888) + parseFloat("1111");	
	$("#NF_captcha").append('<span class="code1">' + captcha + '</span>');
    $("#NF_userCaptcha").val(captcha);
}
get_captcha_footer();
$(function () {
  $.getJSON(
	"//extreme-ip-lookup.com/json/?key=7LiRjritSbqVKTYy8Anc",
	function (json) {
	  if (json.country && json.city) {
		$("#country").val("Location " + json.query + ": " + json.city + ", " + json.country + "");
		$("#country_il").val("Location " + json.query + ": " + json.city + ", " + json.country + "");
		$("#NF_country").val("Location " + json.query + ": " + json.city + ", " + json.country + "");
	  }
	}
  );
});
// Read Cookie
function readCookie() {
    return null;
}
// Form
function Validate() {
    var flag = true;
    var Name = document.getElementById("Name").value;
    var CompanyName = document.getElementById("CompanyName").value;
    var Numb = document.getElementById("Number").value;
    var Email = document.getElementById("Email").value;
    var Website = document.getElementById("Website").value;
    var RequiredServices =
        document.getElementById("RequiredServices").value;
    var ctry = document.getElementById("country").value;
    var Details = document.getElementById("Details").value;
    var Subject = document.getElementById("Subject").value;
    var VisitorID = readCookie("VisitorID");
    var Source = 6;
		var gclidData = document.getElementById("gclid_field").value;	
	var currentURL = $(location).attr("href");
    $(document).ready(function() {
        $(".form-submit-btn").append(
            '<img src="/images/spinner.gif" class="loader-img" style="display: none;">'
        );
    });
    if (Name == "" || Email == "" || Details == "") {
        flag = false;
    }
    if (flag) {
        var code = $("#form input[name='code']").val();
        if ($("#userCaptcha").val() == code) {
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
            $("#captcha_err").html('<img src="/new-assets/images/incorrect.webp" height="20px" width="20px">');
			
        }
    } else {
        alert("One or more required field(s) are empty. \n\nRequired fields are: \n\nName \n\nEmail address \n\nProject details");
    }
}

// footer-Form
function Validate_footer_form() {
    var flag = true;
    var Name = document.getElementById("NF_Name").value;
    var CompanyName = '';
    var Numb = document.getElementById("NF_Number").value;
    var Email = document.getElementById("NF_Email").value;
    var Website = '';
    var RequiredServices = document.getElementById("RServicesRFPFooter").value;
    var ctry = document.getElementById("NF_country").value;
    var Details = document.getElementById("NF_Details").value;
    var Subject = document.getElementById("NF_Subject").value;
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
        var code = $("#NF_form input[name='NF_code']").val();
        if ($("#NF_userCaptcha").val() == code) {
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
            $("#NF_captcha_err").html('<img src="/new-assets/images/incorrect.webp" height="20px" width="20px">');
			
        }
    } else {
        alert("One or more required field(s) are empty. \n\nRequired fields are: \n\nName \n\nEmail address \n\nProject details");
    }
}
// Services Popup
$(document).ready(function (e) {
	$(".our-services").lightWeightPopup({ title: "All Services", top: 50, width: "96%", maxWidth: '910px' });
});
// Popup
$(".fancybox").fancybox();
// Responsive Menu
$('.mobile-nav').click(function() {
	$('#menu').toggleClass('active'); 
	$(this).toggleClass('open');
});
$('.select ul li.option').click(function() {
	$(this).siblings().addBack().children();
	var a = $(this).siblings().toggle();    
	$(this).parent().prepend(this);
});
$('.option.us').click(function() {
	$('#us').show();
	$('#uk').hide();
});
$('.option.uk').click(function() {
	$('#us').hide();
	$('#uk').show();
});
//Smooth Scroll
// $('a[href*="#"]:not(.tab-btn)').on('click', function (e) {
// 	e.preventDefault();	
// 	$('html, body').animate({
// 		scrollTop: $($(this).attr('href')).offset().top
// 	}, 500);
// });