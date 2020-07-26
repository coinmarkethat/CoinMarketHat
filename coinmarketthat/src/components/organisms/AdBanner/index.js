import React from 'react';

import { Card, Button } from 'react-bootstrap';
import { Div } from '../../atoms';
import './styles.scss';

class AdBanner extends React.Component {
  render() {
    const { theme } = this.props;
    return (
      <Div>
        <Card>
          <Card.Body>Ads</Card.Body>
        </Card>
      </Div>
    );
  }
}

export default AdBanner;
