export default (editor, opt = {}) => {
  const c = opt;
  const dc = editor.DomComponents;
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
 
  dc.addType("CAROUSEL", {
    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        script: function () {
          $('.slider__main-content').slick({
            dots: true
          });
        },
      },
    }, {
      isComponent(el) {
        if(el.getAttribute &&
          el.getAttribute('data-gjs-type') == "CAROUSEL") {
          return {type: "CAROUSEL"};
        }
      },
    }),
    view: defaultType.view,
  });
}
