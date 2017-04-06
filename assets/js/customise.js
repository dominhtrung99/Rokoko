$(function($){
	function showItemPopup(target) {
		var index = $( ".item-gird-wr" ).index( target );
		$("#current_index_popup").val(index);
		
		$("#img_model").attr("src",$(target).find(".btn-detail").attr("href"));
		$("#title_model").html(target.find(".title").html());
		$("#date_model").html(target.find(".date").html());
		$("#des_model").html(target.find(".description").html());
	}

	if($('#datetimepicker1').length > 0) {
	    $('#datetimepicker1').datetimepicker({
	    	format: 'DD/MM/YYYY',
	    	widgetPositioning: {
	            horizontal: 'auto',
	            vertical: 'bottom'
	         }
	    });

	    $('#timepicker1').timepicker();
 	}

	if($('.space-wrapper').length > 0) {
		$(".btn-detail").on( "click", function(e) {
			e.preventDefault();
			
			var target = $(this).closest(".item-gird-wr");
			showItemPopup(target);
			// var index = $( ".item-gird-wr" ).index( target );
			// //console.log('index',index);
			// $("#current_index_popup").val(index);
			
			// //console.log(target.find(".item-thumb").attr("src"));
			// //console.log(e.target.href);
			// $("#img_model").attr("src",$(this).attr("href"));
			// $("#title_model").html(target.find(".title").html());
			// $("#date_model").html(target.find(".date").html());
			// $("#des_model").html(target.find(".description").html());
		  $('#spaceModel').modal();

		  return false;
		});

		$(".rokoko-next-btn").on( "click", function(e) {
			e.preventDefault();
			var current = parseInt($("#current_index_popup").val());

			var len = $( ".item-gird-wr" ).length;
			//console.log(len);
			
			var index = 0;
			if(current < len - 1){
				index = current + 1;
			}
			var target = $(".item-gird-wr").eq(index);
			showItemPopup(target);
			 return false;
		});

		$(".rokoko-prev-btn").on( "click", function(e) {
			e.preventDefault();
			var current = parseInt($("#current_index_popup").val());

			var len = $( ".item-gird-wr" ).length;
			var index = 0;
			if(current === 0){
				index = len - 1;
			} else {
				index = current - 1;
			}
			var target = $(".item-gird-wr").eq(index);
			showItemPopup(target);
			 return false;
		});
		
	}
      
});

