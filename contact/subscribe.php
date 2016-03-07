<?php
	require_once 'MCAPI.class.php';
	$api = new MCAPI('6784b478298a46ab36a612aa46b8b62d-us1');
	$name = $_REQUEST[ 'contact-name' ];
	$email = $_REQUEST[ 'contact-email' ];
	$subject = $_REQUEST[ 'contact-subject' ];
	$message = $_REQUEST[ 'contact-message' ];
	$mail_subject = $subject . "( Customer Contact )";
	$message = "Name: ".$name." || Email: ".$email." || Subject: ".$subject." || Message: ".$message;
	//$merge_vars = array('FNAME'=>$_POST["fname"], 'LNAME'=>$_POST["lname"]);

	// Submit subscriber data to MailChimp
	// For parameters doc, refer to: http://apidocs.mailchimp.com/api/1.3/listsubscribe.func.php
	$retval = $api->listSubscribe( '6784b478298a46ab36a612aa46b8b62d-us1','831ab6ad71', $email, $message, 'html', false, true ,true, true);

	if ($api->errorCode){
		echo "Error in sending message !!! Please try again";
	} else {
		echo "Thank you <strong>$name</strong> for contacting with us !!!";
	}
?>
