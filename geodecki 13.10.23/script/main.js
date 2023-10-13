elements = document.querySelectorAll(".guzik")
text = ""
elements.forEach(element=>{
    switch(element.id){
        case "guzik-0":
            element.addEventListener("click", ()=>{
                if(text.length>6)return;
                text += '0'
                document.querySelector(".wynik").textContent = text
            })
            break;
        case "guzik-1":
            element.addEventListener("click", ()=>{
                if(text.length>6)return;
                text += '1'
                document.querySelector(".wynik").textContent = text
            })
            break;
        case "guzik-2":
            element.addEventListener("click", ()=>{
                if(text.length>6)return;
                text += '2'
                document.querySelector(".wynik").textContent = text
            })
            break;
        case "guzik-3":
            element.addEventListener("click", ()=>{
                if(text.length>6)return;
                text += '3'
                document.querySelector(".wynik").textContent = text
            })
            break;
        case "guzik-4":
            element.addEventListener("click", ()=>{
                if(text.length>6)return;
                text += '4'
                document.querySelector(".wynik").textContent = text
            })
            break;
        case "guzik-5":
            element.addEventListener("click", ()=>{
                if(text.length>6)return;
                text += '5'
                document.querySelector(".wynik").textContent = text
            })
            break;
        case "guzik-6":
            element.addEventListener("click", ()=>{
                if(text.length>6)return;
                text += '6'
                document.querySelector(".wynik").textContent = text
            })
            break;
        case "guzik-7":
            element.addEventListener("click", ()=>{
                if(text.length>6)return;
                text += '7'
                document.querySelector(".wynik").textContent = text
            })
            break;
        case "guzik-8":
            element.addEventListener("click", ()=>{
                if(text.length>6)return;
                text += '8'
                document.querySelector(".wynik").textContent = text
            })
            break;
        case "guzik-9":
            element.addEventListener("click", ()=>{
                if(text.length>6)return;
                text += '9'
                document.querySelector(".wynik").textContent = text
            })
            break;
        case "guzik-plus":
            element.addEventListener("click", ()=>{
                if(text.length>6)return;
                text += '+'
                document.querySelector(".wynik").textContent = text
            })
            break;
        case "guzik-minus":
            element.addEventListener("click", ()=>{
                if(text.length>6)return;
                text += '-'
                document.querySelector(".wynik").textContent = text
            })
            break;
        case "guzik-mult":
            element.addEventListener("click", ()=>{
                if(text.length>6)return;
                text += '*'
                document.querySelector(".wynik").textContent = text
            })
            break;
        case "guzik-div":
            element.addEventListener("click", ()=>{
                if(text.length>6)return;
                text += '/'
                document.querySelector(".wynik").textContent = text
            })
            break;
        case "guzik-clear":
            element.addEventListener("click", ()=>{
                text = ''
                document.querySelector(".wynik").textContent = text
            })
            break;
        case "guzik-equal":
            element.addEventListener("click", ()=>{
                try{
                    text = eval(text)
                }
                catch{
                    text = "Error"
                }
                text = text.toString()
                if(text.length>7){
                    text = "Too much"
                }
                document.querySelector(".wynik").textContent = text
            })
            break;
        case "guzik-plusminus":
            element.addEventListener("click", ()=>{
                try{
                    text = -eval(text)
                    if(isNaN(text)){
                        throw new Error("NaN")
                    }
                }
                catch{
                    text = "Error"
                }
                text = text.toString()
                if(text.length>7){
                    text = "Too much"
                }
                document.querySelector(".wynik").textContent = text
            })
            break;
        
    }
})
underscore = false;
setInterval(()=>{
    underscore = !underscore;
    if(underscore){
        document.querySelector(".wynik").textContent = text+"_"
    }
    else{
        document.querySelector(".wynik").textContent = text
    }
}, 800)