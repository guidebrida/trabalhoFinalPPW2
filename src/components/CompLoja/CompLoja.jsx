import { Card, Col, Row } from 'antd';
import { CompFunkoCard } from '../CompFunkoCard/CompFunkoCard';

export const CompLoja = () => (
  <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
 <CompFunkoCard/>
      </Col>
      <Col span={8}>
 <CompFunkoCard/>
      </Col>
      <Col span={8}>
      <Col span={8}>
 <CompFunkoCard/>
      </Col>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={8}>
 <CompFunkoCard/>
      </Col>
      <Col span={8}>
 <CompFunkoCard/>
      </Col>
      <Col span={8}>
      <Col span={8}>
 <CompFunkoCard/>
      </Col>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={8}>
 <CompFunkoCard/>
      </Col>
      <Col span={8}>
 <CompFunkoCard/>
      </Col>
      <Col span={8}>
      <Col span={8}>
 <CompFunkoCard/>
      </Col>
      </Col>
    </Row>
  </div>
);
