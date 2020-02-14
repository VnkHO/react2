import React, { Component } from 'react';
import styled from 'styled-components';
import { Portal, elevation, transition, colors, absolute } from 'Utilities';
import Icon from './Icon';
// import { Card } from './Cards';

export default class Modal extends Component {
    render() {
        const { children, toggle, on } = this.props;
        return (
            <Portal>
                {on && (
                    <ModalWrapper>
                        <ModalCard>
                            <CloseButton onClick={toggle}>
                                <Icon color="red" name="close" />
                            </CloseButton>
                            <div>{children}</div>
                        </ModalCard>
                        <Background onClick={toggle} />
                    </ModalWrapper>
                )}
            </Portal>
        );
    }
}

const ModalWrapper = styled.div`
    ${absolute({})}
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// const ModalCard = Card.extend`
//     position: relative;
//     min-width: 320px;
//     z-index: 10;
//     margin-bottom: 100px;
// `;

const ModalCard = styled.div`
    position: relative;
    min-width: 320px;
    z-index: 10;
    margin-bottom: 100px;
    background: white;
    border-radius: 5px;
    padding: 20px;
    color: ${colors.purple}
    ${elevation[4]};
    ${transition({
    ease: 'ease-in',
    length: '1s'
})};
    &:hover {
        ${elevation[5]};
    }
`;

const CloseButton = styled.button`
    ${absolute({
    y: 'top',
    x: 'right'
})}
    border: none;
    background: transparent;
    padding: 10px;
`;

const Background = styled.div`
    ${absolute({})};
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
`;
