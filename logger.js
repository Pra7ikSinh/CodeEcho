/**
 * @namespace CodeEcho Logger
 * @author : Pra7iksinh
 * @email : pra7iksinh@gmail.com
 * @date : 2024-11-01
 * @description : Manages insertion of log statements into the editor.
 */

const vscode = require("vscode");

/**
 * Inserts log statement into the editor.
 * @param {vscode.TextEditor} editor - The editor instance.
 * @param {string} text - Log statement to insert.
 */
const insertLogIntoEditor = (editor, text) => {
    const selection = editor.selection;
    const range = new vscode.Range(selection.start, selection.end);

    editor.edit((editBuilder) => {
        editBuilder.replace(range, text);
    });
};

module.exports = {
    insertLogIntoEditor
};
