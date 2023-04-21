import { getTips } from "../database.js";

export const TankTipsList = () => {
  // Invoke the function that you imported from the database module

  const greatTips = getTips();

  // Start building a string filled with HTML syntax
  let htmlString = '<article class="tanklist"><h2>Tank Cleaning Tips</h2>';

  // Create HTNL representations of each fish here
  for (const tips of greatTips) {
    // Why is there a backtick used for this string?
    htmlString += `<section class="tank_card">
              <ul>
              <li class="Tank_Tips">${tips.tip}</li>
            </ul>
          </section>
  `;
  }
  htmlString += `</article>`;

  return htmlString;
};
