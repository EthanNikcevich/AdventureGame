/**
 * Created by h205p3 on 12/5/16.
 */

//CHARACTER CREATION
var player = new Hero();


$(document).ready(function() {
    $("#cout").append(startText);
    $("#input").toggle();
    $("#command").toggle();
    $("#health").toggle();
    $("#mana").toggle();
    $("#human").toggle();
    $("#elf").toggle();
    $("#snake").toggle();
    $("#dwarf").toggle();
    $("#angel").toggle();
    $("#demon").toggle();
    $("#baby").toggle();
    $("#dog").toggle();
    $("#tree").toggle();
    $("#spider").toggle();
    $("#NPCHealth").toggle();
    $("#attacks").toggle();
    $("#potion").toggle();
    $("#ready").toggle();
    //$("#slime").toggle();
    //$("#knight").toggle();
    //$("#goblin").toggle();
    //$("#arachnid").toggle();
});
$(document).ready(function() {
    $("#disappear").click(function () {
        if ($("#playerName.value").length == -1 || $("#playerRace.value").length == -1) {
            console.log("oops")
        }
        else {
            $("#disappear").remove();
            $("#cout").empty();
            $(".buttons").remove();
            if (player.race == 1) {
                $("#input").toggle();
                $("#command").toggle();
                $("#human").toggle();
                $("#mana").toggle();
                $("#mana").append(player.mana);
                $("#health").toggle();
                $("#health").append(player.health);
                $("#cout").append(humanText1);
            } else if (player.race == 2) {
                $("#elf").toggle();
                $("#ready").toggle();
                $("#health").toggle();
                $("#health").append(player.health);
                $("#cout").append(elfIntro);

            } else if (player.race == 3) {
                $("#snake").toggle();
            } else if (player.race == 4) {
                $("#dwarf").toggle();
            } else if (player.race == 5) {
                $("#angel").toggle();
            } else if (player.race == 6) {
                $("#demon").toggle();
            } else if (player.race == 7) {
                $("#baby").toggle();
            } else if (player.race == 8) {
                $("#dog").toggle();
            } else if (player.race == 9) {
                $("#input").toggle();
                $("#command").toggle();
                $("#tree").toggle();
                $("#cout").append(treeText1);
            }
        }
    });
});




function createChar() {
    a = document.getElementById("playerName").value;
    player.name = a.trim();
    player.race = document.getElementById("playerRace").value;
    player.age = 0;
    player.attacks = [slash, bash, tackle, stun];
    player.turnCounter = 0;
    player.weightMax = 0;
    player.gold = 0;
    player.health = 1000;
    player.maxHealth = 100;
    player.mana = 100;
    player.isDead = false;
    player.id = 1;
    player.vision = false;
    player.location = Dungeon1;
    player.inv = ["torch"];
    player.weapon = [];
    player.damage = 1;
    player.level = 1;
    if (a != "" && player.race != "") {
    }
}

var trig = [];




//END CHARACTER CREATION



//TEST FUNCTION
function test() {
    console.log(player.name);
    console.log(player.race);
}


//commands
//help: "look" to get a description of what is in the room. "get + item" to pick up item. "look + object" to get a description of the object. "fight + character" to engage a character in battle.
//"trade" to exchange items for gold with a character. "go + cardinal direction" to enter another room in that direction.
