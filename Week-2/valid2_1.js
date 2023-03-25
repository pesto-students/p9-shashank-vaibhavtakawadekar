function FormData(){
	/*var Title =
		document.forms.formdata.Title.value;*/
	var firstname =
		document.forms.formdata.First_Name.value;
	var lastname =
		document.forms.formdata.Last_Name.value;
	var email =
		document.forms.formdata.E_mail.value;
    var phone =
		document.forms.formdata.Mobile.value;
	var password =
		document.forms.formdata.Password.value;
	var country =
		document.forms.formdata.country_list.value;
	var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; //Javascript reGex for Email Validation.
	var regPhone=/^\d{10}$/;									 // Javascript reGex for Phone Number validation.
	var regName = /\d+$/g;								 // Javascript reGex for Name validation

    if(document.getElementById('salutation').checked == false) {   
        window.alert("radio button is not selected");   
    } 

	if (firstname == "" || regName.test(firstname)) {
		window.alert("Please enter your first name properly.");
		firstname.focus();
		return false;
	}

    if (lastname == "" || regName.test(lastname)) {
		window.alert("Please enter your last name properly.");
		lastname.focus();
		return false;
	}
	
	if (email == "" || !regEmail.test(email)) {
		window.alert("Please enter a valid e-mail address.");
		email.focus();
		return false;
	}
	
	if (password == "") {
		alert("Please enter your password");
		password.focus();
		return false;
	}

	if(password.length <6){
		alert("Password should be atleast 6 character long");
		password.focus();
		return false;

	}
	if (phone == "" || !regPhone.test(phone)) {
		alert("Please enter valid phone number.");
		phone.focus();
		return false;
	}

	if (country.selectedIndex == -1) {
		alert("Please enter your course.");
		what.focus();
		return false;
	}

	return true;
} 

