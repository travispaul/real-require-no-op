// Pass-thru to original functions
module.exports = {
  realImport: modulePath => import(modulePath),
  realRequire: require
}