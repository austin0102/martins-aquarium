import { getLocations } from "../database.js";

export const LocayList = () => {
  const HarvestLocations = getLocations();

  let htmlString = '<article class="Locaylist"><h2>Harvest Locations</h2>';

  for (const locay of HarvestLocations) {
    htmlString += `<section class="location_card">
                <ul>
                <li class="Tank_Tips">${locay}</li>
              </ul>
            </section>
    `;
  }
  htmlString += `</article>`;

  return htmlString;
};
