var contact = document.getElementById("motdepasse");

contact.addEventListener("input", function(e){
    var notletter =  document.getElementById("verify_letter");
    notletter.innerText = e.target.value;
});