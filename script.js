
let xp = 0;
let health = 100;
let gold = 1000;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = [
	{
		name: "stick",
		power: 5
	},
	{
		name: "dagger",
		power: 30
	},
	{
		name: "claw hammer",
		power: 50
	},
	{
		name: "sword",
		power: 100
	}
];

const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave","Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the own square. You see a sign that says \"store.\""
    },
    {
    name: "store",
		"button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
		"button functions": [buyHealth, buyWeapon, goTown],
		text: "You enter the store."
    },
    {
		name: "cave",
		"button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
		"button functions": [fightSlime, fightBeast, goTown],
		text: "You enter the cave. You see some monsters."
	},
];

// initialize buttons

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;
}

function goTown() {
    update(locations[0])
}

function goStore() {
        update(locations[1])
}

function goCave(){
    update(locations[2])
}

function fightDragon() {

}

function buyHealth () {
    if(gold >= 10){
 gold -= 10;
 health += 10;
 goldText.innerText = gold;
 healthText.innerText = health;
 text.innerHTML = "The shopkeeper quickly rushes into a dusty, tucked away cabinet behind his counter before slamming the creaky old door; returning in elaborate pastoral garments. <br></br><em>\"May you be nourished and fulfilled in the name and light of this divine respite.\"</em> He says, resting his cold palm on your temple";
    }
    else{
        text.innerHTML = "The shopkeeper flashes a look of concerned empathy: <br></br><em>\"Sorry traveler, you lack the tithe necessary to receive the Chaplain's host.\"</em>"
    }
}

function buyWeapon () {
    if (currentWeapon < weapons.length - 1){
        let inventoryString
        if (gold >= 30){
            gold -= 30;
            currentWeapon++;
            goldText.innerText = gold;
                        let newWeapon = weapons[currentWeapon].name;
                text.innerHTML = "The shopkeep brings out a shiny new " + newWeapon + ".";
                inventory.push(newWeapon);
                if(inventory.length > 1){
                    inventoryString = inventory.join(", ")
                    text.innerHTML += "<br></br><em>\"You are wise to know the danger of going alone, traveler. Will alone was not enough for Adon to split the skies, let alone for you to defeat that dragon: Ekenzu.\" <br></br></em> The old shopkeep places the " + newWeapon + " in your inventory. You now have: " + inventoryString;
                }
            
        }
        else{
            text.innerHTML = "The shopkeep offers nothing but a tight-lipped smirk and a few words:<br></br> <em>\"Patience, traveler. In time your riches will be plenty and you'll be able to afford yourself a shiny new weapon. Alas, that time is not now.\"</em>"
       }
    }  
    else {
        text.innerHTML = "The shopkeeper snickers, looking at you with a mix of amusement and awe. <br></br><em>\"Don't you know that it is better to be happy with what you have than to want more and more? Don't be bashful, Champion! Posture up, for you already have the most powerful weapon in the whole realm!\""
    }   
}

function fightSlime () {

}

function fightBeast () {

}