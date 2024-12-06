document
  .getElementById("donateByNoakhali")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const FloodDonate = InPutFieldId("FloodDonate-filed");
    const currentDonate = textTypeId("Flood-donate");
    const totalDonation = textTypeId("total-donation");
    const donate = currentDonate + FloodDonate;
    document.getElementById("Flood-donate").innerText = donate;
    document.getElementById("FloodDonate-filed").value = "";
    document.getElementById("total-donation").innerText =
      totalDonation - donate;

    // append item
    const FloodAtNoakhali = textType("blog-1");
    console.log(FloodAtNoakhali, donate);
    const contain = document.createElement("div");
    contain.innerHTML = `
     <div class="p-5 border rounded-lg max-w-6xl mx-auto mt-5 mb-5">
                    <h1 class="text-xl font-bold">${donate} Taka is ${FloodAtNoakhali}</h1>
                    <p>Date : ${new Date()}</p>
                </div>
    `;
    document.getElementById("donate-history").appendChild(contain);
    if(isNaN(FloodDonate) ){
      alert('Please Provided valid Taka');
      return;
    } 
   if(currentDonate > FloodDonate){
      alert('Not Acceptable');
      return;
   }
  });
document
  .getElementById("Flood-Relief-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const FloodReliefDonate = InPutFieldId("Flood-Relief-filed");
    const currentDonate2 = textTypeId("Flood-Relief");
    const totalDonation = textTypeId("total-donation");
    const donate2 = currentDonate2 + FloodReliefDonate;
    document.getElementById("Flood-Relief").innerText = donate2;
    document.getElementById("Flood-Relief-filed").value = "";
    document.getElementById("total-donation").innerText =
      totalDonation - donate2;

    // append item
    const ReliefInFeni = textType("blog-2");
    console.log(ReliefInFeni, donate2);
    const contain = document.createElement("div");
    contain.innerHTML = `
      <div class="p-5 border rounded-lg max-w-6xl mx-auto mt-5 mb-5">
                    <h1 class="text-xl font-bold">${donate2} Taka is ${ReliefInFeni}</h1>
                    <p>Date : ${new Date()}</p>
                </div>
    `;
    document.getElementById("donate-history").appendChild(contain);
    if(isNaN(FloodReliefDonate)){
      alert('Please Provided valid Taka');
      return;
    } 
   if(currentDonate2 < FloodDonate){
      alert('Not Acceptable');
      return;
   }
  });
document
  .getElementById("Quota-Movement-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const quotaMovementDonate = InPutFieldId("Quota-Movement-filed");
    const currentDonate = textTypeId("donate-Quota");
    const totalDonation = textTypeId("total-donation");
    console.log(quotaMovementDonate, currentDonate);
    const totalDonate1 = currentDonate + quotaMovementDonate;
    document.getElementById("donate-Quota").innerText = totalDonate1;
    document.getElementById("Quota-Movement-filed").value = "";
    document.getElementById("total-donation").innerText =
      totalDonation - totalDonate1;

    // append item
    const QuotaMovement = textType("blog-3");
    console.log(QuotaMovement, totalDonate1);
    const contain = document.createElement("div");
    contain.innerHTML = `
    <div class="p-5 border rounded-lg max-w-6xl mx-auto mt-5 mb-5">
                    <h1 class="text-xl font-bold">${totalDonate1} Taka is ${QuotaMovement}</h1>
                    <p>Date : ${new Date()}</p>
                </div>
    `;
    document.getElementById("donate-history").appendChild(contain);
    if(isNaN(quotaMovementDonate)){
      alert('Please Provided valid Taka');
      return;
    } 
   if(currentDonate > quotaMovementDonate){
      alert('Not Acceptable');
      return;
   }
  });

const historyElement = document.getElementById("route-History");
const donation = document.getElementById("route-Donation");

historyElement.addEventListener("click", function () {
   showSectionById("history");
   historyElement.classList.add('bg-[#B4F461]', 'border-none');
   donation.classList.remove('bg-[#B4F461]');
});

donation.addEventListener("click", function () {
   showSectionById("blog");
   donation.classList.add('bg-[#B4F461]', 'border-none');
   historyElement.classList.remove('bg-[#B4F461]');
});

