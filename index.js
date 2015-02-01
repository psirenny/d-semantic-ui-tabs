function Component() {}

Component.prototype.view = __dirname;

Component.prototype.init = function (model) {
  model.start('tab', '_tab', 'defaultTab', {
    get: function (_tab, defaultTab) {
      return _tab || defaultTab;
    },
    set: function (tab, _tab, defaultTab) {
      return [tab, defaultTab];
    }
  });
};

Component.prototype.tab = function (name) {
  this.model.set('tab', name);
};

module.exports = Component;
