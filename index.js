var path =      require('path');
var mkdirp =    require('mkdirp');

module.exports = function () {
    var args = Array.prototype.slice.call(arguments);
    var pathArr = [];
    if (process.env.APPDATA) {
        pathArr.push(process.env.APPDATA);
    } else if (process.platform === 'darwin') {
        pathArr.push(path.join(process.env.HOME, 'Library/Preferences'));
    } else {
        pathArr.push(process.env.HOME);
        if (args.length) args[0] = '.' + args[0];
    }
    if (args.length) pathArr = pathArr.concat(args);
    return path.join.apply(this, pathArr);
};