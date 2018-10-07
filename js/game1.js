$(document).ready(function(){
  $(function() {
    $( "#dialog3" ).dialog({
      autoOpen: true,
      show: {
        effect: "blind",
        duration: 100
      },
      hide: {
        effect: "blind",
        duration: 100
      },
      modal: true,
	  draggable: false,
	  height:500,
	  width:500
    });
});	
	

	
	$( function () { 
$( "#progressbar" ).progressbar({ 
value: 10
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
console.log(randDivIndex);
console.log(randDivIndex1);
var randArtistIndex = generateArrayRandomNumber(0, (artists.length-1));
var randArtistIndex1 = randArtistIndex[0];
var randImgIndex1 = randArtistIndex1;
console.log(randImgIndex1);

do {
var randImgIndex10 = Math.floor(Math.random()*(images.length));
} while (randImgIndex10 == randImgIndex1);

var selectedDiv1 = $('#g' + randDivIndex1);
console.log(selectedDiv1);
selectedDiv1.html('<img data-selected=' + randImgIndex1 + ' src="../images/game/' + images[randImgIndex1] + '.jpg">');


var selectedDiv2 = $('#g' + randDivIndex2);
console.log(selectedDiv2);
selectedDiv2.html('<img data-selected=' + randImgIndex10 + ' src="../images/game/' + images[randImgIndex10] + '.jpg">');


$('#artistName1').append(artists[randArtistIndex1]);
$('#quest1').attr('data-selected', randImgIndex1);




 $("img").mousedown(function(){
       $("img").css('zIndex',10);
       $(this).css('zIndex',20);
   });
   
// if (randArtistIndex1 == ui.draggable.data('selected'))
// selectedImgIndex



	var width =  $("#quest1").width();
	console.log(width);
	$('.picture>div').width(width);

	$('.place>img').draggable({SnapMode:'inner', snap:'true', helper: 'clone'} );
	$('#quest1').droppable( { activeClass:'ACT', hoverClass:'HOV', tolerance:'touch', out: function(event, ui){  $(this).removeClass("dropped")},  drop : function(event, ui) {
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
				var dataSelectedQuest = $('#quest1').attr('data-selected');
				if (dataSelectedPlace==dataSelectedQuest){
					flag=0;
				} else {
					flag=1;
				}
					console.log(flag);
				}
	}

 } );
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
		if ($('#quest1').prev().length > 0 && flag==0){
			$(location).attr('href', '../html/game2.html');
		}else{
      $( "#dialog" ).dialog( "open" );
		}
    });
  });

  });
});

