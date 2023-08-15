let submitButton = document.getElementById('submitButtonId');
let submitText = document.getElementById('submitTextId');
let itemNameResult = document.getElementById('itemNameId');
let lovesResult = document.getElementById('lovesId');
let likesResult = document.getElementById('likesId');
let neutralsResult = document.getElementById('neutralsId');
let dislikesResult = document.getElementById('dislikesId');
let hatesResult = document.getElementById('hatesId');

const villagers = ["Anna", "Barley", "Basil", "Cliff", "Doctor Tim", "Doug", "Duke", "Ellen", "Gotz", "Gray", "Greg", "Harris", "Jeff", "Kai", "Kano", "Lillia", "Louis", "Manna", "May", "Mayor Thomas", "Pastor Carter", "Rick", "Saibara", "Sasha", "Stu", "Won", "Zack", "Harvest Sprites", "Ann", "Elli", "Karen", "Mary", "Popuri"]
const items = {"Apple Jam": [4429644033, 2701180948, 385359522, 8264, 1073741824], "Apple Pie": [4714469765, 2752283720, 45236784, 4202498, 1073741824], "Blue Magic Red Flower": [537165969, 7660914694, 370882376, 20971552, 0], "Cake": [4714662145, 2687209676, 110126624, 4194322, 1073741824], "Cheesecake": [285212677, 2820982920, 4405794672, 4202498, 1073741824], "Chocolate Cake": [4725151745, 537559144, 2249287556, 4194322, 1073741824], "Chocolate Cookie": [159682817, 805505092, 6546810408, 4194450, 1073741824], "Cookie": [159649797, 2953021504, 4399327032, 4194434, 1073741824], "Grape Jam": [2281787393, 4848648324, 385748850, 1073750024, 0], "Ice Cream": [4580442881, 2820804748, 110750832, 4194306, 1073741824], "Ketchup Recipe": [553910305, 278003712, 134218498, 1080596696, 6543205380], "Moondrop Flower": [537133185, 3380791302, 4667815768, 4194336, 0], "Orange Cup Fruit": [555090049, 7659378726, 371271512, 4194304, 0], "Pink Cat Flower": [4832231553, 3380664326, 372844376, 4194336, 0], "Red Magic Red Flower": [537165969, 7660914690, 370882376, 20971552, 0], "Strawberry Jam": [4446421249, 2963308716, 101735954, 1078468672, 0], "Strawberry Milk": [4717805569, 2155907208, 637761334, 1078460480, 0], "Toy Flower": [4832100481, 3380791302, 372848472, 4194336, 0], "Adamantite": [768, 20987905, 7348421632, 8951994, 1211572292], "Apple": [0, 6943145453, 573047314, 1073741824, 0], "Blue Grass": [2147532820, 671092769, 42009346, 1348208840, 4381090816], "Bodigizer": [2283843712, 133921, 579403798, 1364213832, 4362339328], "Bodigizer XL": [2283846304, 131329, 579403798, 1364213832, 4362339328], "Butter": [135290912, 1090656531, 5149393604, 2147483656, 67109888], "Copper Ore": [768, 20987907, 2717909008, 1082701992, 4701225028], "Curry Powder": [1048608, 8397073, 8374901382, 138477640, 67109888], "Dinner Roll": [256, 2415921805, 6169785394, 4227136, 0], "Egg": [256, 5775436531, 2806076428, 8421376, 0], "Small Fish": [1048608, 570571409, 7665926474, 352388100, 0], "Medium Fish": [1179936, 656422545, 7529613386, 402718724, 0], "Large Fish": [74900720, 855642881, 7525107722, 134283268, 0], "Flour": [135274656, 4303356177, 4079934022, 4259848, 67109888], "Gold Ore": [768, 20987907, 2717909008, 1082701992, 4701225028], "Green Grass": [2147532836, 1, 579146642, 1347946568, 4515308544], "Honey": [4448534688, 2157492503, 910165576, 1073741824, 0], "Hot Milk": [4447011080, 2752355463, 1388470896, 2097152, 0], "Jam Bun": [262400, 2575337625, 4940060198, 1074274368, 0], "Ketchup": [17825824, 6444972821, 2060026050, 8, 67109888], "Mayonnaise": [256, 7670757921, 919176412, 2, 0], "Milk": [256, 7413346491, 1176587844, 0, 0], "Mixed Latte": [4380, 3162702849, 58516130, 5368711232, 0], "Mystrile": [768, 20987907, 2785018896, 1082693800, 4701233220], "Oil": [1056800, 142606609, 8374901382, 4259912, 67109888], "Orichalcum": [768, 29376515, 2785018880, 1074305208, 4701233220], "Pineapple": [0, 4726941821, 3858798464, 4194306, 0], "Pumpkin Pudding": [2550398980, 4917972233, 43627168, 4194386, 1073741824], "Raisin Bread": [2281832704, 278988941, 4934399538, 1094713408, 0], "Red Grass": [2147500048, 134221825, 578813956, 1096351848, 4633046914], "Relaxation Tea Leaves": [2282143876, 4901057603, 1406733104, 8, 0], "Silver Ore": [768, 20987907, 2717909008, 1082701992, 4701225028], "Strawberry": [0, 966508697, 3324264294, 4194304, 0], "SUGDW Apple": [256, 6930562285, 585630226, 1073741824, 0], "Sweet Potato (dish)": [151257092, 7247923337, 110171680, 6824018, 1073741824], "Turbojolt": [2149627904, 134349601, 579403926, 1364213832, 4362339328], "Turbojolt XL": [2283846176, 131329, 579403926, 1364213832, 4362339328], "Wild Grape": [151044228, 2417176681, 6021713682, 0, 0], "Wine": [1211656304, 71370509, 2457993216, 536907778, 4312006784], "Wool": [256, 2307180675, 6275405392, 6299692, 1048576], "Yarn Ball": [151257216, 6452035587, 1980339792, 6301996, 0], "Bamboo Shoot": [2152222896, 133126, 6437307721, 270848, 0], "Boiled Egg": [4297064456, 2550403136, 1742450487, 16512, 0], "Bread": [135340352, 4563403404, 3886996531, 4194304, 0], "Cabbage": [0, 1181872, 4276729679, 17055744, 0], "Carrot": [0, 143821246, 8429336129, 16777216, 0], "Chocolate": [4590928416, 671125576, 2248895877, 5242898, 1073741824], "Corn": [0, 5439024412, 3150910179, 0, 0], "Cucumber": [0, 1079181786, 7493959205, 16793600, 0], "Eggplant": [0, 1074987090, 3203202989, 4311744512, 0], "Fruit Juice": [4446228884, 2426636360, 1717069347, 0, 0], "Fruit Latte": [4380, 3162702848, 58516131, 5368711232, 0], "Golden Egg": [256, 3628006130, 666960909, 0, 0], "Grape Juice": [17121600, 7392497806, 35138097, 1077936128, 67240960], "Green Pepper": [0, 3222411536, 518612207, 4848910848, 0], "Mixed Juice": [134224148, 2426863752, 1733879331, 4294967360, 0], "Mushroom": [2147500196, 6356994, 6419029849, 17047552, 0], "Onion": [0, 1188144, 8035079887, 553666560, 0], "Potato": [0, 1075448596, 7497692395, 16793600, 0], "Pumpkin": [0, 3369738642, 369483373, 4850712576, 0], "Salad": [268435712, 5905594460, 2415904419, 0, 0], "Sandwich": [4580182024, 604247236, 3401311027, 4194304, 0], "Spinach": [0, 3436315862, 5136841513, 16777216, 0], "Stew": [269746328, 4513078592, 3802907175, 4202496, 0], "Sweet Potato": [0, 1075497366, 7495554665, 18882560, 0], "Tomato": [0, 4573343898, 4016590693, 0, 0], "Tomato Juice": [2147684740, 470084698, 1660420129, 4311745024, 0], "Truffle": [3225993380, 4437708866, 909184793, 270336, 16777216], "Turnip": [0, 140116370, 4138065005, 4311752704, 512], "Veggie Juice": [2147621276, 1015088130, 1115218465, 4312006720, 0], "Veggie Latte": [2147621148, 880870402, 1249698465, 4311744576, 0], "Bamboo Rice": [2420641996, 4303374386, 1849132800, 16785409, 0], "Cheese": [256, 3711889000, 570494996, 4307550339, 0], "Cheese Fondue": [2432698728, 1277199876, 585060368, 4294975619, 0], "Chirashi Sushi": [72, 5168575798, 3261975168, 159383553, 0], "Curry": [270533128, 17051968, 6150521908, 2151827587, 0], "Curry Noodles": [264, 18878980, 7631520882, 134228097, 0], "Fried Noodles": [268435456, 4314378508, 3872902770, 134217857, 0], "Fried Rice": [268438016, 68162888, 5568962742, 2684370945, 0], "Fries": [1091569664, 4632872008, 713814820, 2151678099, 0], "Greens": [328, 4031254694, 4407684112, 150995457, 0], "Grilled Fish": [268435776, 608187434, 7687883408, 25427973, 0], "Happy Eggplant": [328, 1355354166, 641133696, 6593446401, 0], "Miso Soup": [4194632, 1419254918, 7149699632, 16785409, 0], "Mushroom Rice": [2415984780, 4433514610, 6018617088, 16785409, 0], "Noodles": [256, 268435590, 8187272824, 134225921, 0], "Omelet": [4699717896, 17316034, 3331835444, 541065217, 0], "Pickled Turnips": [4259840, 1342705898, 649252116, 6593716737, 0], "Pickles": [4259904, 1342705834, 4944219412, 2298749441, 0], "Pizza": [1224745032, 336693028, 2729334928, 4299161603, 0], "Popcorn": [1093664768, 5167654476, 2324404512, 4210835, 0], "Relaxation Tea": [6576855168, 816054590, 123282944, 1073741889, 0], "Rice Ball": [258, 339807436, 8250094128, 32769, 0], "Rice Omelet": [4582540040, 134748224, 3331572918, 541073409, 0], "Roasted Potatoes": [269484544, 16810124, 7227792754, 1075847169, 0], "Sashimi": [1074266432, 872571946, 6483448464, 159647749, 0], "Scrambled Eggs": [4297064456, 1347162818, 2274618676, 671088641, 0], "Spa-Boiled Egg": [4565518558, 1075384320, 2931983648, 17048065, 0], "Stir Fry": [268435528, 1612978180, 6708520882, 1, 0], "Sushi": [268566600, 2214608162, 5947376272, 159383557, 0], "Tempura": [328, 4568199204, 4021732882, 129, 0], "Tempura Noodles": [268435720, 4788228, 8182484722, 134225921, 0], "Truffle Rice": [2420773004, 8439922, 1865746176, 8193, 0], "Veggie Pancake": [268435976, 4311748932, 1862257842, 2147491841, 0], "Bandage": [554958848, 276955136, 134218498, 1080596696, 6543205413], "Branch": [0, 20972036, 1048576, 268503056, 8299410923], "Chicken Feed": [0, 2097152, 134250496, 33622296, 8419964647], "Dead Weeds": [0, 0, 4294967296, 1073741840, 3221225455], "Fish Food": [0, 67109888, 134217728, 33622296, 8354984679], "Fodder": [262144, 2, 134217728, 33556760, 8421897957], "Food Fiasco": [0, 0, 1610612736, 268437656, 6710884199], "Fries Recipe": [262144, 0, 0, 524288, 8589148159], "Garbage": [262144, 0, 0, 0, 8589672447], "Fish Bone": [0, 0, 0, 0, 8589934591], "Lumber": [1310976, 4325890, 134217728, 304678936, 8145401061], "Poisonous Mushroom": [2147500052, 0, 524288, 65536, 6441844715], "Stone": [0, 0, 0, 16, 8589934575], "Weeds": [0, 0, 0, 1073741840, 3221225455], "Jewelry": [4966055936, 3489660928, 0, 0, 0], "Golden Wool": [0, 4294967296, 0, 0, 0]}
const alternatives = {"Dead Fish": "Fish Bone", "Moondrop": "Moondrop Flower", "Pink Cat": "Pink Cat Flower", "Orange Cup": "Orange Cup Fruit", "Toy": "Toy Flower", "Bamboo": "Bamboo Shoot", "Grape": "Wild Grape", "Grapes": "Wild Grape", "Trash": "Garbage", "Copper": "Copper Ore", "Silver": "Silver Ore", "Gold": "Gold Ore", "Super Ultra Great Delicious Apple": "SUGDW Apple", "Jewelery": "Jewelry", "Winter Stone": "Stone", "Winter Branch": "Branch", "Winter Lumber": "Lumber", "Gold Wool": "Golden Wool", "Gold Egg": "Golden Egg", "Chicken Food": "Chicken Feed", "Vegetable Pancake": "Veggie Pancake", "Vegetable Latte": "Veggie Latte", "Vegetable Juice": "Veggie Juice", "Spa Boiled Egg": "Spa-Boiled Egg", "Yarn": "Yarn Ball", "Strawberries": "Strawberry"}

