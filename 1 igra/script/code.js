(function (){
'use stric'
var starta=$('#start');
var hor=$('.hor');
var speed=2;
var scored=$('#score');
var scorea=0;
var doda=$('.cent');
var box=$('#box1');
var hahax=$('.tineline');
var krug=$('.krug');
var ada=document.getElementById('ad');
var op=document.getElementById('ada');
starta.on('click',startgame);
function startgame(){
	$(this).hide();
	ada.play();
//   ubacivanje i brisanje krugova
function insertk(){
var rand=Math.floor(Math.random()*6);
$(hor[rand]).append('<div class="krug"></div>');
var krug=$('.krug');
$(krug).on('click',function(){
  $(this).remove();  
     scorea++;
 scored.html(scorea)
if(scorea===30){

	speed++;

}
if(scorea==60){
	speed++;
}
if(scorea==120){
	speed++;
}
if(scorea==320){
	speed++;
}
if(scorea==480){
	speed++;
}



});
}
//        ponovo pokretanje
setInterval(insertk,2600);



//   kretanje
var movent=setInterval(function(){
var krug=$('.krug');
$(krug).css({
	left:'+='+speed
})
// kraj prvog dijela game over
$.each(krug,(index,el) =>{
var position=$(el).position().left;
if(position>1200){
	clearAllIntervals()
}
})


},30)

function clearAllIntervals(){
	clearInterval(movent);
}

var ock =setInterval(function insertel(){
var doda=$('.cent');
var kruha=$('.novikrug');
var x=Math.floor(Math.random()*14);
$(doda[x]).append('<div class="novikrug"></div>');

$('.novikrug').on('click',function gogo(){
  $(this).remove();  
scorea++;
scored.html(scorea)
	



})
},6000)

var exe=setInterval(function tzap(){
var spanovi=[];	
var texe=$('.tzs');

var words = ["a","aa","aah","kaka","aahed","aahing","aahs","aal","aalii","aaliis","aals","bromids","bromin","brominate","brominated","brominates","brominating","chowchow","chowchows","chowder","chowdered","chowderhead","chowderheaded","damnedests","damner","damners","damnification","damnifications","damnified","damnifies","damnify","damnifying","damning","flemit","flench","flenched","flencher","flenchers","flenches","flenching","flense","flensed","flenser","flensers","larghettos","largish","largition","largitions","largo","largos","lari","lariat","lariated","lariating","lariats","standdown","standdowns","standee","standees","standen","stander","standers","standfast","standfasts","standfirst","varletry","varlets","varletto","varlettos","varment","varments","varmint","varmints","varna","varnas","varnish","varnished","varnisher","varnishers","blazoned","blazoner","blazoners","blazoning","blazonings","blazonries","blazonry","blazons","bleach","bleachable"];
	var t=Math.floor(Math.random()*3);
	var h=Math.floor(Math.random()*25);
$(texe[t]).append('<span>'+(words[h])+'</span>');
(spanovi).push(words[h]);
hahax.on('keyup',function letmesee(){
	var valu=$(this).val()
	if(spanovi.includes(valu)){
		let index=spanovi.indexOf(valu);
		spanovi.splice(index,1);
            $('span').filter(function(){
            	return $(this).text()==valu;


          }).css('background','gray').fadeOut(340,function(){
            	$(this).remove();
            });
            $(this).val("");


	}

})




},10000)

//kretanje spanova 
var speada=1;
var movingo=setInterval(function movingon(){
var spanii=$('span');
spanii.css({
	left:'+='+speada
})
$.each(spanii,(index,el) =>{
var siting=$(el).position().top;
if(siting>550){
	stopa();
}
})

},100)






function stopa(){
	clearInterval(movingo);
}

function bitno(){
	hahax.focus();
}
setInterval(bitno,100);


}

})()