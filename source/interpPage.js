/**
 * Card Information in JSON format
 * @type {JSON}
 */ 
const cardData = {
  "The Fool": {
      "Description": "The first card of the Major Arcana, The Fool is generally a positive card indicating new beginnings.",
      "Source": "assets\\UniformResolution\\TheFool.png",
      "Interpretation": "Your new adventure will bring you along a path which may require you to make a leap of faith but you will grow as a result of this new experience.",
      "Value": 1
    },
  
  "The Fool (Reversed)": {
    "Description": "The Fool reversed signifies a new beginning. However, when reversed this Major Arcana trump card indicates that the beginning is something you may be reluctant to jump into.",
    "Source": "assets\\UniformResolution\\TheFoolReversed.png",
    "Interpretation": "It is an indication that you are living in the moment but also can be a sign that in your excitement you are behaving somewhat recklessly towards others.",
    "Value": -1
  },
  
  "The Magician": {
      "Description": "When The Magician appears in a Tarot card reading it is a sign that you have all the skills and abilities you need to be successful.",
      "Source": "assets\\UniformResolution\\TheMagician.png",
      "Interpretation": "This Major Arcana trump card shows you that you must use your intellect, concentration and willpower to make things happen.",
      "Value": 1
    },

  "The Magician (Reversed)": {
      "Description": "It is a sign that you will need to be careful not to miss the opportunities coming your way.",
      "Source": "assets\\UniformResolution\\TheMagicianReversed.png",
      "Interpretation": "Don't allow self-doubt to stop you from seizing the moment. Watch out for deceitful and greedy people and be careful who you trust with this Major Arcana card in reverse!",
      "Value": 0
    },

  "The High Priestess": {
      "Description": "The High Priestess possesses intuition, mystery and sensuality combined with common sense.",
      "Source": "assets\\UniformResolution\\TheHighPriestess.png",
      "Interpretation": "When the High Priestess appears in a tarot reading she indicates that now is the time to trust your instincts and go with your gut feeling.",
      "Value": 0
    },

  "The High Priestess (Reversed)": {
      "Description": "Your intuition is trying to guide you and your instincts are correct, however, in the reversed position this Major Arcana card shows that you are not hearing it.",
      "Source": "assets\\UniformResolution\\TheHighPriestessReversed.png",
      "Interpretation": "You need to take the time to connect with yourself and listen to your inner voice. Trust yourself. You have all the wisdom and knowledge you need.",
      "Value": 1
    },

  "The Empress": {
      "Description": "The Empress Tarot is the Major Arcana card of femininity and motherhood.",
      "Source": "assets\\UniformResolution\\TheEmpress.png",
      "Interpretation": "People will be drawn to you, especially those in need of the empathy, compassion and nurturing you are able to provide.",
      "Value": 0
    },

  "The Empress (Reversed)": {
      "Description": "The Empress reversed indicates that you have been suppressing or neglecting your feminine side and need to embrace it in order to bring your masculine and feminine energies into balance.",
      "Source": "assets\\UniformResolution\\TheEmpressReversed.png",
      "Interpretation": "You may be putting others needs before your own to your detriment. Or you may feel so emotionally overwhelmed that you are neglecting those that are important to you. You may also feel unattractive and undesirable and your confidence has taken a knock",
      "Value": -1
    },

  "The Emperor": {
      "Description": "The Emperor is a solid, stable man. He is a powerful, grounded protector but he also can be rigid and stubborn.",
      "Source": "assets\\UniformResolution\\TheEmperor.png",
      "Interpretation": "The Emperor signifies that concentration, structure, stability and focus is required if you want to make your ideas and dreams a reality.",
      "Value": 0
    },

  "The Emperor (Reversed)": {
      "Description": "The Emperor in reverse as a person signifies a person in authority in your life who may be abusing his power or being too authoritarian leaving you feeling powerless or rebellious.",
      "Source": "assets\\UniformResolution\\TheEmperorReversed.png",
      "Interpretation": "The best way to handle this person is to remain calm and logical. Take the advice that works for you and throw the rest away. Don't be afraid to stand up to authority but do so in a practical and logical manner which will get you the results you want.",
      "Value": 0
    },

  "The Hierophant": {
      "Description": "The Hierophant can represent a counsellor or mentor who will provide you with wisdom and guidance or a spiritual or religious advisor.",
      "Source": "assets\\UniformResolution\\TheHierophant.png",
      "Interpretation": "It's not a time to rock the boat.",
      "Value": 0
    },

  "The Hierophant (Reversed)": {
      "Description": "When The Hierophant Tarot appears reversed it is time to break with convention.",
      "Source": "assets\\UniformResolution\\TheHierophantReversed.png",
      "Interpretation": "You will want to change traditional structure, social norms and rigid rules. Learning to live by your own rules, while still listening to your own conscience, will bring you freedom from oppression.",
      "Value": 1
    },

  "The Lovers": {
      "Description": "The Lovers signifies perfect union, harmony, love and attraction.",
      "Source": "assets\\UniformResolution\\TheLovers.png",
      "Interpretation": "Don't automatically go for the easy road, make sure you have all the information and make the right decision. Even if it seems like a difficult path, it will lead you on to greater things.",
      "Value": 1
    },

  "The Lovers (Reversed)": {
      "Description": "The Lovers Tarot reversed indicates that you may be struggling to take ownership of the decisions you've made",
      "Source": "assets\\UniformResolution\\TheLoversReversed.png",
      "Interpretation": "You need to remember that you are the master of your own destiny. Don't try to blame the universe if your situation is a result of choices that you've made. Instead be accountable, learn from past mistakes and let them go.",
      "Value": -1
    },

  "The Chariot": {
      "Description": "The Chariot Tarot represents overcoming obstacles through determination, focus and willpower.",
      "Source": "assets\\UniformResolution\\TheChariot.png",
      "Interpretation": "Put any worries aside and maintain your focus.",
      "Value": 1
    },

  "The Chariot (Reversed)": {
      "Description": "The Chariot Tarot card reversed can indicate that you feel powerless and are lacking direction.",
      "Source": "assets\\UniformResolution\\TheChariotReversed.png",
      "Interpretation": "You need to regain your drive and determination. Don't be a passenger in your own life, focus and take your control back!",
      "Value": -1
    },

  "Strength": {
      "Description": "The Strength Tarot card represents mastering raw emotions in order to bring calm to yourself or a situation.",
      "Source": "assets\\UniformResolution\\Strength.png",
      "Interpretation": "You have all the skills you need to be successful, the focus now is to conquer your inner worries and believe in yourself.",
      "Value": 1
    },

  "Strength (Reversed)": {
      "Description": "This indicates that you are not tapping into the inner strength you have.",
      "Source": "assets\\UniformResolution\\StrengthReversed.png",
      "Interpretation": "You are letting fear, anxiety or low self-esteem paralyse you. Now more than ever you need to summon your inner resolve and self-belief to pull you out of your current situation.",
      "Value": 0
    },

  "The Hermit": {
      "Description": "The Hermit Tarot card in an upright position generally indicates that you are entering a period of soul searching, self-reflection and spiritual enlightenment.",
      "Source": "assets\\UniformResolution\\TheHermit.png",
      "Interpretation": "This is a time to focus on yourself and meeting your own needs.",
      "Value": 1
    },

  "The Hermit (Reversed)": {
      "Description": "The Hermit Tarot card reversed suggests that you have withdrawn too much from the world or are becoming too reclusive.",
      "Source": "assets\\UniformResolution\\TheHermitReversed.png",
      "Interpretation": "It is time to come back to the world and the people around you. Taking time for soul-searching and self-reflection can be a great thing in moderation but too much can be damaging. At some point, you do need to draw a line under things and move forward.",
      "Value": -1
    },

  "Wheel of Fortune": {
      "Description": "The Wheel of Fortune is generally an indicator of luck or destiny and it is a Major Arcana signifier of change.",
      "Source": "assets\\UniformResolution\\WheelOfFortune.png",
      "Interpretation": "Make sure you make the most of this time by focusing your intention on what you truly want! Know that the universe has a plan for you even if that plan is not clear to you at this point.",
      "Value": 1
    },

  "Wheel of Fortune (Reversed)": {
      "Description": "The reversed Wheel of Fortune is a strong indicator that there is a challenging time ahead and that the change coming may be difficult to adjust to.",
      "Source": "assets\\UniformResolution\\WheelOfFortuneReversed.png",
      "Interpretation": "It can represent that things had been going well and have suddenly and quite unexpectedly fallen apart. While there may be some outside factors, the current situation is most likely a result of decisions you made. You will need to take control of your situation and ownership of your choices in order to learn from this situation.",
      "Value": -1
    },

  "Justice": {
      "Description": "Justice is showing you that all actions have consequences.",
      "Source": "assets\\UniformResolution\\Justice.png",
      "Interpretation": "You must try to keep yourself on an even-keel as events unfold.",
      "Value": 0
    },

  "Justice (Reversed)": {
      "Description": "Justice reversed can indicate injustice or avoidance of karmic justice.",
      "Source": "assets\\UniformResolution\\JusticeReversed.png",
      "Interpretation": "This may take the form of being treated unjustly in your life or situation where you are being unfairly affected by the choices or actions of others. Whatever the situation, you must try to maintain your balance. Be accountable, don't try to blame others.",
      "Value": 0
    },

  "The Hanged Man": {
      "Description": "The Hanged Man Tarot card indicates that you are in a situation that you are not happy with.",
      "Source": "assets\\UniformResolution\\TheHangedMan.png",
      "Interpretation": "Give yourself time to just relax, stop trying to control things and just let them be, the correct course of action will become clear to you in time.",
      "Value": -1
    },

  "The Hanged Man (Reversed)": {
      "Description": "The Hanged Man reversed can indicate that you are being impulsive and making rash decisions as a way to distract yourself from some sort of inner discontentment.",
      "Source": "assets\\UniformResolution\\TheHangedManReversed.png",
      "Interpretation": "If you genuinely don't know what to do in terms of your direction in life, just stop, breathe and wait for things to become clearer. However, if you know your behaviour patterns are not working for you, change them. Your attitude towards your life will determine life's attitude towards you!",
      "Value": 0
    },

  "Death": {
      "Description": "The Death Tarot Card usually signifies spiritual transformation and a time of change and new beginnings, not actual death!",
      "Source": "assets\\UniformResolution\\Death.png",
      "Interpretation": "Draw a line under the past in order to move forward in a positive direction.",
      "Value": 1
    },

  "Death (Reversed)": {
      "Description": "Death reversed indicates that you are resisting a change that is necessary for you to move forward.",
      "Source": "assets\\UniformResolution\\DeathReversed.png",
      "Interpretation": "The change the Death Tarot card reversed brings is not something you can resist forever, if you keep holding onto the things you should be letting go of, the universe will find a way to push you on to your life path in its own way. So let go.",
      "Value": 0
    },

  "Temperance": {
      "Description": "The Temperance Tarot card signifies balance, peace, patience and moderation.",
      "Source": "assets\\UniformResolution\\Temperance.png",
      "Interpretation": "Temperance indicates that you are truly in touch with who you are inside, what you value and your own moral compass and you are finding it easier to figure out your aspirations and set yourself goals.",
      "Value": 1
    },

  "Temperance (Reversed)": {
      "Description": "Temperance reversed indicates imbalance or overindulgence.",
      "Source": "assets\\UniformResolution\\TemperanceReversed.png",
      "Interpretation": "It can be a signifier of many issues with excessive or harmful indulgences such as drinking, drug use, gambling, overeating, shopping and the list goes on. You would do well to take a step back and take a look at how you are behaving, examine the root causes and work on resolving them.",
      "Value": -1
    },

  "The Devil": {
      "Description": "The Devil Tarot card can signify depression or addiction. It can also be a sign of feeling trapped or restricted.",
      "Source": "assets\\UniformResolution\\TheDevil.png",
      "Interpretation": "You are in control of your own destiny and are not bound by anything other than your own attitudes and behaviour. Don't give up and don't give away your power.",
      "Value": -1
    },

  "The Devil (Reversed)": {
      "Description": "The Devil reversed can signify that you are becoming aware of the things that have been trapping you and the role you play in allowing them to.",
      "Source": "assets\\UniformResolution\\TheDevilReversed.png",
      "Interpretation": " It is a great card for anyone battling an addiction or mental illness or engaging in harmful behaviour as it indicates that you are starting to see the light and take back control of yourself and your life. Do not fall back into the old bad or risky behaviours that led you so close to danger.",
      "Value": 1
    },

  "The Tower": {
      "Description": "The Tower Tarot card represents chaos and destruction. It is the Major Arcana card of sudden upheaval and unexpected change.",
      "Source": "assets\\UniformResolution\\TheTower.png",
      "Interpretation": "The Tower may be a warning to be mindful of your safety. This will be a massive upheaval. It will be a scary adjustment and will change your life as you know it but ultimately the change will be a good one.",
      "Value": 0
    },

  "The Tower (Reversed)": {
      "Description": "The Tower Tarot card reversed can be a sign that you have narrowly avoided a disaster but are simply delaying the inveitable.",
      "Source": "assets\\UniformResolution\\TheTowerReversed.png",
      "Interpretation": "If you have been running from a big change because you fear the pain or heartache it will bring, this Major Arcana card in reversed position may be telling you it's time to turn and face it.",
      "Value": 0
    },

  "The Star": {
      "Description": "The Star indicates hope for the future, inspiration and contentment.",
      "Source": "assets\\UniformResolution\\TheStar.png",
      "Interpretation": "Trust that the universe has a plan for you and trust the feeling you have that everything is going to be OK.",
      "Value": 1
    },

  "The Star (Reversed)": {
      "Description": "The Star in a reversed position can indicate that you are feeling hopeless.",
      "Source": "assets\\UniformResolution\\TheStarReversed.png",
      "Interpretation": "The Star reversed does not indicate that things are hopeless, only that you feel they are. You need to take responsibility for yourself and your attitude to life. You may want to consider seeking some professional counselling to help you heal the wounds of the past and leave them where they belong.",
      "Value": -1
    },

  "The Moon": {
      "Description": "The Moon tells you that something about a situation or person in your life is not what it appears to be and you need to trust what your instincts are telling you in order to see past this illusion.",
      "Source": "assets\\UniformResolution\\TheMoon.png",
      "Interpretation": "You should pay attention to your dreams as your subconscious may be bringing your attention to some information you've missed.",
      "Value": 0
    },

  "The Moon (Reversed)": {
      "Description": "In a general context The Moon Tarot card reversed can signify releasing fears or negative energy clearing.",
      "Source": "assets\\UniformResolution\\TheMoonReversed.png",
      "Interpretation": "If you have been experiencing fear or anxiety it should begin to subside. If you have lost something, The Moon reversed is a sign you will find it.  You will work through any repressed issues or insecurities to find new confidence and clarity.",
      "Value": 1
    },

  "The Sun": {
      "Description": "The Sun Tarot card is the Major Arcana card of positivity, optimism, freedom and fun.",
      "Source": "assets\\UniformResolution\\TheSun.png",
      "Interpretation": "You will find that people are drawn to the happy vibes and positive energy you are giving out and you will bring light and joy to everyone and everything you come into contact with.",
      "Value": 1
    },

  "The Sun (Reversed)": {
      "Description": "The Sun Tarot card reversed can indicate sadness, depression and pessimism.",
      "Source": "assets\\UniformResolution\\TheSunReversed.png",
      "Interpretation": "It can signify a lack of enthusiasm for life, being unclear on the right path to take or being unable to see the way forward. You have the power to change this by simply allowing yourself to be open to the positive things that are coming your way and by finding gratitude for the good things in your life.",
      "Value": -1
    },

  "Judgement": {
      "Description": "Judgement is an indication that you have achieved a level of clarity and composure that allows you to calmly evaluate yourself and your choices in order to make positive decisions.",
      "Source": "assets\\UniformResolution\\Judgement.png",
      "Interpretation": "You need to clear your conscience and try to make amends for your misdeeds. You have come through your past karmic lessons with increased self-awareness and you are allowing healing to take place so you can move forward in a positive direction.",
      "Value": 1
    },

  "Judgement (Reversed)": {
      "Description": "The Judgement Tarot card reversed can signify that you are allowing fear and self-doubt to hold you back from making the decisions necessary to move forward in a positive direction.",
      "Source": "assets\\UniformResolution\\JudgementReversed.png",
      "Interpretation": "Now is the time to take action. If you delay you may lose the opportunities available to you. Put your focus back on fixing the issues in your life.",
      "Value": -1
    },

  "The World": {
      "Description": "The World Tarot card signifies having the world at your feet!",
      "Source": "assets\\UniformResolution\\TheWorld.png",
      "Interpretation": "You will be successful and the opportunities available to you at the moment are endless. You have endured the hardships and learned your lessons and now you will reap the rewards. You should be proud of what you have achieved, it has not been easy to get here but you've done it.",
      "Value": 1
    },

  "The World (Reversed)": {
      "Description": "The World Tarot card reversed can indicate that you have not accomplished what you set out to do and things have become stagnant.",
      "Source": "assets\\UniformResolution\\TheWorldReversed.png",
      "Interpretation": "You may be throwing all your energy into trying to make something work that is not working for you. So if you've thrown everything you've got a something and it's still not working for you, The World reversed may be telling you that it's time to accept the disappointment and cut your losses.",
      "Value": -1
    }
};

