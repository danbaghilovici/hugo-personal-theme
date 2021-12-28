// todo maybe move to typescript
document.addEventListener("DOMContentLoaded",()=>{
    console.log("loaded");
    // var btn=document.querySelector("#dark");
    // var body=document.body;
    // btn.addEventListener("click",()=>{
    //     body.classList.toggle("dark-mode");
    // })

    var checkbox = document.querySelector("#dark");

    checkbox.addEventListener('change', function() {
        // if (this.checked) {
        //     console.log("Checkbox is checked..");
        // } else {
        //     console.log("Checkbox is not checked..");
        // }
        document.body.classList.toggle("dark-mode");
    });
})



