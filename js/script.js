function login() {
	if( document.loginForm.user_name.value == "" )
	{
		alert( "Please provide User Name!" );
		document.loginForm.user_name.focus() ;
		return false;
	}
	
	if( document.loginForm.pass.value == "" )
	{
		alert( "Please provide Password!" );
		document.loginForm.pass.focus() ;
		return false;
	}
}
