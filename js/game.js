/**
 * Created by h205p3 on 12/12/16.
 */
//var spiderDMG = Spider.damage[Math.floor(Math.random() * Spider.damage.length)];



function tree_on_create() {
    if (player.race == 9) {
        $(document).ready(function () {
            console.log($("#constext").val());
            if ($("#constext").val().toLowerCase() == "photosynthesize") {
                $("#cout").empty(treeText1);
                $("#cout").append(treeText3, treeText2);
            } else if ($("#constext").val().toLowerCase() == "look") {
                $("#cout").empty(treeText3);
                $("#cout").append(treeText5, treeText2);
            } else if ($("#constext").val().toLowerCase() == "go") {
                $("#cout").empty(treeText3);
                $("#cout").append(treeText4, treeText2);
            } else if ($("#constext").val().toLowerCase() == "trade") {
                $("#cout").empty(treeText3);
                $("#cout").append(treeText6, treeText2);
            } else if ($("#constext").val().toLowerCase() == "fight") {
                $("#cout").empty(treeText3);
                $("#cout").append(treeText7, treeText2);
            } else if ($("#constext").val().toLowerCase() == "photosynthesize again") {
                $("#cout").empty(treeText3);
                $("#cout").append(treeText8, treeText11);
            } else if ($("#constext").val().toLowerCase() == "photosynthesize x3") {
                $("#cout").empty(treeText3);
                $("#cout").append(treeText9, treeText12);
            } else if ($("#constext").val().toLowerCase() == "photosynthesize x4") {
                $("#cout").empty(treeText3);
                $("#cout").append(treeText10, treeText13);
            } else if ($("#constext").val().toLowerCase() == "conquer") {
                $("#cout").empty(treeText3);
                $("#cout").append(treeText14);
            } else if ($("#constext").val().toLowerCase() == "celebrate") {
                $("#cout").empty(treeText3);
                $("#cout").append(treeText15);
            }
        });


    } else if (player.race == 1) {

        $(document).ready(function () {
            console.log($("#constext").val());
            if ($("#constext").val().toLowerCase() == "use torch" && player.inv.indexOf("torch", 0) >= 0) {
                $("#cout").append(useTorch);
                player.vision = true;
            } else if ($("#constext").val().toLowerCase() == "look torch" && player.inv.indexOf("torch", 0) >= 0) {
                $("#cout").append(lookTorch);
            } else if ($("#constext").val().toLowerCase() == "look webbing") {
                $("#cout").append(lookWebbing);
            } else if ($("#constext").val().toLowerCase() == "torch webbing") {
                $("#cout").append(burnWebbing);
                //add an indicator to an array that the web is burned, and the bones are accessible.
                trig.push("web");
            } else if ($("#constext").val().toLowerCase() == "look bones") {
                $("#cout").append(lookBones);
            } else if ($("#constext").val().toLowerCase() == "get bones" && trig.indexOf("web", 0) >= 0) {
                $("#cout").append(getBones);
                player.inv.push("bone");
            } else if ($("#constext").val().toLowerCase() == "equip bone" && player.inv.indexOf("bone", 0) >= 0) {
                $("#cout").append(equipText + Bone.name);
                player.weapon.push(Bone);
            } else if ($("#constext").val().toLowerCase() == "look pendant") {
                $("#cout").append(lookPendant);
            } else if ($("#constext").val().toLowerCase() == "get pendant" && trig.indexOf("web", 0) >= 0) {
                $("#cout").append(getPendant);
                player.inv.push("pendant");
                trig.push("pendant");
            } else if ($("#constext").val().toLowerCase() == "look behind" && trig.indexOf("pendant", 0) >= 0) {
                $("#cout").empty();
                $("#cout").append(spider);
                $("#spider").toggle();
                $("#NPCHealth").toggle();
                $("#NPCHealth").append(Spider.health);
                trig.push("spider");
            } else if ($("#constext").val().toLowerCase() == "fight spider" && trig.indexOf("spider", 0) >= 0) {
                $("#cout").empty();
                $("#cout").append(fight);
                trig.push("spiderAggro")
            } else if ($("#constext").val().toLowerCase() == "flee spider" && trig.indexOf("spiderAggro", 0) >= 0) {
                if (player.weapon.length > 0) {
                    $("#cout").append(spiderFlee);
                } else {
                    $("#cout").append(spiderFlee, spiderKill);
                }
            }
            else if ($("#constext").val().toLowerCase() == "attack spider" && trig.indexOf("spiderAggro", 0) >= 0) {
                console.log(player.weapon);
                if (player.weapon.length > 0) {
                    var playerDMG = player.weapon[0].dmg[Math.floor(Math.random() * player.weapon[0].dmg.length)];
                    var spiderDMG = Spider.damage[Math.floor(Math.random() * Spider.damage.length)];
                    $("#cout").append(attack, playerDMG, enemyAttack, spiderDMG);
                    player.health -= spiderDMG;
                    Spider.health -= playerDMG;
                    $("#health").empty();
                    $("#health").append("Your Health: ", player.health);
                    $("#NPCHealth").empty();
                    $("#NPCHealth").append("NPC Health: ", Spider.health);
                    if (Spider.health <= 0) {
                        Spider.isDead = true;
                        $("#cout").empty();
                        $("#cout").append(spiderDead);
                        trig.push("spiderDead");
                    }
                } else {
                    $("#cout").append("You dont have a weapon! Flee!");
                }
            } else if ($("#constext").val().toLowerCase() == "look spider" && trig.indexOf("spiderDead", 0) >= 0) {
                $("#cout").append(lookSpider);
                trig.push("inner");
            } else if ($("#constext").val().toLowerCase() == "go hole" && trig.indexOf("inner", 0) == -1 && trig.indexOf("spiderDead", 0) >= 0) {
                $("#cout").append(goHole);
            }
            else if ($("#constext").val().toLowerCase() == "help") {
                $("#cout").append(helpText, helpText2);
            } else if ($("#constext").val().toLowerCase() == "look" && player.vision == true) {
                $("#cout").append(player.location.description);
            } else if ($("#constext").val().toLowerCase() == "satchel") {
                $("#cout").append("Your satchel contains:" + player.inv);
            }
        })
    }
}
function ready() {
    $(document).ready(function () {
        $("#attacks").toggle();
        $("#potion").toggle();
        $("#potion").append(healthPotion.number);
        $("#ready").toggle();
        $(".console").remove();

    })
}