/**
 * Overall Interpretation Information in JSON format
 * @type {JSON}
 */ 
const interpData = {
  "3" : {
      "Interpretation1" : "The future is a treasure trove of limitless possibilities, eagerly waiting for you to explore and seize the abundant opportunities that lie ahead.",
      "Interpretation2" : "As you navigate through challenges with unwavering determination, you will uncover your incredible resilience and witness your own transformative growth, propelling you towards a future adorned with remarkable achievements.",
      "Interpretation3" : "The universe conspires in your favor, constantly aligning favorable circumstances and paving the way for extraordinary opportunities that will enrich your journey towards a future filled with boundless joy and prosperity.",
      "Interpretation4" : "Your path to success is an exhilarating adventure, where each twist and turn serves as a stepping stone towards realizing your dreams and creating a future that surpasses even your grandest aspirations.",
      "Interpretation5" : "Embrace the infinite possibilities that await you, for your positive mindset and open heart will attract a vibrant tapestry of experiences, leading to a future where happiness, fulfillment, and abundant blessings flourish abundantly."
  },

  "2": {
      "Interpretation1" : "Your future is filled with endless possibilities and boundless potential, ready to be unlocked and embraced with open arms.",
      "Interpretation2" : "The path ahead of you is illuminated by a brilliant light of success, leading you to achieve your wildest dreams and exceed all expectations.",
      "Interpretation3" : "Your determination and perseverance will pave the way for remarkable accomplishments, propelling you towards a future filled with joy, fulfillment, and prosperity.",
      "Interpretation4" : "The universe aligns in your favor, showering you with abundant opportunities and serendipitous encounters that will shape a future of extraordinary happiness and fulfillment.",
      "Interpretation5" : "Your journey towards success is destined to be filled with exhilarating adventures, remarkable achievements, and unwavering happiness, making each step a testament to your incredible potential."
  },

  "1": {
      "Interpretation1" : "Your future holds a wide range of possibilities, each presenting unique opportunities for growth and success. With your determination and resilience, you have the power to make the most of these possibilities and create a fulfilling life.",
      "Interpretation2" : "The path ahead may have its challenges, but you possess the strength and resilience to overcome them. By embracing these challenges as opportunities for growth, you will be able to shape a future that is filled with achievements and personal satisfaction.",
      "Interpretation3" : "Your hard work and dedication will undoubtedly lead you to a future that is marked by significant accomplishments and contentment. While there may be occasional hurdles along the way, your unwavering commitment will ensure a positive outcome.",
      "Interpretation4" : "The universe has a way of aligning the stars in your favor, presenting you with unexpected opportunities and fortunate circumstances. By staying open-minded and receptive, you can seize these moments and pave the way for a future that is filled with happiness and prosperity.",
      "Interpretation5" : "Your journey towards success might have its ups and downs, but every step forward is a testament to your growth and potential. Embrace the lessons learned from each experience, and you will continue to progress towards a future that is bright and promising."      
  },

  "0": {
      "Interpretation1" : "Your future is yet to unfold, offering a myriad of possibilities and outcomes that will be shaped by your choices and actions.",
      "Interpretation2" : "The path ahead holds a blend of challenges and opportunities, presenting you with the chance to navigate and carve your own unique journey.",
      "Interpretation3" : "Your future will be shaped by a combination of external factors and your own efforts, resulting in a balanced mix of experiences and outcomes.",
      "Interpretation4" : "The course of your future is unpredictable, but that uncertainty opens doors for surprises, growth, and new discoveries along the way.",
      "Interpretation5" : "Your future is a blank canvas awaiting the strokes of your aspirations, decisions, and efforts, allowing you to paint a life that aligns with your values and aspirations."              
  },

  "-1": {
      "Interpretation1" : "The future may present occasional challenges, but remember that each obstacle holds valuable lessons and opportunities for personal growth.",
      "Interpretation2" : "As you embark on your journey, be prepared for the ups and downs that come with it, knowing that resilience and determination will guide you through difficult times.",
      "Interpretation3" : "While the path ahead may be uncertain, trust in your ability to adapt and find creative solutions to navigate any setbacks that may arise.",
      "Interpretation4" : "It's important to acknowledge that not every endeavor will go exactly as planned, but view these moments as opportunities to reassess and redirect your efforts towards a more favorable outcome.",
      "Interpretation5" : "The future may require patience and perseverance as you work towards your goals, understanding that success often comes from persistent effort and learning from setbacks along the way."   
  },

  "-2": {
      "Interpretation1" : "In the depths of darkness, a daunting challenge awaits, but within it lies the key to unlocking your true strength and discovering a newfound resilience that will guide you towards the light.",
      "Interpretation2" : "The storm clouds gather, foretelling of turbulent times ahead, yet remember that after every storm, a rainbow emerges, bringing hope and renewal to your weary soul.",
      "Interpretation3" : "The shadows of uncertainty cast long and haunting figures, but they serve as a reminder that even in the darkest moments, your inner light will shine brightest, leading you to triumph over adversity.",
      "Interpretation4" : "Beware the treacherous path that lies before you, for it holds unforeseen dangers, but fear not, as each step you take with courage and determination will unveil hidden treasures and lead you towards a brighter tomorrow.",
      "Interpretation5" : "The echoes of the past resonate in whispers of caution, urging you to tread carefully, but within these warnings lie the seeds of wisdom that will empower you to forge a future filled with wisdom, growth, and profound transformation."
  },

  "-3": {
      "Interpretation1" : "The path ahead is shrouded in darkness, revealing unexpected challenges and trials that will test your resolve and resilience.",
      "Interpretation2" : "A looming shadow cast upon your future suggests that difficult decisions and sacrifices may be necessary to overcome the impending obstacles in your path.",
      "Interpretation3" : "The winds of change whisper of unsettling times ahead, urging you to brace yourself for unforeseen disruptions that may disrupt your plans and aspirations.",
      "Interpretation4" : "The threads of fate are entangled, foretelling of turbulent times and uncertain outcomes that will require unwavering determination and adaptability to navigate.",
      "Interpretation5" : "Beware of the deceptive allure that may surround you in the days to come, for not all that glitters is gold. Trust your instincts and tread cautiously to protect yourself from potential pitfalls and betrayals."         
  }
};

