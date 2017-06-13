module.exports = class Hook {
  constructor(when, serviceName, actionNames, proc) {
    this.when = when
    this.serviceName = serviceName
    this.actionNames = actionNames
    this.proc = proc
  }
}
