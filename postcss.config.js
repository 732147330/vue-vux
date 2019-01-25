module.exports = {
    "plugins": {
        'postcss-import': {},
        'postcss-cssnext': {
            browsers: ['last 2 versions', '> 5%'],
        },
        "postcss-salad": {
            features: {
                bem: {
                    shortcuts: {
                        component: 'c',
                        descendent: 'd',
                        modifier: 'm'
                    },
                    separators: {
                        descendent: '__',
                        modifier: '--'
                    }
                }
            }
        },
        'postcss-write-svg': {}
    },
    build: {
        autoprefixer: false
    }
};