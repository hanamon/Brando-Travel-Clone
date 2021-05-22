$(function(){ // section11-Form.js
/*-----------------------------------------------------------------------------------------------------------------------*/	
	
	var $name = $('#idName'), $email = $('#idEmail'), $message = $('#idMessage');
	var state = false;
	$('.error-Box').stop().hide();
	
/*-----------------------------------------------------------------------------------------------------------------------*/
	$('#idName, #idEmail, #idMessage').on({
		focusin: function(){
			$(this).css({ border:'2px solid rgba(255, 255, 255, 0.5)', transition:'all 0.3s' });
		},
		focusout: function(){
			if( state == true ){
				$(this).css({ border:'2px solid #c00', transition:'all 0.3s' });
			}
			else{
				$(this).css({ border:'2px solid rgba(255, 255, 255, 0.1)', transition:'all 0.3s' });
			}
		}
	});
/*-----------------------------------------------------------------------------------------------------------------------*/
	$('.sendBtn').on({
		click: function(){
			if( $name.val()=='' || $email.val()=='' || $message.val()=='' || $email.val().indexOf('@')==-1 ||  $email.val().indexOf('.')==-1 ||  $email.val().indexOf(' ')!=-1 ){
				state = true;
				/*--name--*/
				if( $name.val()=='' ){
					$name.css({ border:'2px solid #c00', transition:'all 0.3s' });
				}
				else{
					$name.css({ border:'2px solid rgba(255, 255, 255, 0.1)', transition:'all 0.3s' });
				}
				/*--email--*/
				if( $email.val()=='' || $email.val().indexOf('@')==-1 ||  $email.val().indexOf('.')==-1 ||  $email.val().indexOf(' ')!=-1 ){
					$email.css({ border:'2px solid #c00', transition:'all 0.3s' });
				}
				else{
					$email.css({ border:'2px solid rgba(255, 255, 255, 0.1)', transition:'all 0.3s' });
				}
				/*--message--*/
				if( $message.val()=='' ){
					$message.css({ border:'2px solid #c00', transition:'all 0.3s' });
				}
				else{
					$message.css({ border:'2px solid rgba(255, 255, 255, 0.1)', transition:'all 0.3s' });
				}
				$('.error-Box').stop().show();
				return false;	
			}
			else{
				alert('전송되었습니다.');
				contact.submit();
				state = true;
				
				$name.val()='';
				$email.val()='';
				$message.val()='';
				
				$name.css({ border:'2px solid rgba(255, 255, 255, 0.1)', transition:'all 0.3s' });
				$email.css({ border:'2px solid rgba(255, 255, 255, 0.1)', transition:'all 0.3s' });
				$message.css({ border:'2px solid rgba(255, 255, 255, 0.1)', transition:'all 0.3s' });
				
				$('.error-Box').stop().hide();
			}
		}
	});
	
/*-----------------------------------------------------------------------------------------------------------------------*/	
}); // section11-Form.js