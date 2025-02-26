const latestChapter = 700;

const mangapillNameAndIndex = ["naruto", 369];

const lastChapterInVolume = [
  7, 17, 27, 36, 45, 54, 63, 72, 81, 90, 
  99, 108, 117, 126, 135, 144, 153, 162, 171, 180, 
  190, 199, 208, 217, 226, 235, 244, 253, 262, 271, 
  280, 289, 299, 309, 319, 329, 339, 349, 359, 369,
  379, 389, 402, 412, 422, 432, 442, 453, 463, 473,
  483, 494, 504, 514, 524, 534, 544, 555, 565, 575,
  587, 597, 607, 617, 627, 637, 647, 657, 668, 679,
  690, 700
  ];// ex volume 1 chapter from 1-7

const lastChapterInArc = [
  ["Land of Waves", 33],
  ["Chunin Exam: Introduction", 38],
  ["Chunin Exam: Forest of Death", 52],
  ["Chunin Exam: Preliminaries", 67],
  ["Konoha Crush", 138],
  ["Search for Tsunade", 171],
  ["Sasuke Recovery Mission", 238],
  ["..", 244],
  ["Kazekage Rescue Mission", 281],
  ["Tenchi Bridge Mission", 310],
  ["Akatsuki Suppression Mission", 342],
  ["Itachi Pursuit", 367],
  ["Tale of Jiraiya", 383],
  ["Brothers Battle", 412],
  ["Pain's Assault", 453],
  ["Five Kage Summit: Preparations", 460], // Naruto and co. prepare for the summit
  ["Five Kage Summit: Meeting", 474], // The actual summit and discussions
  ["Five Kage Summit: Sasuke's Attack", 483], // Sasuke's assault on the summit
  ["Shinobi War Countdown", 515],
  ["Shinobi War Confrontation", 559],
  ["Shinobi War Climax", 639],
  ["Ten Tails", 677],
  ["Kaguya", 699],
  ["Epilogue", 700]
];
  
let battleLogInChapters = [
  ["naruto vs mizuki", 1],
  ["naruto vs ebisu", 2],
  ["team 7 trio vs kakashi", "4-8"],
  ["team 7 vs zabuza", "11-16"],
  ["haku vs waraji, zouri", 18],
  ["team 7 vs zabuza, haku", "22-32"],
  ["zabuza vs gato and his army", 32],
  ["naruto vs waraji, zouri", 23],
  ["naruto vs lee", 37],
  ["sasuke vs lee", 37],
  ["kabuto vs sound ninja trio", 40],
  ["team 7 trio vs naruto impostor", 46],
  ["team 7 trio vs orochimatu", "46-49"],
  ["orochimaru vs anko", 50],
  ["sasuke vs zoroi", "67-68"],
  ["shino vs zaku", "69-70"],
  ["kakashi vs orochimaru", 70],
  ["kankuro vs tsurugi", 70],
  ["sakura vs ino", "71-73"],
  ["temari vs tenten", 73],
  ["naruto vs kiba", "75-77"],
  ["hinata vs neji", "78-80"],
  ["gaara vs lee", "81-86"],
  ["kabuto vs anbu", 88],
  ["kabuto vs kakashi", "88-89"],
  ["baki vs hayate", 92]
  ["naruto vs neji", "99-104"],
  ["shikamaru vs temari", "106-108"],
  ["gaara vs 2 kusakagure ninjas", 110],
  ["sasuke vs gaara", "111-114"],
  ["shino vs kankuro", "124-126"],
  ["naruto vs sasuke 1st battle", "175-176"],
  ["choji vs jirobo", "187-191"],
  ["neji vs kidoumaru", "192-198"],
  ["naruto vs kimimaro", 209],
  ["naruto vs sasuke", "218-220, 224-233"],
  ["sasuke vs deidara", "357-363"],
  ["naruto vs sasuke", "485-486"]
];
  