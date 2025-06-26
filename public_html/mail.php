<?php
if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])){
$to = 'inspire.it@inspirationcs.ca';
$subject = 'ICS Get in touch';
$from = 'inspire.it@inspirationcs.ca';
 
// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
 
// Create email headers
$headers .= 'From: Inspiration Consultant Service <inspire.it@inspirationcs.ca>'."\r\n".
    'Reply-To: inspire.it@inspirationcs.ca'."\r\n" .
	'Bcc:  Saravanan.presidency@gmail.com'."\r\n" .
    'X-Mailer: PHP/' . phpversion();
 
// Compose a simple HTML email message
$message = '
<html>
<head>
  <title></title>
</head>
<body>
  <p>Inspiration Consultant Service get in touch with us</p>
  <table>
    <tr>
      <td>Name :</td><td>'.$_POST["name"].'</td>
    </tr>
    <tr>
      <td>Email :</td><td>'.$_POST["email"].'</td>
    </tr>
    <tr>
      <td>Phone :</td><td>'.$_POST["phone"].'</td>
    </tr>
    <tr>
      <td>Message :</td><td>'.$_POST["message"].'</td>
    </tr>	

  </table>
</body>
</html>
';
 
	// Sending email
	if(mail($to, $subject, $message, $headers)){
		echo '<h4 style="color: green; text-align: center;">Thank you for getting in touch with us.</h4>';
	} else{
		echo '<h4 style="color: red; text-align: center;">Mail not sent</h4>';
	}
} else {
	echo '<h4 style="color: red; text-align: center;">Mail not sent</h4>';
}
?>