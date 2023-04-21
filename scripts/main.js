import { FishList } from "./fish/fishlist.js";
import { TankTipsList } from "./tips/tipslist.js";
import { LocayList } from "./locations/locations.js";
const FishArr = FishList();

const parentHTMLElement = document.querySelector(".fish-section");

parentHTMLElement.innerHTML = FishArr;

const TipsArr = TankTipsList();

const parentHTMLElement2 = document.querySelector(".cleaning-section");

parentHTMLElement2.innerHTML = TipsArr;

const LocayArr = LocayList();

const parentHTMLElement3 = document.querySelector(".harvest-section");

parentHTMLElement3.innerHTML = LocayArr;
