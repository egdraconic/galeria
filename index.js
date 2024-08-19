const pagina_1 = {
    page1: [
        'assents/imagem1.jpeg',
        'assents/imagem2.jpeg',
        'assents/imagem3.jpeg',
        'assents/imagem4.jpeg',
        'assents/imagem5.jpeg',
        'assents/imagem6.jpeg'
    ],

    page2: [
        'assents/imagem7.jpeg',
        'assents/imagem8.jpeg',
        'assents/imagem9.jpeg',
        'assents/imagem10.jpeg',
        'assents/imagem11.jpeg',
        'assents/imagem12.jpeg'
    ],

    page3: [
        'assents/imagem13.jpeg',
        'assents/imagem14.jpeg',
        'assents/imagem15.jpeg',
        'assents/imagem16.jpeg',
        'assents/imagem17.jpeg',
        'assents/imagem18.jpeg'
    ]
}

let span = document.createElement("span");
let conta = 0
 function teste() {
    tentativa = document.querySelectorAll("img")
    for (let i = 0; i <= tentativa.length; i++) {
        tentativa[i].addEventListener("click", function(){
            this.style = "position:fixed; z-index:2; top:30vh; left: 35vw; scale: 2.3; cursor: auto;";
            if (window.screen.width <= 479) {
                this.style = "position:fixed; z-index:2; top:30vh; left: 30vw; scale: 2.3; cursor: auto;";
            }
            document.body.appendChild(span);
            document.body.style.overflow = "hidden";
            span.style = "width: 100vw; height: 9999vh; position: absolute; z-index: 1; background: rgba(0, 0, 0, 0.5); top:0; overflow-y: hidden; "
            document.querySelector("span").addEventListener("click", function() {
                conta += 1
                if (conta % 2 == 1) {
                    span.remove()
                    tentativa[i].style = "scale:1;"
                    document.body.style.overflow = "auto";
                    conta = 0
                }
            })
    })
}};



for(let i = 0; i < pagina_1.page1.length; i++) {
    document.getElementById("page1").style = "background-color: darkgray;"
    let img = document.createElement("img")
    img.src = pagina_1.page1[i]
    document.querySelector(".fotos").appendChild(img)
    img.onclick = window.onload = function() {teste()}

    document.getElementById("page1").addEventListener("click", () => {
        document.querySelector(".fotos").removeChild(document.querySelector("img"))
        const img = document.createElement("img")
        img.src = pagina_1.page1[i]
        document.querySelector(".fotos").appendChild(img)
        document.getElementById("page1").style = "background-color: darkgray;"
        document.getElementById("page2").style = "background-color: white;"
        document.getElementById("page3").style = "background-color: white;"
        img.onclick = window.onload = teste()
    })

    document.getElementById("page2").addEventListener("click", () => {
        document.querySelector(".fotos").removeChild(document.querySelector("img"))
        const img = document.createElement("img")
        img.src = pagina_1.page2[i]
        document.querySelector(".fotos").appendChild(img)
        document.getElementById("page2").style = "background-color: darkgray;"
        document.getElementById("page1").style = "background-color: white;"
        document.getElementById("page3").style = "background-color: white;"
        img.onclick = window.onload = teste()
    })

    document.getElementById("page3").addEventListener("click", () => {
        document.querySelector(".fotos").removeChild(document.querySelector("img"))
        const img = document.createElement("img")
        img.src = pagina_1.page3[i]
        document.querySelector(".fotos").appendChild(img)

        document.getElementById("page3").style = "background-color: darkgray;"
        document.getElementById("page2").style = "background-color: white;"
        document.getElementById("page1").style = "background-color: white;"
        img.onclick = window.onload = teste()
    })
}


