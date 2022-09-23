class Car {
    static list = [];

    static init(cars) {
        this.list = cars.map((i) => new this(i));
    }

    constructor({
        id,
        plate,
        manufacture,
        model,
        image,
        rentPerDay,
        capacity,
        description,
        transmission,
        available,
        type,
        year,
        options,
        specs,
        availableAt,
    }) {
        this.id = id;
        this.plate = plate;
        this.manufacture = manufacture;
        this.model = model;
        this.image = image;
        this.rentPerDay = rentPerDay;
        this.capacity = capacity;
        this.description = description;
        this.transmission = transmission;
        this.available = available;
        this.type = type;
        this.year = year;
        this.options = options;
        this.specs = specs;
        this.availableAt = availableAt;
    }

    render() {
        return `<div class="col-4 mx-2">
                    <div class="card card-car mx-0 my-4 g-0">
                        <div class="card_img">
                            <img src="${this.image}" class="img-fluid position-relative" alt="cars ${this.manufacture}">
                        </div>
                        <div class="card-body" style="font-size: 14px">
                            <p class="card-text model-car">${this.manufacture} ${this.model}</p>
                            <p class="card-title">Rp ${this.rentPerDay} / hari</p>
                            <p class="card-text description" style="height: 90px; margin-bottom: 0;">${this.description}</p>
                            <div class="my-2 description"><img src="./images/fi_users.png" class="me-2">${this.capacity} orang</div>
                            <div class="my-2 description"><img src="./images/fi_settings.png" class="me-2">${this.transmission}</div>
                            <div class="my-2 description"><img src="./images/fi_calendar.png" class="me-2">Tahun ${this.year}</div>
                            <button class="btn btn-success btn-pilih text-white w-100 mt-2">Pilih Mobil</button>
                        </div>
                    </div>
                </div>`
    }
}
// <p>id: <b>${this.id}</b></p>
// <p>plate: <b>${this.plate}</b></p>
// <p>manufacture: <b>${this.manufacture}</b></p>
// <p>model: <b>${this.model}</b></p>
// <p>available at: <b>${this.availableAt}</b></p>
// <img src="${this.image}" alt="${this.manufacture}" width="64px">