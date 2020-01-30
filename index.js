const url = new URL(window.location.href);
const id = url.searchParams.get("id");

const editor = grapesjs.init({
  // Indicate where to init the editor. You can also pass an HTMLElement
  container: '#editor',
  canvas: {
    scripts: [
      'https://code.jquery.com/jquery-3.4.1.min.js',
      "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
    ],
    styles: [
      "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css",
      "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css",
      "https://fonts.googleapis.com/css?family=Anton&display=swap",
      "https://fonts.googleapis.com/css?family=Neuton&display=swap",
      "https://fonts.googleapis.com/css?family=Montserrat&display=swap",
      "//db.onlinewebfonts.com/c/1412bea64d9ba801365a8a4b8c6ee782?family=BlogScriptW00-Regular",
      "https://fonts.googleapis.com/css?family=Work+Sans:700&display=swap",
      "https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap",
      "https://fonts.googleapis.com/css?family=Paytone+One&display=swap",
      "https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
    ]
  },
  plugins: ['gjs-blocks-basic', 'first-block', 'grapesjs-carousel'],
  // Get the content for the canvas directly from the element
  // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
  fromElement: true,
  // Size of the editor
  height: '100%',
  width: '100%',

  storageManager: {
    type: 'remote',
    stepsBeforeSave: 3,
    urlStore: `http://34.76.112.226/save/${id}`,
    urlLoad: `http://34.76.112.226/get/${id}`,
  },

  blockManager: {
    appendTo: '.block-container'
  },
  deviceManager: {
    devices: [{
      name: 'Desktop',
      width: '', // default size
    }, {
      name: 'Tablet',
      className: 'fa fa-desktop',
      width: '768px',
      widthMedia: '768px',
    }, {
      name: 'Mobile',
      width: '375px', // this value will be used on canvas width
      widthMedia: '480px', // this value will be used in CSS @media
    }]
  },

  layerManager: {
    appendTo: '.layers-container'
  },
  // We define a default panel as a sidebar to contain layers
  panels: {
    defaults: [{
        id: 'layers',
        el: '.panel-left',
        // Make the panel resizable
        resizable: {
          maxDim: 350,
          minDim: 200,
          tc: 0, // Top handler
          cl: 1, // Left handler
          cr: 0, // Right handler
          bc: 0, // Bottom handler
          // Being a flex child we need to change `flex-basis` property
          // instead of the `width` (default)
          keyWidth: 'flex-basis',
        },
      },
      {
        id: 'panel-devices',
        el: '.panel-top__project-devices',
        buttons: [{
          id: 'device-desktop',
          className: 'fa fa-desktop',
          command: 'set-device-desktop',
          active: true,
          togglable: false,
        }, {
          id: 'device-tablet',
          className: 'fa fa-tablet',
          command: 'set-device-tablet',
          togglable: false,
        }, {
          id: 'device-mobile',
          className: 'fa fa-mobile',
          command: 'set-device-mobile',
          togglable: false,
        }],
      }
    ]
  },


  traitManager: {
    appendTo: '.traits-container',
  },
  selectorManager: {
    appendTo: '.selectors-container'
  },
  styleManager: {
    appendTo: '.styles-container',
    sectors: [{
      name: 'Dimension',
      open: false,
      // Use built-in properties
      buildProps: ['display', 'width', 'height', 'min-width', 'min-height',
        'max-width', 'max-height', 'padding', 'margin'
      ],
    }, {
      name: 'Typography',
      open: false,
      buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align'],
      properties: [{
        property: 'font-family',
        name: 'Font',
        list: [{
          name: 'Anton',
          value: 'Anton'
        }, {
          name: 'Montserrat',
          value: 'Montserrat'
        }, {
          name: 'Neuton',
          value: 'Neuton'
        }, {
          name: 'BlogScriptW00-Regular',
          value: 'BlogScriptW00-Regular'
        }, {
          name: 'Work Sans',
          value: 'Work Sans'
        }, {
          name: 'Poppins',
          value: 'Poppins'
        }, {
          name: 'Paytone One',
          value: 'Paytone One'
        }, {
          name: 'Roboto',
          value: 'Roboto'
        }]
      }, ]
    }, {
      name: "Flexbox",
      open: false,
      buildProps: ['flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content', 'align-self', 'flex-basis', 'flex-grow', 'flex-shrink']
    }, {
      name: 'Border',
      open: false,
      buildProps: ['border', 'border-radius'],
      properties: [{
          name: 'Border right',
          property: 'border-right',
          type: 'composite',
          properties: [{
            name: 'Width',
            type: 'integer',
            units: ['px', 'em', 'rem'],
            property: 'border-right-width',
          }, {
            name: 'Style',
            type: 'select',
            property: 'border-right-style',
            options: [{
                value: 'none'
              },
              {
                value: 'solid'
              },
              {
                value: 'dotted'
              },
              {
                value: 'dashed'
              },
              {
                value: 'double'
              },
              {
                value: 'groove'
              },
              {
                value: 'ridge'
              },
              {
                value: 'inset'
              },
              {
                value: 'outset'
              }
            ]
          }, {
            name: 'Color',
            type: 'color',
            property: 'border-left-color',
          }]
        },
        {
          name: 'Border left',
          property: 'border-left',
          type: 'composite',
          properties: [{
            name: 'Width',
            type: 'integer',
            units: ['px', 'em', 'rem'],
            property: 'border-left-width',
          }, {
            name: 'Style',
            type: 'select',
            property: 'border-left-style',
            options: [{
                value: 'none'
              },
              {
                value: 'solid'
              },
              {
                value: 'dotted'
              },
              {
                value: 'dashed'
              },
              {
                value: 'double'
              },
              {
                value: 'groove'
              },
              {
                value: 'ridge'
              },
              {
                value: 'inset'
              },
              {
                value: 'outset'
              }
            ]
          }, {
            name: 'Color',
            type: 'color',
            property: 'border-left-color',
          }]
        },
        {
          name: 'Border bottom',
          property: 'border-bottom',
          type: 'composite',
          properties: [{
            name: 'Width',
            type: 'integer',
            units: ['px', 'em', 'rem'],
            property: 'border-bottom-width',
          }, {
            name: 'Style',
            type: 'select',
            property: 'border-bottom-style',
            options: [{
                value: 'none'
              },
              {
                value: 'solid'
              },
              {
                value: 'dotted'
              },
              {
                value: 'dashed'
              },
              {
                value: 'double'
              },
              {
                value: 'groove'
              },
              {
                value: 'ridge'
              },
              {
                value: 'inset'
              },
              {
                value: 'outset'
              }
            ]
          }, {
            name: 'Color',
            type: 'color',
            property: 'border-bottom-color',
          }]
        },
        {
          name: 'Border top',
          property: 'border-top',
          type: 'composite',
          properties: [{
            name: 'Width',
            type: 'integer',
            units: ['px', 'em', 'rem'],
            property: 'border-top-width',
          }, {
            name: 'Style',
            type: 'select',
            property: 'border-top-style',
            options: [{
                value: 'none'
              },
              {
                value: 'solid'
              },
              {
                value: 'dotted'
              },
              {
                value: 'dashed'
              },
              {
                value: 'double'
              },
              {
                value: 'groove'
              },
              {
                value: 'ridge'
              },
              {
                value: 'inset'
              },
              {
                value: 'outset'
              }
            ]
          }, {
            name: 'Color',
            type: 'color',
            property: 'border-top-color',
          }]
        }
      ]
    }, {
      name: 'Background',
      open: false,
      buildProps: ['background-color', 'background']
    }, {
      name: 'Shadow',
      open: false,
      buildProps: ['text-shadow', 'box-shadow']
    }, {
      name: 'Position',
      open: false,
      buildProps: ['position', "left", "top", "right", "bottom"]
    }, {
      name: 'Extra',
      open: false,
      buildProps: ['overflow', 'transition', 'transform'],
    }],
    clearProperties: true,
  },
});

