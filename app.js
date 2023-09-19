let alimentosFrios=document.querySelectorAll(".alimentos-frios")
console.log(alimentosFrios)
let alimentosNaturales=document.querySelectorAll(".alimentos-naturales")
console.log(alimentosNaturales)
let container_heladera=document.querySelector(".frio")
let container_alacena=document.querySelector(".natural")


//funcion para arrastre
function onDragStart(event){
  event.dataTransfer.setData("text", event.target.id)

  event.currentTarget.style.fontSize="20px"
  event.currentTarget.style.color="purple"
  let audio=document.getElementById("audio")
  audio.play()
}
  
function onDragOver(event){
  event.preventDefault()
}

function onDrop(event) {
  const id = event.dataTransfer.getData("text");
  const draggableElement = document.getElementById(id);
  console.log(draggableElement)
  const dropzone = event.target;
  console.log(dropzone)
  dropzone.appendChild(draggableElement);
  event.dataTransfer.clearData();
  
    
    if (draggableElement.dataset.value=="frio" && dropzone==container_heladera) {
      console.log("funciona")
      let mensaje_ok=document.querySelector(".mensaje-ok")
      mensaje_ok.innerHTML="Muy bien!!"
      function ocultarMensaje(){
        mensaje_ok.innerHTML=""
      }
      setTimeout(ocultarMensaje, 1500)
     } 
     else if(draggableElement.dataset.value=="natural" && dropzone==container_alacena) {
      console.log("bueno")
      let mensaje_ok=document.querySelector(".mensaje-ok-ala")
      mensaje_ok.innerHTML="Muy bien!!"
      
      function ocultarMensaje(){
        mensaje_ok.innerHTML=""
      }
      setTimeout(ocultarMensaje, 1500)
     } 
     else{
      let mensaje=document.querySelector(".mensaje-bad")
      mensaje.innerHTML="¿Estás seguro que el alimento va ahí?"
      function ocultarMensaje(){
        mensaje.innerHTML=""
      }
      setTimeout(ocultarMensaje, 1900)
     }

     let alimentosCool=document.querySelector(".alimentos-cool")
     console.log(alimentosCool)

     let alimentosHot=document.querySelector(".alimentos-hot")
     console.log(alimentosHot)
     if(alimentosCool.children.length===0 && alimentosHot.children.length===0){
      console.log("sera cierto?")
      let mensaje=document.getElementById("msjFinal")
      console.log(mensaje)
      mensaje.innerHTML="Genial, Buen trabajo!"
      mensaje.style.display="block"
      let audio=document.getElementById("audio1")
      audio.play()
      let main=document.getElementById("main")
      main.style.backgroundColor="black"
      let frio=document.querySelector(".frio")
      frio.style.backgroundColor="black"
      let natural=document.querySelector(".natural")
      natural.style.backgroundColor="black"
      let img_fridge=document.querySelector(".fridge")
      img_fridge.style.display="none"
      let img_alacena=document.querySelector(".alacena")
      img_alacena.style.display="none"
     }
     }
     
  
