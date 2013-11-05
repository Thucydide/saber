define(function(require) {
  var EventEmitter = require('eventemitter')
  var util = require('./util')

  function Widget(arguments) {
    this.emitter = new EventEmitter
  }

  Widget.prototype.on = function() {
    this.emitter.on.apply(this.emitter, arguments)
  }

  Widget.prototype.off = function() {
    this.emitter.off.apply(this.emitter, arguments)
  }

  Widget.prototype.trigger = Widget.prototype.emit = function() {
    this.emitter.emit.apply(this.emitter, arguments)
  }

  Widget.prototype.onAny = function() {
    this.emitter.onAny.apply(this.emitter, arguments)
  }

  Widget.prototype.offAny = function() {
    this.emitter.offAny.apply(this.emitter, arguments)
  }

  Widget.prototype.once = function() {
    this.emitter.once.apply(this.emitter, arguments)
  }

  Widget.prototype.many = function() {
    this.emitter.many.apply(this.emitter, arguments)
  }

  return Widget

})