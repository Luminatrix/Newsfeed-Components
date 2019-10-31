/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  }
];

//function defined here
function createNewsfeed(articleTitle, articleDate, paragraphOne, paragraphTwo, paragraphThree) {
  const article = document.createElement('div');
  const title = document.createElement('h2');
  const date = document.createElement('p');
  const firstParagraph = document.createElement('p');
  const secondParagraph = document.createElement('p');
  const thirdParagraph = document.createElement('p');
  const buttonContainer = document.createElement('span');
  const buttonOpen = document.createElement('button');
  const buttonClose = document.createElement('button');

  //setting class names and linking CSS styles
  article.classList.add('article');
  date.classList.add('date');
  buttonContainer.classList.add('expandButton')
  buttonOpen.classList.add('close');
  buttonClose.classList.add('close');

  //setting text + icons
  const open = '\u25bc';
  const close = '\u25b2';

  buttonOpen.textContent = open;
  buttonClose.textContent = close;
  title.textContent = articleTitle;
  date.textContent = articleDate;
  firstParagraph.textContent = paragraphOne;
  secondParagraph.textContent = paragraphTwo;
  thirdParagraph.textContent = paragraphThree;

  //button event: click event
  buttonOpen.addEventListener('click', () => {
    article.classList.toggle('article-open');
  });
  //setting structure of elements by appending to parent element
  article.appendChild(title);
  article.appendChild(date);
  article.appendChild(buttonOpen);
  article.appendChild(firstParagraph);
  article.appendChild(secondParagraph);
  article.appendChild(thirdParagraph);
  return article;
}

//selecting parent element to append data to
const articleContainer = document.querySelector('.articles');

//forEach loops through data array and creates 'panels' for content/titles/dates
data.forEach((data) => {
  articleContainer.appendChild(createNewsfeed(data.title, data.date, data.firstParagraph, data.secondParagraph, data.thirdParagraph));
})






// //Select parent element to append data to
// //selecting the array and creating a variable with it called articleData to use later

// // const articleData =document.querySelector('.data')

// const articles = document.querySelector('.articles')
// console.log(articles);



// //loop through data and create the article panels


//   // <div class="article">
//   //   <h2>{title of the article}</h2>
//   //   <p class="date">{date of the article}</p>

//   //   {three separate paragraph elements}

//   //   <span class='expandButton'></span>
//   // </div>



//   const paraOne = document.querySelector('.firstParagraph');
//   paraOne.textContent = ['data']['firstParagraph'];
// console.log(paraOne);

//   const para2 = document.querySelector('.secondParagraph');
//   const para3 = document.querySelector('.thirdParagraph');
 
// function createArticle(title, date, firstParagraph, secondParagraph, thirdParagraph){

// //  Step 1: Create a function that creates a component. You will want your component to look like the template below: 
// // const articles = document.createElement ('div');  
// const article = document.createElement ('div'); 
// // const title = document.createElement ('h2');
// // const date = document.createElement ('p');
// // //maybe put paragraphs here
// // const buttonPlace = document.createElement('span');
// // const buttonExpand = document.createElement ('.expandButton');
// // const buttonRetract = document.createElement ('.expandButton');
// //MAY NEED TO ADD BUTTON CODE TO HTML AND CHANGE JS


// //appending elements
// article.append('title, date, para1, para2, para3');
// articlesDiv.append('article');

// // articleDiv.append('para1, para2, para3');
// // // articleMain.appendChild(')
// // buttonPlace.append('expandButton, close');




// //set class names
// articles.classList.add('articles')
// article.classList.add('article')

// title.classList.add('h2');
// date.classList.add('date');
// buttonRetract.classList.add('close');
// buttonPlace.classList.add('expandButton');
// buttonExpand.classList.add('article-open');



// //set text content
// title.textContent = property.title;
// date.textContent = property.date
// para1.textContent = property.firstParagraph;
// para2.textContent = property.secondParagraph;
// para3.textContent = property.thirdParagraph;
// buttonExpand.textContent = '\u1F48E';




// //set up structure appending




// //button events

// //finally grab the accordion or whatever is in html to connect above function
// //create the forloop that loops through data and creates panels above function



// //   Hint: You will need to use createElement more than once here!

// //   Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

// //   Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

// //   Step 3: return the entire component.

// //   Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

// //   Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.
// data.forEach(element => {
//   let createArticle = createArticle(element);
//   document.querySelector('.articles').appendChild(createArticle);
// })

// return createArticle;

// }

