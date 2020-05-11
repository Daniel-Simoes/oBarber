import React, { forwardRef } from 'react';
import { MdMail } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Container, TInput } from './styles';

function Input({ style, icon, ...rest }, ref) {
    return (
        <Container style={style}>
            {icon && (
                <MdMail
                    name={icon}
                    size={20}
                    color="rgba(255, 255, 255, 0.5)"
                />
            )}
            <TInput {...rest} ref={ref} />
        </Container>
    );
}

Input.propTypes = {
    icon: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
    icon: null,
    style: {},
};

export default forwardRef(Input);
