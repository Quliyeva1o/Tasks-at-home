const country = class Country {
    constructor(name, population, flagImg, capital, description) {
        this.id = nanoid(),
            this.name = name,
            this.population = population,
            this.flagImg=flagImg,
            this.capital=capital,
            this.description=description
    }
}

export default country