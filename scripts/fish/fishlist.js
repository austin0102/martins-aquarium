// Import the function that returns a copy of the fish array
import { getFish } from "../database.js";

export const FishList = () => {
  // Invoke the function that you imported from the database module
  
  const fishes = getFish();
  let holy3 = getMultiplesOfThree();
  let soldier5 = getMultiplesOfFive();
  let nonholy = getOtherLengths();
  // Start building a string filled with HTML syntax
  let htmlString = '<article class="fishList"><h2>My Fish</h2>'
                      
  // Create HTNL representations of each fish here
  for (const fish of [ ...holy3, ...soldier5, ...nonholy]) {
    // Why is there a backtick used for this string?
    htmlString += `<section class="fish_card">

            <div><img  class="fish__image image--card" src="${fish.imgUrl}" /></div>
            <div class="fish__name"><b>Name: </b>${fish.name}</div>
            <div class="fish__species"><b>Species: </b>${fish.species}</div>
            <div class="fish__length"><b>Length: </b>${fish.length}ft</div>
            <div class="fish__location"><b>Harvest Location: </b>${fish.location}</div>
            <div class="fish__diet"><b>Diet: </b>${fish.food}</div>
        </section>
`;
  }
  htmlString += `</article>`;

  return htmlString;


function getMultiplesOfThree() {
  const lengths = [];

  for (const fish of fishes) {
    if (fish.length % 3 === 0) {
      lengths.push(fish);
    }
  }

  return lengths;
}

function getMultiplesOfFive() {
  const lengths = [];

  for (const fish of fishes) {
    if (fish.length % 5 === 0) {
      lengths.push(fish);
    }
  }

  return lengths;
}

function getOtherLengths() {
  const lengths = [];

  for (const fish of fishes) {
    if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
      lengths.push(fish);
    }
  }

  return lengths;
}
}