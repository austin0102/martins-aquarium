import { getLocations } from "../database.js";

export const LocayList = () => {
    // Invoke the function that you imported from the database module
  
    const HarvestLocations = getLocations();
  
    // Start building a string filled with HTML syntax
    let htmlString = '<article class="Locaylist"><h2>Harvest Locations</h2>';
  
    // Create HTNL representations of each fish here
    for (const locay of HarvestLocations) {
      // Why is there a backtick used for this string?
      htmlString += `<section class="location_card">
                <ul>
                <li class="Tank_Tips">${locay}</li>
              </ul>
            </section>
    `;
    }
    htmlString += `</article>`;
  
    return htmlString;
}