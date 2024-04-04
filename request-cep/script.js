document.getElementById("form").addEventListener("submit", async (event)=>{
    event.preventDefault();
    const cep = document.getElementById("cep").value;
    if (cep.trim().length < 1) {
        alert("DIGITE UM CEP VÁLIDO");
        return
    }
    cep.replace("-", "");
    const string = `https://e-commerce-r4j0.onrender.com/adress/findAdress/${cep}`;
    try {
        let result = await fetch(string).then(result => result.json());
        if ("msg" in result) {
            alert(result.msg)
            document.getElementById("data").innerHTML = ``;
            return
        }
        document.getElementById("data").innerHTML = `${result.street} - ${result.city} - ${result.state}`;
    } catch (error) {
        console.log(error);
    }
});