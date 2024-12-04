

document.getElementById('donateByNoakhali').addEventListener('click', function(e){
   e.preventDefault();
   const FloodDonate = InPutFieldId('FloodDonate-filed');
   const currentDonate  = textTypeId('donate-Quota');
   const donate = currentDonate + FloodDonate;
//    document.getElementById('donate-Quota').innerText = donate;
})
document.getElementById('Flood-Relief-btn').addEventListener('click', function(e){
   e.preventDefault();
   const FloodReliefDonate = InPutFieldId('Flood-Relief-filed');
   const currentDonate2  = textTypeId('Flood-Relief');
   const donate2 = currentDonate2 + FloodReliefDonate;
//    document.getElementById('Flood-Relief').innerText = donate2;
})
document.getElementById('Quota-Movement-btn').addEventListener('click', function(e){
   e.preventDefault();
   const QuotaMovementDonate = InPutFieldId('Quota-Movement-filed');
   const currentDonate3  = textTypeId('Flood-donate');
   const donate3 = currentDonate3 + QuotaMovementDonate;
//    document.getElementById('Flood-donate').innerText = donate3;
})

