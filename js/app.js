// focus first iput field on page load

$('body').ready(()=>{
    $('#name').focus();
    // hiden on page load 
    $('#other-title').hide()
}) 

// Job Role section

// display new input field when other is selected
$('#title').on('change', ()=>{
    const $secletedOption = $('#title option:selected').text();
    
        if($secletedOption === 'Other'){
            $('#other-title').show()
        } else{
            $('#other-title').hide()
        }
})

// T-Shirt info section
$('#colors-js-puns').hide()

$('#design').on('change', ()=>{
    $('#colors-js-puns').show()
    const primaryVal = 'Cornflower Blue (JS Puns shirt only)'

    const $theme = $('#design option:selected').val()
        if($theme === 'heart js'){
            $('#color option').show();
            $('#color ').each(()=>{
                for(let i =0 ; i < 3; i++){
                      $('#color option').eq(i).hide();
                }
                $('#color option:eq(0)').text($('#color option:eq(3)').text())
            })
           
        } else if($theme === 'js puns'){
            $('#color option').hide();
            $('#color option:eq(0)').text(primaryVal)
            
            
            $('#color ').each(()=>{
                
                for(let i =0 ; i <3; i++){
                      $('#color option').eq(i).show()
                }
                
            })
        } else{
            for(let i =0 ; i <$('#color option').length; i++){
                $('#color option').eq(i).show()
                $('#color option:eq(0)').text(primaryVal)   
          }
          
        }
    
  
})

// Register for activities section 

