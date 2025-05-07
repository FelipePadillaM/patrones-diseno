/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/es/design-patterns/prototype
 */

class Documents {

    public title: string;
    private content: string;
    public author: string;

    constructor(title: string, content: string, author: string) {
        this.title = title;
        this.content = content;
        this.author = author;
    }
    

    clone(): Documents {
        return new Documents(this.title, this.content, this.author);
    }

    display(): void {
        console.log(`Title: ${this.title}, Content: ${this.content}, Author: ${this.author}`);
    }
}

function executePrototypeExample() {
    const originalDocument = new Documents("Design Patterns", "Content about design patterns", "John Doe");
    const clonedDocument = originalDocument.clone();

    // Modificamos el documento clonado
    clonedDocument.title = "Cloned Document";
    clonedDocument.author = "Jane Doe";

    // Mostramos ambos documentos
    console.log("Original Document:");
    console.log({originalDocument});
    originalDocument.display();

    console.log("Cloned Document:");
    console.log({clonedDocument});
    clonedDocument.display();
}

executePrototypeExample();