const cards = document.querySelectorAll(".card");

setCardProp();

cards.forEach(card => card.addEventListener("click", flipCard));

// Exit page button redirects to the welcome page
const exitButton = (document.getElementsByClassName("exit"))[0];
exitButton.addEventListener('click', () => {
  window.location.href = "welcome.html";
})

// New reading button redirects to the card selection page
const newReadingButton = (document.getElementsByClassName("newReading"))[0];
newReadingButton.addEventListener('click', () => {
  window.location.href = "card-page.html";
})

// Expand the page for recipe content
const expandButton = document.getElementById('expand-btn');
const content = document.getElementById('content');

expandButton.addEventListener('click', () => {
  content.classList.toggle('show-content');
  
  if (content.classList.contains('show-content')) {
    const buttonOffsetTop = expandButton.offsetTop;
    const scrollHeight = content.offsetTop - buttonOffsetTop + 400;
    
    window.scrollTo({
      top: scrollHeight,
      behavior: 'smooth'
    });
  }
});

/**
 * Pulls JSON card strings from localStorage and parses them for use in updating card information
 * @returns {Array<String>} names of cards selected by the user
 */
function getCardNamesFromLS() {
  // Collect card info from localStorage
  let selectedCards = [localStorage.getItem("past"), localStorage.getItem("present"), localStorage.getItem("future")];
  let names = [];
  
  // Iterate through cards and determine if they should be reversed or not
  for (const card of selectedCards) {
    const cardJSON = JSON.parse(card);
    if (cardJSON["reversed"] == 1) {
      names.push(cardJSON["Name"] + " (Reversed)")
    } else {
      names.push(cardJSON["Name"]);
    }
  }

  return names;
}

