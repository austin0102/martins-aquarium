// Import the FishList function from the correct module
import { FishList } from "./fish/fishlist.js"
import { TankTipsList } from "./tips/tipslist.js"
import { LocayList } from "./locations/locations.js"
const FishArr = FishList()
/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fish-section")


parentHTMLElement.innerHTML = FishArr

const TipsArr = TankTipsList()
/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement2 = document.querySelector(".cleaning-section")


parentHTMLElement2.innerHTML = TipsArr

const LocayArr = LocayList()
/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement3 = document.querySelector(".harvest-section")


parentHTMLElement3.innerHTML = LocayArr