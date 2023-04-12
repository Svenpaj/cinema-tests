module.exports = class Acl {

  // Here you can implement ACL
  // return true = allowed, false = forbidden

  // req.sesssion.user -> logged in user if any

  static checkRoute(req, table, method, isTable, isView) {
    console.log([
      'user: ' + JSON.stringify(req.session.user, '', ' '),
      'url: ' + req.url,
      'table: ' + table,
      'method: ' + method,
    ].join('/n'));
    return true;
  }

}