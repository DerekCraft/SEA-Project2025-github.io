/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

var myBulletPoints=[
  { 
    id:1,
    name:"Travis Hunter",
    birthPlace:"Suwanee, GA",
    college:"University of Colorado Boulder",
    height:"6'1",
    weight:185,
    position: "WR" + "&" + "CB",
    nflDraftPick:1 
    }
    ,{id:2,
      name:"Cam Ward",
      birthPlace:"West Columbia, TX",
      college:"University of Miami",
      height:"6'2",
      weight:223,
      position: "QB",
      nflDraftPick:2 
    },
    {id:3,
      name:"Shedeur Sanders",
      birthPlace:"Dallas, TX",
      college:"University of Miami",
      height:"6'2",
      weight:215,
      position: "QB",
      nflDraftPick:3 
    },
    {id:4,
      name:"Abdul Carter",
      birthPlace:"Philadelphia, PA",
      college:"Pennsylvania State University",
      height:"6'3",
      weight:259,
      position: "EDGE",
      nflDraftPick:4 
    },
    {id:5,
      name:"Mason Graham",
      birthPlace:"Anaheim, CA",
      college:"University of Michigan",
      height:"6'3",
      weight:320,
      position: "DT",
      nflDraftPick:5
    },
    {id:6,
      name:"TreyVeyon Henderson",
      birthPlace:"Hopewell, VA",
      college:"Ohio State University",
      height:"5'10",
      weight:208,
      position: "RB",
      nflDraftPick:6
    },
    {id:7,
      name:"Jeremiah Smith",
      birthPlace:"Miami Gardens, FL",
      college:"Ohio State University",
      height:"6'3",
      weight:215,
      position: "WR",
      nflDraftPick:7
    }, 
    {id:8,
      name:"Ashton Jeanty",
      birthPlace:"Jacksonville, FL",
      college:"Boise State University",
      height:"5'9",
      weight:215,
      position: "RB",
      nflDraftPick:8
    },
    {id:9,
      name:"Tyler Warren",
      birthPlace:"Mechanicsville, VA",
      college:"Pennsylvania State University",
      height:"6'6",
      weight:257,
      position: "TE",
      nflDraftPick:9
    },
    {id:10,
      name:"Dillon Gabriel",
      birthPlace:"Mililani, HI",
      college:"University of Oregon",
      height:"6'0",
      weight:200,
      position: "QB",
      nflDraftPick:10
    }]

const travisHunter =
  "https://images.sidearmdev.com/resize?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fcubuffs.com%2Fimages%2F2023%2F9%2F6%2FHunter_09022023-TCU-466.jpg&height=300&type=webp";
const camWard =
  "https://atozsports.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjA5Mzc4NDg2Mzc1MTYzMDQ5/usatsi_24180343.jpg";
const shedeurSanders =
  "https://www.reuters.com/resizer/v2/CV7OWERTBJJUJCCRO7O6DF36ZY.jpg?auth=cd27da9b99108313813bee9777a61358dce570e790978969898f648eccc6f78a&width=3248&quality=80";
