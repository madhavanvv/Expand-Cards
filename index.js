const panels = document.querySelectorAll(".panel");
//console.log(panels);
panels.forEach((panel)=>{

    panel.addEventListener('click',()=>{
        removeActiceClass()
        panel.classList.add("active");
    })

})

function removeActiceClass(){
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })
}