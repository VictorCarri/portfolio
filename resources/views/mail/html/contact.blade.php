<!DOCTYPE html>
<html>
	<head>
		<title>Contact Form Email</title>
	</head>
	<body>
		This is an email from <a href="mailto:{{ $from }}">{{ $name }}</a>
		<br />
		{{ $message }}
	</body>
</html>
