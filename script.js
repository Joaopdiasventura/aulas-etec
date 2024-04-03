document.getElementById("form").addEventListener("submit", async (event)=>{
    event.preventDefault();
    const string = `https://e-commerce-r4j0.onrender.com/adress/findAdress/${document.getElementById("cep").value}`;
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