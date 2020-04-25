<?php
	if (isset($_POST['submit'])) {
		$name = $_REQUEST['name'];
		$email = $_REQUEST['email'];
		$message = $_REQUEST['message'];

		if (empty($name)||empty($email)||empty($message)) {
				$empty_notice = "Please Fill Required Fields";
		}
		else {
			mail("banjir420@gmail.com", "Website Message", $message,"From: $name <$email>");
			echo '<script type="text/javascript">'.'alert("message sent sucessfull");'.'window.history.back();'.'</script>';
		}

	}
?>
