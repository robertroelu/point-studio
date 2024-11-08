//Finsweet attributes
import { linkblockedit } from '@finsweet/attributes-linkblockedit';

//Modal
// import { modal } from '$modal/modal';

//Nest
// import { nestedElement } from './nest/nestElement';

//Utils
// import { swipers } from '$utils/swipers';
import { splides } from '$utils/splides';
import { hoverAnimation } from '$utils/hover';
import { timer } from '$utils/timer';
import { video } from '$utils/video';
import { animation } from '$utils/animation';
import { back } from '$utils/back';
import { scroll } from '$utils/scroll';
import { cta } from '$utils/cta';
import { work } from '$utils/work';
import { createdBy } from '$utils/createdBy';

window.Webflow ||= [];
window.Webflow.push(() => {
  // nestedElement();
  // modal();
  // swipers();
  linkblockedit();
  animation();
  back();
  scroll();
  cta();
  splides();
  hoverAnimation();
  timer();
  video();
  work();
  createdBy();
});
