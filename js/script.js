function login() {
	if( document.loginForm.user_name.value == "" )
	{
		document.getElementById("login_warning").innerHTML="Warning: Provide a user name first!" ;
		document.getElementById("login_warning").style.color="red";
		document.loginForm.user_name.focus() ;
		return false;
	}
	
	if( document.loginForm.pass.value == "" )
	{
		document.getElementById("login_warning").innerHTML="Warning: Provide your Password";
		document.getElementById("login_warning").style.color="red";
		document.loginForm.pass.focus() ;
		return false;
	}
}
