const NUMBER_OF_DAYS_IN_EARTH_YEAR = 365.25;

class SpaceAge {
    private age: number;
    public seconds: number;

    constructor(age: number) {
        this.age = age;
        this.seconds = age;
    }

    onEarth = (): number => this.earthAge(NUMBER_OF_DAYS_IN_EARTH_YEAR);

    onMercury = (): number => this.earthAge(this.daysInEarthYear(0.2408467));

    onVenus = (): number => this.earthAge(this.daysInEarthYear(0.61519726));

    onMars = (): number => this.earthAge(this.daysInEarthYear(1.8808158));

    onJupiter = (): number => this.earthAge(this.daysInEarthYear(11.862615));

    onSaturn = (): number => this.earthAge(this.daysInEarthYear(29.447498));

    onUranus = (): number => this.earthAge(this.daysInEarthYear(84.016846));

    onNeptune = (): number => this.earthAge(this.daysInEarthYear(164.79132));

    private earthAge(orbitalPeriod: number): number {
        return Number((this.age / (orbitalPeriod * 24 * 60 * 60)).toFixed(2));
    }

    private daysInEarthYear(orbitalPeriod: number): number {
        return orbitalPeriod * NUMBER_OF_DAYS_IN_EARTH_YEAR;
    }
}

export default SpaceAge