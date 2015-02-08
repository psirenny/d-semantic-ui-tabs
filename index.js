function Component() {}

Component.prototype.view = __dirname;

Component.prototype.init = function (model) {
  model.setNull('defaultValue', model.get('value'));

  model.start('value', '_value', 'defaultValue', {
    get: function (_value, defaultValue) {
      return _value || defaultValue;
    },
    set: function (value, _value, defaultValue) {
      return [value, defaultValue];
    }
  });
};

Component.prototype.select = function (value) {
  this.model.set('value', value);
};

module.exports = Component;
