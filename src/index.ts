//Finsweet attributes
import { linkblockedit } from '@finsweet/attributes-linkblockedit';

//Modal
// import { modal } from '$modal/modal';

//Nest
// import { nestedElement } from './nest/nestElement';

//Utils
// import { swipers } from '$utils/swipers';
import { splides } from '$utils/splides';

window.Webflow ||= [];
window.Webflow.push(() => {
  // nestedElement();
  linkblockedit();
  // modal();
  // swipers();
  splides();
});