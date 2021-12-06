const kdu = new KeyboardEvent('keydown',{key:"a",ctrlKey:true})
const kdp = new KeyboardEvent('keyup',{key:"a",ctrlKey:true})
const check = () => {
   let botcheck = document.getElementById("app").__vue__;
   if(botcheck){
      document.cookie = "bot=; expires=thu, 01 jan 1970 00:00:00 UTC; path=/;";
   }
}

setInterval(() => {check(); document.dispatchEvent(kdu); document.dispatchEvent(kdp)},40)
