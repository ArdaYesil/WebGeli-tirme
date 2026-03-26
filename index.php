<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php 
	include 'baglantı.php';
	session_start();
	ob_start();
	?>
	<title>Blog Tasarım</title>
	<script type="text/javascript" src="jquery-3.6.3.js"></script>
	<script type="text/javascript" src="jquery-3.6.3.min.js"></script>
	<script type="text/javascript" src="script.js"></script>
	<link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="style1.css">
	<link rel="icon" href="http:image/icon.png" type="image/x-icon" />
	<link rel="stylesheet" type="text/css" href="cdnjs.cloudflare.com_ajax_libs_animate.css_4.1.1_animate.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>
<body>
	<form action="" method="POST">
 	<div id="container">
 		<div class="menu" >
 			<div id="gif">
 				<img src="image/mGiriş2.gif">
 			</div>
 			

 		</div><!--Menu Div Bitişi -->
 					<?php 

 					@$tema=$_GET['tema'];
 					switch ($tema){
 						case 'aydinlik':
 							include 'aydinlikmenu.php';
 							break;
 						case 'karanlik':
 							include 'karanlikmenu.php';
 							break;
 						default:
 							include 'aydinlikmenu.php';
 							break;
 					}
 					 ?>

 	
 			
 			<?php 
 			@$sayfa=$_GET['sayfa'];
 			
					if($sayfa=="panel")
					{
						
					}
					else
					{
						switch ($tema){
                        case 'aydinlik':
                          	  echo '<div class="content" id="aydınlıkcontent">';
                           			 break;
                        case 'karanlik':
                         	   echo '<div class="content" id="karanlıkcontent">';
                         			   break;
                        default:
                            echo '<div class="content" id="aydınlıkcontent">';
                           	 break;
                    }
					}
                        


 			switch ($tema){
 			case 'aydinlik':
 				switch ($sayfa) {
 				case 'bilgilendirme':
 					include 'bılgı.php';
 					break;
 				case 'hakkında':
 					include 'hakkında.php';
 					break;
				case 'ayarlar':
					include 'ayarlar.php';
					break;
					case 'cikis':
						include 'cikis.php';
						header('Refresh:0;url=index.php?tema=aydinlik&sayfa');
						break;
					case 'panel':
						include 'panel.php';
						break;
 				default:
 					include 'default.php';
 					break;
 			}
 				break;


 			case 'karanlik':
 				switch ($sayfa) {
 				case 'bilgilendirme':
 					include 'bılgı.php';
 					break;
 				case 'hakkında':
 					include 'hakkında.php';
 					break;
				case 'cikis':
					include 'cikis.php';
					header('Refresh:0;url=index.php?tema=karanlik&sayfa');
					break;
 				default:
 					include 'default.php';
 					break;
 			}
 				break;
				 default:
				 include 'default.php';
				 break;
 			}
 				

 		
 		
			if($sayfa=="panel")
			{

			}
			else{
				echo '</div><!--Content Div Bitişi -->';
			}
 		
 		
 					switch ($tema){
 						case 'aydinlik':
 							include 'aydinlikfooter.php';
 							break;
 						case 'karanlik':
 							include 'karanlikfooter.php';
 							break;
 						default:
 							include 'aydinlikfooter.php';
 							break;
 					}


 		 ?>

 	</div><!--Container Div Bitişi --><?php 
ob_end_flush(); 
?>
 	</form>
 	

</body>
</html>