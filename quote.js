 var add=document.getElementById("add")
 var popup=document.querySelector(".popup")
 var overlay=document.querySelector(".overlay")

 add.addEventListener("click",function()
{
    overlay.style.display="block"
    popup.style.display="block"
})

var cancel=document.querySelector(".cancel-q")

cancel.addEventListener("click",function()
{
    overlay.style.display="none"
    popup.style.display="none"

})

var container=document.querySelector(".container")
var quote=document.querySelector(".quote")
var add1=document.querySelector(".add-q")
var title=document.getElementById("q-title")
var quo=document.getElementById("quo")
add1.addEventListener("click",function()
{
    var div=document.createElement("div")
    div.setAttribute("class","quote")
    div.innerHTML=` <h2>${title.value}/h2>

        <p>${quo.value} </p>
        <button onclick="del(event)" class="delete-button" id="delbtn">delete</button>`
        container.append(div)
        overlay.style.display="none"
    popup.style.display="none"
    title.value=""
    quo.value=""
})

var delbtn=document.getElementById("delbtn")
 
function del(event){
    event.target.classList.parentElement.remove()
}