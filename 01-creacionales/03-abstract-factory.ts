import { COLORS } from '../helpers/colors.ts';
/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */

interface Hamburguer {
    prepare(): void;
}

interface Drink {
    pour(): void;
}

class ChickenHamburger implements Hamburguer {
    prepare(): void {
        console.log("Preparing %cChicken Hamburger...", COLORS.yellow);
    }
}

class BeefHamburger implements Hamburguer {
    prepare(): void {
        console.log("Preparing %cBeef Hamburger...", COLORS.red);
    }
}

class Water implements Drink {
    pour(): void {
        console.log("Pouring %cWater...", COLORS.blue);
    }
}


class Soda implements Drink {
    pour(): void {
        console.log("Pouring %cSoda...", COLORS.green);
    }
}


interface RestaurantFactory {
    createHamburger(): Hamburguer;
    createDrink(): Drink;
}

class FastFoodRestaurant implements RestaurantFactory {
    createHamburger(): Hamburguer {
        return new BeefHamburger();
    }

    createDrink(): Drink {
        return new Soda();
    }
}

class HealthyRestaurant implements RestaurantFactory {
    createHamburger(): Hamburguer {
        return new ChickenHamburger();
    }

    createDrink(): Drink {
        return new Water();
    }
}

function main(factory: RestaurantFactory) {
    const hamburger = factory.createHamburger();
    const drink = factory.createDrink();

    hamburger.prepare();
    drink.pour();
}


console.log("%cAbstract Factory", COLORS.purple);
main(new FastFoodRestaurant()); // Fast food restaurant

console.log("\n%cAbstract Factory", COLORS.purple);
main(new HealthyRestaurant()); // Healthy restaurant