const abdulCarter = 
"https://nittanycentral.com/wp-content/uploads/2023/08/9662210290986_osu_v_psa.jpeg?ezimgfmt=rs:380x265/rscb1/ngcb1/notWebP";
const masonGraham = 
"https://media.bleacherreport.com/image/upload/x_345,y_328,w_1058,h_703,c_crop/v1736183704/j9m63gekcgn2bectkwkm.jpg";
const treVeyonHenderson =
"https://images.rivals.com/image/upload/f_auto,q_auto,t_large/saeugzwvicmuelwx2zcb"
const jeremiahSmith =
"https://thedraftnetwork.com/img/random/usatsi_25046257-1600x900.jpg"
const ashtonJeanty =
"https://s.yimg.com/os/creatr-uploaded-images/2025-01/630e6150-dead-11ef-af77-0bd71828e999"
const tylerWarren =
"https://images2.minutemediacdn.com/image/upload/c_crop,w_4456,h_2506,x_0,y_123/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/mile_high_huddle/01jrc9ns6cdpaqd4hdav.jpg"
const dillonGabriel =
"https://npr.brightspotcdn.com/dims4/default/0757175/2147483647/strip/true/crop/6981x4656+0+0/resize/880x587!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F53%2F9a%2F5fee71e543d5abd5623607dcc2d3%2Fap24336001685714.jpg"
// This is an array of strings (TV show titles)
let titles = [
{name:"Travis Hunter",image:"https://images.sidearmdev.com/resize?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fcubuffs.com%2Fimages%2F2023%2F9%2F6%2FHunter_09022023-TCU-466.jpg&height=300&type=webp"},
  {name:"Cam Ward", image:"https://atozsports.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjA5Mzc4NDg2Mzc1MTYzMDQ5/usatsi_24180343.jpg"},
  {name:"Shedeur Sanders",image:"https://www.reuters.com/resizer/v2/CV7OWERTBJJUJCCRO7O6DF36ZY.jpg?auth=cd27da9b99108313813bee9777a61358dce570e790978969898f648eccc6f78a&width=3248&quality=80"},
  {name:"Abdul Carter", image:"https://nittanycentral.com/wp-content/uploads/2023/08/9662210290986_osu_v_psa.jpeg?ezimgfmt=rs:380x265/rscb1/ngcb1/notWebP"},
  {name:"Mason Graham", image:"https://media.bleacherreport.com/image/upload/x_345,y_328,w_1058,h_703,c_crop/v1736183704/j9m63gekcgn2bectkwkm.jpg"},
  {name:"TreyVeyon Henderson", image:"https://images.rivals.com/image/upload/f_auto,q_auto,t_large/saeugzwvicmuelwx2zcb"},
  {name:"Jeremiah Smith", image:"https://thedraftnetwork.com/img/random/usatsi_25046257-1600x900.jpg"},
  {name:"Ashton Jeanty", image:"https://s.yimg.com/os/creatr-uploaded-images/2025-01/630e6150-dead-11ef-af77-0bd71828e999"},
  {name:"Tyler Warren", image:"https://images2.minutemediacdn.com/image/upload/c_crop,w_4456,h_2506,x_0,y_123/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/mile_high_huddle/01jrc9ns6cdpaqd4hdav.jpg"},
  {name:"Dillon Gabriel", image:"https://npr.brightspotcdn.com/dims4/default/0757175/2147483647/strip/true/crop/6981x4656+0+0/resize/880x587!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F53%2F9a%2F5fee71e543d5abd5623607dcc2d3%2Fap24336001685714.jpg"}
];


// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < titles.length; i++) {
    let title = titles[i];

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    let imageURL = "";
    if (i == 0) {
 //     imageURL = travisHunter;
    } else if (i == 1) {
      imageURL = camWard;
    } else if (i == 2) {
      imageURL = shedeurSanders;
    } else if (i==3){
      imageURL = abdulCarter;
    } else if (i==4){
      imageURL = masonGraham;
    } else if (i==5){
      imageURL = treVeyonHenderson;
    } else if (i==6){
      imageURL = jeremiahSmith;
    } else if (i==7){
      imageURL = ashtonJeanty;
    } else if (i==8){
      imageURL = tylerWarren;
    } else if (i==9){
      imageURL = dillonGabriel;
   }


    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title.name, title.image); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

// function startup(){
//   console.log("start up is firing")
// }

// function onClick(){

// }

// function getClone(){
//   //var newClone = $($("").html()).clone();

//   var htmlFromCloneTarget = $("card-title").html();

//   var newClone = $(htmlFromCloneTarget).clone();

//   return newClone
// }
function editCardContent(card, newTitle, newImageURL, newBullet) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";
  console.log("newbullet",newBullet,newTitle);
  
  
  const cardBullets = card.querySelector("ul");
  cardBullets.innerHTML = "";
  
  // Loop through the object properties
  const selectedPlayer = myBulletPoints.find(player => player.name === newTitle);

  if (selectedPlayer) {
    for (let key in selectedPlayer) {
      if (key !== "name" && selectedPlayer.hasOwnProperty(key)) {
        const newLi = document.createElement("li");
        newLi.textContent = `${key}: ${selectedPlayer[key]}`;
        cardBullets.appendChild(newLi);
      }
    }
  } else {
    const errorLi = document.createElement("li");
    errorLi.textContent = "Player not found.";
    cardBullets.appendChild(errorLi);
  }

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log(cardBullets);
  console.log("new card:", newTitle, "- html: ", card);
}



// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}





