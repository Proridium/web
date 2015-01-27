/*jshint sub:true*/

function resizeMe() {
   var article = document.getElementsByTagName("article").item(0);
   var height = window.innerHeight;
   article.style.height = (height - 233) + 'px';
}

window.onload = function() {
   switch(document.getElementById("page").textContent) {
      case 'index':
         document.getElementById("_index").classList.add("active");
         break;
      case 'services':
         document.getElementById("_services").classList.add("active");
         break;
      case 'partners':
         document.getElementById("_partners").classList.add("active");
         break;
      case 'careers':
         document.getElementById("_careers").classList.add("active");
         break;
      case 'customers':
         document.getElementById("_customers").classList.add("active");
         break;
   }
   resizeMe();
};

window.onresize = function () { resizeMe(); };

$(document).ready(function() {
   // Prototype Polyfills
   HTMLDivElement.prototype.visible = function (isVisible) {
      this.style.display = (isVisible) ? 'block' : 'none';
   };
});