/**
 * Sets card information using past, present, and future information. Iterates through the cards selected and sets their data using the JSON information.
 */
function setCardProp() {
  const cardsSelected = getCardNamesFromLS();
  const finalInterp = document.querySelector('h2');
  const descriptors = ["Past: ", "Present: ", "Future: "]

  // Iterate through each card and set properties
  for (let i = 0; i < cards.length; i++) {
    const name = cardsSelected[i];

    const cardImg = cards[i].querySelector('img');
    const backCard = cards[i].querySelector('.card-back');

    // Sets the image and name for the front side of the card
    cards[i].querySelector('h3').innerText = name;
    cardImg.src = cardData[name]["Source"]
    cardImg.alt = "Image for " + name;

    // Sets information of the back side of the card
    backCard.querySelector('h3').innerText = descriptors[i] + name;
    backCard.querySelector('h4').innerText = cardData[name]["Description"];
    backCard.querySelector('p').innerText = cardData[name]["Interpretation"];
  }

  // Overall interpretation randomized using the values of the cards selected
  // If page refreshed (meaning localStorage info is as is), reuse old interpretation
  if (localStorage.getItem("interpretation") == null) {
    finalInterp.innerText = randomInterp(cardsSelected);
  } else {
    finalInterp.innerText = localStorage.getItem("interpretation");
  }
}

