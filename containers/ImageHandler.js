import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ImageBackground from '../components/ImageBackground';
import { WebpContext } from '../util/webpContext';

class ImageHandler extends PureComponent {
  static contextType = WebpContext

  static propTypes = {
    baseUrl: PropTypes.string.isRequired,
    done: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
    };

    this.getImage = this._getImage();
  }

  _getImage = () => {
    let fetched = false;
    return () => {
      const webp = this.context;
      if (!fetched && webp) {
        (async () => {
          const { baseUrl, gradient, done } = this.props;
          if (gradient) {
            fetched = true;
            setTimeout(() => {
              this.setState({ imageUrl: gradient }, done);
            }, 100);
          } else {
            const postfix = webp > 1 ? 'webp' : 'jpg';
            const contentType = `image/${postfix}`;

            const options = {
              url: `${baseUrl}.${postfix}`,
              method: 'get',
              responseType: 'blob',
            };

            try {
              let imageUrl;
              const { data } = await axios(options);
              const reader = new FileReader();
              reader.readAsDataURL(data);
              reader.onload = () => {
                imageUrl = `url(${reader.result})`;
                this.setState({ imageUrl }, done);
              };
            } catch (err) {
              console.log(err);
              this.setState({ imageUrl: '' }, done);
            } finally {
              fetched = true;
            }
          }
        })();
      }
      const { imageUrl } = this.state;
      return imageUrl;
    };
  }

  render = () => {
    const { baseUrl, done, ...rest } = this.props;
    return (
      <ImageBackground {...rest} imageUrl={this.getImage()} />
    );
  };
}

export default ImageHandler;
