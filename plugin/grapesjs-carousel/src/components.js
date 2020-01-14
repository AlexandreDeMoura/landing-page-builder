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
        if (el.getAttribute &&
          el.getAttribute('data-gjs-type') == "CAROUSEL") {
          return {
            type: "CAROUSEL"
          };
        }
      },
    }),
    view: defaultType.view,
  });

  dc.addType("DIV BLOCK", {
    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
      },
    }, {
      isComponent(el) {
        if (el.getAttribute &&
          el.getAttribute('data-gjs-type') == "DIV BLOCK") {
          return {
            type: "DIV BLOCK"
          };
        }
      },
    }),
    view: defaultType.view,
  });

  dc.addType("NavBar", {
    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        script: function () {
          let mobileNavMenu = document.getElementsByClassName("navigation-menu--alternative")[0];
          let hamburger = document.getElementsByClassName("navigation-hamburger")[0];

          mobileNavMenu.style.display = "none";

          function handleClick() {
            if (mobileNavMenu.style.display === "none") {
              mobileNavMenu.style.display = "flex";
            } else {
              mobileNavMenu.style.display = "none";
            }
          }
          hamburger.addEventListener('click', handleClick);
        },
      },
    }, {
      isComponent(el) {
        if (el.getAttribute &&
          el.getAttribute('data-gjs-type') == "NavBar") {
          return {
            type: "NavBar"
          };
        }
      },
    }),
    view: defaultType.view,
  });
}