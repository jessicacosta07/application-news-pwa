import React, { memo } from 'react';
import { Row, Col } from 'antd';

function Home() {
    return (
        <div>
            <Row gutter={[16, 16]}>
                <Col span={24} md={16}>
                    <h2>World</h2>
                </Col>
            </Row>
            <hr />
            <Row gutter={[16, 16]}>
                <Col span={24} md={16}>
                    <h2>Economy</h2>
                </Col>
            </Row>
            <hr />
            <Row gutter={[16, 16]}>
                <Col span={24} md={16}>
                    <h2>Technology</h2>
                </Col>
            </Row>

        </div>
    );
}

export default memo(Home);