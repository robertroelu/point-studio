export const video = () => {
  const getLinks = document.querySelectorAll('[video-link]');
  if (!getLinks) return;

  getLinks.forEach((elLink) => {
    const linkValue = elLink.getAttribute('video-link');
    const thumbnailLinkValue = elLink.getAttribute('thumbnail-link');

    const videoEl = `<div data-poster-url="${thumbnailLinkValue}" data-video-urls="${linkValue}" data-autoplay="true" data-loop="true" data-wf-ignore="true" class="home_work_video w-background-video w-background-video-atom"><video id="83f4c1bc-8db0-a962-e80e-cebf1cde13a7-video" autoplay="" loop="" style="background-image:url(&quot;${thumbnailLinkValue}&quot;)" muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover"><source src="${linkValue}" data-wf-ignore="true"></video></div>`;

    elLink.innerHTML = videoEl;
  });
};
