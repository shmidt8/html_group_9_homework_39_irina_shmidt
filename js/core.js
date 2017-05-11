$(document).ready(function(){

	var error_txt = '<em>Это поле нужно обязательно заполнить!</em>';

	$('.req').focusout(function(){
			if($(this).val() != ''){          
				$(this).removeClass('error').addClass('active');
				$(this).parent('form__row').find('em').remove();						
			}else{
				$(this).addClass('error').removeClass('active');				
			}
		}); 


	$('.btn').click(function(){
			var this_form = $(this).parents('form');
			var inp_req = $(this).parents('form').find('.req');

			//console.log(inp_req);
			
			count_error = 0
			inp_req.each(function(){
				if($(this).val()==''){
					$(this).addClass('error');
					$(this).parent('.form__row').append(error_txt);	
					count_error += 1;					
				}				
			});

			if (count_error != 0) {
					return false	
				} else{
					this_form.submit();
				}

		});

});