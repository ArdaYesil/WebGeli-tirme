bilgi.php
        

	<br/><div class="kutu" id="kutu" onclick="renkDegistir('black')">
</div>
<button type="button" onclick="renkDegistir('red')">Kırmızı</button>
<button type="button" onclick="renkDegistir('blue')">Mavi</button>
<button type="button" onclick="renkDegistir('green')">Yeşil</button>
<button type="button" onclick="darkmode()">Deneme</button>


        <style type="text/css">
        	.box{
background-color: red;
color: white;
border-radius: 25tp;
}
.yazı{
	width: 200px;
	padding: 10px;
	border: 1px solid black;
	margin-top: 20px;
}
.btn1,.btn2{
	border-radius: 10px;
	text-decoration: none;
	background-color: #369;
	padding: 10px;
	margin-top: 30px;

}
.kutu{
    width:250px; height:250px;
    background-color:red; 
}


        </style>
        <script>

function renkDegistir(renk)
{
   document.getElementById("kutu").style.background=renk;
}



</script>
