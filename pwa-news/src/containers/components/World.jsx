import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { createMarkup } from '../../utils';
import { useHistory } from 'react-router-dom';

function World({ values }) {
    const history = useHistory()

    const renderImg = ({ image, description }) =>
        <img src={image.url} alt={description} width='100%' />

    const open = (id) => {
        history.push(`/World/${id}`)
    }

    const renderPost = (post, index) => {
        const { title, image, description, id } = post
        const isFirst = index === 0
        const spanValue = isFirst ? 24 : 12
        return (
            <Col span={spanValue} md={16} key={`post - ${index}`}>
                <article onClick={() => open(id)}>
                    <p>
                        <strong dangerouslySetInnerHTML={createMarkup(title)} />
                    </p>
                    {isFirst && renderImg({ image, description })}
                </article>
            </Col>
        )
    }

    return (
        <Row gutter={[16, 16]}>
            {values?.map(renderPost)}
        </Row>
    );
}

World.defaultProps = {
    values: []
}

World.propTypes = {
    values: PropTypes.array.isRequired
}

export default memo(World);