function enterStore(){
document.getElementById("inventory").style.display="flex";
}

function showItem(name,rarity,fabric){
document.getElementById("name").innerText=name;
document.getElementById("rarity").innerText="Rarity: "+rarity;
document.getElementById("fabric").innerText="Fabric: "+fabric;
}

function equipItem(){
document.getElementById("popup").style.display="block";
}

function closePop(){
document.getElementById("popup").style.display="none";
}