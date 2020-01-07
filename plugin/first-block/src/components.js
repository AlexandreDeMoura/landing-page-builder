export default (editor, opts = {}) => {
  const domc = editor.DomComponents;
  const defaultType = domc.getType('default');
  const defaultModel = defaultType.model;

  domc.addType('CAROUSEL', {
    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
      },
      script: function() {
        debugger
        $('.slider__main-content').slick({
          dots: true
        });
      }   
    }, {
      isComponent(el) {
        if(el.getAttribute &&
          el.getAttribute('data-gjs-type') == "CAROUSEL") {
          console.log("hourra " + el);
          return {type: "CAROUSEL"};
        }
      },
    }),
    view: defaultType.view,
  });
};
