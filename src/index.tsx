import { render } from 'react-dom';
import { Helmet } from 'react-helmet';

import GlobalStyle from '~/styles';
import App from '~/components';
import { MediaProvider } from '~/state';

const appRoot = document.createElement('div');
document.body.appendChild(appRoot);

render((
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      />
    </Helmet>

    <GlobalStyle />

    <MediaProvider>
      <App />
    </MediaProvider>
  </>
), appRoot);
