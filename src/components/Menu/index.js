import React from 'react';
import QRCode from 'react-native-qrcode-generator';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Code, Nav, NavItems, NavText, SignOutButton, SignOutButtonText } from './style';

export default function Menu({ translateY }){
    return(
        <Container style={{
            opacity: translateY.interpolate({
              inputRange: [0, 150],
              outputRange: [0, 1],
            })
          }}>
            <Code>
                <QRCode
                    value="https://rocketseat.com.br"
                    size={80}
                    fgColor="#fff"
                    bgColor="#8B10AE">
                </QRCode>
            </Code>

            <Nav>
                <NavItems>
                    <Icon name="help-outline" size={20} color="#fff" />
                    <NavText>Me Ajuda</NavText>
                </NavItems>
                <NavItems>
                    <Icon name="person-outline" size={20} color="#fff" />
                    <NavText>Perfil</NavText>
                </NavItems>
                <NavItems>
                    <Icon name="credit-card" size={20} color="#fff" />
                    <NavText>Configurar Cartão</NavText>
                </NavItems>
                <NavItems>
                    <Icon name="smartphone" size={20} color="#fff" />
                    <NavText>Configurações do App</NavText>
                </NavItems>
            </Nav>

            <SignOutButton onPress={() => {}}>
                <SignOutButtonText>Sair do APP</SignOutButtonText>
            </SignOutButton>

        </Container>
    );
}