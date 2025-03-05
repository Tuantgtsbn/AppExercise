module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
            'nativewind/babel',
        ],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./'],
                    alias: {
                        '@': './app',
                        '@/components': './app/components',
                        '@/screens': './app/screens',
                        '@/router': './app/router',
                        '@/constants': './app/constants',
                    },
                },
            ],
        ],
    };
};
