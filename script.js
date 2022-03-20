const teclas = document.querySelectorAll(".oitava > div")

    function desmarcar(tecla) {
       tecla.classList.remove("selecionda")
    }

    teclas.forEach(function(tecla){
        tecla.anmousedow = function() {
            tecla.classList.add("selecionada")
        }
   

    tecla.anmouseup = () => desmarcar(tecla)
    tecla.anmouselove = () => desmarcar(tecla)
})