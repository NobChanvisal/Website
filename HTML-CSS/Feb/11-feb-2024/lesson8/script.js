const Input = document.querySelector("input");

Input.addEventListener("input",() =>{
    // const InputValues = Input.value;
    console.log(Input.value);
    if(Input.value === "DUCK")
    {
        alert("Hello world");
        window.location.href = "https://chat.openai.com/c/d32a58a4-97d5-470e-a085-00887d4bd522";
    }
});