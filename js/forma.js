
/*validacija forme*/
var greska = document.getElementById('greska');


function provera()
{

    if (tip() && naziv() && organizator() && mesto() && datum() && broj_posetilaca() && trajanje()) {
    ketering();
    console.log(događaj);
                smesti_događaj(događaj);
                return true;
            }
            return false;
}

function tip()
            {
                var tip = document.getElementById('tip');

                if(tip.selectedIndex == 0)
                {
                    tip.style.border = "2px solid red";
                    greska.innerHTML = "Nije odabran tip";
                    return false;
                }
                
                događaj.tip = tip[tip.selectedIndex].value;
                tip.style.border = null;
                return true;
            }

function naziv()
            {
                var naziv = document.getElementById('naziv').value.trim();
                
                if(naziv.length == 0)
                {
                    document.getElementById('naziv').style.border = "2px solid red";
                    greska.innerHTML = "Nije unet naziv događaja";
                    return false;
                }
                događaj.naziv = naziv;
                document.getElementById('naziv').style.border = null;
                return true;
        }

function organizator()
            {
                var organizator = document.getElementById('organizator').value.trim();
                
                if(organizator.length == 0)
                {
                    document.getElementById('organizator').style.border = "2px solid red";
                    greska.innerHTML = "Nije unet organizator";
                    return false;
                }
                događaj.organizator = organizator;
                document.getElementById('organizator').style.border = null;
                return true;
        }

function mesto()
            {
                var mesto = document.getElementById('mesto');

                if(mesto.selectedIndex == 0)
                {
                    mesto.style.border = "2px solid red";
                    greska.innerHTML = "Nije odabrano mesto";
                    return false;
                }
                događaj.mesto = mesto[mesto.selectedIndex].value;
                mesto.style.border = null;
                return true;
            }

function datum()
            {
                var datum = document.getElementById('datum').value;
                
                if(!datum)
                {
                    document.getElementById('datum').style.border = "2px solid red";
                    greska.innerHTML = "Nije unet datum";
                    return false;
                }
                događaj.datum = datum;
                document.getElementById('datum').style.border = null;
                return true;
        }


function broj_posetilaca()
            {
                var broj_posetilaca = document.getElementById('broj_posetilaca').value.trim();
                
                if(broj_posetilaca.length == 0)
                {
                    document.getElementById('broj_posetilaca').style.border = "2px solid red";
                    greska.innerHTML = "Nije unet broj posetilaca";
                    return false;
                }

                if(broj_posetilaca > 500)
                {
                    document.getElementById('broj_posetilaca').style.border = "2px solid red";
                    greska.innerHTML = "Maksimalan broj posetilaca je 500";
                    return false;
                }
                događaj.broj_posetilaca = broj_posetilaca;
                document.getElementById('broj_posetilaca').style.border = null;
                return true;
        }

function trajanje()
        {
            var trajanje = document.getElementById('trajanje').value.trim();
            
            if(trajanje.length == 0)
            {
                document.getElementById('trajanje').style.border = "2px solid red";
                greska.innerHTML = "Nije uneto trajanje događaja";
                return false;
            }
            događaj.trajanje = trajanje;
            document.getElementById('trajanje').style.border = null;
            return true;
    }

function ketering()
    {
        var ketering = document.querySelector('input[name="ketering"]');
        
            if(ketering.checked == false) {
                događaj.ketering = "Ne";
                return false;    
        }
        događaj.ketering = ketering.value;
        return true;
    }
   

/*izlistavanje dogadjaja*/
    var događaj = {};
    var događaji = [];
    var dohvaceni = false;
    
    document.getElementById('pogledaj_pozivnicu').addEventListener("click", pozivnica);
    document.getElementById('izlistaj').addEventListener("click", izlistaj);
    /*document.getElementById('dodaj').addEventListener('click', function(){
        var f = document.getElementById('forma');
    });*/

    function pozivnica(){

        if(!dohvaceni){
            var p = dohvati();
            if(p == null){
                greska.innerHTML = "Nema podataka";
            }else{
                
                for(i=0; i < p.length; i++){
                    kreiraj_tabelu2(p[i],'tabela');
                }
            }
        }

        var dugme1 = document.getElementById("izlistaj");
        dugme1.style.pointerEvents = "none";

        var lista = document.getElementById('lista2');
        if(lista.style.display == 'block') {
          lista.style.display = 'none';
        } else {
          lista.style.display = 'block';
    }
        lista.className = "shown";
        dohvaceni = true;
        return;
    }

    function izlistaj(){
        if(!dohvaceni){
            var p = dohvati();
            if(p == null){
                greska.innerHTML = "Nema podataka";
            }else{
                
                for(i=0; i < p.length; i++){
                    kreiraj_tabelu(p[i],'tabela');
                }
            }
        }

        var dugme1 = document.getElementById("pogledaj_pozivnicu");
        dugme1.style.pointerEvents = "none";

        var lista = document.getElementById('lista');
        if(lista.style.display == 'block') {
            lista.style.display = 'none';
          } else {
            lista.style.display = 'block';
      }
        lista.className = "shown";
        dohvaceni = true;
        return;

        
    }

    function kreiraj_tabelu2(){
        var tabela = document.getElementById("pozivnica");
        tabela.style.display = "inline-block";
        tabela.style.backgroundImage = "url('img/water-1330252__340.jpg')";
        tabela.style.borderRadius = "50px";
        
        var za_dohvatanje = localStorage.getItem("događaji");
        var p = JSON.parse(za_dohvatanje);

        console.log(p);
        console.log((p.length - 1));
        console.log(p[(p.length - 1)].tip);
        if (p[(p.length - 1)].tip == "film") {
            document.getElementById("ttip").innerHTML = "Film:" + " " + p[(p.length - 1)].tip;
        }
        else if (p[(p.length - 1)].tip == "predstava") {
            document.getElementById("ttip").innerHTML = "Predstava:" + " " + p[(p.length - 1)].tip;
        }
        else
            document.getElementById("ttip").innerHTML = p[(p.length - 1)].tip;
            document.getElementById("tnaziv").innerHTML = '"' + p[(p.length - 1)].naziv + '"';
            document.getElementById("torganizator").innerHTML = p[(p.length - 1)].organizator;
            document.getElementById("tmesto").innerHTML = p[(p.length - 1)].mesto;
            document.getElementById("tdatum").innerHTML = p[(p.length - 1)].datum;
            document.getElementById("tbroj").innerHTML = p[(p.length - 1)].broj_posetilaca;
            document.getElementById("ttrajanje").innerHTML = p[(p.length - 1)].trajanje;
            document.getElementById("tketering").innerHTML = p[(p.length - 1)].ketering;
    }

    function kreiraj_tabelu(događaj1, t){
        var tabela = document.getElementById(t);
        var red = document.createElement('tr');
        tabela.appendChild(red);
        for(svojstvo in događaj1){
            var kol = document.createElement("td");
            kol.innerHTML = događaj1[svojstvo];
            red.appendChild(kol);
        }
        return;
    }
    
    function dohvati(){
        var za_dohvatanje = localStorage.getItem("događaji");
        var p = JSON.parse(za_dohvatanje);
        return p;
    }
    function smesti_događaj(događaj){
        dohvaceni = false;
        var p = dohvati();
        if(p != null){
            p.push(događaj);
            za_smestanje = JSON.stringify(p);
        }else{
            događaji.push(događaj);
            za_smestanje = JSON.stringify(događaji);
        }
        localStorage.setItem("događaji", za_smestanje);
        return;
    }
         
