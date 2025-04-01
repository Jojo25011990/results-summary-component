'use strict';

fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const summaryWrapper = document.querySelector('.card__summary-wrapper');

    data.forEach(item => {
      const lowerCaseClass = item.category.toLowerCase();

      const categoryContent = `
               <div class="card__summary-item"  >
            <span class="card__summary-icon">
              <img
                src=${item.icon}
                alt="Icon Svg Reaction"
              />
            </span>
            <p class="card__summary-category card__summary-category--${lowerCaseClass}"  >
              ${item.category}
            </p>
            <p class="card__summary-value">
              <span class="card__summary-value--strong">${item.score}</span>
              <span class="card__summary-value--normal"> / 100</span>
            </p>
          </div>
        `;

      summaryWrapper.innerHTML += categoryContent;
    });
  })
  .catch(err => console.log('Error', err));
