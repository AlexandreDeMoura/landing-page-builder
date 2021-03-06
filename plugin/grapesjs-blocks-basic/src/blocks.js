export default function (editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  let blocks = c.blocks;
  let stylePrefix = c.stylePrefix;
  const flexGrid = c.flexGrid;
  const basicStyle = c.addBasicStyle;
  const clsRow = `${stylePrefix}row`;
  const clsCell = `${stylePrefix}cell`;
  const styleRow = flexGrid ? `
    .${clsRow} {
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      flex-wrap: nowrap;
    }
    @media (max-width: 768px) {
      .${clsRow} {
        flex-wrap: wrap;
      }
    }` : `
    .${clsRow} {
      display: table;
      width: 100%;
    }
    @media (max-width: 768px) {
      .${stylePrefix}cell, .${stylePrefix}cell30, .${stylePrefix}cell70 {
        width: 100%;
        display: block;
      }
    }`;
  const styleClm = flexGrid ? `
    .${clsCell} {
      min-height: 75px;
      flex-grow: 1;
      flex-basis: 100%;
    }` : `
    .${clsCell} {
      width: 8%;
      display: table-cell;
      height: 75px;
    }`;
  const styleClm30 = `
  .${stylePrefix}cell30 {
    width: 30%;
  }`;
  const styleClm70 = `
  .${stylePrefix}cell70 {
    width: 70%;
  }`;

  const step = 0.2;
  const minDim = 1;
  const currentUnit = 1;
  const resizerBtm = {
    tl: 0,
    tc: 0,
    tr: 0,
    cl: 0,
    cr: 0,
    bl: 0,
    br: 0,
    minDim
  };
  const resizerRight = {
    ...resizerBtm,
    cr: 1,
    bc: 0,
    currentUnit,
    minDim,
    step
  };

  // Flex elements do not react on width style change therefore I use
  // 'flex-basis' as keyWidth for the resizer on columns
  if (flexGrid) {
    resizerRight.keyWidth = 'flex-basis';
  }

  const rowAttr = {
    class: clsRow,
    'data-gjs-droppable': `.${clsCell}`,
    'data-gjs-resizable': resizerBtm,
    'data-gjs-name': 'Row',
  };

  const colAttr = {
    class: clsCell,
    'data-gjs-draggable': `.${clsRow}`,
    'data-gjs-resizable': resizerRight,
    'data-gjs-name': 'Cell',
  };

  if (flexGrid) {
    colAttr['data-gjs-unstylable'] = ['width'];
    colAttr['data-gjs-stylable-require'] = ['flex-basis'];
  }

  // Make row and column classes private
  const privateCls = [`.${clsRow}`, `.${clsCell}`];
  editor.on('selector:add', selector =>
    privateCls.indexOf(selector.getFullName()) >= 0 && selector.set('private', 1))

  const attrsToString = attrs => {
    const result = [];

    for (let key in attrs) {
      let value = attrs[key];
      const toParse = value instanceof Array || value instanceof Object;
      value = toParse ? JSON.stringify(value) : value;
      result.push(`${key}=${toParse ? `'${value}'` : `"${value}"`}`);
    }

    return result.length ? ` ${result.join(' ')}` : '';
  }

  const toAdd = name => blocks.indexOf(name) >= 0;
  const attrsRow = attrsToString(rowAttr);
  const attrsCell = attrsToString(colAttr);

  toAdd('text') && bm.add('text', {
    label: c.labelText,
    category: c.category,
    attributes: {
      class: 'gjs-fonts gjs-f-text'
    },
    content: {
      type: 'text',
      content: 'Insert your text here',
      style: {},
      activeOnRender: 1
    },
  });

  toAdd('link') && bm.add('link', {
    label: c.labelLink,
    category: c.category,
    attributes: {
      class: 'fa fa-link'
    },
    content: {
      type: 'link',
      content: 'Link',
      style: {
        color: '#d983a6'
      }
    },
  });

  toAdd('image') && bm.add('image', {
    label: c.labelImage,
    category: c.category,
    attributes: {
      class: 'gjs-fonts gjs-f-image'
    },
    content: {
      style: {
        color: 'black'
      },
      type: 'image',
      activeOnRender: 1
    },
  });

  toAdd('video') && bm.add('video', {
    label: c.labelVideo,
    category: c.category,
    attributes: {
      class: 'fa fa-youtube-play'
    },
    content: {
      type: 'video',
      src: 'img/video2.webm',
      style: {
        height: '350px',
        width: '615px',
      }
    },
  });
}