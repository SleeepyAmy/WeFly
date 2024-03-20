function checkN() { 
    var reg = document.getElementById("email"); 
    var lreg = document.getElementById("lcom"); 
    
    var regCom =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    if(!regCom.test(reg.value)){ 
       lreg.style.color="red"; 
       lreg.innerHTML="not valid"; 
    } else{ 
       lreg.style.color="green"; 
       lreg.innerHTML="valid"; 
    } 
   }