const mockPokemons = [
    {
        "id": 1,
        "name": { "english": "Bulbasaur", "japanese": "フシギダネ", "chinese": "妙蛙种子", "french": "Bulbizarre" },
        "type": ["Grass", "Poison"],
        "base": { "HP": 45, "Attack": 49, "Defense": 49, "Sp. Attack": 65, "Sp. Defense": 65, "Speed": 45 },
        "species": "Seed Pokémon",
        "description": "Bulbasaur can be seen napping in bright sunlight...",
        "evolution": { "next": [["2", "Level 16"]] },
        "profile": {
            "height": "0.7 m",
            "weight": "6.9 kg",
            "egg": ["Monster", "Grass"],
            "ability": [
                ["Overgrow", "false"],
                ["Chlorophyll", "true"]
            ],
            "gender": "87.5:12.5"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/001.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/001.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png"
        }
    },
    {
        "id": 2,
        "name": { "english": "Ivysaur", "japanese": "フシギソウ", "chinese": "妙蛙草", "french": "Herbizarre" },
        "type": ["Grass", "Poison"],
        "base": { "HP": 60, "Attack": 62, "Defense": 63, "Sp. Attack": 80, "Sp. Defense": 80, "Speed": 60 },
        "species": "Seed Pokémon",
        "description": "There is a bud on this Pokémon’s back...",
        "evolution": { "prev": ["1", "Level 16"], "next": [["3", "Level 32"]] },
        "profile": {
            "height": "1 m",
            "weight": "13 kg",
            "egg": ["Monster", "Grass"],
            "ability": [
                ["Overgrow", "false"],
                ["Chlorophyll", "true"]
            ],
            "gender": "87.5:12.5"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/002.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/002.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/002.png"
        }
    },
    {
        "id": 3,
        "name": { "english": "Venusaur", "japanese": "フシギバナ", "chinese": "妙蛙花", "french": "Florizarre" },
        "type": ["Grass", "Poison"],
        "base": { "HP": 80, "Attack": 82, "Defense": 83, "Sp. Attack": 100, "Sp. Defense": 100, "Speed": 80 },
        "species": "Seed Pokémon",
        "description": "There is a large flower on Venusaur’s back...",
        "evolution": { "prev": ["2", "Level 32"] },
        "profile": {
            "height": "2 m",
            "weight": "100 kg",
            "egg": ["Monster", "Grass"],
            "ability": [
                ["Overgrow", "false"],
                ["Chlorophyll", "true"]
            ],
            "gender": "87.5:12.5"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/003.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/003.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/003.png"
        }
    },
    {
        "id": 61,
        "name": {
            "english": "Poliwhirl",
            "japanese": "ニョロゾ",
            "chinese": "蚊香君",
            "french": "Têtarte"
        },
        "type": ["Water"],
        "base": {
            "HP": 65,
            "Attack": 65,
            "Defense": 65,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            "Speed": 90
        },
        "species": "Tadpole Pokémon",
        "description": "Its health suffers when its skin dries out, so be sure to moisturize it diligently.",
        "evolution": {
            "prev": ["60", "Level 25"],
            "next": [
                ["62", "use Water Stone"],
                ["186", "trade holding Kings Rock"]
            ]
        },
        "profile": {
            "height": "1 m",
            "weight": "20 kg",
            "egg": ["Water 1"],
            "ability": [
                ["Water Absorb", "false"],
                ["Damp", "false"],
                ["Swift Swim", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/061.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/061.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/061.png"
        }
    },
    {
        "id": 62,
        "name": {
            "english": "Poliwrath",
            "japanese": "ニョロボン",
            "chinese": "蚊香泳士",
            "french": "Tartard"
        },
        "type": ["Water", "Fighting"],
        "base": {
            "HP": 90,
            "Attack": 95,
            "Defense": 95,
            "Sp. Attack": 70,
            "Sp. Defense": 90,
            "Speed": 70
        },
        "species": "Tadpole Pokémon",
        "description": "The muscles it has developed through swimming are thick and powerful. When it lands a square punch, it can turn huge boulders to dust.",
        "evolution": { "prev": ["61", "use Water Stone"] },
        "profile": {
            "height": "1.3 m",
            "weight": "54 kg",
            "egg": ["Water 1"],
            "ability": [
                ["Water Absorb", "false"],
                ["Damp", "false"],
                ["Swift Swim", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/062.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/062.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/062.png"
        }
    },
    {
        "id": 63,
        "name": {
            "english": "Abra",
            "japanese": "ケーシィ",
            "chinese": "凯西",
            "french": "Abra"
        },
        "type": ["Psychic"],
        "base": {
            "HP": 25,
            "Attack": 20,
            "Defense": 15,
            "Sp. Attack": 105,
            "Sp. Defense": 55,
            "Speed": 90
        },
        "species": "Psi Pokémon",
        "description": "It can read others’ minds and will teleport away when danger approaches. You must clear your mind if you want to catch it.",
        "evolution": { "next": [["64", "Level 16"]] },
        "profile": {
            "height": "0.9 m",
            "weight": "19.5 kg",
            "egg": ["Human-Like"],
            "ability": [
                ["Synchronize", "false"],
                ["Inner Focus", "false"],
                ["Magic Guard", "true"]
            ],
            "gender": "75:25"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/063.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/063.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/063.png"
        }
    },
    {
        "id": 64,
        "name": {
            "english": "Kadabra",
            "japanese": "ユンゲラー",
            "chinese": "勇基拉",
            "french": "Kadabra"
        },
        "type": ["Psychic"],
        "base": {
            "HP": 40,
            "Attack": 35,
            "Defense": 30,
            "Sp. Attack": 120,
            "Sp. Defense": 70,
            "Speed": 105
        },
        "species": "Psi Pokémon",
        "description": "It possesses strong mental capabilities, but its psychic powers are halved when it’s not holding a silver spoon.",
        "evolution": { "prev": ["63", "Level 16"], "next": [["65", "Trade"]] },
        "profile": {
            "height": "1.3 m",
            "weight": "56.5 kg",
            "egg": ["Human-Like"],
            "ability": [
                ["Synchronize", "false"],
                ["Inner Focus", "false"],
                ["Magic Guard", "true"]
            ],
            "gender": "75:25"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/064.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/064.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/064.png"
        }
    },
    {
        "id": 65,
        "name": {
            "english": "Alakazam",
            "japanese": "フーディン",
            "chinese": "胡地",
            "french": "Alakazam"
        },
        "type": ["Psychic"],
        "base": {
            "HP": 55,
            "Attack": 50,
            "Defense": 45,
            "Sp. Attack": 135,
            "Sp. Defense": 95,
            "Speed": 120
        },
        "species": "Psi Pokémon",
        "description": "If it trusts someone deeply, it will let them have one of its spoons. Anything you eat with that spoon is apparently delicious.",
        "evolution": { "prev": ["64", "Trade"] },
        "profile": {
            "height": "1.5 m",
            "weight": "48 kg",
            "egg": ["Human-Like"],
            "ability": [
                ["Synchronize", "false"],
                ["Inner Focus", "false"],
                ["Magic Guard", "true"]
            ],
            "gender": "75:25"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/065.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/065.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/065.png"
        }
    },
    {
        "id": 66,
        "name": {
            "english": "Machop",
            "japanese": "ワンリキー",
            "chinese": "腕力",
            "french": "Machoc"
        },
        "type": ["Fighting"],
        "base": {
            "HP": 70,
            "Attack": 80,
            "Defense": 50,
            "Sp. Attack": 35,
            "Sp. Defense": 35,
            "Speed": 35
        },
        "species": "Superpower Pokémon",
        "description": "It likes food that’s highly nutritious because its instincts drive it to build muscle efficiently.",
        "evolution": { "next": [["67", "Level 28"]] },
        "profile": {
            "height": "0.8 m",
            "weight": "19.5 kg",
            "egg": ["Human-Like"],
            "ability": [
                ["Guts", "false"],
                ["No Guard", "false"],
                ["Steadfast", "true"]
            ],
            "gender": "75:25"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/066.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/066.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/066.png"
        }
    },
    {
        "id": 67,
        "name": {
            "english": "Machoke",
            "japanese": "ゴーリキー",
            "chinese": "豪力",
            "french": "Machopeur"
        },
        "type": ["Fighting"],
        "base": {
            "HP": 80,
            "Attack": 100,
            "Defense": 70,
            "Sp. Attack": 50,
            "Sp. Defense": 60,
            "Speed": 45
        },
        "species": "Superpower Pokémon",
        "description": "A popular motif for sculptures, its incredibly well-developed muscles have captured the imagination of many an artist.",
        "evolution": { "prev": ["66", "Level 28"], "next": [["68", "Trade"]] },
        "profile": {
            "height": "1.5 m",
            "weight": "70.5 kg",
            "egg": ["Human-Like"],
            "ability": [
                ["Guts", "false"],
                ["No Guard", "false"],
                ["Steadfast", "true"]
            ],
            "gender": "75:25"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/067.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/067.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/067.png"
        }
    },
    {
        "id": 68,
        "name": {
            "english": "Machamp",
            "japanese": "カイリキー",
            "chinese": "怪力",
            "french": "Mackogneur"
        },
        "type": ["Fighting"],
        "base": {
            "HP": 90,
            "Attack": 130,
            "Defense": 80,
            "Sp. Attack": 65,
            "Sp. Defense": 85,
            "Speed": 55
        },
        "species": "Superpower Pokémon",
        "description": "With four arms, it can attack and defend simultaneously. It’s said to have mastered every martial art in the world.",
        "evolution": { "prev": ["67", "Trade"] },
        "profile": {
            "height": "1.6 m",
            "weight": "130 kg",
            "egg": ["Human-Like"],
            "ability": [
                ["Guts", "false"],
                ["No Guard", "false"],
                ["Steadfast", "true"]
            ],
            "gender": "75:25"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/068.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/068.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/068.png"
        }
    },
    {
        "id": 69,
        "name": {
            "english": "Bellsprout",
            "japanese": "マダツボミ",
            "chinese": "喇叭芽",
            "french": "Chétiflor"
        },
        "type": ["Grass", "Poison"],
        "base": {
            "HP": 50,
            "Attack": 75,
            "Defense": 35,
            "Sp. Attack": 70,
            "Sp. Defense": 30,
            "Speed": 40
        },
        "species": "Flower Pokémon",
        "description": "Bellsprout’s thin and flexible body lets it bend and sway to avoid any attack, however strong it may be. From its mouth, this Pokémon spits a corrosive fluid that melts even iron.",
        "evolution": { "next": [["70", "Level 21"]] },
        "profile": {
            "height": "0.7 m",
            "weight": "4 kg",
            "egg": ["Grass"],
            "ability": [
                ["Chlorophyll", "false"],
                ["Gluttony", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/069.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/069.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/069.png"
        }
    },
    {
        "id": 70,
        "name": {
            "english": "Weepinbell",
            "japanese": "ウツドン",
            "chinese": "口呆花",
            "french": "Boustiflor"
        },
        "type": ["Grass", "Poison"],
        "base": {
            "HP": 65,
            "Attack": 90,
            "Defense": 50,
            "Sp. Attack": 85,
            "Sp. Defense": 45,
            "Speed": 55
        },
        "species": "Flycatcher Pokémon",
        "description": "Weepinbell has a large hook on its rear end. At night, the Pokémon hooks on to a tree branch and goes to sleep. If it moves around in its sleep, it may wake up to find itself on the ground.",
        "evolution": {
            "prev": ["69", "Level 21"],
            "next": [["71", "use Leaf Stone"]]
        },
        "profile": {
            "height": "1 m",
            "weight": "6.4 kg",
            "egg": ["Grass"],
            "ability": [
                ["Chlorophyll", "false"],
                ["Gluttony", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/070.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/070.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/070.png"
        }
    },
    {
        "id": 71,
        "name": {
            "english": "Victreebel",
            "japanese": "ウツボット",
            "chinese": "大食花",
            "french": "Empiflor"
        },
        "type": ["Grass", "Poison"],
        "base": {
            "HP": 80,
            "Attack": 105,
            "Defense": 65,
            "Sp. Attack": 100,
            "Sp. Defense": 70,
            "Speed": 70
        },
        "species": "Flycatcher Pokémon",
        "description": "Victreebel has a long vine that extends from its head. This vine is waved and flicked about as if it were an animal to attract prey. When an unsuspecting prey draws near, this Pokémon swallows it whole.",
        "evolution": { "prev": ["70", "use Leaf Stone"] },
        "profile": {
            "height": "1.7 m",
            "weight": "15.5 kg",
            "egg": ["Grass"],
            "ability": [
                ["Chlorophyll", "false"],
                ["Gluttony", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/071.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/071.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/071.png"
        }
    },
    {
        "id": 72,
        "name": {
            "english": "Tentacool",
            "japanese": "メノクラゲ",
            "chinese": "玛瑙水母",
            "french": "Tentacool"
        },
        "type": ["Water", "Poison"],
        "base": {
            "HP": 40,
            "Attack": 40,
            "Defense": 35,
            "Sp. Attack": 50,
            "Sp. Defense": 100,
            "Speed": 70
        },
        "species": "Jellyfish Pokémon",
        "description": "Its body is 99% water. The remaining 1% contains the organ that makes its poison.",
        "evolution": { "next": [["73", "Level 30"]] },
        "profile": {
            "height": "0.9 m",
            "weight": "45.5 kg",
            "egg": ["Water 3"],
            "ability": [
                ["Clear Body", "false"],
                ["Liquid Ooze", "false"],
                ["Rain Dish", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/072.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/072.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/072.png"
        }
    },
    {
        "id": 73,
        "name": {
            "english": "Tentacruel",
            "japanese": "ドククラゲ",
            "chinese": "毒刺水母",
            "french": "Tentacruel"
        },
        "type": ["Water", "Poison"],
        "base": {
            "HP": 80,
            "Attack": 70,
            "Defense": 65,
            "Sp. Attack": 80,
            "Sp. Defense": 120,
            "Speed": 100
        },
        "species": "Jellyfish Pokémon",
        "description": "It communicates with others of its kind by lighting up the red orbs on its head. When the orbs are blinking, it’s a warning sign.",
        "evolution": { "prev": ["72", "Level 30"] },
        "profile": {
            "height": "1.6 m",
            "weight": "55 kg",
            "egg": ["Water 3"],
            "ability": [
                ["Clear Body", "false"],
                ["Liquid Ooze", "false"],
                ["Rain Dish", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/073.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/073.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/073.png"
        }
    },
    {
        "id": 74,
        "name": {
            "english": "Geodude",
            "japanese": "イシツブテ",
            "chinese": "小拳石",
            "french": "Racaillou"
        },
        "type": ["Rock", "Ground"],
        "base": {
            "HP": 40,
            "Attack": 80,
            "Defense": 100,
            "Sp. Attack": 30,
            "Sp. Defense": 30,
            "Speed": 20
        },
        "species": "Rock Pokémon",
        "description": "It uses both hands to climb precipitous cliffs. People who see it in action have been known to take up bouldering.",
        "evolution": { "next": [["75", "Level 25"]] },
        "profile": {
            "height": "0.4 m",
            "weight": "20 kg",
            "egg": ["Mineral"],
            "ability": [
                ["Rock Head", "false"],
                ["Sturdy", "false"],
                ["Sand Veil", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/074.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/074.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/074.png"
        }
    },
    {
        "id": 75,
        "name": {
            "english": "Graveler",
            "japanese": "ゴローン",
            "chinese": "隆隆石",
            "french": "Gravalanch"
        },
        "type": ["Rock", "Ground"],
        "base": {
            "HP": 55,
            "Attack": 95,
            "Defense": 115,
            "Sp. Attack": 45,
            "Sp. Defense": 45,
            "Speed": 35
        },
        "species": "Rock Pokémon",
        "description": "It travels by rolling down cliffs. If it falls into a river, it will explode with its last gasp.",
        "evolution": { "prev": ["74", "Level 25"], "next": [["76", "Trade"]] },
        "profile": {
            "height": "1 m",
            "weight": "105 kg",
            "egg": ["Mineral"],
            "ability": [
                ["Rock Head", "false"],
                ["Sturdy", "false"],
                ["Sand Veil", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/075.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/075.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/075.png"
        }
    },
    {
        "id": 76,
        "name": {
            "english": "Golem",
            "japanese": "ゴローニャ",
            "chinese": "隆隆岩",
            "french": "Grolem"
        },
        "type": ["Rock", "Ground"],
        "base": {
            "HP": 80,
            "Attack": 120,
            "Defense": 130,
            "Sp. Attack": 55,
            "Sp. Defense": 65,
            "Speed": 45
        },
        "species": "Megaton Pokémon",
        "description": "It detonates its own body. The power from that explosion can propel it up steep mountain paths with amazing speed.",
        "evolution": { "prev": ["75", "Trade"] },
        "profile": {
            "height": "1.4 m",
            "weight": "300 kg",
            "egg": ["Mineral"],
            "ability": [
                ["Rock Head", "false"],
                ["Sturdy", "false"],
                ["Sand Veil", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/076.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/076.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/076.png"
        }
    },
    {
        "id": 77,
        "name": {
            "english": "Ponyta",
            "japanese": "ポニータ",
            "chinese": "小火马",
            "french": "Ponyta"
        },
        "type": ["Fire"],
        "base": {
            "HP": 50,
            "Attack": 85,
            "Defense": 55,
            "Sp. Attack": 65,
            "Sp. Defense": 65,
            "Speed": 90
        },
        "species": "Fire Horse Pokémon",
        "description": "Ponyta is very weak at birth. It can barely stand up. This Pokémon becomes stronger by stumbling and falling to keep up with its parent.",
        "evolution": { "next": [["78", "Level 40"]] },
        "profile": {
            "height": "1 m",
            "weight": "30 kg",
            "egg": ["Field"],
            "ability": [
                ["Run Away", "false"],
                ["Flash Fire", "false"],
                ["Flame Body", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/077.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/077.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/077.png"
        }
    },
    {
        "id": 78,
        "name": {
            "english": "Rapidash",
            "japanese": "ギャロップ",
            "chinese": "烈焰马",
            "french": "Galopa"
        },
        "type": ["Fire"],
        "base": {
            "HP": 65,
            "Attack": 100,
            "Defense": 70,
            "Sp. Attack": 80,
            "Sp. Defense": 80,
            "Speed": 105
        },
        "species": "Fire Horse Pokémon",
        "description": "Rapidash usually can be seen casually cantering in the fields and plains. However, when this Pokémon turns serious, its fiery manes flare and blaze as it gallops its way up to 150 mph.",
        "evolution": { "prev": ["77", "Level 40"] },
        "profile": {
            "height": "1.7 m",
            "weight": "95 kg",
            "egg": ["Field"],
            "ability": [
                ["Run Away", "false"],
                ["Flash Fire", "false"],
                ["Flame Body", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/078.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/078.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/078.png"
        }
    },
    {
        "id": 79,
        "name": {
            "english": "Slowpoke",
            "japanese": "ヤドン",
            "chinese": "呆呆兽",
            "french": "Ramoloss"
        },
        "type": ["Water", "Psychic"],
        "base": {
            "HP": 90,
            "Attack": 65,
            "Defense": 65,
            "Sp. Attack": 40,
            "Sp. Defense": 40,
            "Speed": 15
        },
        "species": "Dopey Pokémon",
        "description": "Although their tails, which fall off naturally, can easily be found lying around, they’re a precious ingredient for cooking.",
        "evolution": {
            "next": [
                ["80", "Level 37"],
                ["199", "trade holding Kings Rock"]
            ]
        },
        "profile": {
            "height": "1.2 m",
            "weight": "36 kg",
            "egg": ["Monster", "Water 1"],
            "ability": [
                ["Oblivious", "false"],
                ["Own Tempo", "false"],
                ["Regenerator", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/079.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/079.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/079.png"
        }
    },
    {
        "id": 80,
        "name": {
            "english": "Slowbro",
            "japanese": "ヤドラン",
            "chinese": "呆壳兽",
            "french": "Flagadoss"
        },
        "type": ["Water", "Psychic"],
        "base": {
            "HP": 95,
            "Attack": 75,
            "Defense": 110,
            "Sp. Attack": 100,
            "Sp. Defense": 80,
            "Speed": 30
        },
        "species": "Hermit Crab Pokémon",
        "description": "Shellder, in its greed to suck out more and more sweetness from Slowbro’s tail, has metamorphosed into a spiral-shaped shell.",
        "evolution": { "prev": ["79", "Level 37"] },
        "profile": {
            "height": "1.6 m",
            "weight": "78.5 kg",
            "egg": ["Monster", "Water 1"],
            "ability": [
                ["Oblivious", "false"],
                ["Own Tempo", "false"],
                ["Regenerator", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/080.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/080.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/080.png"
        }
    },
    {
        "id": 81,
        "name": {
            "english": "Magnemite",
            "japanese": "コイル",
            "chinese": "小磁怪",
            "french": "Magnéti"
        },
        "type": ["Electric", "Steel"],
        "base": {
            "HP": 25,
            "Attack": 35,
            "Defense": 70,
            "Sp. Attack": 95,
            "Sp. Defense": 55,
            "Speed": 45
        },
        "species": "Magnet Pokémon",
        "description": "Perhaps because electrical lines are often buried these days, the number of Magnemite attacks on power plants has increased.",
        "evolution": { "next": [["82", "Level 30"]] },
        "profile": {
            "height": "0.3 m",
            "weight": "6 kg",
            "egg": ["Mineral"],
            "ability": [
                ["Magnet Pull", "false"],
                ["Sturdy", "false"],
                ["Analytic", "true"]
            ],
            "gender": "Genderless"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/081.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/081.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/081.png"
        }
    },
    {
        "id": 82,
        "name": {
            "english": "Magneton",
            "japanese": "レアコイル",
            "chinese": "三合一磁怪",
            "french": "Magnéton"
        },
        "type": ["Electric", "Steel"],
        "base": {
            "HP": 50,
            "Attack": 60,
            "Defense": 95,
            "Sp. Attack": 120,
            "Sp. Defense": 70,
            "Speed": 70
        },
        "species": "Magnet Pokémon",
        "description": "When rain clouds form, many Magneton gather in high places to wait for lightning to strike.",
        "evolution": {
            "prev": ["81", "Level 30"],
            "next": [["462", "level up in a Magnetic Field area"]]
        },
        "profile": {
            "height": "1 m",
            "weight": "60 kg",
            "egg": ["Mineral"],
            "ability": [
                ["Magnet Pull", "false"],
                ["Sturdy", "false"],
                ["Analytic", "true"]
            ],
            "gender": "Genderless"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/082.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/082.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/082.png"
        }
    },
    {
        "id": 83,
        "name": {
            "english": "Farfetch'd",
            "japanese": "カモネギ",
            "chinese": "大葱鸭",
            "french": "Canarticho"
        },
        "type": ["Normal", "Flying"],
        "base": {
            "HP": 52,
            "Attack": 90,
            "Defense": 55,
            "Sp. Attack": 58,
            "Sp. Defense": 62,
            "Speed": 60
        },
        "species": "Wild Duck Pokémon",
        "description": "Farfetch’d is always seen with a stalk from a plant of some sort. Apparently, there are good stalks and bad stalks. This Pokémon has been known to fight with others over stalks.",
        "evolution": {},
        "profile": {
            "height": "0.8 m",
            "weight": "15 kg",
            "egg": ["Flying", "Field"],
            "ability": [
                ["Keen Eye", "false"],
                ["Inner Focus", "false"],
                ["Defiant", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/083.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/083.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/083.png"
        }
    },
    {
        "id": 84,
        "name": {
            "english": "Doduo",
            "japanese": "ドードー",
            "chinese": "嘟嘟",
            "french": "Doduo"
        },
        "type": ["Normal", "Flying"],
        "base": {
            "HP": 35,
            "Attack": 85,
            "Defense": 45,
            "Sp. Attack": 35,
            "Sp. Defense": 35,
            "Speed": 75
        },
        "species": "Twin Bird Pokémon",
        "description": "Doduo’s two heads contain completely identical brains. A scientific study reported that on rare occasions, there will be examples of this Pokémon possessing different sets of brains.",
        "evolution": { "next": [["85", "Level 31"]] },
        "profile": {
            "height": "1.4 m",
            "weight": "39.2 kg",
            "egg": ["Flying"],
            "ability": [
                ["Run Away", "false"],
                ["Early Bird", "false"],
                ["Tangled Feet", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/084.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/084.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/084.png"
        }
    },
    {
        "id": 85,
        "name": {
            "english": "Dodrio",
            "japanese": "ドードリオ",
            "chinese": "嘟嘟利",
            "french": "Dodrio"
        },
        "type": ["Normal", "Flying"],
        "base": {
            "HP": 60,
            "Attack": 110,
            "Defense": 70,
            "Sp. Attack": 60,
            "Sp. Defense": 60,
            "Speed": 110
        },
        "species": "Triple Bird Pokémon",
        "description": "Apparently, the heads aren’t the only parts of the body that Dodrio has three of. It has three sets of hearts and lungs as well, so it is capable of running long distances without rest.",
        "evolution": { "prev": ["84", "Level 31"] },
        "profile": {
            "height": "1.8 m",
            "weight": "85.2 kg",
            "egg": ["Flying"],
            "ability": [
                ["Run Away", "false"],
                ["Early Bird", "false"],
                ["Tangled Feet", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/085.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/085.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/085.png"
        }
    },
    {
        "id": 86,
        "name": {
            "english": "Seel",
            "japanese": "パウワウ",
            "chinese": "小海狮",
            "french": "Otaria"
        },
        "type": ["Water"],
        "base": {
            "HP": 65,
            "Attack": 45,
            "Defense": 55,
            "Sp. Attack": 45,
            "Sp. Defense": 70,
            "Speed": 45
        },
        "species": "Sea Lion Pokémon",
        "description": "Thanks to its thick fat, cold seas don’t bother it at all, but it gets tired pretty easily in warm waters.",
        "evolution": { "next": [["87", "Level 34"]] },
        "profile": {
            "height": "1.1 m",
            "weight": "90 kg",
            "egg": ["Water 1", "Field"],
            "ability": [
                ["Thick Fat", "false"],
                ["Hydration", "false"],
                ["Ice Body", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/086.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/086.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/086.png"
        }
    },
    {
        "id": 87,
        "name": {
            "english": "Dewgong",
            "japanese": "ジュゴン",
            "chinese": "白海狮",
            "french": "Lamantine"
        },
        "type": ["Water", "Ice"],
        "base": {
            "HP": 90,
            "Attack": 70,
            "Defense": 80,
            "Sp. Attack": 70,
            "Sp. Defense": 95,
            "Speed": 70
        },
        "species": "Sea Lion Pokémon",
        "description": "It sunbathes on the beach after meals. The rise in its body temperature helps its digestion.",
        "evolution": { "prev": ["86", "Level 34"] },
        "profile": {
            "height": "1.7 m",
            "weight": "120 kg",
            "egg": ["Water 1", "Field"],
            "ability": [
                ["Thick Fat", "false"],
                ["Hydration", "false"],
                ["Ice Body", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/087.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/087.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/087.png"
        }
    },
    {
        "id": 88,
        "name": {
            "english": "Grimer",
            "japanese": "ベトベター",
            "chinese": "臭泥",
            "french": "Tadmorv"
        },
        "type": ["Poison"],
        "base": {
            "HP": 80,
            "Attack": 80,
            "Defense": 50,
            "Sp. Attack": 40,
            "Sp. Defense": 50,
            "Speed": 25
        },
        "species": "Sludge Pokémon",
        "description": "The wastewater coming from factories is clean these days, so Grimer have nothing to eat. They’re said to be on the verge of extinction.",
        "evolution": { "next": [["89", "Level 38"]] },
        "profile": {
            "height": "0.9 m",
            "weight": "30 kg",
            "egg": ["Amorphous"],
            "ability": [
                ["Stench", "false"],
                ["Sticky Hold", "false"],
                ["Poison Touch", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/088.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/088.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/088.png"
        }
    },
    {
        "id": 89,
        "name": {
            "english": "Muk",
            "japanese": "ベトベトン",
            "chinese": "臭臭泥",
            "french": "Grotadmorv"
        },
        "type": ["Poison"],
        "base": {
            "HP": 105,
            "Attack": 105,
            "Defense": 75,
            "Sp. Attack": 65,
            "Sp. Defense": 100,
            "Speed": 50
        },
        "species": "Sludge Pokémon",
        "description": "Because they scatter germs everywhere, they’ve long been targeted for extermination, leading to a steep decline in their population.",
        "evolution": { "prev": ["88", "Level 38"] },
        "profile": {
            "height": "1.2 m",
            "weight": "30 kg",
            "egg": ["Amorphous"],
            "ability": [
                ["Stench", "false"],
                ["Sticky Hold", "false"],
                ["Poison Touch", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/089.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/089.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/089.png"
        }
    },
    {
        "id": 90,
        "name": {
            "english": "Shellder",
            "japanese": "シェルダー",
            "chinese": "大舌贝",
            "french": "Kokiyas"
        },
        "type": ["Water"],
        "base": {
            "HP": 30,
            "Attack": 65,
            "Defense": 100,
            "Sp. Attack": 45,
            "Sp. Defense": 25,
            "Speed": 40
        },
        "species": "Bivalve Pokémon",
        "description": "Even when its shell is closed, its tongue still hangs out. If you give its tongue a good yank, the shock will cause Shellder to open its shell.",
        "evolution": { "next": [["91", "use Water Stone"]] },
        "profile": {
            "height": "0.3 m",
            "weight": "4 kg",
            "egg": ["Water 3"],
            "ability": [
                ["Shell Armor", "false"],
                ["Skill Link", "false"],
                ["Overcoat", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/090.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/090.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/090.png"
        }
    },
    {
        "id": 91,
        "name": {
            "english": "Cloyster",
            "japanese": "パルシェン",
            "chinese": "刺甲贝",
            "french": "Crustabri"
        },
        "type": ["Water", "Ice"],
        "base": {
            "HP": 50,
            "Attack": 95,
            "Defense": 180,
            "Sp. Attack": 85,
            "Sp. Defense": 45,
            "Speed": 70
        },
        "species": "Bivalve Pokémon",
        "description": "Slowpoke tails are its favorite food. It has even been known to come up on land to look for Slowpoke from time to time.",
        "evolution": { "prev": ["90", "use Water Stone"] },
        "profile": {
            "height": "1.5 m",
            "weight": "132.5 kg",
            "egg": ["Water 3"],
            "ability": [
                ["Shell Armor", "false"],
                ["Skill Link", "false"],
                ["Overcoat", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/091.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/091.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/091.png"
        }
    },
    {
        "id": 92,
        "name": {
            "english": "Gastly",
            "japanese": "ゴース",
            "chinese": "鬼斯",
            "french": "Fantominus"
        },
        "type": ["Ghost", "Poison"],
        "base": {
            "HP": 30,
            "Attack": 35,
            "Defense": 30,
            "Sp. Attack": 100,
            "Sp. Defense": 35,
            "Speed": 80
        },
        "species": "Gas Pokémon",
        "description": "Poisonous gas comprises 95% of its body. It’s said that the remaining 5% is made up of the souls of those who died from the gas.",
        "evolution": { "next": [["93", "Level 25"]] },
        "profile": {
            "height": "1.3 m",
            "weight": "0.1 kg",
            "egg": ["Amorphous"],
            "ability": [["Levitate", "false"]],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/092.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/092.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/092.png"
        }
    },
    {
        "id": 93,
        "name": {
            "english": "Haunter",
            "japanese": "ゴースト",
            "chinese": "鬼斯通",
            "french": "Spectrum"
        },
        "type": ["Ghost", "Poison"],
        "base": {
            "HP": 45,
            "Attack": 50,
            "Defense": 45,
            "Sp. Attack": 115,
            "Sp. Defense": 55,
            "Speed": 95
        },
        "species": "Gas Pokémon",
        "description": "It’s dangerous to go outside alone on nights when you’re feeling sad. Haunter will catch you, and you won’t be able to go back home.",
        "evolution": { "prev": ["92", "Level 25"], "next": [["94", "Trade"]] },
        "profile": {
            "height": "1.6 m",
            "weight": "0.1 kg",
            "egg": ["Amorphous"],
            "ability": [["Levitate", "false"]],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/093.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/093.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/093.png"
        }
    },
    {
        "id": 94,
        "name": {
            "english": "Gengar",
            "japanese": "ゲンガー",
            "chinese": "耿鬼",
            "french": "Ectoplasma"
        },
        "type": ["Ghost", "Poison"],
        "base": {
            "HP": 60,
            "Attack": 65,
            "Defense": 60,
            "Sp. Attack": 130,
            "Sp. Defense": 75,
            "Speed": 110
        },
        "species": "Shadow Pokémon",
        "description": "Even your home isn’t safe. Gengar will lurk in whatever dark corner of a room it can find and wait for its chance to catch its prey.",
        "evolution": { "prev": ["93", "Trade"] },
        "profile": {
            "height": "1.5 m",
            "weight": "40.5 kg",
            "egg": ["Amorphous"],
            "ability": [["Cursed Body", "false"]],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/094.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/094.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/094.png"
        }
    },
    {
        "id": 95,
        "name": {
            "english": "Onix",
            "japanese": "イワーク",
            "chinese": "大岩蛇",
            "french": "Onix"
        },
        "type": ["Rock", "Ground"],
        "base": {
            "HP": 35,
            "Attack": 45,
            "Defense": 160,
            "Sp. Attack": 30,
            "Sp. Defense": 45,
            "Speed": 70
        },
        "species": "Rock Snake Pokémon",
        "description": "Onix has a magnet in its brain. It acts as a compass so that this Pokémon does not lose direction while it is tunneling. As it grows older, its body becomes increasingly rounder and smoother.",
        "evolution": { "next": [["208", "trade holding Metal Coat"]] },
        "profile": {
            "height": "8.8 m",
            "weight": "210 kg",
            "egg": ["Mineral"],
            "ability": [
                ["Rock Head", "false"],
                ["Sturdy", "false"],
                ["Weak Armor", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/095.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/095.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/095.png"
        }
    },
    {
        "id": 96,
        "name": {
            "english": "Drowzee",
            "japanese": "スリープ",
            "chinese": "催眠貘",
            "french": "Soporifik"
        },
        "type": ["Psychic"],
        "base": {
            "HP": 60,
            "Attack": 48,
            "Defense": 45,
            "Sp. Attack": 43,
            "Sp. Defense": 90,
            "Speed": 42
        },
        "species": "Hypnosis Pokémon",
        "description": "It puts its prey to sleep and devours their dreams. It seems that bad dreams taste sour, so Drowzee doesn’t particularly like eating them.",
        "evolution": { "next": [["97", "Level 26"]] },
        "profile": {
            "height": "1 m",
            "weight": "32.4 kg",
            "egg": ["Human-Like"],
            "ability": [
                ["Insomnia", "false"],
                ["Forewarn", "false"],
                ["Inner Focus", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/096.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/096.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/096.png"
        }
    },
    {
        "id": 97,
        "name": {
            "english": "Hypno",
            "japanese": "スリーパー",
            "chinese": "引梦貘人",
            "french": "Hypnomade"
        },
        "type": ["Psychic"],
        "base": {
            "HP": 85,
            "Attack": 73,
            "Defense": 70,
            "Sp. Attack": 73,
            "Sp. Defense": 115,
            "Speed": 67
        },
        "species": "Hypnosis Pokémon",
        "description": "There are some Hypno that assist doctors with patients who can’t sleep at night in hospitals.",
        "evolution": { "prev": ["96", "Level 26"] },
        "profile": {
            "height": "1.6 m",
            "weight": "75.6 kg",
            "egg": ["Human-Like"],
            "ability": [
                ["Insomnia", "false"],
                ["Forewarn", "false"],
                ["Inner Focus", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/097.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/097.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/097.png"
        }
    },
    {
        "id": 98,
        "name": {
            "english": "Krabby",
            "japanese": "クラブ",
            "chinese": "大钳蟹",
            "french": "Krabby"
        },
        "type": ["Water"],
        "base": {
            "HP": 30,
            "Attack": 105,
            "Defense": 90,
            "Sp. Attack": 25,
            "Sp. Defense": 25,
            "Speed": 50
        },
        "species": "River Crab Pokémon",
        "description": "Krabby live on beaches, burrowed inside holes dug into the sand. On sandy beaches with little in the way of food, these Pokémon can be seen squabbling with each other over territory.",
        "evolution": { "next": [["99", "Level 28"]] },
        "profile": {
            "height": "0.4 m",
            "weight": "6.5 kg",
            "egg": ["Water 3"],
            "ability": [
                ["Hyper Cutter", "false"],
                ["Shell Armor", "false"],
                ["Sheer Force", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/098.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/098.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/098.png"
        }
    },
    {
        "id": 99,
        "name": {
            "english": "Kingler",
            "japanese": "キングラー",
            "chinese": "巨钳蟹",
            "french": "Krabboss"
        },
        "type": ["Water"],
        "base": {
            "HP": 55,
            "Attack": 130,
            "Defense": 115,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            "Speed": 75
        },
        "species": "Pincer Pokémon",
        "description": "Kingler has an enormous, oversized claw. It waves this huge claw in the air to communicate with others. However, because the claw is so heavy, the Pokémon quickly tires.",
        "evolution": { "prev": ["98", "Level 28"] },
        "profile": {
            "height": "1.3 m",
            "weight": "60 kg",
            "egg": ["Water 3"],
            "ability": [
                ["Hyper Cutter", "false"],
                ["Shell Armor", "false"],
                ["Sheer Force", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/099.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/099.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/099.png"
        }
    },
    {
        "id": 100,
        "name": {
            "english": "Voltorb",
            "japanese": "ビリリダマ",
            "chinese": "霹雳电球",
            "french": "Voltorbe"
        },
        "type": ["Electric"],
        "base": {
            "HP": 40,
            "Attack": 30,
            "Defense": 50,
            "Sp. Attack": 55,
            "Sp. Defense": 55,
            "Speed": 100
        },
        "species": "Ball Pokémon",
        "description": "Voltorb is extremely sensitive—it explodes at the slightest of shocks. It is rumored that it was first created when a Poké Ball was exposed to a powerful pulse of energy.",
        "evolution": { "next": [["101", "Level 30"]] },
        "profile": {
            "height": "0.5 m",
            "weight": "10.4 kg",
            "egg": ["Mineral"],
            "ability": [
                ["Soundproof", "false"],
                ["Static", "false"],
                ["Aftermath", "true"]
            ],
            "gender": "Genderless"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/100.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/100.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/100.png"
        }
    },
    {
        "id": 101,
        "name": {
            "english": "Electrode",
            "japanese": "マルマイン",
            "chinese": "顽皮雷弹",
            "french": "Électrode"
        },
        "type": ["Electric"],
        "base": {
            "HP": 60,
            "Attack": 50,
            "Defense": 70,
            "Sp. Attack": 80,
            "Sp. Defense": 80,
            "Speed": 150
        },
        "species": "Ball Pokémon",
        "description": "One of Electrode’s characteristics is its attraction to electricity. It is a problematical Pokémon that congregates mostly at electrical power plants to feed on electricity that has just been generated.",
        "evolution": { "prev": ["100", "Level 30"] },
        "profile": {
            "height": "1.2 m",
            "weight": "66.6 kg",
            "egg": ["Mineral"],
            "ability": [
                ["Soundproof", "false"],
                ["Static", "false"],
                ["Aftermath", "true"]
            ],
            "gender": "Genderless"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/101.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/101.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/101.png"
        }
    },
    {
        "id": 131,
        "name": {
            "english": "Lapras",
            "japanese": "ラプラス",
            "chinese": "拉普拉斯",
            "french": "Lokhlass"
        },
        "type": ["Water", "Ice"],
        "base": {
            "HP": 130,
            "Attack": 85,
            "Defense": 80,
            "Sp. Attack": 85,
            "Sp. Defense": 95,
            "Speed": 60
        },
        "species": "Transport Pokémon",
        "description": "They’ve been so cherished that there’s now an overabundance. The fish Pokémon population has declined in waters with too many Lapras.",
        "evolution": {},
        "profile": {
            "height": "2.5 m",
            "weight": "220 kg",
            "egg": ["Monster", "Water 1"],
            "ability": [
                ["Water Absorb", "false"],
                ["Shell Armor", "false"],
                ["Hydration", "true"]
            ],
            "gender": "50:50"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/131.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/131.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/131.png"
        }
    },
    {
        "id": 132,
        "name": {
            "english": "Ditto",
            "japanese": "メタモン",
            "chinese": "百变怪",
            "french": "Métamorph"
        },
        "type": ["Normal"],
        "base": {
            "HP": 48,
            "Attack": 48,
            "Defense": 48,
            "Sp. Attack": 48,
            "Sp. Defense": 48,
            "Speed": 48
        },
        "species": "Transform Pokémon",
        "description": "It transforms into whatever it sees. If the thing it’s transforming into isn’t right in front of it, Ditto relies on its memory—so sometimes it fails.",
        "evolution": {},
        "profile": {
            "height": "0.3 m",
            "weight": "4 kg",
            "egg": ["Ditto"],
            "ability": [
                ["Limber", "false"],
                ["Imposter", "true"]
            ],
            "gender": "Genderless"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/132.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/132.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/132.png"
        }
    },
    {
        "id": 133,
        "name": {
            "english": "Eevee",
            "japanese": "イーブイ",
            "chinese": "伊布",
            "french": "Évoli"
        },
        "type": ["Normal"],
        "base": {
            "HP": 55,
            "Attack": 55,
            "Defense": 50,
            "Sp. Attack": 45,
            "Sp. Defense": 65,
            "Speed": 55
        },
        "species": "Evolution Pokémon",
        "description": "Its genes are easily influenced by its surroundings. Even its face starts to look like that of its Trainer.",
        "evolution": {
            "next": [
                ["134", "use Water Stone"],
                ["135", "use Thunder Stone"],
                ["136", "use Fire Stone"],
                ["196", "high Friendship, Daytime"],
                ["197", "high Friendship, Nighttime"],
                ["470", "level up near a Mossy Rock"],
                ["471", "level up near an Icy Rock"],
                ["700", "High Affection and knowing Fairy move"]
            ]
        },
        "profile": {
            "height": "0.3 m",
            "weight": "6.5 kg",
            "egg": ["Field"],
            "ability": [
                ["Run Away", "false"],
                ["Adaptability", "false"],
                ["Anticipation", "true"]
            ],
            "gender": "87.5:12.5"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/133.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/133.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/133.png"
        }
    },
    {
        "id": 134,
        "name": {
            "english": "Vaporeon",
            "japanese": "シャワーズ",
            "chinese": "水伊布",
            "french": "Aquali"
        },
        "type": ["Water"],
        "base": {
            "HP": 130,
            "Attack": 65,
            "Defense": 60,
            "Sp. Attack": 110,
            "Sp. Defense": 95,
            "Speed": 65
        },
        "species": "Bubble Jet Pokémon",
        "description": "It detects nearby moisture with its fin. When its fin begins trembling rapidly, that means rain will fall in a few hours.",
        "evolution": { "prev": ["133", "use Water Stone"] },
        "profile": {
            "height": "1 m",
            "weight": "29 kg",
            "egg": ["Field"],
            "ability": [
                ["Water Absorb", "false"],
                ["Hydration", "true"]
            ],
            "gender": "87.5:12.5"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/134.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/134.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/134.png"
        }
    },
    {
        "id": 135,
        "name": {
            "english": "Jolteon",
            "japanese": "サンダース",
            "chinese": "雷伊布",
            "french": "Voltali"
        },
        "type": ["Electric"],
        "base": {
            "HP": 65,
            "Attack": 65,
            "Defense": 60,
            "Sp. Attack": 110,
            "Sp. Defense": 95,
            "Speed": 130
        },
        "species": "Lightning Pokémon",
        "description": "Its fur stands on end, becoming like needles it fires at enemies. Once they’re weakened, it finishes them off with a 10,000 volt shock.",
        "evolution": { "prev": ["133", "use Thunder Stone"] },
        "profile": {
            "height": "0.8 m",
            "weight": "24.5 kg",
            "egg": ["Field"],
            "ability": [
                ["Volt Absorb", "false"],
                ["Quick Feet", "true"]
            ],
            "gender": "87.5:12.5"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/135.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/135.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/135.png"
        }
    },
    {
        "id": 136,
        "name": {
            "english": "Flareon",
            "japanese": "ブースター",
            "chinese": "火伊布",
            "french": "Pyroli"
        },
        "type": ["Fire"],
        "base": {
            "HP": 65,
            "Attack": 130,
            "Defense": 60,
            "Sp. Attack": 95,
            "Sp. Defense": 110,
            "Speed": 65
        },
        "species": "Flame Pokémon",
        "description": "The flame chamber inside its body ignites when Flareon gets agitated, reaching temperatures of up to 1,650 degrees Fahrenheit.",
        "evolution": { "prev": ["133", "use Fire Stone"] },
        "profile": {
            "height": "0.9 m",
            "weight": "25 kg",
            "egg": ["Field"],
            "ability": [
                ["Flash Fire", "false"],
                ["Guts", "true"]
            ],
            "gender": "87.5:12.5"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/136.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/136.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/136.png"
        }
    },
    {
        "id": 137,
        "name": {
            "english": "Porygon",
            "japanese": "ポリゴン",
            "chinese": "多边兽",
            "french": "Porygon"
        },
        "type": ["Normal"],
        "base": {
            "HP": 65,
            "Attack": 60,
            "Defense": 70,
            "Sp. Attack": 85,
            "Sp. Defense": 75,
            "Speed": 40
        },
        "species": "Virtual Pokémon",
        "description": "It was built 20 years ago by scientists who dreamed of exploring space. Their dreams have yet to come true.",
        "evolution": { "next": [["233", "trade holding Upgrade"]] },
        "profile": {
            "height": "0.8 m",
            "weight": "36.5 kg",
            "egg": ["Mineral"],
            "ability": [
                ["Trace", "false"],
                ["Download", "false"],
                ["Analytic", "true"]
            ],
            "gender": "Genderless"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/137.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/137.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/137.png"
        }
    },
    {
        "id": 138,
        "name": {
            "english": "Omanyte",
            "japanese": "オムナイト",
            "chinese": "菊石兽",
            "french": "Amonita"
        },
        "type": ["Rock", "Water"],
        "base": {
            "HP": 35,
            "Attack": 40,
            "Defense": 100,
            "Sp. Attack": 90,
            "Sp. Defense": 55,
            "Speed": 35
        },
        "species": "Spiral Pokémon",
        "description": "It was restored from an ancient fossil. Those Helix Fossils are excavated from areas that were once oceans long, long ago.",
        "evolution": { "next": [["139", "Level 40"]] },
        "profile": {
            "height": "0.4 m",
            "weight": "7.5 kg",
            "egg": ["Water 1", "Water 3"],
            "ability": [
                ["Swift Swim", "false"],
                ["Shell Armor", "false"],
                ["Weak Armor", "true"]
            ],
            "gender": "87.5:12.5"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/138.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/138.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/138.png"
        }
    },
    {
        "id": 139,
        "name": {
            "english": "Omastar",
            "japanese": "オムスター",
            "chinese": "多刺菊石兽",
            "french": "Amonistar"
        },
        "type": ["Rock", "Water"],
        "base": {
            "HP": 70,
            "Attack": 60,
            "Defense": 125,
            "Sp. Attack": 115,
            "Sp. Defense": 70,
            "Speed": 55
        },
        "species": "Spiral Pokémon",
        "description": "It wraps its prey in its tentacles to immobilize them and then finishes them off with its sharp fangs.",
        "evolution": { "prev": ["138", "Level 40"] },
        "profile": {
            "height": "1 m",
            "weight": "35 kg",
            "egg": ["Water 1", "Water 3"],
            "ability": [
                ["Swift Swim", "false"],
                ["Shell Armor", "false"],
                ["Weak Armor", "true"]
            ],
            "gender": "87.5:12.5"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/139.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/139.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/139.png"
        }
    },
    {
        "id": 140,
        "name": {
            "english": "Kabuto",
            "japanese": "カブト",
            "chinese": "化石盔",
            "french": "Kabuto"
        },
        "type": ["Rock", "Water"],
        "base": {
            "HP": 30,
            "Attack": 80,
            "Defense": 90,
            "Sp. Attack": 55,
            "Sp. Defense": 45,
            "Speed": 55
        },
        "species": "Shellfish Pokémon",
        "description": "This Pokémon became extinct everywhere, except in a few areas. It protects itself with its hard shell.",
        "evolution": { "next": [["141", "Level 40"]] },
        "profile": {
            "height": "0.5 m",
            "weight": "11.5 kg",
            "egg": ["Water 1", "Water 3"],
            "ability": [
                ["Swift Swim", "false"],
                ["Battle Armor", "false"],
                ["Weak Armor", "true"]
            ],
            "gender": "87.5:12.5"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/140.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/140.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/140.png"
        }
    },
    {
        "id": 141,
        "name": {
            "english": "Kabutops",
            "japanese": "カブトプス",
            "chinese": "镰刀盔",
            "french": "Kabutops"
        },
        "type": ["Rock", "Water"],
        "base": {
            "HP": 60,
            "Attack": 115,
            "Defense": 105,
            "Sp. Attack": 65,
            "Sp. Defense": 70,
            "Speed": 80
        },
        "species": "Shellfish Pokémon",
        "description": "It swims at speeds of roughly 29 knots, quickly closing in on its prey and slashing into them with its scythes to finish them off.",
        "evolution": { "prev": ["140", "Level 40"] },
        "profile": {
            "height": "1.3 m",
            "weight": "40.5 kg",
            "egg": ["Water 1", "Water 3"],
            "ability": [
                ["Swift Swim", "false"],
                ["Battle Armor", "false"],
                ["Weak Armor", "true"]
            ],
            "gender": "87.5:12.5"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/141.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/141.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/141.png"
        }
    },
    {
        "id": 142,
        "name": {
            "english": "Aerodactyl",
            "japanese": "プテラ",
            "chinese": "化石翼龙",
            "french": "Ptéra"
        },
        "type": ["Rock", "Flying"],
        "base": {
            "HP": 80,
            "Attack": 105,
            "Defense": 65,
            "Sp. Attack": 60,
            "Sp. Defense": 75,
            "Speed": 130
        },
        "species": "Fossil Pokémon",
        "description": "It flew through the open skies over the ancient continent as if they were its own. When it touched ground, its walk was weak and slow.",
        "evolution": {},
        "profile": {
            "height": "1.8 m",
            "weight": "59 kg",
            "egg": ["Flying"],
            "ability": [
                ["Rock Head", "false"],
                ["Pressure", "false"],
                ["Unnerve", "true"]
            ],
            "gender": "87.5:12.5"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/142.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/142.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/142.png"
        }
    },
    {
        "id": 143,
        "name": {
            "english": "Snorlax",
            "japanese": "カビゴン",
            "chinese": "卡比兽",
            "french": "Ronflex"
        },
        "type": ["Normal"],
        "base": {
            "HP": 160,
            "Attack": 110,
            "Defense": 65,
            "Sp. Attack": 65,
            "Sp. Defense": 110,
            "Speed": 30
        },
        "species": "Sleeping Pokémon",
        "description": "It has no interest in anything other than eating. Even if you climb up on its stomach while it’s napping, it doesn’t seem to mind at all!",
        "evolution": { "prev": ["446", "high Friendship"] },
        "profile": {
            "height": "2.1 m",
            "weight": "460 kg",
            "egg": ["Monster"],
            "ability": [
                ["Immunity", "false"],
                ["Thick Fat", "false"],
                ["Gluttony", "true"]
            ],
            "gender": "87.5:12.5"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/143.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/143.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/143.png"
        }
    },
    {
        "id": 144,
        "name": {
            "english": "Articuno",
            "japanese": "フリーザー",
            "chinese": "急冻鸟",
            "french": "Artikodin"
        },
        "type": ["Ice", "Flying"],
        "base": {
            "HP": 90,
            "Attack": 85,
            "Defense": 100,
            "Sp. Attack": 95,
            "Sp. Defense": 125,
            "Speed": 85
        },
        "species": "Freeze Pokémon",
        "description": "Articuno is a legendary bird Pokémon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pokémon flies, snow will fall.",
        "evolution": {},
        "profile": {
            "height": "1.7 m",
            "weight": "55.4 kg",
            "egg": ["Undiscovered"],
            "ability": [
                ["Pressure", "false"],
                ["Snow Cloak", "true"]
            ],
            "gender": "Genderless"
        },
        "image": {
            "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/144.png",
            "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/144.png",
            "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/144.png"
        }
    },
    {
        "id": 286,
        "name": {
          "english": "Breloom",
          "japanese": "キノガッサ",
          "chinese": "斗笠菇",
          "french": "Chapignon"
        },
        "type": ["Grass", "Fighting"],
        "base": {
          "HP": 60,
          "Attack": 130,
          "Defense": 80,
          "Sp. Attack": 60,
          "Sp. Defense": 60,
          "Speed": 70
        },
        "species": "Mushroom Pokémon",
        "description": "The seeds ringing Breloom’s tail are made of hardened toxic spores. It is horrible to eat the seeds. Just taking a bite of this Pokémon’s seed will cause your stomach to rumble.",
        "evolution": { "prev": ["285", "Level 23"] },
        "profile": {
          "height": "1.2 m",
          "weight": "39.2 kg",
          "egg": ["Fairy", "Grass"],
          "ability": [
            ["Effect Spore", "false"],
            ["Poison Heal", "false"],
            ["Technician", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/286.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/286.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/286.png"
        }
      },
      {
        "id": 287,
        "name": {
          "english": "Slakoth",
          "japanese": "ナマケロ",
          "chinese": "懒人獭",
          "french": "Parecool"
        },
        "type": ["Normal"],
        "base": {
          "HP": 60,
          "Attack": 60,
          "Defense": 60,
          "Sp. Attack": 35,
          "Sp. Defense": 35,
          "Speed": 30
        },
        "species": "Slacker Pokémon",
        "description": "Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless. It is rare to see this Pokémon in motion.",
        "evolution": { "next": [["288", "Level 18"]] },
        "profile": {
          "height": "0.8 m",
          "weight": "24 kg",
          "egg": ["Field"],
          "ability": [["Truant", "false"]],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/287.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/287.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/287.png"
        }
      },
      {
        "id": 288,
        "name": {
          "english": "Vigoroth",
          "japanese": "ヤルキモノ",
          "chinese": "过动猿",
          "french": "Vigoroth"
        },
        "type": ["Normal"],
        "base": {
          "HP": 80,
          "Attack": 80,
          "Defense": 80,
          "Sp. Attack": 55,
          "Sp. Defense": 55,
          "Speed": 90
        },
        "species": "Wild Monkey Pokémon",
        "description": "Vigoroth is simply incapable of remaining still. Even when it tries to sleep, the blood in its veins grows agitated, compelling this Pokémon to run wild throughout the jungle before it can settle down.",
        "evolution": { "prev": ["287", "Level 18"], "next": [["289", "Level 36"]] },
        "profile": {
          "height": "1.4 m",
          "weight": "46.5 kg",
          "egg": ["Field"],
          "ability": [["Vital Spirit", "false"]],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/288.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/288.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/288.png"
        }
      },
      {
        "id": 289,
        "name": {
          "english": "Slaking",
          "japanese": "ケッキング",
          "chinese": "请假王",
          "french": "Monaflèmit"
        },
        "type": ["Normal"],
        "base": {
          "HP": 150,
          "Attack": 160,
          "Defense": 100,
          "Sp. Attack": 95,
          "Sp. Defense": 65,
          "Speed": 100
        },
        "species": "Lazy Pokémon",
        "description": "Wherever Slaking live, rings of over a yard in diameter appear in grassy fields. They are made by the Pokémon as it eats all the grass within reach while lying prone on the ground.",
        "evolution": { "prev": ["288", "Level 36"] },
        "profile": {
          "height": "2 m",
          "weight": "130.5 kg",
          "egg": ["Field"],
          "ability": [["Truant", "false"]],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/289.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/289.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/289.png"
        }
      },
      {
        "id": 290,
        "name": {
          "english": "Nincada",
          "japanese": "ツチニン",
          "chinese": "土居忍士",
          "french": "Ningale"
        },
        "type": ["Bug", "Ground"],
        "base": {
          "HP": 31,
          "Attack": 45,
          "Defense": 90,
          "Sp. Attack": 30,
          "Sp. Defense": 30,
          "Speed": 40
        },
        "species": "Trainee Pokémon",
        "description": "Nincada lives underground. It uses its sharp claws to carve the roots of trees and absorb moisture and nutrients. This Pokémon can’t withstand bright sunlight so avoids it.",
        "evolution": {
          "next": [
            ["291", "Level 20"],
            ["292", "Level 20, empty spot in party, Pokéball in bag"]
          ]
        },
        "profile": {
          "height": "0.5 m",
          "weight": "5.5 kg",
          "egg": ["Bug"],
          "ability": [
            ["Compound Eyes", "false"],
            ["Run Away", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/290.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/290.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/290.png"
        }
      },
      {
        "id": 291,
        "name": {
          "english": "Ninjask",
          "japanese": "テッカニン",
          "chinese": "铁面忍者",
          "french": "Ninjask"
        },
        "type": ["Bug", "Flying"],
        "base": {
          "HP": 61,
          "Attack": 90,
          "Defense": 45,
          "Sp. Attack": 50,
          "Sp. Defense": 50,
          "Speed": 160
        },
        "species": "Ninja Pokémon",
        "description": "If Ninjask is not trained properly, it will refuse to obey the Trainer and cry loudly continuously. Because of this quality, this Pokémon is said to be one that puts the Trainer’s abilities to the test.",
        "evolution": { "prev": ["290", "Level 20"] },
        "profile": {
          "height": "0.8 m",
          "weight": "12 kg",
          "egg": ["Bug"],
          "ability": [
            ["Speed Boost", "false"],
            ["Infiltrator", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/291.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/291.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/291.png"
        }
      },
      {
        "id": 292,
        "name": {
          "english": "Shedinja",
          "japanese": "ヌケニン",
          "chinese": "脱壳忍者",
          "french": "Munja"
        },
        "type": ["Bug", "Ghost"],
        "base": {
          "HP": 1,
          "Attack": 90,
          "Defense": 45,
          "Sp. Attack": 30,
          "Sp. Defense": 30,
          "Speed": 40
        },
        "species": "Shed Pokémon",
        "description": "Shedinja is a peculiar Pokémon. It seems to appear unsought in a Poké Ball after a Nincada evolves. This bizarre Pokémon is entirely immobile—it doesn’t even breathe.",
        "evolution": {
          "prev": ["290", "Level 20, empty spot in party, Pokéball in bag"]
        },
        "profile": {
          "height": "0.8 m",
          "weight": "1.2 kg",
          "egg": ["Mineral"],
          "ability": [["Wonder Guard", "false"]],
          "gender": "Genderless"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/292.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/292.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/292.png"
        }
      },
      {
        "id": 293,
        "name": {
          "english": "Whismur",
          "japanese": "ゴニョニョ",
          "chinese": "咕妞妞",
          "french": "Chuchmur"
        },
        "type": ["Normal"],
        "base": {
          "HP": 64,
          "Attack": 51,
          "Defense": 23,
          "Sp. Attack": 51,
          "Sp. Defense": 23,
          "Speed": 28
        },
        "species": "Whisper Pokémon",
        "description": "Whismur is very timid. If it starts to cry loudly, it becomes startled by its own crying and cries even harder. When it finally stops crying, the Pokémon goes to sleep, all tired out.",
        "evolution": { "next": [["294", "Level 20"]] },
        "profile": {
          "height": "0.6 m",
          "weight": "16.3 kg",
          "egg": ["Monster", "Field"],
          "ability": [
            ["Soundproof", "false"],
            ["Rattled", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/293.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/293.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/293.png"
        }
      },
      {
        "id": 294,
        "name": {
          "english": "Loudred",
          "japanese": "ドゴーム",
          "chinese": "吼爆弹",
          "french": "Ramboum"
        },
        "type": ["Normal"],
        "base": {
          "HP": 84,
          "Attack": 71,
          "Defense": 43,
          "Sp. Attack": 71,
          "Sp. Defense": 43,
          "Speed": 48
        },
        "species": "Big Voice Pokémon",
        "description": "Loudred shouts while stamping its feet. After it finishes shouting, this Pokémon becomes incapable of hearing anything for a while. This is considered to be a weak point.",
        "evolution": { "prev": ["293", "Level 20"], "next": [["295", "Level 40"]] },
        "profile": {
          "height": "1 m",
          "weight": "40.5 kg",
          "egg": ["Monster", "Field"],
          "ability": [
            ["Soundproof", "false"],
            ["Scrappy", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/294.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/294.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/294.png"
        }
      },
      {
        "id": 295,
        "name": {
          "english": "Exploud",
          "japanese": "バクオング",
          "chinese": "爆音怪",
          "french": "Brouhabam"
        },
        "type": ["Normal"],
        "base": {
          "HP": 104,
          "Attack": 91,
          "Defense": 63,
          "Sp. Attack": 91,
          "Sp. Defense": 73,
          "Speed": 68
        },
        "species": "Loud Noise Pokémon",
        "description": "Exploud communicates its feelings to the others by emitting whistle-like sounds from the tubes on its body. This Pokémon only raises its voice when it is in battle.",
        "evolution": { "prev": ["294", "Level 40"] },
        "profile": {
          "height": "1.5 m",
          "weight": "84 kg",
          "egg": ["Monster", "Field"],
          "ability": [
            ["Soundproof", "false"],
            ["Scrappy", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/295.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/295.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/295.png"
        }
      },
      {
        "id": 296,
        "name": {
          "english": "Makuhita",
          "japanese": "マクノシタ",
          "chinese": "幕下力士",
          "french": "Makuhita"
        },
        "type": ["Fighting"],
        "base": {
          "HP": 72,
          "Attack": 60,
          "Defense": 30,
          "Sp. Attack": 20,
          "Sp. Defense": 30,
          "Speed": 25
        },
        "species": "Guts Pokémon",
        "description": "There’s a rumor of a traditional recipe for stew that Trainers can use to raise strong Makuhita.",
        "evolution": { "next": [["297", "Level 24"]] },
        "profile": {
          "height": "1 m",
          "weight": "86.4 kg",
          "egg": ["Human-Like"],
          "ability": [
            ["Thick Fat", "false"],
            ["Guts", "false"],
            ["Sheer Force", "true"]
          ],
          "gender": "75:25"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/296.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/296.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/296.png"
        }
      },
      {
        "id": 297,
        "name": {
          "english": "Hariyama",
          "japanese": "ハリテヤマ",
          "chinese": "铁掌力士",
          "french": "Hariyama"
        },
        "type": ["Fighting"],
        "base": {
          "HP": 144,
          "Attack": 120,
          "Defense": 60,
          "Sp. Attack": 40,
          "Sp. Defense": 60,
          "Speed": 50
        },
        "species": "Arm Thrust Pokémon",
        "description": "Hariyama that are big and fat aren’t necessarily strong. There are some small ones that move nimbly and use moves skillfully.",
        "evolution": { "prev": ["296", "Level 24"] },
        "profile": {
          "height": "2.3 m",
          "weight": "253.8 kg",
          "egg": ["Human-Like"],
          "ability": [
            ["Thick Fat", "false"],
            ["Guts", "false"],
            ["Sheer Force", "true"]
          ],
          "gender": "75:25"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/297.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/297.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/297.png"
        }
      },
      {
        "id": 298,
        "name": {
          "english": "Azurill",
          "japanese": "ルリリ",
          "chinese": "露力丽",
          "french": "Azurill"
        },
        "type": ["Normal", "Fairy"],
        "base": {
          "HP": 50,
          "Attack": 20,
          "Defense": 40,
          "Sp. Attack": 20,
          "Sp. Defense": 40,
          "Speed": 20
        },
        "species": "Polka Dot Pokémon",
        "description": "Azurill’s tail is large and bouncy. It is packed full of the nutrients this Pokémon needs to grow. Azurill can be seen bouncing and playing on its big, rubbery tail.",
        "evolution": { "next": [["183", "high Friendship"]] },
        "profile": {
          "height": "0.2 m",
          "weight": "2 kg",
          "egg": ["Undiscovered"],
          "ability": [
            ["Thick Fat", "false"],
            ["Huge Power", "false"],
            ["Sap Sipper", "true"]
          ],
          "gender": "25:75"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/298.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/298.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/298.png"
        }
      },
      {
        "id": 299,
        "name": {
          "english": "Nosepass",
          "japanese": "ノズパス",
          "chinese": "朝北鼻",
          "french": "Tarinor"
        },
        "type": ["Rock"],
        "base": {
          "HP": 30,
          "Attack": 45,
          "Defense": 135,
          "Sp. Attack": 45,
          "Sp. Defense": 90,
          "Speed": 30
        },
        "species": "Compass Pokémon",
        "description": "It hunts without twitching a muscle by pulling in its prey with powerful magnetism. But sometimes it pulls natural enemies in close.",
        "evolution": { "next": [["476", "level up in a Magnetic Field area"]] },
        "profile": {
          "height": "1 m",
          "weight": "97 kg",
          "egg": ["Mineral"],
          "ability": [
            ["Sturdy", "false"],
            ["Magnet Pull", "false"],
            ["Sand Force", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/299.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/299.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/299.png"
        }
      },
      {
        "id": 300,
        "name": {
          "english": "Skitty",
          "japanese": "エネコ",
          "chinese": "向尾喵",
          "french": "Skitty"
        },
        "type": ["Normal"],
        "base": {
          "HP": 50,
          "Attack": 45,
          "Defense": 45,
          "Sp. Attack": 35,
          "Sp. Defense": 35,
          "Speed": 50
        },
        "species": "Kitten Pokémon",
        "description": "Skitty is known to chase around playfully after its own tail. In the wild, this Pokémon lives in holes in the trees of forests. It is very popular as a pet because of its adorable looks.",
        "evolution": { "next": [["301", "use Moon Stone"]] },
        "profile": {
          "height": "0.6 m",
          "weight": "11 kg",
          "egg": ["Field", "Fairy"],
          "ability": [
            ["Cute Charm", "false"],
            ["Normalize", "false"],
            ["Wonder Skin", "true"]
          ],
          "gender": "25:75"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/300.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/300.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/300.png"
        }
      },
      {
        "id": 437,
        "name": {
          "english": "Bronzong",
          "japanese": "ドータクン",
          "chinese": "青铜钟",
          "french": "Archéodong"
        },
        "type": ["Steel", "Psychic"],
        "base": {
          "HP": 67,
          "Attack": 89,
          "Defense": 116,
          "Sp. Attack": 79,
          "Sp. Defense": 116,
          "Speed": 33
        },
        "species": "Bronze Bell Pokémon",
        "description": "Ancient people believed that petitioning Bronzong for rain was the way to make crops grow.",
        "evolution": { "prev": ["436", "Level 33"] },
        "profile": {
          "height": "1.3 m",
          "weight": "187 kg",
          "egg": ["Mineral"],
          "ability": [
            ["Levitate", "false"],
            ["Heatproof", "false"],
            ["Heavy Metal", "true"]
          ],
          "gender": "Genderless"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/437.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/437.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/437.png"
        }
      },
      {
        "id": 438,
        "name": {
          "english": "Bonsly",
          "japanese": "ウソハチ",
          "chinese": "盆才怪",
          "french": "Manzaï"
        },
        "type": ["Rock"],
        "base": {
          "HP": 50,
          "Attack": 80,
          "Defense": 95,
          "Sp. Attack": 10,
          "Sp. Defense": 45,
          "Speed": 10
        },
        "species": "Bonsai Pokémon",
        "description": "If its body gets too damp, it will die. So, in a process reminiscent of sweating, its eyes expel moisture.",
        "evolution": { "next": [["185", "after Mimic learned"]] },
        "profile": {
          "height": "0.5 m",
          "weight": "15 kg",
          "egg": ["Undiscovered"],
          "ability": [
            ["Sturdy", "false"],
            ["Rock Head", "false"],
            ["Rattled", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/438.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/438.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/438.png"
        }
      },
      {
        "id": 439,
        "name": {
          "english": "Mime Jr.",
          "japanese": "マネネ",
          "chinese": "魔尼尼",
          "french": "Mime Jr"
        },
        "type": ["Psychic", "Fairy"],
        "base": {
          "HP": 20,
          "Attack": 25,
          "Defense": 45,
          "Sp. Attack": 70,
          "Sp. Defense": 90,
          "Speed": 60
        },
        "species": "Mime Pokémon",
        "description": "When this gifted mimic surprises an opponent, Mime Jr. feels so happy that it ends up forgetting it was imitating something.",
        "evolution": { "next": [["122", "after Mimic learned"]] },
        "profile": {
          "height": "0.6 m",
          "weight": "13 kg",
          "egg": ["Undiscovered"],
          "ability": [
            ["Soundproof", "false"],
            ["Filter", "false"],
            ["Technician", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/439.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/439.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/439.png"
        }
      },
      {
        "id": 440,
        "name": {
          "english": "Happiny",
          "japanese": "ピンプク",
          "chinese": "小福蛋",
          "french": "Ptiravi"
        },
        "type": ["Normal"],
        "base": {
          "HP": 100,
          "Attack": 5,
          "Defense": 5,
          "Sp. Attack": 15,
          "Sp. Defense": 65,
          "Speed": 30
        },
        "species": "Playhouse Pokémon",
        "description": "When it sees something round and white, Happiny puts it into the pouch on its stomach. It sometimes becomes overloaded and can’t move.",
        "evolution": { "next": [["113", "hold Oval Stone, Daytime"]] },
        "profile": {
          "height": "0.6 m",
          "weight": "24.4 kg",
          "egg": ["Undiscovered"],
          "ability": [
            ["Natural Cure", "false"],
            ["Serene Grace", "false"],
            ["Friend Guard", "true"]
          ],
          "gender": "0:100"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/440.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/440.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/440.png"
        }
      },
      {
        "id": 441,
        "name": {
          "english": "Chatot",
          "japanese": "ペラップ",
          "chinese": "聒噪鸟",
          "french": "Pijako"
        },
        "type": ["Normal", "Flying"],
        "base": {
          "HP": 76,
          "Attack": 65,
          "Defense": 45,
          "Sp. Attack": 92,
          "Sp. Defense": 42,
          "Speed": 91
        },
        "species": "Music Note Pokémon",
        "description": "It can learn and speak human words. If they gather, they all learn the same saying.",
        "evolution": {},
        "profile": {
          "height": "0.5 m",
          "weight": "1.9 kg",
          "egg": ["Flying"],
          "ability": [
            ["Keen Eye", "false"],
            ["Tangled Feet", "false"],
            ["Big Pecks", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/441.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/441.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/441.png"
        }
      },
      {
        "id": 442,
        "name": {
          "english": "Spiritomb",
          "japanese": "ミカルゲ",
          "chinese": "花岩怪",
          "french": "Spiritomb"
        },
        "type": ["Ghost", "Dark"],
        "base": {
          "HP": 50,
          "Attack": 92,
          "Defense": 108,
          "Sp. Attack": 92,
          "Sp. Defense": 108,
          "Speed": 35
        },
        "species": "Forbidden Pokémon",
        "description": "It was bound to a fissure in an odd keystone as punishment for misdeeds 500 years ago.",
        "evolution": {},
        "profile": {
          "height": "1 m",
          "weight": "108 kg",
          "egg": ["Amorphous"],
          "ability": [
            ["Pressure", "false"],
            ["Infiltrator", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/442.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/442.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/442.png"
        }
      },
      {
        "id": 443,
        "name": {
          "english": "Gible",
          "japanese": "フカマル",
          "chinese": "圆陆鲨",
          "french": "Griknot"
        },
        "type": ["Dragon", "Ground"],
        "base": {
          "HP": 58,
          "Attack": 70,
          "Defense": 45,
          "Sp. Attack": 40,
          "Sp. Defense": 45,
          "Speed": 42
        },
        "species": "Land Shark Pokémon",
        "description": "Its original home is an area much hotter than Alola. If you’re planning to live with one, your heating bill will soar.",
        "evolution": { "next": [["444", "Level 24"]] },
        "profile": {
          "height": "0.7 m",
          "weight": "20.5 kg",
          "egg": ["Monster", "Dragon"],
          "ability": [
            ["Sand Veil", "false"],
            ["Rough Skin", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/443.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/443.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/443.png"
        }
      },
      {
        "id": 444,
        "name": {
          "english": "Gabite",
          "japanese": "ガバイト",
          "chinese": "尖牙陆鲨",
          "french": "Carmache"
        },
        "type": ["Dragon", "Ground"],
        "base": {
          "HP": 68,
          "Attack": 90,
          "Defense": 65,
          "Sp. Attack": 50,
          "Sp. Defense": 55,
          "Speed": 82
        },
        "species": "Cave Pokémon",
        "description": "It sheds its skin and gradually grows larger. Its scales can be ground into a powder and used as raw materials for traditional medicine.",
        "evolution": { "prev": ["443", "Level 24"], "next": [["445", "Level 48"]] },
        "profile": {
          "height": "1.4 m",
          "weight": "56 kg",
          "egg": ["Monster", "Dragon"],
          "ability": [
            ["Sand Veil", "false"],
            ["Rough Skin", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/444.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/444.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/444.png"
        }
      },
      {
        "id": 445,
        "name": {
          "english": "Garchomp",
          "japanese": "ガブリアス",
          "chinese": "烈咬陆鲨",
          "french": "Carchacrok"
        },
        "type": ["Dragon", "Ground"],
        "base": {
          "HP": 108,
          "Attack": 130,
          "Defense": 95,
          "Sp. Attack": 80,
          "Sp. Defense": 85,
          "Speed": 102
        },
        "species": "Mach Pokémon",
        "description": "Its fine scales don’t just reduce wind resistance—their sharp edges also cause injury to any opponent who attacks it.",
        "evolution": { "prev": ["444", "Level 48"] },
        "profile": {
          "height": "1.9 m",
          "weight": "95 kg",
          "egg": ["Monster", "Dragon"],
          "ability": [
            ["Sand Veil", "false"],
            ["Rough Skin", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/445.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/445.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/445.png"
        }
      },
      {
        "id": 446,
        "name": {
          "english": "Munchlax",
          "japanese": "ゴンベ",
          "chinese": "小卡比兽",
          "french": "Goinfrex"
        },
        "type": ["Normal"],
        "base": {
          "HP": 135,
          "Attack": 85,
          "Defense": 40,
          "Sp. Attack": 40,
          "Sp. Defense": 85,
          "Speed": 5
        },
        "species": "Big Eater Pokémon",
        "description": "Anything that looks edible, Munchlax will go on and swallow whole. Its stomach is tough enough to handle it even if the food has gone rotten.",
        "evolution": { "next": [["143", "high Friendship"]] },
        "profile": {
          "height": "0.6 m",
          "weight": "105 kg",
          "egg": ["Undiscovered"],
          "ability": [
            ["Pickup", "false"],
            ["Thick Fat", "false"],
            ["Gluttony", "true"]
          ],
          "gender": "87.5:12.5"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/446.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/446.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/446.png"
        }
      },
      {
        "id": 447,
        "name": {
          "english": "Riolu",
          "japanese": "リオル",
          "chinese": "利欧路",
          "french": "Riolu"
        },
        "type": ["Fighting"],
        "base": {
          "HP": 40,
          "Attack": 70,
          "Defense": 40,
          "Sp. Attack": 35,
          "Sp. Defense": 40,
          "Speed": 60
        },
        "species": "Emanation Pokémon",
        "description": "It uses waves called auras to communicate with others of its kind. It doesn’t make any noise during this time, so its enemies can’t detect it.",
        "evolution": { "next": [["448", "high Friendship, Daytime"]] },
        "profile": {
          "height": "0.7 m",
          "weight": "20.2 kg",
          "egg": ["Undiscovered"],
          "ability": [
            ["Steadfast", "false"],
            ["Inner Focus", "false"],
            ["Prankster", "true"]
          ],
          "gender": "87.5:12.5"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/447.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/447.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/447.png"
        }
      },
      {
        "id": 448,
        "name": {
          "english": "Lucario",
          "japanese": "ルカリオ",
          "chinese": "路卡利欧",
          "french": "Lucario"
        },
        "type": ["Fighting", "Steel"],
        "base": {
          "HP": 70,
          "Attack": 110,
          "Defense": 70,
          "Sp. Attack": 115,
          "Sp. Defense": 70,
          "Speed": 90
        },
        "species": "Aura Pokémon",
        "description": "Lucario reads its opponent’s feelings with its aura waves. It finds out things it would rather not know, so it gets stressed out easily.",
        "evolution": { "prev": ["447", "high Friendship, Daytime"] },
        "profile": {
          "height": "1.2 m",
          "weight": "54 kg",
          "egg": ["Field", "Human-Like"],
          "ability": [
            ["Steadfast", "false"],
            ["Inner Focus", "false"],
            ["Justified", "true"]
          ],
          "gender": "87.5:12.5"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/448.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/448.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/448.png"
        }
      },
      {
        "id": 449,
        "name": {
          "english": "Hippopotas",
          "japanese": "ヒポポタス",
          "chinese": "沙河马",
          "french": "Hippopotas"
        },
        "type": ["Ground"],
        "base": {
          "HP": 68,
          "Attack": 72,
          "Defense": 78,
          "Sp. Attack": 38,
          "Sp. Defense": 42,
          "Speed": 32
        },
        "species": "Hippo Pokémon",
        "description": "It enshrouds itself with sand to protect itself from germs. It does not enjoy getting wet.",
        "evolution": { "next": [["450", "Level 34"]] },
        "profile": {
          "height": "0.8 m",
          "weight": "49.5 kg",
          "egg": ["Field"],
          "ability": [
            ["Sand Stream", "false"],
            ["Sand Force", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/449.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/449.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/449.png"
        }
      },
      {
        "id": 450,
        "name": {
          "english": "Hippowdon",
          "japanese": "カバルドン",
          "chinese": "河马兽",
          "french": "Hippodocus"
        },
        "type": ["Ground"],
        "base": {
          "HP": 108,
          "Attack": 112,
          "Defense": 118,
          "Sp. Attack": 68,
          "Sp. Defense": 72,
          "Speed": 47
        },
        "species": "Heavyweight Pokémon",
        "description": "It blasts internally stored sand from ports on its body to create a towering twister for attack.",
        "evolution": { "prev": ["449", "Level 34"] },
        "profile": {
          "height": "2 m",
          "weight": "300 kg",
          "egg": ["Field"],
          "ability": [
            ["Sand Stream", "false"],
            ["Sand Force", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/450.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/450.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/450.png"
        }
      },
      {
        "id": 451,
        "name": {
          "english": "Skorupi",
          "japanese": "スコルピ",
          "chinese": "钳尾蝎",
          "french": "Rapion"
        },
        "type": ["Poison", "Bug"],
        "base": {
          "HP": 40,
          "Attack": 50,
          "Defense": 90,
          "Sp. Attack": 30,
          "Sp. Defense": 55,
          "Speed": 65
        },
        "species": "Scorpion Pokémon",
        "description": "It burrows under the sand to lie in wait for prey. Its tail claws can inject its prey with a savage poison.",
        "evolution": { "next": [["452", "Level 40"]] },
        "profile": {
          "height": "0.8 m",
          "weight": "12 kg",
          "egg": ["Bug", "Water 3"],
          "ability": [
            ["Battle Armor", "false"],
            ["Sniper", "false"],
            ["Keen Eye", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/451.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/451.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/451.png"
        }
      },
      {
        "id": 452,
        "name": {
          "english": "Drapion",
          "japanese": "ドラピオン",
          "chinese": "龙王蝎",
          "french": "Drascore"
        },
        "type": ["Poison", "Dark"],
        "base": {
          "HP": 70,
          "Attack": 90,
          "Defense": 110,
          "Sp. Attack": 60,
          "Sp. Defense": 75,
          "Speed": 95
        },
        "species": "Ogre Scorpion Pokémon",
        "description": "It has the power in its clawed arms to make scrap of a car. The tips of its claws release poison.",
        "evolution": { "prev": ["451", "Level 40"] },
        "profile": {
          "height": "1.3 m",
          "weight": "61.5 kg",
          "egg": ["Bug", "Water 3"],
          "ability": [
            ["Battle Armor", "false"],
            ["Sniper", "false"],
            ["Keen Eye", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/452.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/452.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/452.png"
        }
      },
      {
        "id": 453,
        "name": {
          "english": "Croagunk",
          "japanese": "グレッグル",
          "chinese": "不良蛙",
          "french": "Cradopaud"
        },
        "type": ["Poison", "Fighting"],
        "base": {
          "HP": 48,
          "Attack": 61,
          "Defense": 40,
          "Sp. Attack": 61,
          "Sp. Defense": 40,
          "Speed": 50
        },
        "species": "Toxic Mouth Pokémon",
        "description": "Inflating its poison sacs, it fills the area with an odd sound and hits flinching opponents with a poison jab.",
        "evolution": { "next": [["454", "Level 37"]] },
        "profile": {
          "height": "0.7 m",
          "weight": "23 kg",
          "egg": ["Human-Like"],
          "ability": [
            ["Anticipation", "false"],
            ["Dry Skin", "false"],
            ["Poison Touch", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/453.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/453.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/453.png"
        }
      },
      {
        "id": 454,
        "name": {
          "english": "Toxicroak",
          "japanese": "ドクロッグ",
          "chinese": "毒骷蛙",
          "french": "Coatox"
        },
        "type": ["Poison", "Fighting"],
        "base": {
          "HP": 83,
          "Attack": 106,
          "Defense": 65,
          "Sp. Attack": 86,
          "Sp. Defense": 65,
          "Speed": 85
        },
        "species": "Toxic Mouth Pokémon",
        "description": "Its knuckle claws secrete a toxin so vile that even a scratch could prove fatal.",
        "evolution": { "prev": ["453", "Level 37"] },
        "profile": {
          "height": "1.3 m",
          "weight": "44.4 kg",
          "egg": ["Human-Like"],
          "ability": [
            ["Anticipation", "false"],
            ["Dry Skin", "false"],
            ["Poison Touch", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/454.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/454.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/454.png"
        }
      },
      {
        "id": 455,
        "name": {
          "english": "Carnivine",
          "japanese": "マスキッパ",
          "chinese": "尖牙笼",
          "french": "Vortente"
        },
        "type": ["Grass"],
        "base": {
          "HP": 74,
          "Attack": 100,
          "Defense": 72,
          "Sp. Attack": 90,
          "Sp. Defense": 72,
          "Speed": 46
        },
        "species": "Bug Catcher Pokémon",
        "description": "It binds itself to trees in marshes. It attracts prey with its sweet-smelling drool and gulps them down.",
        "evolution": {},
        "profile": {
          "height": "1.4 m",
          "weight": "27 kg",
          "egg": ["Grass"],
          "ability": [["Levitate", "false"]],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/455.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/455.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/455.png"
        }
      },
      {
        "id": 456,
        "name": {
          "english": "Finneon",
          "japanese": "ケイコウオ",
          "chinese": "荧光鱼",
          "french": "Écayon"
        },
        "type": ["Water"],
        "base": {
          "HP": 49,
          "Attack": 49,
          "Defense": 56,
          "Sp. Attack": 49,
          "Sp. Defense": 61,
          "Speed": 66
        },
        "species": "Wing Fish Pokémon",
        "description": "It lures in prey with its shining tail fins. It stays near the surface during the day and moves to the depths when night falls.",
        "evolution": { "next": [["457", "Level 31"]] },
        "profile": {
          "height": "0.4 m",
          "weight": "7 kg",
          "egg": ["Water 2"],
          "ability": [
            ["Swift Swim", "false"],
            ["Storm Drain", "false"],
            ["Water Veil", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/456.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/456.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/456.png"
        }
      },
      {
        "id": 457,
        "name": {
          "english": "Lumineon",
          "japanese": "ネオラント",
          "chinese": "霓虹鱼",
          "french": "Luminéon"
        },
        "type": ["Water"],
        "base": {
          "HP": 69,
          "Attack": 69,
          "Defense": 76,
          "Sp. Attack": 69,
          "Sp. Defense": 86,
          "Speed": 91
        },
        "species": "Neon Pokémon",
        "description": "They traverse the deep waters as if crawling over the seafloor. The fantastic lights of its fins shine like stars in the night sky.",
        "evolution": { "prev": ["456", "Level 31"] },
        "profile": {
          "height": "1.2 m",
          "weight": "24 kg",
          "egg": ["Water 2"],
          "ability": [
            ["Swift Swim", "false"],
            ["Storm Drain", "false"],
            ["Water Veil", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/457.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/457.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/457.png"
        }
      },
      {
        "id": 458,
        "name": {
          "english": "Mantyke",
          "japanese": "タマンタ",
          "chinese": "小球飞鱼",
          "french": "Babimanta"
        },
        "type": ["Water", "Flying"],
        "base": {
          "HP": 45,
          "Attack": 20,
          "Defense": 50,
          "Sp. Attack": 60,
          "Sp. Defense": 120,
          "Speed": 50
        },
        "species": "Kite Pokémon",
        "description": "Mantyke are friendly toward people and will approach boats closely. The patterns on their backs differ depending on their habitat.",
        "evolution": { "next": [["226", "with Remoraid in party"]] },
        "profile": {
          "height": "1 m",
          "weight": "65 kg",
          "egg": ["Undiscovered"],
          "ability": [
            ["Swift Swim", "false"],
            ["Water Absorb", "false"],
            ["Water Veil", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/458.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/458.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/458.png"
        }
      },
      {
        "id": 459,
        "name": {
          "english": "Snover",
          "japanese": "ユキカブリ",
          "chinese": "雪笠怪",
          "french": "Blizzi"
        },
        "type": ["Grass", "Ice"],
        "base": {
          "HP": 60,
          "Attack": 62,
          "Defense": 50,
          "Sp. Attack": 62,
          "Sp. Defense": 60,
          "Speed": 40
        },
        "species": "Frost Tree Pokémon",
        "description": "In the spring, it grows berries with the texture of frozen treats around its belly.",
        "evolution": { "next": [["460", "Level 40"]] },
        "profile": {
          "height": "1 m",
          "weight": "50.5 kg",
          "egg": ["Monster", "Grass"],
          "ability": [
            ["Snow Warning", "false"],
            ["Soundproof", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/459.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/459.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/459.png"
        }
      },
      {
        "id": 460,
        "name": {
          "english": "Abomasnow",
          "japanese": "ユキノオー",
          "chinese": "暴雪王",
          "french": "Blizzaroi"
        },
        "type": ["Grass", "Ice"],
        "base": {
          "HP": 90,
          "Attack": 92,
          "Defense": 75,
          "Sp. Attack": 92,
          "Sp. Defense": 85,
          "Speed": 60
        },
        "species": "Frost Tree Pokémon",
        "description": "It lives a quiet life on mountains that are perpetually covered in snow. It hides itself by whipping up blizzards.",
        "evolution": { "prev": ["459", "Level 40"] },
        "profile": {
          "height": "2.2 m",
          "weight": "135.5 kg",
          "egg": ["Monster", "Grass"],
          "ability": [
            ["Snow Warning", "false"],
            ["Soundproof", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/460.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/460.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/460.png"
        }
      },
      {
        "id": 461,
        "name": {
          "english": "Weavile",
          "japanese": "マニューラ",
          "chinese": "玛狃拉",
          "french": "Dimoret"
        },
        "type": ["Dark", "Ice"],
        "base": {
          "HP": 70,
          "Attack": 120,
          "Defense": 65,
          "Sp. Attack": 45,
          "Sp. Defense": 85,
          "Speed": 125
        },
        "species": "Sharp Claw Pokémon",
        "description": "Thanks to its increased intelligence, scrapping over food is a thing of the past. A scratch from its claws will give you a case of frostbite!",
        "evolution": { "prev": ["215", "hold Razor Claw, Nighttime"] },
        "profile": {
          "height": "1.1 m",
          "weight": "34 kg",
          "egg": ["Field"],
          "ability": [
            ["Pressure", "false"],
            ["Pickpocket", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/461.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/461.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/461.png"
        }
      },
      {
        "id": 462,
        "name": {
          "english": "Magnezone",
          "japanese": "ジバコイル",
          "chinese": "自爆磁怪",
          "french": "Magnézone"
        },
        "type": ["Electric", "Steel"],
        "base": {
          "HP": 70,
          "Attack": 70,
          "Defense": 115,
          "Sp. Attack": 130,
          "Sp. Defense": 90,
          "Speed": 60
        },
        "species": "Magnet Area Pokémon",
        "description": "There are still people who believe that this Pokémon came from outer space. It emanates a powerful magnetic field.",
        "evolution": { "prev": ["82", "level up in a Magnetic Field area"] },
        "profile": {
          "height": "1.2 m",
          "weight": "180 kg",
          "egg": ["Mineral"],
          "ability": [
            ["Magnet Pull", "false"],
            ["Sturdy", "false"],
            ["Analytic", "true"]
          ],
          "gender": "Genderless"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/462.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/462.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/462.png"
        }
      },
      {
        "id": 463,
        "name": {
          "english": "Lickilicky",
          "japanese": "ベロベルト",
          "chinese": "大舌舔",
          "french": "Coudlangue"
        },
        "type": ["Normal"],
        "base": {
          "HP": 110,
          "Attack": 85,
          "Defense": 95,
          "Sp. Attack": 80,
          "Sp. Defense": 95,
          "Speed": 50
        },
        "species": "Licking Pokémon",
        "description": "It uses its tongue much more skillfully than its hands or its feet. It can deftly pick up a single small bean with its tongue.",
        "evolution": { "prev": ["108", "after Rollout learned"] },
        "profile": {
          "height": "1.7 m",
          "weight": "140 kg",
          "egg": ["Monster"],
          "ability": [
            ["Own Tempo", "false"],
            ["Oblivious", "false"],
            ["Cloud Nine", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/463.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/463.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/463.png"
        }
      },
      {
        "id": 464,
        "name": {
          "english": "Rhyperior",
          "japanese": "ドサイドン",
          "chinese": "超甲狂犀",
          "french": "Rhinastoc"
        },
        "type": ["Ground", "Rock"],
        "base": {
          "HP": 115,
          "Attack": 140,
          "Defense": 130,
          "Sp. Attack": 55,
          "Sp. Defense": 55,
          "Speed": 40
        },
        "species": "Drill Pokémon",
        "description": "It puts rocks in holes in its palms and uses its muscles to shoot them. Geodude are shot at rare times.",
        "evolution": { "prev": ["112", "trade holding Protector"] },
        "profile": {
          "height": "2.4 m",
          "weight": "282.8 kg",
          "egg": ["Monster", "Field"],
          "ability": [
            ["Lightning Rod", "false"],
            ["Solid Rock", "false"],
            ["Reckless", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/464.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/464.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/464.png"
        }
      },
      {
        "id": 465,
        "name": {
          "english": "Tangrowth",
          "japanese": "モジャンボ",
          "chinese": "巨蔓藤",
          "french": "Bouldeneu"
        },
        "type": ["Grass"],
        "base": {
          "HP": 100,
          "Attack": 100,
          "Defense": 125,
          "Sp. Attack": 110,
          "Sp. Defense": 50,
          "Speed": 50
        },
        "species": "Vine Pokémon",
        "description": "Its vines grow so profusely that, in the warm season, you can’t even see its eyes.",
        "evolution": { "prev": ["114", "after Ancient Power learned"] },
        "profile": {
          "height": "2 m",
          "weight": "128.6 kg",
          "egg": ["Grass"],
          "ability": [
            ["Chlorophyll", "false"],
            ["Leaf Guard", "false"],
            ["Regenerator", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/465.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/465.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/465.png"
        }
      },
      {
        "id": 466,
        "name": {
          "english": "Electivire",
          "japanese": "エレキブル",
          "chinese": "电击魔兽",
          "french": "Élekable"
        },
        "type": ["Electric"],
        "base": {
          "HP": 75,
          "Attack": 123,
          "Defense": 67,
          "Sp. Attack": 95,
          "Sp. Defense": 85,
          "Speed": 95
        },
        "species": "Thunderbolt Pokémon",
        "description": "A single Electivire can provide enough electricity for all the buildings in a big city for a year.",
        "evolution": { "prev": ["125", "trade holding Electirizer"] },
        "profile": {
          "height": "1.8 m",
          "weight": "138.6 kg",
          "egg": ["Human-Like"],
          "ability": [
            ["Motor Drive", "false"],
            ["Vital Spirit", "true"]
          ],
          "gender": "75:25"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/466.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/466.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/466.png"
        }
      },
      {
        "id": 632,
        "name": {
          "english": "Durant",
          "japanese": "アイアント",
          "chinese": "铁蚁",
          "french": "Fermite"
        },
        "type": ["Bug", "Steel"],
        "base": {
          "HP": 58,
          "Attack": 109,
          "Defense": 112,
          "Sp. Attack": 48,
          "Sp. Defense": 48,
          "Speed": 109
        },
        "species": "Iron Ant Pokémon",
        "description": "They attack in groups, covering themselves in steel armor to protect themselves from Heatmor.",
        "evolution": {},
        "profile": {
          "height": "0.3 m",
          "weight": "33 kg",
          "egg": ["Bug"],
          "ability": [
            ["Swarm", "false"],
            ["Hustle", "false"],
            ["Truant", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/632.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/632.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/632.png"
        }
      },
      {
        "id": 633,
        "name": {
          "english": "Deino",
          "japanese": "モノズ",
          "chinese": "单首龙",
          "french": "Solochi"
        },
        "type": ["Dark", "Dragon"],
        "base": {
          "HP": 52,
          "Attack": 65,
          "Defense": 50,
          "Sp. Attack": 45,
          "Sp. Defense": 50,
          "Speed": 38
        },
        "species": "Irate Pokémon",
        "description": "Lacking sight, it’s unaware of its surroundings, so it bumps into things and eats anything that moves.",
        "evolution": { "next": [["634", "Level 50"]] },
        "profile": {
          "height": "0.8 m",
          "weight": "17.3 kg",
          "egg": ["Dragon"],
          "ability": [["Hustle", "false"]],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/633.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/633.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/633.png"
        }
      },
      {
        "id": 634,
        "name": {
          "english": "Zweilous",
          "japanese": "ジヘッド",
          "chinese": "双首暴龙",
          "french": "Diamat"
        },
        "type": ["Dark", "Dragon"],
        "base": {
          "HP": 72,
          "Attack": 85,
          "Defense": 70,
          "Sp. Attack": 65,
          "Sp. Defense": 70,
          "Speed": 58
        },
        "species": "Hostile Pokémon",
        "description": "After it has eaten up all the food in its territory, it moves to another area. Its two heads do not get along.",
        "evolution": { "prev": ["633", "Level 50"], "next": [["635", "Level 64"]] },
        "profile": {
          "height": "1.4 m",
          "weight": "50 kg",
          "egg": ["Dragon"],
          "ability": [["Hustle", "false"]],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/634.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/634.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/634.png"
        }
      },
      {
        "id": 635,
        "name": {
          "english": "Hydreigon",
          "japanese": "サザンドラ",
          "chinese": "三首恶龙",
          "french": "Trioxhydre"
        },
        "type": ["Dark", "Dragon"],
        "base": {
          "HP": 92,
          "Attack": 105,
          "Defense": 90,
          "Sp. Attack": 125,
          "Sp. Defense": 90,
          "Speed": 98
        },
        "species": "Brutal Pokémon",
        "description": "It responds to movement by attacking. This scary, three-headed Pokémon devours everything in its path!",
        "evolution": { "prev": ["634", "Level 64"] },
        "profile": {
          "height": "1.8 m",
          "weight": "160 kg",
          "egg": ["Dragon"],
          "ability": [["Levitate", "false"]],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/635.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/635.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/635.png"
        }
      },
      {
        "id": 636,
        "name": {
          "english": "Larvesta",
          "japanese": "メラルバ",
          "chinese": "燃烧虫",
          "french": "Pyronille"
        },
        "type": ["Bug", "Fire"],
        "base": {
          "HP": 55,
          "Attack": 85,
          "Defense": 55,
          "Sp. Attack": 50,
          "Sp. Defense": 55,
          "Speed": 60
        },
        "species": "Torch Pokémon",
        "description": "It protects itself with flame. Long years ago, people believed Larvesta had a nest on the sun.",
        "evolution": { "next": [["637", "Level 59"]] },
        "profile": {
          "height": "1.1 m",
          "weight": "28.8 kg",
          "egg": ["Bug"],
          "ability": [
            ["Flame Body", "false"],
            ["Swarm", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/636.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/636.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/636.png"
        }
      },
      {
        "id": 637,
        "name": {
          "english": "Volcarona",
          "japanese": "ウルガモス",
          "chinese": "火神蛾",
          "french": "Pyrax"
        },
        "type": ["Bug", "Fire"],
        "base": {
          "HP": 85,
          "Attack": 60,
          "Defense": 65,
          "Sp. Attack": 135,
          "Sp. Defense": 105,
          "Speed": 100
        },
        "species": "Sun Pokémon",
        "description": "According to legends, it was hatched from a flaming cocoon to save people and Pokémon that were suffering from the cold.",
        "evolution": { "prev": ["636", "Level 59"] },
        "profile": {
          "height": "1.6 m",
          "weight": "46 kg",
          "egg": ["Bug"],
          "ability": [
            ["Flame Body", "false"],
            ["Swarm", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/637.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/637.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/637.png"
        }
      },
      {
        "id": 638,
        "name": {
          "english": "Cobalion",
          "japanese": "コバルオン",
          "chinese": "勾帕路翁",
          "french": "Cobaltium"
        },
        "type": ["Steel", "Fighting"],
        "base": {
          "HP": 91,
          "Attack": 90,
          "Defense": 129,
          "Sp. Attack": 90,
          "Sp. Defense": 72,
          "Speed": 108
        },
        "species": "Iron Will Pokémon",
        "description": "It has a body and heart of steel. It worked with its allies to punish people when they hurt Pokémon.",
        "evolution": {},
        "profile": {
          "height": "2.1 m",
          "weight": "250 kg",
          "egg": ["Undiscovered"],
          "ability": [["Justified", "false"]],
          "gender": "Genderless"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/638.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/638.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/638.png"
        }
      },
      {
        "id": 764,
        "name": {
          "english": "Comfey",
          "japanese": "キュワワー",
          "chinese": "花疗环环",
          "french": "Guérilande"
        },
        "type": ["Fairy"],
        "base": {
          "HP": 51,
          "Attack": 52,
          "Defense": 90,
          "Sp. Attack": 82,
          "Sp. Defense": 110,
          "Speed": 100
        },
        "species": "Posy Picker Pokémon",
        "description": "It picks flowers and sticks them to its body with fluids it produces. The aroma that wafts from its petals has a healing effect.",
        "evolution": {},
        "profile": {
          "height": "0.1 m",
          "weight": "0.3 kg",
          "egg": ["Grass"],
          "ability": [
            ["Flower Veil", "false"],
            ["Triage", "false"],
            ["Natural Cure", "true"]
          ],
          "gender": "25:75"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/764.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/764.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/764.png"
        }
      },
      {
        "id": 765,
        "name": {
          "english": "Oranguru",
          "japanese": "ヤレユータン",
          "chinese": "智挥猩",
          "french": "Gouroutan"
        },
        "type": ["Normal", "Psychic"],
        "base": {
          "HP": 90,
          "Attack": 60,
          "Defense": 80,
          "Sp. Attack": 90,
          "Sp. Defense": 110,
          "Speed": 60
        },
        "species": "Sage Pokémon",
        "description": "Oranguru don’t get along with each other, so they’re always engaging in battles of wits to decide which one is superior.",
        "evolution": {},
        "profile": {
          "height": "1.5 m",
          "weight": "76 kg",
          "egg": ["Field"],
          "ability": [
            ["Inner Focus", "false"],
            ["Telepathy", "false"],
            ["Symbiosis", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/765.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/765.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/765.png"
        }
      },
      {
        "id": 766,
        "name": {
          "english": "Passimian",
          "japanese": "ナゲツケサル",
          "chinese": "投掷猴",
          "french": "Quartermac"
        },
        "type": ["Fighting"],
        "base": {
          "HP": 100,
          "Attack": 120,
          "Defense": 90,
          "Sp. Attack": 40,
          "Sp. Defense": 60,
          "Speed": 80
        },
        "species": "Teamwork Pokémon",
        "description": "Berries are its weapons as well as the staple of its diet. The one that can throw a berry the farthest is the boss of the troop.",
        "evolution": {},
        "profile": {
          "height": "2 m",
          "weight": "82.8 kg",
          "egg": ["Field"],
          "ability": [
            ["Receiver", "false"],
            ["Defiant", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/766.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/766.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/766.png"
        }
      },
      {
        "id": 767,
        "name": {
          "english": "Wimpod",
          "japanese": "コソクムシ",
          "chinese": "胆小虫",
          "french": "Sovkipou"
        },
        "type": ["Bug", "Water"],
        "base": {
          "HP": 25,
          "Attack": 35,
          "Defense": 40,
          "Sp. Attack": 20,
          "Sp. Defense": 30,
          "Speed": 80
        },
        "species": "Turn Tail Pokémon",
        "description": "An astonishingly cowardly Pokémon, Wimpod will whir its legs at high speeds to run away if anything comes near it.",
        "evolution": { "next": [["768", "Level 30"]] },
        "profile": {
          "height": "0.5 m",
          "weight": "12 kg",
          "egg": ["Bug", "Water 3"],
          "ability": [["Wimp Out", "false"]],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/767.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/767.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/767.png"
        }
      },
      {
        "id": 768,
        "name": {
          "english": "Golisopod",
          "japanese": "グソクムシャ",
          "chinese": "具甲武者",
          "french": "Sarmuraï"
        },
        "type": ["Bug", "Water"],
        "base": {
          "HP": 75,
          "Attack": 125,
          "Defense": 140,
          "Sp. Attack": 60,
          "Sp. Defense": 90,
          "Speed": 40
        },
        "species": "Hard Scale Pokémon",
        "description": "Its claws, which it can extend and retract at will, are its greatest weapons. Golisopod is sometimes accompanied by Wimpod.",
        "evolution": { "prev": ["767", "Level 30"] },
        "profile": {
          "height": "2 m",
          "weight": "108 kg",
          "egg": ["Bug", "Water 3"],
          "ability": [["Emergency Exit", "false"]],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/768.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/768.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/768.png"
        }
      },
      {
        "id": 769,
        "name": {
          "english": "Sandygast",
          "japanese": "スナバァ",
          "chinese": "沙丘娃",
          "french": "Bacabouh"
        },
        "type": ["Ghost", "Ground"],
        "base": {
          "HP": 55,
          "Attack": 55,
          "Defense": 80,
          "Sp. Attack": 70,
          "Sp. Defense": 45,
          "Speed": 15
        },
        "species": "Sand Heap Pokémon",
        "description": "If you build sand mounds when you’re playing, destroy them before you go home, or they may get possessed and become Sandygast.",
        "evolution": { "next": [["770", "Level 42"]] },
        "profile": {
          "height": "0.5 m",
          "weight": "70 kg",
          "egg": ["Amorphous"],
          "ability": [
            ["Water Compaction", "false"],
            ["Sand Veil", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/769.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/769.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/769.png"
        }
      },
      {
        "id": 770,
        "name": {
          "english": "Palossand",
          "japanese": "シロデスナ",
          "chinese": "噬沙堡爷",
          "french": "Trépassable"
        },
        "type": ["Ghost", "Ground"],
        "base": {
          "HP": 85,
          "Attack": 75,
          "Defense": 110,
          "Sp. Attack": 100,
          "Sp. Defense": 75,
          "Speed": 35
        },
        "species": "Sand Castle Pokémon",
        "description": "Once it has whipped up a sandstorm to halt its opponents in their tracks, this terrifying Pokémon snatches away their vitality.",
        "evolution": { "prev": ["769", "Level 42"] },
        "profile": {
          "height": "1.3 m",
          "weight": "250 kg",
          "egg": ["Amorphous"],
          "ability": [
            ["Water Compaction", "false"],
            ["Sand Veil", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/770.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/770.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/770.png"
        }
      },
      {
        "id": 771,
        "name": {
          "english": "Pyukumuku",
          "japanese": "ナマコブシ",
          "chinese": "拳海参",
          "french": "Concombaffe"
        },
        "type": ["Water"],
        "base": {
          "HP": 55,
          "Attack": 60,
          "Defense": 130,
          "Sp. Attack": 30,
          "Sp. Defense": 130,
          "Speed": 5
        },
        "species": "Sea Cucumber Pokémon",
        "description": "Its entire body is covered in its own slime. If you accidentally step on one, you’ll slip, and it will get mad and smack you!",
        "evolution": {},
        "profile": {
          "height": "0.3 m",
          "weight": "1.2 kg",
          "egg": ["Water 1"],
          "ability": [
            ["Innards Out", "false"],
            ["Unaware", "true"]
          ],
          "gender": "50:50"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/771.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/771.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/771.png"
        }
      },
      {
        "id": 772,
        "name": {
          "english": "Type: Null",
          "japanese": "タイプ：ヌル",
          "chinese": "属性：空",
          "french": "Silvallié"
        },
        "type": ["Normal"],
        "base": {
          "HP": 95,
          "Attack": 95,
          "Defense": 95,
          "Sp. Attack": 95,
          "Sp. Defense": 95,
          "Speed": 59
        },
        "species": "Synthetic Pokémon",
        "description": "There’s danger of its going on a rampage, so its true power is sealed away beneath its control mask.",
        "evolution": { "next": [["773", "high Friendship"]] },
        "profile": {
          "height": "1.9 m",
          "weight": "120.5 kg",
          "egg": ["Undiscovered"],
          "ability": [["Battle Armor", "false"]],
          "gender": "Genderless"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/772.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/772.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/772.png"
        }
      },
      {
        "id": 773,
        "name": {
          "english": "Silvally",
          "japanese": "シルヴァディ",
          "chinese": "银伴战兽",
          "french": "Météno"
        },
        "type": ["Normal"],
        "base": {
          "HP": 95,
          "Attack": 95,
          "Defense": 95,
          "Sp. Attack": 95,
          "Sp. Defense": 95,
          "Speed": 95
        },
        "species": "Synthetic Pokémon",
        "description": "Through the bond it formed with its Trainer, its will was strengthened, and it was able to destroy its control mask.",
        "evolution": { "prev": ["772", "high Friendship"] },
        "profile": {
          "height": "2.3 m",
          "weight": "100.5 kg",
          "egg": ["Undiscovered"],
          "ability": [["Rks System", "false"]],
          "gender": "Genderless"
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/773.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/773.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/773.png"
        }
      },
      {
        "id": 875,
        "name": {
          "english": "Eiscue",
          "japanese": "コオリッポ",
          "chinese": "冰砌鹅",
          "french": "Bekaglaçon"
        },
        "type": ["Ice"],
        "species": "Penguin Pokémon",
        "description": "This Pokémon keeps its heat-sensitive head cool with ice. It fishes for its food, dangling its single hair into the sea to lure in prey.",
        "evolution": {},
        "profile": {
          "height": "1 m",
          "weight": "89 kg",
          "gender": "50.0:50.0",
          "ability": [["Ice-face", "false"]]
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/875.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/875.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/875.png"
        }
      },
      {
        "id": 876,
        "name": {
          "english": "Indeedee",
          "japanese": "イエッサン",
          "chinese": "爱管侍",
          "french": "Wimessir"
        },
        "type": ["Psychic", "Normal"],
        "species": "Emotion Pokémon",
        "description": "Through its horns, it can pick up on the emotions of creatures around it. Positive emotions are the source of its strength.",
        "evolution": {},
        "profile": {
          "height": "1 m",
          "weight": "28 kg",
          "gender": "50.0:50.0",
          "ability": [
            ["Inner-focus", "false"],
            ["Synchronize", "false"],
            ["Psychic-surge", "true"]
          ]
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/876.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/876.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/876.png"
        }
      },
      {
        "id": 877,
        "name": {
          "english": "Morpeko",
          "japanese": "モルペコ",
          "chinese": "莫鲁贝可",
          "french": "Morpeko"
        },
        "type": ["Electric", "Dark"],
        "species": "Two-Sided Pokémon",
        "description": "It carries electrically roasted seeds with it as if they’re precious treasures. No matter how much it eats, it always gets hungry again in short order.",
        "evolution": {},
        "profile": {
          "height": "0 m",
          "weight": "3 kg",
          "gender": "50.0:50.0",
          "ability": [["Hunger-switch", "false"]]
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/877.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/877.png"
        }
      },
      {
        "id": 878,
        "name": {
          "english": "Cufant",
          "japanese": "ゾウドウ",
          "chinese": "铜象",
          "french": "Charibari"
        },
        "type": ["Steel"],
        "species": "Copperderm Pokémon",
        "description": "If a job requires serious strength, this Pokémon will excel at it. Its copper body tarnishes in the rain, turning a vibrant green color.",
        "evolution": { "next": [["879", "Level 34"]] },
        "profile": {
          "height": "1 m",
          "weight": "100 kg",
          "gender": "50.0:50.0",
          "ability": [
            ["Sheer-force", "false"],
            ["Heavy-metal", "true"]
          ]
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/878.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/878.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/878.png"
        }
      },
      {
        "id": 879,
        "name": {
          "english": "Copperajah",
          "japanese": "ダイオウドウ",
          "chinese": "大王铜象",
          "french": "Pachyradjah"
        },
        "type": ["Steel"],
        "species": "Copperderm Pokémon",
        "description": "These Pokémon live in herds. Their trunks have incredible grip strength, strong enough to crush giant rocks into powder.",
        "evolution": { "prev": ["878", "Level 34"] },
        "profile": {
          "height": "3 m",
          "weight": "650 kg",
          "gender": "50.0:50.0",
          "ability": [
            ["Sheer-force", "false"],
            ["Heavy-metal", "true"]
          ]
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/879.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/879.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/879.png"
        }
      },
      {
        "id": 880,
        "name": {
          "english": "Dracozolt",
          "japanese": "パッチラゴン",
          "chinese": "雷鸟龙",
          "french": "Galvagon"
        },
        "type": ["Electric", "Dragon"],
        "species": "Fossil Pokémon",
        "description": "The powerful muscles in its tail generate its electricity. Compared to its lower body, its upper half is entirely too small.",
        "evolution": {},
        "profile": {
          "height": "2 m",
          "weight": "190 kg",
          "gender": "Genderless",
          "ability": [
            ["Volt-absorb", "false"],
            ["Hustle", "false"],
            ["Sand-rush", "true"]
          ]
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/880.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/880.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/880.png"
        }
      },
      {
        "id": 881,
        "name": {
          "english": "Arctozolt",
          "japanese": "パッチルドン",
          "chinese": "雷鸟海兽",
          "french": "Galvagla"
        },
        "type": ["Electric", "Ice"],
        "species": "Fossil Pokémon",
        "description": "This Pokémon lived on prehistoric seashores and was able to preserve food with the ice on its body. It went extinct because it moved so slowly.",
        "evolution": {},
        "profile": {
          "height": "2 m",
          "weight": "150 kg",
          "gender": "Genderless",
          "ability": [
            ["Volt-absorb", "false"],
            ["Static", "false"],
            ["Slush-rush", "true"]
          ]
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/881.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/881.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/881.png"
        }
      },
      {
        "id": 882,
        "name": {
          "english": "Dracovish",
          "japanese": "ウオノラゴン",
          "chinese": "鳃鱼龙",
          "french": "Hydragon"
        },
        "type": ["Water", "Dragon"],
        "species": "Fossil Pokémon",
        "description": "Its mighty legs are capable of running at speeds exceeding 40 mph, but this Pokémon can’t breathe unless it’s underwater.",
        "evolution": {},
        "profile": {
          "height": "2 m",
          "weight": "215 kg",
          "gender": "Genderless",
          "ability": [
            ["Water-absorb", "false"],
            ["Strong-jaw", "false"],
            ["Sand-rush", "true"]
          ]
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/882.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/882.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/882.png"
        }
      },
      {
        "id": 883,
        "name": {
          "english": "Arctovish",
          "japanese": "ウオチルドン",
          "chinese": "鳃鱼海兽",
          "french": "Hydragla"
        },
        "type": ["Water", "Ice"],
        "species": "Fossil Pokémon",
        "description": "The skin on its face is impervious to attack, but breathing difficulties made this Pokémon go extinct anyway.",
        "evolution": {},
        "profile": {
          "height": "2 m",
          "weight": "175 kg",
          "gender": "Genderless",
          "ability": [
            ["Water-absorb", "false"],
            ["Ice-body", "false"],
            ["Slush-rush", "true"]
          ]
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/883.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/883.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/883.png"
        }
      },
      {
        "id": 884,
        "name": {
          "english": "Duraludon",
          "japanese": "ジュラルドン",
          "chinese": "铝钢龙",
          "french": "Duralugon"
        },
        "type": ["Steel", "Dragon"],
        "species": "Alloy Pokémon",
        "description": "The special metal that composes its body is very light, so this Pokémon has considerable agility. It lives in caves because it dislikes the rain.",
        "evolution": {},
        "profile": {
          "height": "2 m",
          "weight": "40 kg",
          "gender": "50.0:50.0",
          "ability": [
            ["Light-metal", "false"],
            ["Heavy-metal", "false"],
            ["Stalwart", "true"]
          ]
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/884.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/884.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/884.png"
        }
      },
      {
        "id": 885,
        "name": {
          "english": "Dreepy",
          "japanese": "ドラメシヤ",
          "chinese": "多龙梅西亚",
          "french": "Fantyrm"
        },
        "type": ["Dragon", "Ghost"],
        "species": "Lingering Pokémon",
        "description": "If this weak Pokémon is by itself, a mere child could defeat it. But if Dreepy has friends to help it train, it can evolve and become much stronger.",
        "evolution": { "next": [["886", "Level 50"]] },
        "profile": {
          "height": "1 m",
          "weight": "2 kg",
          "gender": "50.0:50.0",
          "ability": [
            ["Clear-body", "false"],
            ["Infiltrator", "false"],
            ["Cursed-body", "true"]
          ]
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/885.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/885.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/885.png"
        }
      },
      {
        "id": 886,
        "name": {
          "english": "Drakloak",
          "japanese": "ドロンチ",
          "chinese": "多龙奇",
          "french": "Dispareptil"
        },
        "type": ["Dragon", "Ghost"],
        "species": "Caretaker Pokémon",
        "description": "Without a Dreepy to place on its head and care for, it gets so uneasy it’ll try to substitute any Pokémon it finds for the missing Dreepy.",
        "evolution": { "prev": ["885", "Level 50"], "next": [["887", "Level 60"]] },
        "profile": {
          "height": "1 m",
          "weight": "11 kg",
          "gender": "50.0:50.0",
          "ability": [
            ["Clear-body", "false"],
            ["Infiltrator", "false"],
            ["Cursed-body", "true"]
          ]
        },
        "image": {
          "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/886.png",
          "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/886.png",
          "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/886.png"
        }
      },
  ];

export default mockPokemons;
