const catering = document.querySelector('#catering')

const justFood = (pocetOsob) => {
    let cena = pocetOsob*300
    console.log(`Catering od Just Food pro ${pocetOsob} za ${cena} Kč`)
}

const yourMama = (pocetOsob) => {
    let cena = pocetOsob*500
    console.log(`Catering od Your Mama pro ${pocetOsob} za ${cena} Kč`)
}

const flavourHaven = (pocetOsob) => {
    let cena = pocetOsob*1000
    console.log(`Catering od Flavour Haven pro ${pocetOsob} za ${cena} Kč`)
}

createEvent = (nazev, pocetOsob, fce) => {
    if(fce === justFood){
        let cena = pocetOsob*300   
        vypis.textContent=`Událost ${nazev} s catering od Just Food pro ${pocetOsob} lidí za ${cena} Kč`
    }else if(fce === yourMama){
        let cena = pocetOsob*500
        vypis.textContent=`Událost ${nazev} s catering od Your Mama pro ${pocetOsob} lidí za ${cena} Kč`
    } else if(fce === flavourHaven){
        let cena = pocetOsob*1000
        vypis.textContent=`Událost ${nazev} s catering od Flavour Haven pro ${pocetOsob} lidí za ${cena} Kč`
    }else{
        console.log("Chyba")
    }    
}

flavourHaven(10)
createEvent("Inaugurace prezidenta", 100, flavourHaven)