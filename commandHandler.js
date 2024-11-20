/**
 * @namespace CodeEcho Command Handler
 * @author : Pra7iksinh
 * @email : pra7iksinh@gmail.com
 * @date : 2024-11-01
 * @description : Manages command registration and editor interactions to handle logging functionality.
 */

const vscode = require("vscode");
const { generateLogStatement } = require("./languageManager");
const { insertLogIntoEditor } = require("./logger");
const { getSelectedRange } = require("./utilities");

/**
 * Initializes and registers the logging command.
 * @param {vscode.ExtensionContext} context
 */
const initializeLoggingCommand = (context) => {
    return vscode.commands.registerCommand('codeecho.log', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) return;

        const selection = editor.selection;
        if (selection.isSingleLine) {
            const range = getSelectedRange(selection, editor);
            if (!range) return;

            const text = editor.document.getText(range);
            const languageId = editor.document.languageId;

            const logStatement = generateLogStatement(languageId, text);
            vscode.commands.executeCommand('editor.action.insertLineAfter')
                .then(() => insertLogIntoEditor(editor, logStatement));
        }
    });
};

module.exports = {
    initializeLoggingCommand
};
