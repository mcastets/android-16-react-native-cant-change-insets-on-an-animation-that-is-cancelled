/* eslint-disable check-file/filename-naming-convention */
module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
    };
};
