jQuery(document).ready(function($) {

	$('.ranking').click(function(){
		$('.ranking-list').show();
		$('.drag-drop-list').hide();
		$('.triggers').hide();
	});

	$('.drag-drop').click(function(){
		$('.drag-drop-list').show();
		$('.ranking-list').hide();
		$('.triggers').hide();
	});

	$('.images-l').draggable({
		cancel: false,
        connectToSortable: '.container',
        containment: 'document',
        helper: 'clone'
	});

	$('.texts-l').draggable({
		cancel: false,
        connectToSortable: '.container',
        containment: 'document',
        helper: 'clone'
	});

	$(".drag-drop-options").droppable({
        drop: function (event, ui) {
	        $(ui.draggable).remove();
        }
    });

	$(".rankings-options").droppable({
        drop: function (event, ui) {
        	outerText_bak = $(this)[0].outerText;
        	console.log(outerText_bak.split(" ")[0]);
        	if (outerText_bak.split(" ")[0] == 'Top') {
        		$(this).css('background-color', 'white').css('border', '3px solid orange').css('color', 'black').css('font-weight', 'normal');
	        	$(this).html($(ui.draggable)[0].outerText);
	            $(ui.draggable).remove();
        	} else {
        		$(this).html($(ui.draggable)[0].outerText);
	            $(ui.draggable).html(outerText_bak);
        	}
        }
    });

	$('.ranking-list').hide();
	$('.drag-drop-list').hide();
});