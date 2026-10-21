// Keep the site’s existing analytics property; previews do not send page views.
if (window.location.hostname === 'husker.github.io') {
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-MB5QQJH8N9');
  const analytics = document.createElement('script');
  analytics.async = true;
  analytics.src = 'https://www.googletagmanager.com/gtag/js?id=G-MB5QQJH8N9';
  document.head.appendChild(analytics);
}
