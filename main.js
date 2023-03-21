function showName() {

let names = {
    // "- Walt Disney": '"The Way Get Started Is To Quit Talking And Begin Doing."',
    // "- Winston Churchill": '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty."',
    // "- Will Rogers": '"Don’t Let Yesterday Take Up Too Much Of Today."',
    // "- Unknown": '"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character."',
    // "- Vince Lombardi": '"It’s Not Whether You Get Knocked Down, It’s Whether You Get Up."',
    // "- Mahatma Gandhi": '"Live as if you were to die tomorrow. Learn as if you were to live forever"',
    // "- Martin Luther King Jr": '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
    // "- Albert Einstein": '"Strive not to be a success, but rather to be of value."',
    // "- Florence Nightingale": '"I attribute my success to this: I never gave or took any excuse."',
    // "- Michael Jordan": '"I missed more than 9000 shots in my career. I lost almost 300 games. 26 times I been trusted to take the game winning shot and missed. I failed over and over and over again in my life. And that is why I succeed."',
    // "- Babe Ruth": '"Every strike brings me closer to the next home run."',
    // "- John Lennon": '"Life is what happens to you while you’re busy making other plans."',
    // "- Earl Nightingale": '"We become what we think about."',
    // "- Mark Twain": '"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover."',
    // "- Charles Swindoll": '"Life is 10% what happens to me and 90% of how I react to it."',
    // "- Buddah": '"The mind is everything. What you think you become."',
    // "- Chinese Proverb": '"The best time to plant a tree was 20 years ago. The second best time is now."',
    // "- Woody Allen": '"Eighty percent of success is showing up."',
    // "- Steve Jobs": '"Your time is limited, so don’t waste it living someone else’s life."',
    // "- Vince Lombardi": '"Winning isn’t everything, but wanting to win is."',
    // "- Stephen Covey": '"I am not a product of my circumstances. I am a product of my decisions. "',
    // "- Christopher Columbus": '"You can never cross the ocean until you have the courage to lose sight of the shore."',
    // "- Maya Angelou": '"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. "',
    // "- Jim Rohn": '"Either you run the day, or the day runs you."',
    // "- Henry Ford": '"Whether you think you can or you think you can’t, you’re right."',
    // "- Frank Sinatra": '"The best revenge is massive success."',
    // "- Zig Ziglar": '"People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily."',
    // "- Aristotle": '"There is only one way to avoid criticism: do nothing, say nothing, and be nothing"',
    // "- Jesus": '"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."',
    // "- Ralph Waldo Emerson": '"The only person you are destined to become is the person you decide to be."',
    // "- Henry David Thoreau": '"Go confidently in the direction of your dreams.  Live the life you have imagined."',
    // "- Erma Bombeck": '"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me."',
    // "- Booker T. Washington": '"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him."'
  
  "الفاتحة" : "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ (2) الرَّحْمَنِ الرَّحِيمِ (3) مَالِكِ يَوْمِ الدِّينِ (4) إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ (5) اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ (6) صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ (7)",
  "الناس" : "قُلْ أَعُوذُ بِرَبِّ النَّاسِ (1) مَلِكِ النَّاسِ (2) إِلَهِ النَّاسِ (3) مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ (4) الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ (5) مِنَ الْجِنَّةِ وَالنَّاسِ (6)",
  "الفلق" : "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ (1) مِنْ شَرِّ مَا خَلَقَ (2) وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ (3) وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ (4) وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ (5)"
  
  };
  let numbers = Object.keys(names)
  let onenum = numbers[Math.floor( Math.random() * numbers.length )]
  let onenam = names[onenum]
 
  // if (onenum === "الفاتحة"){

  //   document.getElementById("audiofile").src="https://l.top4top.io/m_2636hvpcj1.mp3"
  // }

  // else if (onenum=== "الناس"){
  //   document.getElementById("audiofile").src="https://f.top4top.io/m_26362d6lk1.mp3"
  // }

  // else if (onenum ==="الفلق"){
  //   document.getElementById("audiofile").src="https://b.top4top.io/m_26362ln1x1.mp3"
  // }

  // else{
  //   document.getElementById("name").innerHTML = "ابحث عن سورة اولا" ;

  // }
  switch(onenum){

    case "الفاتحة":
      document.getElementById("audiofile").src="https://l.top4top.io/m_2636hvpcj1.mp3"
      break;
      
      case "الناس":
        document.getElementById("audiofile").src="https://drive.google.com/uc?export=preview&id=1DXKM-MVbGAZGuW8F6R95qOBhESjvdzAy"
        break;
        
        case "الفلق":
        document.getElementById("audiofile").src="https://b.top4top.io/m_26362ln1x1.mp3"
        break;
  
  }
   document.getElementById("name").innerHTML = onenam ;
  document.getElementById("head").innerHTML = onenum ;
  document.getElementById("firstfirst").innerHTML = "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ" ;
}



function playme(){
  
  let iconplayer = document.getElementById("audiofile");
  

  if (iconplayer.paused){
    iconplayer.play();
  }

  else {

    iconplayer.pause();
  }

}