import { COLORS } from '../helpers/colors.ts';
/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

class computer {
    public cpu: string = 'cpu - not defined';
    public ram: string = 'ram - not defined';
    public storage: string = 'storage - not defined';
    public gpu?: string;

    displayConfiguration() {
        console.log(`Configuration de la computadora
            CPU: ${this.cpu}, 
            RAM: ${this.ram}, 
            Almacenamiento: ${this.storage}, 
            GPU: ${this.gpu}
            `);
    }
}

class computerBuilder {
    private computer: computer;

    constructor() {
        this.computer = new computer();
    }

    setCPU(cpu: string): computerBuilder {
        this.computer.cpu = cpu;
        return this;
    }

    setRAM(ram: string): computerBuilder {
        this.computer.ram = ram;
        return this;
    }

    setStorage(storage: string): computerBuilder {
        this.computer.storage = storage;
        return this;
    }

    setGPU(gpu: string): computerBuilder {
        this.computer.gpu = gpu;
        return this;
    }

    build(): computer {
        return this.computer;
    }

}

function main() {
    const computer:computer = new computerBuilder()
        .setCPU('Intel i7')
        .setRAM('16GB')
        .setStorage('1TB SSD')
        .setGPU('NVIDIA RTX 3080')
        .build();


    console.log('%cComputadora basica:', COLORS.blue);
    computer.displayConfiguration();

    const computerPro:computer = new computerBuilder()
        .setCPU('Intel i9')
        .setRAM('32GB')
        .setStorage('2TB SSD')
        .setGPU('NVIDIA RTX 3090')
        .build();
  
    console.log('%cComputadora pro:', COLORS.blue);
    computerPro.displayConfiguration();
}

main();