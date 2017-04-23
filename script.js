function Telefon(marka, cena, kolor,pamięć_Ram) {
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;
	this.pamięć_Ram = pamięć_Ram;
}

Telefon.prototype.printInfo = function() {
	this.getWarranyCost = function (){
		var price = this.cena * 0.90 
		return price
	}
	
	console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena +", do tego pamięć: " + this.pamięć_Ram + "." + "cena przedłużonej gwarancji równa 10% ceny telefonu wynosi: " + this.getWarranyCost());	

}

var IPhone6S = new Telefon("Apple", 2250, "srebrny", " 4 GB","cena po obniżce");
var Samsung_Galaxy_S6 = new Telefon("Samsung", 3499,"orchild grey"," 5 GB","cena po obniżce");
var OnePlus_One = new Telefon("OnePlus", 899, "red"," 6 GB","cena po obniżce");


IPhone6S.printInfo();
Samsung_Galaxy_S6.printInfo();
OnePlus_One.printInfo();
