$('#datepicker').datepicker();

var formular = document.getElementById('forma');
var greska = document.getElementById('greska');

function provera()
{

    return tip() && mesto() && datum() && broj_posetilaca() && trajanje() && ketering() && confirm('Da li ste sigurni?');
}

function tip()
            {
                var tip = document.getElementById('tip');

                if(tip.selectedIndex == 0)
                {
                    greska.innerHTML = "Nije odabran tip";
                    return false;
                }

                return true;
            }

function mesto()
            {
                var mesto = document.getElementById('mesto');

                if(mesto.selectedIndex == 0)
                {
                    greska.innerHTML = "Nije odabrano mesto";
                    return false;
                }

                return true;
            }

function datum()
            {
                var datum = document.getElementById('datum').value;
                
                if(!datum)
                {
                    greska.innerHTML = "Nije unet datum";
                    return false;
                }
    
                return true;
        }


function broj_posetilaca()
            {
                var broj_posetilaca = document.getElementById('broj_posetilaca').value.trim();
                
                if(broj_posetilaca.length == 0)
                {
                    greska.innerHTML = "Nije unet broj posetilaca";
                    return false;
                }

                if(broj_posetilaca > 500)
                {
                    greska.innerHTML = "Maksimalan broj posetilaca je 500";
                    return false;
                }

                return true;
        }

function trajanje()
        {
            var trajanje = document.getElementById('trajanje').value.trim();
            
            if(trajanje.length == 0)
            {
                greska.innerHTML = "Nije uneto trajanje događaja";
                return false;
            }

            return true;
    }
