const draggableElements = document.querySelectorAll(".draggable"); // all the three text div
const boxes= document.querySelectorAll(".droppable"); // two containers

const resetButton = document.getElementById("reset-btn");
resetButton.addEventListener("click",resetApp)

// storing inital items
const initialItems = Array.from(
    document.querySelectorAll(".draggable")
);

draggableElements.forEach((draggable)=>{

    draggable.addEventListener("dragstart",()=>{
        draggable.classList.add("dragging");
    })

    draggable.addEventListener("dragend",()=>{
        draggable.classList.remove("dragging");
        // showing succcess msg for dropped item
        showMsg(`${draggable.innerHTML} dropped successfully!` )
    })  
})

boxes.forEach((box)=>{
    
    box.addEventListener("dragover",(e)=>{
        // preventing the cross sign
        e.preventDefault()
        // the element which we are dragging now
        const draggingElement = document.querySelector(".dragging");
        // elements of the current box
        const siblings  =  [...box.querySelectorAll(".draggable:not(.dragging")];
        // after which element the dragging element will be placed 
        const nextSibling = siblings.find((sibling)=>{
            return e.clientY <= sibling.offsetTop + sibling.offsetHeight/2;
        })
        // insert the dragging element
        box.insertBefore(draggingElement,nextSibling)
})

})

// for displaying the msg pop up
function showMsg(message) {
    
    const messageElement = document.createElement('h3');
    messageElement.innerHTML = message;
    messageElement.classList.add('msg')

    document.body.appendChild(messageElement);
  
    setTimeout(function(){
     document.body.removeChild(messageElement);
    }, 1000);

}
  
// reseting the app to its original state
function resetApp() {
    showMsg("back in original!")
    const container1 = document.getElementById("container1");
    // appending each initial element to container1
    initialItems.forEach((item) => {
        container1.appendChild(item);
    });

  }


