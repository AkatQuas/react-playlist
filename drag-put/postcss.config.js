'use strict';
module.exports = {
    plugins: {
        'postcss-nested': {},
        'autoprefixer': {
            browsers: [
                'Firefox >= 20',
                'Safari >= 6',
                'Explorer >= 9',
                'Chrome >= 12',
                'ChromeAndroid >= 4.0',
                'iOS >= 6',
                'not ie <= 8'
            ]
        }
    }
};