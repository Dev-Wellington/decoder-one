const leftTextarea = document.getElementById("left-textarea");
const rightTextarea = document.getElementById("right-textarea");


function btnEncoder() {
  const encodedText = encoder(leftTextarea.value) ;
  rightTextarea.value = encodedText;
  leftTextarea.value = "";
}
function btnDecoder() {
  const decodedText = decoder(leftTextarea.value) ;
  rightTextarea.value = decodedText;
  leftTextarea.value = "";
}

function encoder(encodedString) {
  const keys = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  
  let i = 0;
  while (i < keys.length) {
    if (encodedString.includes(keys[i][0])) {
      encodedString = encodedString.replaceAll(keys[i][0], keys[i][1]);
    }
    i++;
  }
  return encodedString;
}


function decoder(decodedString) {
  const keys = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  decodedString = decodedString.toLowerCase();
  let i = 0;
  while (i < keys.length) {
    if (decodedString.includes(keys[i][1])) {
      decodedString = decodedString.replaceAll(keys[i][1], keys[i][0]);
    }
    i++;
  }

  return decodedString;
}




function copy(){
  const rightTextarea = document.getElementById("right-textarea");
  rightTextarea.select()
  
  document.execCommand('copy')

}
  
  leftTextarea.addEventListener("keypress",function(e){
    if (!especialCharacter(e)){
      e.preventDefault();
    }
  })
  function especialCharacter(e){
    const char = String.fromCharCode(e.keyCode);
    const pattern = '[a-zA-Z0-9]';
  
    if (char.match(pattern)){
      return true;
    }
  }