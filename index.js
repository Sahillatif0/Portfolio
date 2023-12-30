var typed = new Typed('.what', {
    strings: ['CS Student','Web-Developer', 'Graphic Designer', 'Problem Solver'],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});
let spheres = document.querySelectorAll(".sphere");
let created = [];
let n = 0;
addEventListener("mousemove",(event)=>{
    let m = Math.floor(Math.random() * spheres.length)
    let v = Math.floor(Math.random() * 30)
    let e = spheres[m];
    if(v%2==0)
        v*= - 1;
    let val = window.getComputedStyle(e,null).top;
    e.style.top = Number(val.substr(0, val.length-2))-v + "px";
    let linediv = document.getElementById("lines");
    let line = document.createElement("div");
    created[n] = n+1;
    line.classList.add("line");
    line.style.top = (event.clientY+scrollY) +"px";
    line.style.left = event.clientX+"px";
    line.id = "id"+created[n];
    linediv.appendChild(line);
    let ele = document.getElementById("id"+created[n++])
    setTimeout(() => {
        ele.remove();
    }, 500+(document.getElementsByClassName("line").length*2));
    
})
setInterval(() => {
     if(document.getElementsByClassName("line").length===0){
         n=0;
         created = [];
     }
}, 100);
let skills = document.querySelectorAll(".skill");
function setHeight(skills){
    skills.forEach(skill => {
        skill.style.height = "max-content";
        let val = window.getComputedStyle(skill,null).height;
        skill.style.height = Number(val.substr(0, val.length-2))+40 + "px";
    });
}
setHeight(skills);
addEventListener("resize",(event)=>{setHeight(skills);})
let spaceboxes = document.querySelectorAll(".space");
let avatar = document.getElementsByClassName('avatar');
avatar[0].addEventListener("mouseover", ()=>{
    spaceboxes.forEach(space=>{
        space.classList.add("no-space");
    })
})
avatar[0].addEventListener("mouseout", ()=>{
    spaceboxes.forEach(space=>{
        space.classList.remove("no-space");
    })
})
let techsImg = document.querySelectorAll(".img");
let i = 1;
techsImg.forEach(tech => {
    tech.style.backgroundImage = "url(media/tech"+i+".png)";
    i++;
});
let techbox = document.getElementById("techbox");

function slideTech() {
    const techWidth = document.querySelector(".tech").offsetWidth + 40;
    techbox.style.transition = "transform 2s ease";
    techbox.style.transform = "translateX(-" + techWidth + "px)";
    setTimeout(() => {
        techbox.style.transition = "none";
        techbox.style.transform = "translateX(0)";
        const firstTech = techbox.firstElementChild.cloneNode(true);
        techbox.appendChild(firstTech);
        techbox.removeChild(techbox.firstElementChild);
    }, 2000);
}
setInterval(slideTech, 2050);
