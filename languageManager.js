/**
 * @namespace CodeEcho Language Manager
 * @author : Pra7iksinh
 * @email : pra7iksinh@gmail.com
 * @date : 2024-11-01
 * @description : Provides log statement templates for supported languages. Supports easy addition of new languages.
 */

const { logTemplates } = require("./constants");

/**
 * Generates a formatted log statement based on the language.
 * @param {string} languageId - The language identifier.
 * @param {string} variable - The variable name to log.
 * @returns {string} - The formatted log statement.
 */
const generateLogStatement = (languageId, variable) => {
    const template = logTemplates[languageId];
    return template
        ? `${template.comment}\n${template.format(variable)}`
        : `/* Unsupported language for logging: ${languageId} */`;
};

module.exports = {
    generateLogStatement
};
