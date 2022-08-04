export const createCart = (name: string, id: string, color: string) => {
  return `<div class="car">
  <div class="car-header">
    <button class="button-create" id="select-car-${id}">select</button>
    <button class="button-create" id="remove-car-${id}">remove</button>
    <div class="car-name">${name}</div>
  </div>
  <div class="car-race">
    <div class="car-drive">
      <button class="button-drive">A</button>
      <button class="button-drive">B</button>
    </div>
    <div class="car-model">
      <svg class="icon" fill="${color}">
        <use xlink:href="./assets/icons/car.svg#car"></use>
      </svg>
    </div>
    <div class="car-flag">
      <svg class="icon fill="#000fff" >
        <use xlink:href="./assets/icons/flag.svg#flag"></use>
      </svg>
    </div>
  </div>
</div>
`;
};
