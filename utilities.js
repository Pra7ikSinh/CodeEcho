/**
 * @namespace CodeEcho Utilities
 * @author : Pra7iksinh
 * @email : pra7iksinh@gmail.com
 * @date : 2024-11-01
 * @description : Provides helper functions for editor selection and range extraction.
 */

const vscode = require("vscode");

/**
 * Extracts the range from the current selection.
 * @param {vscode.Selection} selection - The selected text.
 * @param {vscode.TextEditor} editor - The editor instance.
 * @returns {vscode.Range|null} - The determined range.
 */
const getSelectedRange = (selection, editor) => {
    return selection.isEmpty
        ? getWordRange(editor, selection)
        : selection;
};

/**
 * Gets the range of the word at the specified position.
 * @param {vscode.TextEditor} editor - The editor instance.
 * @param {vscode.Selection} selection - The selection object.
 * @returns {vscode.Range|null} - Range of the word at position.
 */
const getWordRange = (editor, selection) => {
    const position = new vscode.Position(selection.start.line, selection.start.character);
    const wordRange = editor.document.getWordRangeAtPosition(position);
    return wordRange ?? null;
};

module.exports = {
    getSelectedRange
};