$(document).ready(function () {
    $("#slime").toggle();
    $("#knight").toggle();
    $("#goblin").toggle();
    $("#arachnid").toggle();
    var roomGenerate = arena.monsterNum[Math.floor(Math.random() * arena.monsterNum.length)];
    var monsterGenerate = arena.monstersNum[Math.floor(Math.random() * arena.monstersNum.length)];
    for(i = 0; i < roomGenerate; i++) {
        arena.chosen.push(arena.monsters[monsterGenerate]);
    }
    console.log(arena.monsters);
    for(i=0; i < arena.chosen.length; i++){
        if(i==0){
            $("#goblin").toggle();
        }
        else if(i==1){
            $("#knight").toggle();
        }
        else if(i==2){
            $("#slime").toggle();
        }
        else if(i==3){
            $("#arachnid").toggle();
        }
    }
    console.log(arena.chosen);

    $("#knight").click(function(){
        $("#knight").animate({
            height: '+=150px',
            width: '+=150px'});
        $("#slash").unbind("click").click(function(){
            $("#knight").animate({
                height: '-=150px',
                width: '-=150px'});
        });
        $("#bash").unbind("click").click(function(){
            $("#knight").animate({
                height: '-=150px',
                width: '-=150px'});
        });
        $("#tackle").unbind("click").click(function(){
            $("#knight").animate({
                height: '-=150px',
                width: '-=150px'});
        });
        $("#stun").unbind("click").click(function(){
            $("#knight").animate({
                height: '-=150px',
                width: '-=150px'});
        })
    });
    $("#goblin").click(function(){
        $("#goblin").animate({
            height: '+=150px',
            width: '+=150px'});
        $("#slash").unbind("click").click(function(){
            $("#goblin").animate({
                height: '-=150px',
                width: '-=150px'});
        });
        $("#bash").unbind("click").click(function(){
            $("#goblin").animate({
                height: '-=150px',
                width: '-=150px'});
        });
        $("#tackle").unbind("click").click(function(){
            $("#goblin").animate({
                height: '-=150px',
                width: '-=150px'});
        });
        $("#stun").unbind("click").click(function(){
            $("#goblin").animate({
                height: '-=150px',
                width: '-=150px'});
        })
    });
    $("#slime").click(function(){
        $("#slime").animate({
            height: '+=150px',
            width: '+=150px'});
        $("#slash").unbind("click").click(function(){
            $("#slime").animate({
                height: '-=150px',
                width: '-=150px'});

        });
        $("#bash").unbind("click").click(function(){
            $("#slime").animate({
                height: '-=150px',
                width: '-=150px'});
        });
        $("#tackle").unbind("click").click(function(){
            $("#slime").animate({
                height: '-=150px',
                width: '-=150px'});
        });
        $("#stun").unbind("click").click(function(){
            $("#slime").animate({
                height: '-=150px',
                width: '-=150px'});
        })
    });
    $("#arachnid").click(function(){
        $("#arachnid").animate({
            height: '+=150px',
            width: '+=150px'});
        $("#slash").unbind("click").click(function(){
            $("#arachnid").animate({
                height: '-=150px',
                width: '-=150px'});
        });
        $("#bash").unbind("click").click(function(){
            $("#arachnid").animate({
                height: '-=150px',
                width: '-=150px'});
        });
        $("#tackle").unbind("click").click(function(){
            $("#arachnid").animate({
                height: '-=150px',
                width: '-=150px'});
        });
        $("#stun").unbind("click").click(function(){
            $("#arachnid").animate({
                height: '-=150px',
                width: '-=150px'});
        })
    })
});



function attackSlash() {
    $(document).ready(function () {

    })
}
function attackBash() {
    $(document).ready(function () {

    })
}
function attackTackle() {
    $(document).ready(function () {

    })
}
function attackStun() {
    $(document).ready(function () {

    })
}