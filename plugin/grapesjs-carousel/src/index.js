import grapesjs from 'grapesjs';
import loadBlocks from './blocks';
import loadComponents from './components';

export default grapesjs.plugins.add('carousel', (editor, opts = {}) => {
  let c = opts;

  loadBlocks(editor, c);
  loadComponents(editor, c);
});
