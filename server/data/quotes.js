const quotes = [
    {
        quote: "Be silent! The shattering is soon to come!",
        author: "Gul'dan",
        length: 42
    },
    {
        quote: "Bear witness to the undeniable power of our dark master!",
        author: "Gul'dan",
        length: 56
    },
    {
        quote: "It... is... done...",
        author: "Gul'dan",
        length: 19
    },
    {
        quote: "Watch! See the ground shatter before us! Watch as the energy flows! It will feed our armies...",
        author: "Gul'dan",
        length: 94
    },
    {
        quote: "We will never be without power! I have secured our future! Bask in my glory!",
        author: "Gul'dan",
        length: 76
    },
    {
        quote: "With his gift, I shall raze this land and reform it!",
        author: "Gul'dan",
        length: 52
    },
    {
        quote: "All you have worked for, all you have sacrificed, just to see your champions fall to ash one by one.",
        author: "Gul'dan",
        length: 100
    },
    {
        quote: "And now you will fall.",
        author: "Gul'dan",
        length: 22
    },
    {
        quote: "Do you see now, human? The fate of this world is sealed. The Legion cannot be stopped.",
        author: "Gul'dan",
        length: 86
    },
    {
        quote: "Ha, you fool! You stand before the temple of a GOD. Your pitiful Light cannot reach you here. How fortunate that your friends have arrived just in time to watch you die.",
        author: "Gul'dan",
        length: 169
    },
    {
        quote: "Ah yes, the heroes have arrived. So persistent. So confident. But your arrogance will be your undoing!",
        author: "Gul'dan",
        length: 102
    },
    {
        quote: "Why won't you die? Why do you keep resisting?",
        author: "Gul'dan",
        length: 45
    },
    {
        quote: "You failed, heroes! The ritual is upon us! But first, I'll indulge myself a bit... and finish you!",
        author: "Gul'dan",
        length: 98
    },
    {
        quote: "You will not stop the ritual!",
        author: "Gul'dan",
        length: 29
    },
    {
        quote: "You'll never escape my grasp!",
        author: "Gul'dan",
        length: 29
    },
    {
        quote: "Six seats at the high table. Six mouths that hunger. One will consume all others.",
        author: "N'Zoth",
        length: 81
    },
    {
        quote: "She is not the last, but the first. Drown her and you will see.",
        author: "N'Zoth",
        length: 63
    },
    {
        quote: "The veil wanes. His crown will open the way.",
        author: "N'Zoth",
        length: 44
    },
    {
        quote: "I alone can save you from what is to come.",
        author: "N'Zoth",
        length: 42
    },
    {
        quote: "It grows hungrier... bolder. Alas, your eyes are closed.",
        author: "N'Zoth",
        length: 56
    },
    {
        quote: "When the arrow finds its mark, the last fetter will fall away.",
        author: "N'Zoth",
        length: 62
    },
    {
        quote: "The Light has struck a bargain with the enemy of all.",
        author: "N'Zoth",
        length: 53
    },
    {
        quote: "The fall of night reveals her true face. She will bring only ruin.",
        author: "N'Zoth",
        length: 66
    },
    {
        quote: "He gave himself to the deep places. He gave himself to me.",
        author: "N'Zoth",
        length: 58
    },
    {
        quote: "With every choice, you become more my servant.",
        author: "N'Zoth",
        length: 46
    },
    {
        quote: "At last... embrace the truth of shadow.",
        author: "N'Zoth",
        length: 39
    },
    {
        quote: "Yes... you draw closer... ever closer.",
        author: "N'Zoth",
        length: 38
    },
    {
        quote: "Ahh... you think you know power.",
        author: "N'Zoth",
        length: 32
    },
    {
        quote: "The storm holds strength... but there is a price to be paid.",
        author: "N'Zoth",
        length: 60
    },
    {
        quote: "Harness your fury... make your hatred a weapon.",
        author: "N'Zoth",
        length: 47
    },
    {
        quote: "Children... the depths are my domain.",
        author: "N'Zoth",
        length: 37
    },
    {
        quote: "Let the tides draw you into my dream...",
        author: "N'Zoth",
        length: 39
    },
    {
        quote: "Deeper, ever deeper...I",
        author: "N'Zoth",
        length: 23
    },
    {
        quote: "Patience...patience.They may yet prove worthy to receive my gift.I will taste their dreams...their flesh.",
        author: "N'Zoth",
        length: 105
    },
    {
        quote: "The greatest deception that the makers ever perpetrated was to fool us into believing that we have a choice in any facet of our existence.",
        author: "The Jailer - Zovaal",
        length: 138
    },
    {
        quote: "From its conception to execution and throughout all that has been, and is, the design is gravely, cruelly, and worst of all indifferently flawed.",
        author: "The Jailer - Zovaal",
        length: 145
    },
    {
        quote: "In many ways, your story echoes my own. We were both betrayed... and broken. I, too, was torn asunder, and I understand well what it is like to feel achingly, eternally incomplete.",
        author: "The Jailer - Zovaal",
        length: 180
    },
    {
        quote: "Pitiful mortal. I find your spirit... unworthy.",
        author: "The Jailer - Zovaal",
        length: 47
    },
    {
        quote: "A relic of the First Ones... responding to a mortal?! Impossible!",
        author: "The Jailer - Zovaal",
        length: 65
    },
    {
        quote: "Death comes for the soul of your world! All that you see--all that you know--will be undone!",
        author: "The Jailer - Zovaal",
        length: 92
    },
    {
        quote: "You trespass in my domain, mortal. No matter where you hide... I will find you.",
        author: "The Jailer - Zovaal",
        length: 79
    },
    {
        quote: "Let this be your first lesson. I have no love for you or your people. On the contrary, I intend to scour humanity from this planet, and make no mistake: I have the power to do it.",
        author: "The Lich King",
        length: 179
    },
    {
        quote: "It is I, the Lich King. Danger draws near the Frozen Throne! You must return to Northrend immediately! Obey!",
        author: "The Lich King",
        length: 109
    },
    {
        quote: "The runeblade, Frostmourne, was once locked inside the Throne as well. I thrust it from the ice so that it would find its way to you... and then lead you to me.",
        author: "The Lich King",
        length: 160
    },
    {
        quote: "Cower before my terrible creations!",
        author: "The Lich King",
        length: 35
    },
    {
        quote: "In the end, you will all serve me.",
        author: "The Lich King",
        length: 34
    },
    {
        quote: "The breaking of this one has been taxing. The atrocities that I have committed upon his soul. He has resisted for so long, but he will bow down before his king soon.",
        author: "The Lich King",
        length: 165
    },
    {
        quote: "You now stand upon the hallowed ground of the Scourge. The Light won't protect you here, paladin. Nothing will protect you...",
        author: "The Lich King",
        length: 125
    },
    {
        quote: "I will break you as I broke him!",
        author: "The Lich King",
        length: 2
    },
    {
        quote: "Your heart... its incessant drumming disgusts me. I will silence it, as I did my own.",
        author: "The Lich King",
        length: 85
    },
    {
        quote: "You speak of justice? Of cowardice? I will show you the justice of the grave... and the true meaning of fear.",
        author: "The Lich King",
        length: 109
    },
    {
        quote: "Do you think it would hesitate to kill you? A monster like you?",
        author: "The Lich King",
        length: 63
    },
    {
        quote: "The Light has abandoned you!",
        author: "The Lich King",
        length: 28
    },
    {
        quote: "Soon you will belong to the Scourge.",
        author: "The Lich King",
        length: 36
    },
    {
        quote: "Lay down your arms and surrender your souls!",
        author: "The Lich King",
        length: 44
    },
    {
        quote: "They are coming for you.",
        author: "Yogg-Saron",
        length: 24
    },
    {
        quote: "Hope is an illusion.",
        author: "Yogg-Saron",
        length: 20
    },
    {
        quote: "You will be alone in the end.",
        author: "Yogg-Saron",
        length: 29
    },
    {
        quote: "You are a pawn of forces unseen.",
        author: "Yogg-Saron",
        length: 32
    },
    {
        quote: "Tell yourself again that these are not truly your friends.",
        author: "Yogg-Saron",
        length: 58
    },
    {
        quote: "Give in to your fear.",
        author: "Yogg-Saron",
        length: 21
    },
    {
        quote: "They have turned against you. Now, take your revenge.",
        author: "Yogg-Saron",
        length: 53
    },
    {
        quote: "There is no escape. Not in this life, not in the next.",
        author: "Yogg-Saron",
        length: 54
    },
    {
        quote: "All that you know will fade.",
        author: "Yogg-Saron",
        length: 28
    },
    {
        quote: "Your will is no longer your own.",
        author: "Yogg-Saron",
        length: 32
    },
    {
        quote: "No matter how hard this world fights, it will fall.",
        author: "Sargeras",
        length: 51
    },
    {
        quote: "Perhaps you've lost sight of our destiny. Perhaps I overestimated your resolve.",
        author: "Sargeras",
        length: 79
    },
    {
        quote: "Become the instrument of my wrath once again, Aggramar. End this incursion of the Light.",
        author: "Sargeras",
        length: 88
    },
    {
        quote: "Swear loyalty to me, pledge the hearts of your people to my cause.",
        author: "Sargeras",
        length: 66
    },
    {
        quote: "I will transform you, granting knowledge beyond imagining and might beyond measure.",
        author: "Sargeras",
        length: 84
    },
    {
        quote: "When my new Pantheon rises, no power in the universe will stand against the Legion!",
        author: "Sargeras",
        length: 83
    },
    {
        quote: "That which you have stolen will be your undoing.",
        author: "Sargeras",
        length: 48
    },
    {
        quote: "Rise, Argus. Rise, my broken world.",
        author: "Sargeras",
        length: 35
    },
    {
        quote: "Agghhhh! Do... not... rejoice! Your victory is a hollow one, for I shall return with powers beyond your imagining!",
        author: "Kel'Thuzad",
        length: 114
    },
    {
        quote: "We've been called heretics for centuries. The church has never been fond of our methods. Such sentiments notwithstanding, we are still here.",
        author: "Kel'Thuzad",
        length: 140
    },
    {
        quote: "No!!! A curse upon you, interlopers! The armies of the Lich King will hunt you down. You will not escape your fate...",
        author: "Kel'Thuzad",
        length: 117
    },
    {
        quote: "Minions, servants, soldiers of the cold dark! Obey the call of Kel'Thuzad!",
        author: "Kel'Thuzad",
        length: 74
    },
    {
        quote: "Enough! I grow tired of these distractions!",
        author: "Kel'Thuzad",
        length: 43
    },
    {
        quote: "Fools, you have spread your powers too thin. Be free, my minions!",
        author: "Kel'Thuzad",
        length: 65
    },
    {
        quote: "Your soul, is bound to me now!",
        author: "Kel'Thuzad",
        length: 30
    },
    {
        quote: "Your forces are nearly marshalled to strike back against your enemies, my liege.",
        author: "Kel'Thuzad",
        length: 80
    },
    {
        quote: "Who dares violate the sanctity of my domain? Be warned, all who trespass here are doomed.",
        author: "Kel'Thuzad",
        length: 89
    },
    {
        quote: "You have no idea what horrors lie ahead. You have seen nothing! The frozen heart of Naxxramas awaits you!",
        author: "Kel'Thuzad",
        length: 105
    },

]

module.exports = { quotes };