import React from 'react'
import Helmet from 'react-helmet'

export default () => (
  <>
    <Helmet>
      <script>
        {`
          var disqus_config = function () {
            this.page.url = document.location.href.split('?')[0].split('#');
            this.page.identifier = this.page.url;
          };
          (function() {
          var d = document, s = d.createElement('script');
          s.src = 'https://aiven715.disqus.com/embed.js';
          s.setAttribute('data-timestamp', +new Date());
          (d.head || d.body).appendChild(s);
          })();
        `}
      </script>
    </Helmet>
    <div id="disqus_thread" />
    <noscript>Please enable JavaScript to view the comments</noscript>
  </>
)
