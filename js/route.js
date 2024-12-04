function showSectionById(id){
   document.getElementById('history').classList.add('hidden');
   document.getElementById('blog').classList.add('hidden');

   document.getElementById(id).classList.remove('hidden');
}