/**
 * @namespace CodeEcho Extension - Main entry point
 * @author : Pra7iksinh
 * @email : pra7iksinh@gmail.com
 * @date : 2024-11-01
 * @description : This file initializes the VS Code extension and manages activation and deactivation logic.
 */

'use strict';

const vscode = require("vscode");
const { initializeLoggingCommand } = require("./commandHandler");

/**
 * Activates the extension upon loading into VS Code.
 * @param {vscode.ExtensionContext} context 
 */
function activate(context) {
    const command = initializeLoggingCommand(context);
    context.subscriptions.push(command);
}

/**
 * Deactivates the extension.
 */
function deactivate() { }

module.exports = {
    activate,
    deactivate
};
