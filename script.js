const main = document.querySelector(".main");
const btn = document.querySelector("#btn");
const img = document.querySelector("#img");
let input = document.querySelector("#input");


btn.addEventListener('click', (e)=>{
    e.preventDefault(); 
    let input_value = input.value;
    if(!input_value) return;

    btn.innerHTML="Generate QR Code..."   
 img.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${input_value}`;
 img.addEventListener("load", ()=>{
    main.classList.add("active");
    btn.innerHTML="Generate QR Code";
 })

});
