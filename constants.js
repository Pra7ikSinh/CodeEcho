/**
 * @namespace CodeEcho Constants
 * @author : Pra7iksinh
 * @email : pra7iksinh@gmail.com
 * @date : 2024-11-01
 * @description : Contains log templates and configurations for supported languages.
 */

const logTemplates = {
    javascript: { format: (variable) => `console.log("${variable}: ", ${variable});`, comment: '// JavaScript Logging' },
    typescript: { format: (variable) => `console.log("${variable}: ", ${variable});`, comment: '// TypeScript Logging' },
    php: { format: (variable) => `echo '<pre>'; print_r(${variable}); echo '</pre>';`, comment: '// PHP Logging' },
    python: { format: (variable) => `print("${variable}", ${variable})`, comment: '# Python Logging' },
    ruby: { format: (variable) => `puts "#{${variable}} => #{${variable}}"`, comment: '# Ruby Logging' },
    java: { format: (variable) => `System.out.println("${variable}: " + ${variable});`, comment: '// Java Logging' },
    csharp: { format: (variable) => `Console.WriteLine("${variable}: " + ${variable});`, comment: '// C# Logging' },
    // Additional language mappings can be added here
};

module.exports = {
    logTemplates
};
