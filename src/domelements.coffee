addElements = () ->
  if typeof @klass.elements is 'object'
    for own selector, propertyName of @klass.elements
      throw new TypeError "Element member #{propertyName} already defined!" unless (typeof @[propertyName] is "undefined")
      throw new TypeError "Element selector have to be referenced by strings!" unless (typeof selector is "string")
      @[propertyName] = @el.querySelectorAll(selector)

Gremlin.Module 'domelements',
  extend: ->

  bind: (gremlinInstance) ->
      addElements.call gremlinInstance
 