import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


const WebpContext = React.createContext(0);

class WebpProvider extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {
    webp: 0,
  }

  componentDidMount = () => {
    this.supportsWebp().then(
      support => this.setState({ webp: support ? 2 : 1 })
    );
  }


  supportsWebp = async () => {
    if (!createImageBitmap) return false;

    const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
    const blob = await fetch(webpData).then(r => r.blob());
    return createImageBitmap(blob).then(() => true, () => false);
  }

  render = () => {
    const { webp } = this.state;
    const { children } = this.props;
    return (
      <WebpContext.Provider value={webp}>
        {children}
      </WebpContext.Provider>
    );
  }
}

export { WebpProvider, WebpContext };
