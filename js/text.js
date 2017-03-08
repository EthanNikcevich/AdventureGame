/**
 * Created by h205p3 on 12/8/16.
 */
var startText = "Welcome to Name of the Game! <br> Who are you? You decide! <br> What are you? You decide! <br> Where are you? That's for me to know and you to find out...";

var room1Look = "";



var helpText = "<br>HELP: 'look' to get a description of what is in the room. 'use + item' to use an item in your inventory. 'item + something' to use an item on something. 'get + item' to add an item to your inventory. 'satchel' to see what's in your inventory. 'look + object' to get a description of the object. 'fight + character' to engage a character in battle.";
var helpText2 = "'trade' to exchange items for gold with a character. 'go + area/exit/doorway' to enter another area.";



//tree
var treeText1 = "<br>You are a tree. Nice choice! 'photosynthesize' to take in sunlight and grow stronger.";
var treeText2 = "<br>What will you do next? 'look', 'go', 'trade', 'fight', 'photosynthesize again'";
var treeText3 = "<br>You absorb the power of nature, and grow stronger. Height +1.";
var treeText4 = "<br>You're a robust tree, and while no other can match your woodiness, mobility is not your strength. You stay where you are.";
var treeText5 = "<br>You're a robust tree, and while no other can match your woodiness, you don't have the five senses. You don't see where you are.";
var treeText6 = "<br>You're a tree. Your only belongings are the leaves on your branches. You have nothing worth trading.";
var treeText7 = "<br>Trees are a peaceful race. You do not fight.";
var treeText8 = "<br>You take in the light, and feel your power level rising. Height +1";
var treeText9 = "<br>You feel the light course through your leaves. You're now the tallest tree in the forest.";
var treeText10 = "<br>Organisms from miles around come to bask in your glorious height. You gain the title 'ThatsAReallyBigTree'";
var treeText11 = "<br>What will you do next? 'look', 'go', 'trade', 'fight', 'photosynthesize x3'";
var treeText12 = "<br>What will you do next? 'look', 'go', 'trade', 'fight', 'photosynthesize x4'";
var treeText13 = "<br>Proud of your new title, you decide to spread the word of your glory. 'conquer' to expand your domain.";
var treeText14 = "<br>The surface dwellers learn the might of your Bigness as you expand your branches outward, covering first the forest, then the continent, and finally the world! 'celebrate'";
var treeText15 = "<br>Congratulations! You conquered the land, and held dominion for an entire day! Unfortunately for you, trees are a flammable species. A wandering traveller accidentally drops his lantern, and sets you on fire. TREE END";

//HUMAN PATH
var humanText1 = "You wake up in a dark room, with nothing but a 'torch' and your empty 'satchel'. You have no idea where you are or how you got here, and it's too dark to see... If only there was a way to make this room a little brighter....(Type 'help' if you're ever stuck.)";
var equipText = "<br>You equip the ";
//room stuff
var lookWebbing = "<br>The webbing is not that of a common house-spider. It's threads are as thick as your forearm, and would hold on tight to whatever they touch. It seems to be flammable.";
var burnWebbing = "<br>The webbing quickly goes up in flames, leaving behind a terrible odor and the goblin's 'bones', which tumble to the floor in front of you.";
var lookBones = "<br>They are the remains of a common goblin. There's nothing special about the bones, but you see a 'pendant' around the goblin's neck.";

//items
var useTorch = "<br>The room is flooded with light! You can now 'look' at your surroundings.";
var lookTorch = "<br>It's a branch with a rag wrapped around one end.";
var lookPendant = "<br>A rusted chain bears the pendant of some noble family. Perhaps it will be useful in your travels.";
var getPendant = "<br>As you lift the pendant from its past owner, the vacant skull which held it falls off its shoulders, making a loud rattle upon the cobblestones. You hear a noise from 'behind' you. Could more bones have fallen from the ceiling?";
var getBones = "<br>You pick up the thigh bone of the goblin. Will you 'equip' the bone?";

//Enemies
var spider = "<br>A spider the size of a large dog has entered the room. It is approaching you, making a malicious hiss. You have no choice but to 'fight' the 'spider'.";
var fight = "<br>Will you 'attack' the enemy, 'use' an item, or try to 'flee'?";
var attack = "<br>You attack the enemy, dealing ";
var enemyAttack = "<br>The enemy attacks you, dealing ";
var spiderDead = "<br>With a final mighty swing, you end the miserable existence of your foe. The oversized spider collapses, and the light leaves its eyes. You can now 'look' at the 'spider', or 'go' to the 'hole' in the wall when you are ready to leave.";
var lookSpider = "<br>You look down upon the spider. The guilt of its death crashes upon your mind. Images flash in your head of how you and the spider could have been friends. But this dream is no more. You murdered the spider. You will live with this guilt for the rest of your life. 'attack' 'self' to fight your inner demons.";
var spiderFlee = "<br>You are cornered. There is no escape!";
var spiderKill = " The spider tears into your flesh, rending you limb from limb. If only you had found a weapon before fighting the spider. HUMAN END";
var goHole = "<br>You crawl through the hole, finding yourself in a new room.";

//ELF PATH
var elfIntro = "Welcome to the arena! You will be faced with increasingly difficult challenges until your inevitable death. Have fun!";