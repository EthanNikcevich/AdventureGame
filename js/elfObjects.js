/**
 * Created by h205p3 on 1/13/17.
 */

Monstertypes = {
    GOBLIN : 0,
    SLIME : 1,
    KNIGHT : 2,
    ARACHNID : 3
};

function Potion(name, heal, number) {
    this.name = name;
    this.heal = heal;
    this.number = number;
}

function Dungeon(level, encounter, monsterNum, monstersNum, monsters, chosen) {
    this.level = level;
    this.encounter = encounter;
    this.monsterNum = monsterNum;
    this.monstersNum = monstersNum;
    this.monsters = monsters;
    this.chosen = chosen;
}

function Attacks(name, type, effect){
    this.name = name;
    this.type = type;
    this.effect = effect;
}
//types: if (type == enemy.weakness; 1.5x against matching type enemies

function Enemy(type, health, attacks, weakness, level) {
    this.type = type;
    this.health = health;
    this.attacks = attacks;
    this.weakness = weakness;
    this.level = level;
}

//POTIONS
var healthPotion = new Potion();
healthPotion.name = "Health Potion";
healthPotion.heal = .5;
healthPotion.number = 3;











//ATTACKS
//Effects: confuse = target may miss 0, 1, 2, or 3 attacks.
//Effects: poison = target takes small damage each turn.
//Effects: slow = target misses 1 attack every 2 combat cycles for 4 combat cycles.
var bash = new Attacks();
bash.name = "Bash";
bash.type = 2;
//prime number attack.types to use % in tests. eg. slash and cut are the same effect, but different attacks. Types would be 13 and 26.
var slash = new Attacks();
slash.name = "Slash";
slash.type = 3;

var tackle = new Attacks();
tackle.name = "Tackle";
tackle.type = 5;

var stun = new Attacks();
stun.name = "Stun";
stun.type = 7;
stun.effect = "confuse";

var bite = new Attacks();
bite.name = "Bite";
bite.type = 11;
bite.effect = "poison";

var stringshot = new Attacks();
stringshot.name = "Stringshot";
stringshot.type = 13;
stringshot.effect = "slow";

//ENEMIES
var knight = new Enemy();
knight.type = Monstertypes.KNIGHT;
knight.health = [600, 6000, 60000];
knight.attacks = [slash, stun];
knight.level = [1, 2, 3];
knight.weakness = 2;


var arachnid = new Enemy();
arachnid.type = Monstertypes.ARACHNID;
arachnid.health = [500, 5000, 50000];
arachnid.attacks = [bite, stringshot];
arachnid.level = [1, 2, 3];
arachnid.weakness = 3;


var goblin = new Enemy();
goblin.type = Monstertypes.GOBLIN;
goblin.health = [300, 3000, 30000];
goblin.attacks = [stun, tackle, slash];
goblin.level = [1, 2, 3];
goblin.weakness = 5;


var slime = new Enemy();
slime.type = Monstertypes.SLIME;
slime.health = [250, 2500, 25000];
slime.attacks = [tackle, bash];
slime.level = [1, 2, 3];


//ARENA

var arena = new Dungeon();
arena.level = [1,2,3];
arena.monsterNum = [1,2,3];
arena.monstersNum = [1,2,3,4];
arena.monsters = [knight,goblin,arachnid,slime];
arena.chosen = [];