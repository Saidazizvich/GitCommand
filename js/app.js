const input = document.querySelector('#form1')
  const form = document.querySelector(".form");
  
   const runEvent =()=>
    {
         form.addEventListener('submit',(e)=>{
             console.log(e);  
         })
    }  

    runEvent();