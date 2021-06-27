import { select } from './selector.js';
import { closeProductModal } from './modalOperations.js';

const closeDialog = select('.btn--passive');

closeDialog.addEventListener('click', closeProductModal);


