export const nameGenerator = () => {
	const part1 = [
		"actually",
		"afk",
		"alive",
		"almost",
		"alpha",
		"aluminum",
		"average",
		"bad",
		"based",
		"big",
		"blessed",
		"bouncy",
		"bright",
		"broken",
		"bronze",
		"burger",
		"burned",
		"calm",
		"cap",
		"carbon",
		"chad",
		"chaotic",
		"chill",
		"clean",
		"color",
		"cooked",
		"cool",
		"copper",
		"core",
		"corporate",
		"cosmic",
		"cozy",
		"crazy",
		"cringe",
		"daisy",
		"dark",
		"dead",
		"deep",
		"dreamy",
		"drip",
		"emo",
		"empty",
		"every",
		"extra",
		"fancy",
		"fast",
		"fire",
		"first",
		"fluffy",
		"fr",
		"fresh",
		"full",
		"giga",
		"glass",
		"goated",
		"goblin",
		"gold",
		"grow",
		"grumpy",
		"half",
		"highkey",
		"horse",
		"hot",
		"huge",
		"iconic",
		"insane",
		"iron",
		"iron",
		"last",
		"late",
		"lazy",
		"leather",
		"light",
		"lil",
		"literally",
		"lost",
		"loud",
		"lowkey",
		"magical",
		"main",
		"maybe",
		"mega",
		"mid",
		"mini",
		"minimal",
		"modern",
		"mostly",
		"neon",
		"new",
		"night",
		"old",
		"omega",
		"paper",
		"pastel",
		"pizza",
		"power",
		"pure",
		"quick",
		"quiet",
		"rainy",
		"random",
		"raw",
		"real",
		"rizz",
		"sheesh",
		"shift",
		"shiny",
		"sigma",
		"silent",
		"silicon",
		"silver",
		"skibidi",
		"slay",
		"sleepy",
		"slow",
		"smart",
		"smooth",
		"soft",
		"steamy",
		"steel",
		"stone",
		"sunny",
		"super",
		"sus",
		"swag",
		"sweet",
		"the",
		"thebig",
		"tiny",
		"titanium",
		"total",
		"toxic",
		"ultra",
		"valid",
		"vibe",
		"warm",
		"warm",
		"wasted",
		"weird",
		"wiggly",
		"wood",
		"yeet",
	]

	const part2 = [
		"again",
		"andchill",
		"animal",
		"ape",
		"banana",
		"bean",
		"bender",
		"bird",
		"blanket",
		"boss",
		"bot",
		"bread",
		"bro",
		"bubble",
		"burger",
		"butter",
		"cake",
		"candy",
		"cat",
		"cave",
		"chad",
		"cheese",
		"cloud",
		"coffee",
		"cookie",
		"dinosaur",
		"doctor",
		"dog",
		"donut",
		"dragon",
		"dream",
		"echo",
		"extreme",
		"fan",
		"farm",
		"fish",
		"flame",
		"flip",
		"flow",
		"flower",
		"forest",
		"fox",
		"friendly",
		"frost",
		"ghost",
		"goat",
		"goblin",
		"guerilla",
		"hill",
		"horse",
		"house",
		"jungle",
		"kitten",
		"labs",
		"lol",
		"loop",
		"lord",
		"max",
		"monkey",
		"moon",
		"ninja",
		"noodle",
		"npc",
		"panda",
		"pasta",
		"penguin",
		"pickle",
		"pie",
		"pirate",
		"pizza",
		"planet",
		"plus",
		"pop",
		"potato",
		"prime",
		"promax",
		"queen",
		"raccoon",
		"ratio",
		"rice",
		"river",
		"rock",
		"sandwich",
		"school",
		"sea",
		"shark",
		"sky",
		"smash",
		"socks",
		"space",
		"space",
		"squad",
		"star",
		"studio",
		"supreme",
		"taco",
		"toast",
		"tree",
		"turbo",
		"twist",
		"ultra",
		"unicorn",
		"up",
		"view",
		"witch",
		"wizard",
		"wolf",
		"zombie",
	]

	const randomPart1 = part1[Math.floor(Math.random() * part1.length)]
	const randomPart2 = part2[Math.floor(Math.random() * part2.length)]

	return randomPart1 + randomPart2
}
