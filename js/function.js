
function InPutFieldId(id){
   const getFieldId = document.getElementById(id).value;
   const convertValue = parseFloat(getFieldId); 
   return convertValue;
}

function textTypeId(id){
   const getText = document.getElementById(id).innerText;
   const convertValue = parseFloat(getText); 
   return convertValue;
}