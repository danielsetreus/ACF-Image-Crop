jQuery(function($){
	acf.add_action('append', function(){

		$('.acf-field-object-image-crop .crop-type-select, .acf-field-object-image-crop .target-size-select').each(function() {
			toggleOnDimensionsAndCropType(this);
		});

		$('.acf-field-object-image-crop .save-in-media-library-select input').each(function() {
			toggleSaveFormats(this);
		});
	});

	$(document).on('change', '.acf-field-object-image-crop .crop-type-select, .acf-field-object-image-crop .target-size-select', function(e) {
		toggleOnDimensionsAndCropType(this);
	});

	$(document).on('click', '.acf-field-object-image-crop .save-in-media-library-select input', function(e) {
		toggleSaveFormats(this);
	});


	function toggleSaveFormats(saveToMediaSelect){
		if($(saveToMediaSelect).is(':checked')){
			var saveToMedia = $(saveToMediaSelect).val() == 'yes';
			var $returnValueField = $(saveToMediaSelect).parents('.acf-field-object-image-crop').find('.return-value-select');
			if(! saveToMedia){
				$returnValueField.find('input[value=id]').attr('disabled', true).parents('label').addClass('disabled');
				if($returnValueField.find('input[value=id]').is(':checked')){
					$returnValueField.find('input[value=url]').attr('checked', true);
				}
			}
			else{
				$returnValueField.find('input').removeAttr('disabled').parents('label').removeClass('disabled');
			}
		}
	}

	// function toggleCustomDimensions(targetSizeSelect){
	// 	var cropType = $(targetSizeSelect).parents('.acf-').first().find('.crop-type-select').val();

	// 	if($(targetSizeSelect).val() == 'custom'){
	// 		if(cropType == 'fixed_width') {
	// 			$(targetSizeSelect).parents('.acf-field-object-image-crop').first().find('.custom-target-dimension .custom-target-width').each(function(){
	// 				$(this).parents('tr.acf-field').first().removeClass('hidden');
	// 			});
	// 		} else if(cropType == 'fixed_height') {
	// 			$(targetSizeSelect).parents('.acf-field-object-image-crop').first().find('.custom-target-dimension .custom-target-height').each(function(){
	// 				$(this).parents('tr.acf-field').first().removeClass('hidden');
	// 			});
	// 		}
	// 	}
	// 	else{
	// 		$(targetSizeSelect).parents('.acf-field-object-image-crop').first().find('.custom-target-dimension').each(function(){
	// 			$(this).parents('tr.acf-field').first().addClass('hidden');
	// 		});
	// 	}
	// }

	// function toggleCropType(cropTypeSelect) {
	// 	var val = $(cropTypeSelect).val();
	// 	var parent = $(cropTypeSelect).parents('.acf-field-object-image-crop').first();

	// 	parent.find("tr[data-name='target_size']").removeClass('hidden');
	// 	if(parent.find("tr[data-name='target_size']").val() == 'custom') {
	// 		parent.find("tr[data-name='height']").removeClass('hidden');
	// 		parent.find("tr[data-name='width']").removeClass('hidden');
	// 	}

	// 	if(val == 'fixed_width') {
	// 		parent.find("tr[data-name='target_size']").val('custom');
	// 		parent.find("tr[data-name='target_size']").addClass('hidden');
	// 		parent.find("tr[data-name='height']").addClass('hidden');
	// 	}

	// 	else if(val == 'fixed_height') {
	// 		parent.find("tr[data-name='target_size']").val('custom');
	// 		parent.find("tr[data-name='target_size']").addClass('hidden');
	// 		parent.find("tr[data-name='width']").addClass('hidden');
	// 	}

	// }

	function toggleOnDimensionsAndCropType(element) {
		console.log('Toggle shit on:');
		console.log(element);
		var field 		= $(element).parents('.acf-field-object-image-crop').first();
		var cropType 	= field.find('.crop-type-select');
		var targetSize 	= field.find('.target-size-select');
		var height 		= field.find('.custom-target-height');
		var width 		= field.find('.custom-target-width');
		
		$(field).find(  "tr[data-name='target_size'], " + 
						"tr[data-name='width'], " + 
						"tr[data-name='height'], " +
						"tr[data-name='ratio'], " +
						"tr[data-name='ratio_min_width'], " + 
						"tr[data-name='ratio_min_height']").addClass('hidden');
		
		if(cropType.val() == 'fixed_height' || cropType.val() == 'fixed_width') {
			
			if(cropType.val() == 'fixed_height')
				$(field).find("tr[data-name='height']").removeClass('hidden');
			else
				$(field).find("tr[data-name='width']").removeClass('hidden');

		} 
		else if(cropType.val() == 'ratio' || cropType.val() == 'ratio_min_width' || cropType.val() == 'ratio_min_height') {
			
			$(field).find("tr[data-name='ratio']").removeClass('hidden');
			
			if(cropType.val() == 'ratio_min_width')
				$(field).find("tr[data-name='ratio_min_width']").removeClass('hidden');
			else if (cropType.val() == 'ratio_min_height')
				$(field).find("tr[data-name='ratio_min_height']").removeClass('hidden');

		}
		else {
			$(field).find("tr[data-name='target_size']").removeClass('hidden');
			if(targetSize.val() == 'custom') {
				$(field).find("tr[data-name='height']").removeClass('hidden');
				$(field).find("tr[data-name='width']").removeClass('hidden');
			}
		}

	}

	$('.acf-field-object-image-crop .crop-type-select, .acf-field-object-image-crop .target-size-select').each(function() {
		toggleOnDimensionsAndCropType(this);
	});

	$('.acf-field-object-image-crop .save-in-media-library-select input').each(function() {
		toggleSaveFormats(this);
	});

});