/**
 * Returns a random interpretation given the values of the cards which determine how positive/negative a fortune will be
 * @param {Array<String>} cardNames A list of the names of the cards chosen by the user
 * @returns {String} A random interpretation given the sum of the values
 */

function randomInterp(cardNames) {
  let total = 0;
  
  // Sums up the card values
  for (const name of cardNames) {
    total += cardData[name]["Value"];
  }

  // Picks one of 5 possible interpretations for that sum combination
  let randomChoice = Math.floor(Math.random() * 5) + 1;

  // Store interpretation in local storage for later use
  let interpretation = interpData[total.toString()]["Interpretation" + randomChoice];
  localStorage.setItem("interpretation", interpretation)

  return interpretation;
}

/**
 * Flips the card to reveal the other side with the relevant information (front side for picture and name, back side for description and interpretation info)
 */
function flipCard() {
  this.classList.toggle("is-flipped");
}

/**
 * @type {audio} the backgroundMusic
 * @type {button} this toggle button should toggle music on or off
 */
document.addEventListener("DOMContentLoaded", function() {
  var audio = document.getElementById("myAudio");
  var playButton = document.getElementById("playButton");
  if(audio){
    audio.addEventListener("canplaythrough", function() {
      audio.play();
    });
  }
  
  playButton.addEventListener("click", function() {
    if (audio.paused) {
      audio.play();
      playIcon.src = "./images/unmute.png";
    } else {
      audio.pause();
      playIcon.src = "./images/mute.png";
    }
  });
});