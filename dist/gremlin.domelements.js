//@ sourceMappingURL=gremlin.domelements.map
(function() {
  var DomElements,
    __hasProp = {}.hasOwnProperty;

  DomElements = (function() {
    var addElements;

    function DomElements() {}

    addElements = function() {
      var propertyName, selector, _ref, _results;
      if (typeof this.klass.elements === 'object') {
        _ref = this.klass.elements;
        _results = [];
        for (selector in _ref) {
          if (!__hasProp.call(_ref, selector)) continue;
          propertyName = _ref[selector];
          if (!(typeof this[propertyName] === "undefined")) {
            throw new TypeError("Element member " + propertyName + " already defined!");
          }
          if (!(typeof selector === "string")) {
            throw new TypeError("Element selector have to be referenced by strings!");
          }
          _results.push(this[propertyName] = this.el.querySelectorAll(selector));
        }
        return _results;
      }
    };

    DomElements.extend = function() {};

    DomElements.bind = function(gremlinInstance) {
      return addElements.call(gremlinInstance);
    };

    return DomElements;

  })();

  Gremlin.registerExtension(DomElements);

}).call(this);
