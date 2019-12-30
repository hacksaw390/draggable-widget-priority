
$(document).ready(function(){

	// $('div').draggable({
	$('.ourdiv').draggable();
	$('.ourdiv').mousedown(function(){
		var maxZindex = 0;

		$(this).siblings('.ourdiv').each(function(){
			var currentZindex = Number($(this).css('z-index'));

			maxZindex = currentZindex > maxZindex ? currentZindex : maxZindex;
		});

		$(this).css('z-index',maxZindex+1);


		// stack: '.ourdiv'
		
	});

	

});
















// $(document).ready(function(){

// 	$('#draggablewidget').draggable({
// 		containment: '#outeroption',
// 		cursor: 'move',
// 		opacity: .5,
// 		revert: true
// 		cursor: 'pointer'
// 		containment: 'parent'
// 		axis: 'x'
// 	});

	

// });