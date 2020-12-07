import React, {PureComponent} from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import pc from './parameters';

class DynamicEQ extends PureComponent {
  static defaultProps = {
    channelName: null
  };

  static propTypes = {
    isDynamicEQOn: PropTypes.bool.isRequired,
    dynamicEQType: PropTypes.string.isRequired,
    dynamicEQFrequency: PropTypes.string.isRequired,
    dynamicEQGain: PropTypes.number.isRequired,
    dynamicEQQ: PropTypes.string.isRequired,
    dynamicEQShelving: PropTypes.string.isRequired,
    dynamicEQAttack: PropTypes.string.isRequired,
    dynamicEQRelease: PropTypes.string.isRequired,
    dynamicEQRatio: PropTypes.string.isRequired,
    dynamicEQThreshold: PropTypes.number.isRequired,
    group: PropTypes.string.isRequired,
    channelId: PropTypes.string.isRequired,
    channelName: PropTypes.string,
    onChange: PropTypes.func.isRequired
  };

  render() {
    const {
      channelName,
      isDynamicEQOn,
      dynamicEQType,
      dynamicEQFrequency,
      dynamicEQGain,
      dynamicEQQ,
      dynamicEQShelving,
      dynamicEQAttack,
      dynamicEQRelease,
      dynamicEQRatio,
      dynamicEQThreshold,
      group,
      channelId,
      onChange
    } = this.props;

    return (
      <Card>
        <Card.Header>
          {channelName
            ? `${channelId} . ${channelName}`
            : `Channel ${channelId}`}
        </Card.Header>
        <Card.Body>
          <pc.IsDynamicEQOn
            isTrue={isDynamicEQOn}
            group={group}
            channelId={channelId}
            onChange={onChange}
          />
          <Row>
            <Col md={12} lg={6}>
              <pc.DynamicEQType
                hasLabel
                value={dynamicEQType}
                group={group}
                channelId={channelId}
                onChange={onChange}
              />
            </Col>
            <Col md={12} lg={6}>
              <pc.DynamicEQFrequency
                hasLabel
                value={dynamicEQFrequency}
                group={group}
                channelId={channelId}
                onChange={onChange}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={6}>
              {dynamicEQType === 'Bandpass' && (
                <pc.DynamicEQQ
                  hasLabel
                  value={dynamicEQQ}
                  group={group}
                  channelId={channelId}
                  onChange={onChange}
                />
              )}
              {dynamicEQType !== 'Bandpass' && (
                <pc.DynamicEQShelving
                  hasLabel
                  value={dynamicEQShelving}
                  group={group}
                  channelId={channelId}
                  onChange={onChange}
                />
              )}
            </Col>
            <Col md={12} lg={6}>
              <pc.DynamicEQAttack
                hasLabel
                value={dynamicEQAttack}
                group={group}
                channelId={channelId}
                onChange={onChange}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={6}>
              <pc.DynamicEQRelease
                hasLabel
                value={dynamicEQRelease}
                group={group}
                channelId={channelId}
                onChange={onChange}
              />
            </Col>
            <Col md={12} lg={6}>
              <pc.DynamicEQRatio
                hasLabel
                value={dynamicEQRatio}
                group={group}
                channelId={channelId}
                onChange={onChange}
              />
            </Col>
          </Row>
          <pc.DynamicEQGain
            hasLabel
            value={dynamicEQGain}
            group={group}
            channelId={channelId}
            onChange={onChange}
          />
          <pc.DynamicEQThreshold
            hasLabel
            value={dynamicEQThreshold}
            group={group}
            channelId={channelId}
            onChange={onChange}
          />
        </Card.Body>
      </Card>
    );
  }
}

export default DynamicEQ;