function decodeMask(mask) {
  let hits = []
  for (let i = 0; i < 33; i++) {
     if (Number(BigInt(mask) >> BigInt(i)) & 1) {
       hits.push(villagers[i])
     }
  }
  return hits
}

function forceTitleCase(s) {
  final = s.charAt(0).toUpperCase()
  let titlize = false
  for (let i = 1; i < s.length; i++) {
    char = s.charAt(i)
     if (titlize) {
       final += char.toUpperCase()
       titlize = false
     } else {
       final += char.toLowerCase()
       if (char == " " || char == "-") {
         titlize = true
       }
     }
  }
  return final
}

function search(query) {
  query = query.trim()
  if (query.length < 3) {
    return ["", []]
  }
  if (items[query]) {
    return [query, items[query]]
  }
  query = forceTitleCase(query)
  if (items[query]) {
    return [query, items[query]]
  }
  if (alternatives[query]) {
    return [alternatives[query], items[alternatives[query]]]
  }
  query = query.slice(0, -1)
  if (items[query]) {
    return [query, items[query]]
  }
  query = query.slice(0, -1)
  if (items[query]) {
    return [query, items[query]]
  }
  query = checkAlts(new_query)
  if (query) {
    return [query, items[query]]
  }
  return ["", []]
}

submitButton.addEventListener("click",  (_) => {
  console.log(`${submitText.value}`);

  let [result, prefs] = search(submitText.value)
  console.log(`=> ${result}`);
  
  if (result == "") {
    alert(`Item by name: "${submitText.value}" not found.`);
    console.log(`Item by name: "${submitText.value}" not found.`);
    return
  }
  
  itemNameResult.innerText = result
  lovesResult.innerText = decodeMask(prefs[0]).join(", ")
  likesResult.innerText = decodeMask(prefs[1]).join(", ")
  neutralsResult.innerText = decodeMask(prefs[2]).join(", ")
  dislikesResult.innerText = decodeMask(prefs[3]).join(", ")
  hatesResult.innerText = decodeMask(prefs[4]).join(", ")
});
