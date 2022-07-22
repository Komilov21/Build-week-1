function message(event){
    const msg = document.getElementsByClassName('message')
    const success = document.getElementById('success')

    if ( msg.value === ''){
        success.style.display = 'none';
   }else{
       setTimeout(()=>{
           msg.value = '';
        },
       success.style.display = 'block');
   }
}
message(e)