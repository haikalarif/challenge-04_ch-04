class App {
  constructor() {
    // this.clearButton = document.getElementById("clear-btn");
    // this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById('cars-container');
    this.buttonSearch = document.getElementById('search-btn');
  }

  async init() {
    await this.load();

    // Register click listener
    // this.clearButton.onclick = this.clear;
    this.buttonSearch.onclick = this.run;
  }

  run = () => {
    let capacity = document.getElementById('capacity').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let typeDriver = document.getElementById('typeDriver').value;

    let newDate = new Date(`${date}T${time}Z`)
    if (date === '' || time === '' || typeDriver === '') {
      alert('Lengkapi dulu formnya !')
    } else {
      this.clear()
      Car.list.forEach((car) => {
        if (
          car.capacity >= capacity &&
          car.availableAt > newDate &&
          car.available === true
        ) {
          const node = document.createElement('div');
          node.classList.add('col-4');
          // console.log(car.capacity)
          node.innerHTML = car.render();
          this.carContainerElement.append(node);
        }
      })
    }
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
    // this.filter(date, capacity);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}