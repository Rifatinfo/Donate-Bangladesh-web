

document.getElementById('donateByNoakhali').addEventListener('click', function(e){
   e.preventDefault();
   const FloodDonate = InPutFieldId('FloodDonate-filed');
   const currentDonate  = textTypeId('Flood-donate');
   const donate = currentDonate + FloodDonate;
   document.getElementById('Flood-donate').innerText = donate;
   document.getElementById('FloodDonate-filed').value = '';
})
document.getElementById('Flood-Relief-btn').addEventListener('click', function(e){
   e.preventDefault();
   const FloodReliefDonate = InPutFieldId('Flood-Relief-filed');
   const currentDonate2  = textTypeId('Flood-Relief');
   const donate2 = currentDonate2 + FloodReliefDonate;
   document.getElementById('Flood-Relief').innerText = donate2;
   document.getElementById('Flood-Relief-filed').value = '';
})
document.getElementById('Quota-Movement-btn').addEventListener('click', function(e) {
    e.preventDefault(); 
    const quotaMovementDonate = InPutFieldId('Quota-Movement-filed');
    const currentDonate = textTypeId('donate-Quota');
    console.log(quotaMovementDonate,currentDonate);
    const totalDonate = currentDonate + quotaMovementDonate;
    console.log(totalDonate);
    document.getElementById('donate-Quota').innerText = totalDonate;
    document.getElementById('Quota-Movement-filed').value = '';
});

