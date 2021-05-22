<!DOCTYPE HTML> <!-- 브란도 트레버 원페이지형 -->
<html lang='ko'>
<head>
	<title>BRANDO TRAVEL FORM</title>
	<meta charset='utf-8'>
	
	<link rel='stylesheet' href='css/fonts.css'>
	<link rel='stylesheet' href='css/icons.css'>
	<link rel='stylesheet' href='css/reset.css'>
	<link rel='stylesheet' href='css/style-form.css'>
</head>
<body>
	<h1 class='header-text'>전송이 성공적으로 수행 되었습니다.</h1>
	<div class='form-wrap'>
		<p>이름   	: <? echo $_POST[name]; 	?></p>
		<p>이메일 	: <? echo $_POST[email]; 	?></p>
		<p>메세지 	: <? echo $_POST[message];	?></p>
	</div>
	<p class='homeBtn-wrap'><a href='index.html'>홈으로 이동</a></p>
</body>
</html>














