/**
 * Created by h205p3 on 12/8/16.
 */
//ITEM CONSTRUCTORS
function Item(name, id, durability, quantity, rarity) {
    this.name = name;
    this.id = id;
    this.durability = durability;
    this.quantity = quantity;
    this.rarity = rarity;
}
function Armor(bodySlot, dmgReduce, element) {
    this.bodySlot = bodySlot;
    this.dmgReduce = dmgReduce;
    this.element = element;
}
function Weapon(equip, dmg, element) {
    this.equip = equip;
    this.dmg = dmg;
    this.element = element;
}
function Consumable(healthUp, manaUp, dmgReduce) {
    this.healthUp = healthUp;
    this.manaUp = manaUp;
    this.dmgReduce = dmgReduce;
}
//CHARACTER CONSTRUCTORS
function Character(name, id, attacks, health, mana, inv, location, isDead, armor, level, img, maxHealth, gold, race, vision, weapon, damage){
    this.name = name;
    this.id = id;
    this.attacks = attacks;
    this.health = health;
    this.mana = mana;
    this.inv = inv;
    this.location = location;
    this.isDead = isDead;
    this.armor = armor;
    this.level = level;
    this.img = img;
    this.maxHealth = maxHealth;
    this.gold = gold;
    this.race = race;
    this.vision = vision;
    this.weapon = weapon;
    this.damage = damage;
}
function Hero(turnCounter, age, weightMax) {
    this.turnCounter = turnCounter;
    this.age = age;
    this.weightMax = weightMax;
}
function NPC(hostile) {
    this.hostile = hostile;
}
Hero.prototype = new Character();
NPC.prototype = new Character();



//ROOM CONSTRUCTORS
function Room(name, id, intro, img, exits, description, contents) {
    this.name = name;
    this.id = id;
    this.intro = intro;
    this.img = img;
    this.exits = exits;
    this.description = description;
    this.contents = contents;
}

//Rooms
var Dungeon1 = new Room();
Dungeon1.name = "The Spider's Den";
Dungeon1.id = 1;
Dungeon1.intro = "";
Dungeon1.description = "<br>Thick cobwebs fill the corners of the room, and wisps of webbing hang from the ceiling and waver in a wind you can barely feel. One corner of the ceiling has a particularly large clot of 'webbing' within which a goblin's 'bones' are tangled.";


var Dungeon2 = new Room();
Dungeon2.name = "";
Dungeon2.description = "<br>Rounded green stones set in the floor form a snake's head that points in the direction of the doorway you stand in. The body of the snake flows back and toward the wall to go round about the room in ever smaller circles, creating a spiral pattern on the floor. Similar green-stone snakes wend along the walls, seemingly at random heights, and their long bodies make wave shapes.";

//Items
var Bone = new Item();
Bone.name = "bone";
Bone.durability = 1;
Bone.equip = false;
Bone.dmg = [10, 20, 30, 40, 50];

//Characters
var Spider = new NPC();
Spider.name = "spider";
Spider.health = 250;
//Spider.inv = RANDOM LOOT GENERATOR?
Spider.isDead = false;
Spider.gold = 5;
Spider.hostile = true;
Spider.damage = [10, 20, 30, 40, 50, 60];