editor.Panels.addPanel({
  id: 'panel-top',
  el: '.panel-top',
});
editor.Panels.addPanel({
  id: 'project-actions',
  el: '.panel-top__project-actions',
  buttons: [{
      id: 'visibility',
      active: true, // active by default
      className: 'btn-toggle-borders fa fa-square-o',
      command: 'sw-visibility', // Built-in command
      context: 'sw-visibility'
    }, {
      id: 'fullscreen',
      command: 'fullscreen',
      context: 'fullscreen',
      className: 'fa fa-arrows-alt'
    },
    {
      id: 'export',
      className: 'btn-open-export fa fa-code',
      command: 'export-template',
      context: 'export-template', // For grouping context of buttons from the same panel
    }, {
      id: 'preview',
      context: 'preview',
      command: e => e.runCommand('preview'),
      className: 'fa fa-eye',
    }, {
      id: 'show-json',
      className: 'btn-show-json',
      label: 'JSON',
      context: 'show-json',
      command(editor) {
        editor.Modal.setTitle('Components JSON')
          .setContent(`<textarea style="width:100%; height: 250px;">
            ${JSON.stringify(editor.getComponents())}
          </textarea>`)
          .open();
      },
    }
  ],
});

editor.Commands.add('set-device-desktop', {
  run: editor => editor.setDevice('Desktop')
});
editor.Commands.add('set-device-tablet', {
  run: editor => editor.setDevice('Tablet')
});
editor.Commands.add('set-device-mobile', {
  run: editor => editor.setDevice('Mobile')
});

/*const blockManager = editor.BlockManager;
blockManager.add('my-first-block', {
  label: 'Simple block',
  content: '<div class="my-block">This is a simple block</div>',
});*/