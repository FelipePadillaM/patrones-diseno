import { COLORS } from '../helpers/colors.ts';
/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 *
 */

class CodeEditorState {
    constructor(
        readonly code: string,
        readonly cursorPosition: number,
        readonly unsaveChanges: boolean,
    ) {
        // Constructor para inicializar el estado del editor de código
        this.code = code;
        this.cursorPosition = cursorPosition;
        this.unsaveChanges = unsaveChanges;
    }

    copyWith({code, cursorPosition, unsaveChanges}: Partial<CodeEditorState>): CodeEditorState {
        return new CodeEditorState(
            code ?? this.code,
            cursorPosition ?? this.cursorPosition,
            unsaveChanges ?? this.unsaveChanges,
            );
    }

  // Método para crear una copia del objeto
    display(): void {
        console.log('%cDisplaying code editor state...', COLORS.cyan);
        console.log(`
            Code: ${this.code}
            Cursor Position: ${this.cursorPosition}
            Selection: ${this.unsaveChanges}
            `);
    }
}

class CodeEditorHistory {
    private history: CodeEditorState[] = [];
    private currentIndex: number = -1;

    save(state: CodeEditorState): void {
        if (this.currentIndex < this.history.length - 1) {
            // Si no estamos en el último estado, eliminamos los estados futuros
            this.history = this.history.splice(0, this.currentIndex + 1);
        }
        this.history.push(state);
        this.currentIndex++;
    }

    redo(): CodeEditorState | null {
        if (this.currentIndex < this.history.length - 1) {
        this.currentIndex++;
        return this.history[this.currentIndex];
        }
        return null;
    }

    undo(): CodeEditorState | null {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            return this.history[this.currentIndex];
        }
        return null;
    }

}


function main() {
    const history = new CodeEditorHistory();
    let editorState = new CodeEditorState('Initial code', 0, false);

    history.save(editorState);

    console.log('%cInitial state:', COLORS.green);
    editorState.display();

    editorState = editorState.copyWith({ 
        code: 'Updated code', 
        cursorPosition: 5,
        unsaveChanges: true,
         });
    history.save(editorState);
    console.log('%cUpdated state:', COLORS.green);
    editorState.display();

    console.log('%cDespues del undo:', COLORS.green);
    editorState = history.undo()!;
    editorState.display();

    console.log('%cDespues del redo:', COLORS.green);
    editorState = history.redo()!;
    editorState.display();
}

main();