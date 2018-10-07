$(document).ready(function(){
	$( function () { 
$( "#progressbar" ).progressbar({ 
value: 90
 });
});


  $(function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 500
      },
      hide: {
        effect: "blind",
        duration: 500
      },
	  close: function( event, ui ) {
	    paused = false;
		console.log(1);
		startTimer();
	  },
	  
      modal: true,
	  draggable: false,
	  height:200
    });
});
 
 
$("#quest1").on('load', function() {
var artists = ['Эдуард Мане','Клод Моне','Поль Гоген','Поль Сезанн','Эдгар Дега','Пьер Огюст Ренуар','Анри Матисс','Анри Тулуз-Лотрек','Винсент Ван Гог','Сальвадор Дали','Пабло Пикассо','Амедео Модильяни','Марк Шагал','Казимир Малевич','Эдвард Мунк',
'Энди Уорхол','Василий Кандинский','Антонис Ван Дейк','Иероним Босх','Питер Брейгель'];
var images = ['EdouardManet','klodmone','paulgogen','paulcezanne','EdgarDegas','Pierre-AugusteRenoir','HenriMatisse','Toulouse-Lautrec','VincentWillemvanGogh','SalvadorDali','Picasso','Modigliani','Chagall','Malevich','Munch','Warhol',
'Kandinski','vanDyck','Bosch', 'Bruegel'];
var place = $(".place");

function generateArrayRandomNumber (min, max) {
	var totalNumbers 		= max - min + 1,
		arrayTotalNumbers 	= [],
		arrayRandomNumbers 	= [],
		tempRandomNumber;

	while (totalNumbers--) {
		arrayTotalNumbers.push(totalNumbers + min);
	}

	while (arrayTotalNumbers.length) {
		tempRandomNumber = Math.round(Math.random() * (arrayTotalNumbers.length - 1));
		arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
		arrayTotalNumbers.splice(tempRandomNumber, 1);
	}

	return arrayRandomNumbers;
}

var randDivIndex = generateArrayRandomNumber(1, place.length);
var randDivIndex1 = randDivIndex[0];
var randDivIndex2 = randDivIndex[1];
var randDivIndex3 = randDivIndex[2];
var randDivIndex4 = randDivIndex[3];
var randDivIndex5 = randDivIndex[4];
var randDivIndex6 = randDivIndex[5];
var randDivIndex7 = randDivIndex[6];
var randDivIndex8 = randDivIndex[7];
var randDivIndex9 = randDivIndex[8];
console.log(randDivIndex);
console.log(randDivIndex1);
var randArtistIndex = generateArrayRandomNumber(0, (artists.length-1));
console.log(randArtistIndex);
var randArtistIndex1 = randArtistIndex[0];
var randArtistIndex2 = randArtistIndex[1];
var randArtistIndex3 = randArtistIndex[2];
var randArtistIndex4 = randArtistIndex[3];
var randArtistIndex5 = randArtistIndex[4];
var randArtistIndex6 = randArtistIndex[5];
var randArtistIndex7 = randArtistIndex[6];
var randArtistIndex8 = randArtistIndex[7];
var randArtistIndex9 = randArtistIndex[8];
var randImgIndex1 = randArtistIndex1;
var randImgIndex2 = randArtistIndex2;
var randImgIndex3 = randArtistIndex3;
var randImgIndex4 = randArtistIndex4;
var randImgIndex5 = randArtistIndex5;
var randImgIndex6 = randArtistIndex6;
var randImgIndex7 = randArtistIndex7;
var randImgIndex8 = randArtistIndex8;
var randImgIndex9 = randArtistIndex9;
console.log(randImgIndex1);



var selectedDiv1 = $('#g' + randDivIndex1);
console.log(selectedDiv1);
selectedDiv1.html('<img data-selected=' + randImgIndex1 + ' src="../images/game/' + images[randImgIndex1] + '.jpg">');


var selectedDiv2 = $('#g' + randDivIndex2);
console.log(selectedDiv2);
selectedDiv2.html('<img data-selected=' + randImgIndex5 + ' src="../images/game/' + images[randImgIndex5] + '.jpg">');

var selectedDiv3 = $('#g' + randDivIndex3);
console.log(selectedDiv3);
selectedDiv3.html('<img data-selected=' + randImgIndex2 + ' src="../images/game/' + images[randImgIndex2] + '.jpg">');

var selectedDiv4 = $('#g' + randDivIndex4);
console.log(selectedDiv4);
selectedDiv4.html('<img data-selected=' + randImgIndex3 + ' src="../images/game/' + images[randImgIndex3] + '.jpg">');

var selectedDiv5 = $('#g' + randDivIndex5);
console.log(selectedDiv5);
selectedDiv5.html('<img data-selected=' + randImgIndex4 + ' src="../images/game/' + images[randImgIndex4] + '.jpg">');

var selectedDiv6 = $('#g' + randDivIndex6);
console.log(selectedDiv6);
selectedDiv6.html('<img data-selected=' + randImgIndex6 + ' src="../images/game/' + images[randImgIndex6] + '.jpg">');

var selectedDiv7 = $('#g' + randDivIndex7);
console.log(selectedDiv7);
selectedDiv7.html('<img data-selected=' + randImgIndex7 + ' src="../images/game/' + images[randImgIndex7] + '.jpg">');

var selectedDiv8 = $('#g' + randDivIndex8);
console.log(selectedDiv8);
selectedDiv8.html('<img data-selected=' + randImgIndex8 + ' src="../images/game/' + images[randImgIndex8] + '.jpg">');

var selectedDiv9 = $('#g' + randDivIndex9);
console.log(selectedDiv9);
selectedDiv9.html('<img data-selected=' + randImgIndex9 + ' src="../images/game/' + images[randImgIndex9] + '.jpg">');



$('#artistName1').append(artists[randArtistIndex1]);
$('#quest1').attr('data-selected', randImgIndex1);

$('#artistName2').append(artists[randArtistIndex2]);
$('#quest2').attr('data-selected', randImgIndex2);

$('#artistName3').append(artists[randArtistIndex3]);
$('#quest3').attr('data-selected', randImgIndex3);

$('#artistName4').append(artists[randArtistIndex4]);
$('#quest4').attr('data-selected', randImgIndex4);

$('#artistName5').append(artists[randArtistIndex5]);
$('#quest5').attr('data-selected', randImgIndex5);

$('#artistName6').append(artists[randArtistIndex6]);
$('#quest6').attr('data-selected', randImgIndex6);

$('#artistName7').append(artists[randArtistIndex7]);
$('#quest7').attr('data-selected', randImgIndex7);

$('#artistName8').append(artists[randArtistIndex8]);
$('#quest8').attr('data-selected', randImgIndex8);

$('#artistName9').append(artists[randArtistIndex9]);
$('#quest9').attr('data-selected', randImgIndex9);


 $("img").mousedown(function(){
       $("img").css('zIndex',10);
       $(this).css('zIndex',100);
   });
   
// if (randArtistIndex1 == ui.draggable.data('selected'))
// selectedImgIndex

var width =  $("#quest1").width();
console.log(width);
$('.picture>div').width(width);



$('.place>img').draggable({SnapMode:'inner', snap:'true', helper: 'clone'} );
var flags = {flag1: 1, flag2: 1};

$('#quest1').droppable( { activeClass:'ACT', hoverClass:'HOV', tolerance:'touch', out: function(event, ui){  $(this).removeClass("dropped")},  drop : onDrag
 } );
 

 $('#quest2').droppable( { activeClass:'ACT', hoverClass:'HOV', tolerance:'touch', out: function(event, ui){  $(this).removeClass("dropped")},  drop : onDrag
 } );
 
  $('#quest3').droppable( { activeClass:'ACT', hoverClass:'HOV', tolerance:'touch', out: function(event, ui){  $(this).removeClass("dropped")},  drop : onDrag
 } );
  
  $('#quest4').droppable( { activeClass:'ACT', hoverClass:'HOV', tolerance:'touch', out: function(event, ui){  $(this).removeClass("dropped")},  drop : onDrag
 } );
  
  $('#quest5').droppable( { activeClass:'ACT', hoverClass:'HOV', tolerance:'touch', out: function(event, ui){  $(this).removeClass("dropped")},  drop : onDrag
 } );
  
  $('#quest6').droppable( { activeClass:'ACT', hoverClass:'HOV', tolerance:'touch', out: function(event, ui){  $(this).removeClass("dropped")},  drop : onDrag
 } );
  
  $('#quest7').droppable( { activeClass:'ACT', hoverClass:'HOV', tolerance:'touch', out: function(event, ui){  $(this).removeClass("dropped")},  drop : onDrag
 } );
  
  $('#quest8').droppable( { activeClass:'ACT', hoverClass:'HOV', tolerance:'touch', out: function(event, ui){  $(this).removeClass("dropped")},  drop : onDrag
 } );
  
  $('#quest9').droppable( { activeClass:'ACT', hoverClass:'HOV', tolerance:'touch', out: function(event, ui){  $(this).removeClass("dropped")},  drop : onDrag
 } );
 function onDrag(event, ui) {
	            if ($(this).prev().length == 0){
				$(this).before(ui.draggable);
				$(ui.draggable).css('max-width',width);
				$(ui.draggable).css('max-height',width);
				$(ui.draggable).css('position','absolute');		
				var widthDr = $(ui.draggable).width();			
				var heightDr = $(ui.draggable).height();
				if(widthDr > heightDr){			
					var margin = (width-heightDr)/2;		
					$(ui.draggable).css('top',margin);				
					$(ui.draggable).css('left','3px');		
				} else {
					var margin = (width-widthDr)/2;		
					console.log(margin);
					$(ui.draggable).css('left',margin);					
					$(ui.draggable).css('top','3px');	
				}
				var dataSelectedPlace = $(ui.draggable).attr('data-selected');
				var dataSelectedQuest = $(this).attr('data-selected');
				var flag = $(this).data('flag');
				if (dataSelectedPlace==dataSelectedQuest){
					//flag2=0;
					
					flags['flag' + flag] = 0;

				} else {
					//flag2=1;
					flags['flag' + flag] = 1;

				}
					console.log(flags['flag' + flag]);
}
}
 
 $('.place').droppable( {  tolerance:'touch',  out: function(event, ui){  $(this).removeClass("dropped")}, drop : function(event, ui) {
				if ($(this).find('img').length == 0){
	            $(this).append(ui.draggable);
	            var widthP = $(".place").width();
	            var heightP = $(".place").height();
	 			$(ui.draggable).css('max-width',(widthP)*1.4);
				$(ui.draggable).css('max-height',(heightP)*1.4);		
				$(ui.draggable).css('left','0px');		
				$(ui.draggable).css('top','0px');		
				}
				
	 }
 } );
  
 $(function() {
    $( "#opener" ).click(function() {
		var flag=0;
		for (var f in flags) {
			flag += flags[f];
		}
        console.log(flag);
		if ($('#quest1').prev().length > 0 &&$('#quest2').prev().length > 0 &&$('#quest3').prev().length > 0 &&$('#quest4').prev().length > 0 
		&&$('#quest5').prev().length > 0 &&$('#quest6').prev().length > 0 &&$('#quest7').prev().length > 0 &&$('#quest8').prev().length > 0 &&$('#quest9').prev().length > 0&& flag==0){
			$(location).attr('href', '../html/game10.html');
		}else{
      $( "#dialog" ).dialog( "open" );
		}
    });
  });
  
  });
});
