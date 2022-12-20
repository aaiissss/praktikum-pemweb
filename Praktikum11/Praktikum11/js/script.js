document.querySelectorAll("#option a").forEach((a) => {
    // jika di klik akan menjalankan sebuah function computerChoice
    a.addEventListener("click", (element) => {
        computerChoice(element);
    })
})

function computerChoice(element){
    // Pilihan user
    let pilihanUser = element.target.innerText;

    // Menangkap element hasil komputer dengan queryselector
    let pilihanKomputer = document.querySelector("#result");

    // menentukan pilihan komputer dengan array
    let choices = ["Rock" , "Paper" , "Scissors"];

    // pilihan komputer secara random atau secara informasi
    pilihanKomputer.innerHTML = choices[Math.round(Math.random () * choices.length)];
    console.log(pilihanKomputer);
    pilihanKomputer = pilihanKomputer.innerHTML;


    // Jika pilihan user == pilihan kompuer DRAWs
    if(pilihanUser == pilihanKomputer){
        alert("DRAW");
    }

    if(pilihanUser == "Rock" && pilihanKomputer == "scissors"){
        alert("User WINN");
    } else if (pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert ("User WINN");
    } else if (pilihanUser == "scissors" && pilihanKomputer == "Paper"){
        alert("User WINN");
    }

    // pilihan Komputer menang
} 