const bodyEl= document.querySelector("body"); /*→ <body> element select karta hai.*/

bodyEl.addEventListener("mousemove",(event)=>{ /*→ jab bhi mouse move karega, event trigger hoga.*/
    const xPos = event.offsetX;/*mouse ki exact position le leta hai (X aur Y).*/
    const yPos = event.offsetY;

    const spanEl = document.createElement("span");/*ek new heart element banata hai.*/
    spanEl.style.left = xPos + "px";/*mouse ke position par heart place karta hai.*/
    spanEl.style.top = yPos + "px";/**/

    const size = Math.random() * 100;/*→ random size (0–100px) deta hai taake hearts alag-alag dikhain.*/
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";/**/

    const rotate = Math.random() * 100;/*→ har heart ko random angle se rotate karta hai.*/
    spanEl.style.transform = `rotate(${rotate}deg)`;

    bodyEl.appendChild(spanEl);/*→ heart ko body me add karta hai.*/
    
    setTimeout (() => {/*→ 3 second baad heart delete ho jata hai memory se (smooth effect ke liye).*/
        spanEl.remove();
    }, 3000);
})
