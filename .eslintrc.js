module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
        extraFileExtensions: ['.svelte']
    },
    env: {
        es6: true,
        browser: true
    },
    overrides: [
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3'
        }
    ],
    settings: {
        'svelte3/typescript': require('typescript'),
        // ignore style tags in Svelte because of Tailwind CSS
        // See https://github.com/sveltejs/eslint-plugin-svelte3/issues/70
        'svelte3/ignore-styles': () => true
    },
    plugins: ['svelte3', '@typescript-eslint'],
    ignorePatterns: ['node_modules'],
    rules: {
        "quotes": ["warn", "single", {"avoidEscape": true}], // com aspas simples
        "spaced-comment": ["warn", "always"], // espaço após comentário
        "space-before-blocks": ["warn", "always"], // espaço antes de bloco de código
        "space-before-function-paren": ["warn", "always"], // espaço antes de parênteses de função
        "indent": ["warn", 4], // identação por 4 espaços
        "semi": ["warn", "never"], // sem ponto e vírgula
        "curly": "off", // if de somente 1 (um) comando pode não ter chaves
        "no-mixed-operators": "off", // permite que os operadores '&&' e '||'object-curly-spacing possam ser usados misturados sem parênteses
        "no-mixed-spaces-and-tabs": ["warn"], // não permite que espaços e tabulações sejam misturados
        "no-irregular-whitespace": ["warn"], // os espaços em branco precisam uniformes e de acordo com boas práticas do es5
        "object-curly-newline": "off", // permite a utilização de "formatação" mais livre na criação de objetos literiais
        "object-curly-spacing": ["warn", "always", {
            "objectsInObjects": false,
            "arraysInObjects": false
        }], // deve haver espaço entre as chaves de um objeto, exceto após um array ou objeto dentro o objeto
        "padded-blocks": "off", // permite que linhas vazias sejam colocadas antes e após escopos
        "no-useless-constructor": "off", // permite construtores não usados
        "promise/param-names": "off", // permite que parâmetros de Promise tenham qualquer nome
        "no-eval": "error", // não permite a utilização do eval
        "linebreak-style": ["error", "unix"], // define a quebra de linha para LF
        "no-unused-vars": ["error", {"args": "none"}], // variáveis declaradas precisam necessariamente ser usadas, exceto argumentos de funções

        // TypeScript
        "@typescript-eslint/no-unused-vars": ["error", {"args": "none"}],  // variáveis declaradas precisam necessariamente ser usadas, exceto argumentos de funções
        "@typescript-eslint/no-explicit-any": "off", // permite o uso do any
        "@typescript-eslint/interface-name-prefix": "off", // permite que interfaces comecem com I
        "@typescript-eslint/explicit-module-boundary-types": "off" // permite que funções de classe ou exportadas não declarem valor de retorno
    }
}