let total = 0;
// selecting price tag 
$('.price').text(`$ ${total}`)
$(' .activities label ').each((index, el)=>{
    console.log($(el).text())
    
})
 

    $('.activities input').change(function(){

        if(this.checked){

            if($('.activities input').eq(0).parent().text() === $(this).parent().text()){

                total += 100;
                $('.price').text(`$ ${total}`)
    
            }
            if($('.activities input').eq(5).parent().text() === $(this).parent().text()){

                total += 100;
                $('.price').text(`$ ${total}`)
    
            }
            if($('.activities input').eq(6).parent().text() === $(this).parent().text()){

                total += 100;
                $('.price').text(`$ ${total}`)
    
            }
        if($('.activities input').eq(1).parent().text() === $(this).parent().text()){

            $('.activities input').eq(3).parent().addClass('disabled')
            $('.activities input').eq(3).attr('disabled', true)
            total += 100;
            $('.price').text(`$ ${total}`)

        }  
        if($('.activities input').eq(3).parent().text() === $(this).parent().text()){

            $('.activities input').eq(1).parent().addClass('disabled')
            $('.activities input').eq(1).attr('disabled', true)
            total += 100;
            $('.price').text(`$ ${total}`)

        }
        if($('.activities input').eq(2).parent().text() === $(this).parent().text()){

            $('.activities input').eq(4).parent().addClass('disabled')
            $('.activities input').eq(4).attr('disabled', true)
            total += 100;
            $('.price').text(`$ ${total}`)

        } 
        if($('.activities input').eq(4).parent().text() === $(this).parent().text()){

            $('.activities input').eq(2).parent().addClass('disabled')
            $('.activities input').eq(2).attr('disabled', true)
            total += 100;
            $('.price').text(`$ ${total}`)

        } 
      
          
        }  else if(this.checked === false){
            if($('.activities input').eq(0).parent().text() === $(this).parent().text()){

                total -= 100;
                $('.price').text(`$ ${total}`)
    
            }
            if($('.activities input').eq(5).parent().text() === $(this).parent().text()){

                total -= 100;
                $('.price').text(`$ ${total}`)
    
            }
            if($('.activities input').eq(6).parent().text() === $(this).parent().text()){

                total -= 100;
                $('.price').text(`$ ${total}`)
    
            }
            if($('.activities input').eq(1).parent().text() === $(this).parent().text()){
                $('.activities input').eq(3).parent().removeClass('disabled')
                $('.activities input').eq(3).attr('disabled', false)

                total -= 100;
                $('.price').text(`$ ${total}`)
            }
            if($('.activities input').eq(3).parent().text() === $(this).parent().text()){

                $('.activities input').eq(1).parent().removeClass('disabled')
                $('.activities input').eq(1).attr('disabled', false)
                total -= 100;
                $('.price').text(`$ ${total}`)
    
            }
             if($('.activities input').eq(2).parent().text() === $(this).parent().text()){

                $('.activities input').eq(4).parent().removeClass('disabled')
                $('.activities input').eq(4).attr('disabled', false);
                total -= 100;
                $('.price').text(`$ ${total}`)
    
            }
            if($('.activities input').eq(4).parent().text() === $(this).parent().text()){

                $('.activities input').eq(2).parent().removeClass('disabled')
                $('.activities input').eq(2).attr('disabled', false);
                total -= 100;
                $('.price').text(`$ ${total}`)
    
            } 
           
        } 
    })

    // payement info section 

    // selecting default option
    $('#payment option[ value = "credit card" ]').prop('selected', true)
    
    // hiding paypal and bit coin options 
    $('.paypal-option').hide();
    $('.bitcoin-option').hide();

    // reacting to payment change 
    $('#payment').change(() => {
        
        const $selctedPymt = ($('#payment option:selected').val());
        if($selctedPymt === 'credit card'){
            // showing selected option payment
            $('.credit-card').show();
            

            // hiding non-selected option payment
            $('.paypal-option').hide();
            $('.bitcoin-option').hide();
        }

       
        if($selctedPymt === 'paypal'){
            // showing selected option payment
            $('.paypal-option').show();

            // hiding non-selected option payment
           $('.credit-card').hide();
           $('.bitcoin-option').hide();
        }
       
        if($selctedPymt === 'bitcoin'){
            // showing selected option payment
            $('.bitcoin-option').show();

            // hidoing non-selected option payment
            $('.paypal-option').hide();
            $('.credit-card').hide();
         
        }

    })

    // form validation 
    $('form').submit((e)=>{
        // stop form reloading after submition 
        e.preventDefault();

        // cleanning form 
        // $('input').val('')
        // name validation 
        const nameRegEx = /^[a-z]+ [a-z ,'-]+$/i
        const emailRegEx = /^(\w[\w+.'-]*@\w+\.[a-z]+)*$/;
        
        
        const creditFieldRegEx = /^[0-9]{13,16}/
        const zipCodeFieldRegEx = /^[0-9]{5}/
        const cvvFieldRegEx = /^[0-9]{3}/

        const $creditFeild = $('#cc-num').val()
        const $zipCodeFeild = $('#zip').val()
        const $cvvFeild = $('#cvv').val()
        
        const $name = $('#name').val();
        const $email = $('#mail').val();
        const $selectedActivities = $('.activities input:checked').length > 0;
        if(nameRegEx.test($name) && emailRegEx.test($email) && 
            $selectedActivities && creditFieldRegEx.test($creditFeild)
            && zipCodeFieldRegEx.test($zipCodeFeild) && 
            cvvFieldRegEx.test($cvvFeild)){

            location.reload();
             $('input').val('');
            
        }
        if($name === '') {
            
                $('.nameMsg').text('This feild has been left empty');
                $('.nameMsg').addClass('errorMsg');}
               
             else {
                
                $('.nameMsg').hide()
             }

        
      
       


        // email validation 
        if($email === '' ){
            
            $('.emailMsg').text('This feild has been left empty');
            $('.emailMsg').addClass('errorMsg');
        } 
        else if(emailRegEx.test($email) === false){
            
                $('.emailMsg').text('Email not valid');
                $('.emailMsg').addClass('errorMsg');
            }  else {
                $('.emailMsg').hide()
            }
            
            
        

        // checking if at least one checkbox is selected
       
        if( $selectedActivities === false){
            $('.activitiesMsg').text('Select at least one activity');
            $('.activitiesMsg').addClass('errorMsg');
        } else {
            $('.activitiesMsg').hide()
        }
       

       
        // credit validation
        if( $creditFeild === ''){
            
                $('.ccMsg').text('This field habe been left empty');
                $('.ccMsg').addClass('errorMsg');
            } else if (creditFieldRegEx.test($creditFeild) === false){
                $('.ccMsg').text('This field needs 13 to 16 numbers');
                $('.ccMsg').addClass('errorMsg');
            } else{
                $('.ccMsg').hide();
            }

        //    zip validation 
            if( $zipCodeFeild=== ''){
            
                $('.zipMsg').text('This field habe been left empty');
                $('.zipMsg').addClass('errorMsg');
            } else if (zipCodeFieldRegEx.test($zipCodeFeild) === false){
                $('.zipMsg').text('This field needs 5 numbers');
                $('.zipMsg').addClass('errorMsg');
            } else{
                $('.zipMsg').hide();
            }
            // cvv validation 
            if( $cvvFeild === ''){
            
                $('.cvvlMsg').text('This field habe been left empty');
                $('.cvvlMsg').addClass('errorMsg');
            } else if (cvvFieldRegEx.test($cvvFeild) === false){
                $('.cvvlMsg').text('This field needs 3 numbers');
                $('.cvvlMsg').addClass('errorMsg');
            } else{
                $('.cvvlMsg').hide();
            }

        
    });

    //Real-time Error Messages for the name field
    $('#name').on('keyup', function(){
        const $name = $(this).val()
        const nameRegEx = /^[a-z]+ [a-z ,'-]+$/i
        if(!nameRegEx.test($name)){
            $('.nameMsg').text('Enter a correct name');
            $('.nameMsg').addClass('errorMsg'); 
           
        } else {
            
            $('.nameMsg').hide()
           
        }
    })

   
   
       
