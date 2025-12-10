const config = {
    "rules": {
        "html-quotes": ( await import( "#lib/rules/html-quotes" ) ).default,
        "camel-case": ( await import( "#lib/rules/camel-case" ) ).default,
    },
    "configs": {
        "recommended": {
            "name": "@softvisio:recommended",

            "plugins": {
                get [ "@softvisio" ] () {
                    return config;
                },
            },

            "rules": {
                "@c0rejs/camel-case": [ "error", { "properties": "always" } ],
                "@c0rejs/html-quotes": [ "warn", "auto" ],
                "vue/html-quotes": "off", // replaced with the @c0rejs/html-quotes
            },
        },
    },
};

export default config;
