import { getTips } from "../database.js";

export const TankTipsList = () => {
  const greatTips = getTips();

  let htmlString = '<article class="tanklist"><h2>Tank Cleaning Tips</h2>';

  for (const tips of greatTips) {
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
