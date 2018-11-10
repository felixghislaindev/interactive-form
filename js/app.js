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

$('#design').on('change', ()=>{
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
                      console.log($('#color option').eq(i).show());
                }
                
            })
        } else{
            for(let i =0 ; i <$('#color option').length; i++){
                console.log($('#color option').eq(i).show());
                
                $('#color option:eq(0)').text(primaryVal)   
          }
          
        }
    
  
})

// Register for activities section 


    
   
    
