import { Container, Menu, Grid, Icon, Label } from 'semantic-ui-react';
import Link from 'next/Link';

import React, { useState } from 'react'
import BasicModal from '../../Modal/BasicModal';
import Auth from '../../Auth';

const MenuWeb = () => {

    const [showModal, setShowModal] = useState(false);

    const onShowModal = () => setShowModal(true);

    return (
        <div className="menu">
            <Container>
                <Grid>
                    <Grid.Column className="menu__left" width={6}>
                        <MenuPlatforms />
                    </Grid.Column>
                    <Grid.Column className="menu__right" width={10}>
                        <MenuOptions onShowModal={onShowModal} />
                    </Grid.Column>
                </Grid>
            </Container>    
            <BasicModal 
                show={showModal} 
                setShow={setShowModal} 
                title="Inicia Sesión"
                size="small"
            >
                <Auth />
            </BasicModal>
        </div>
    )
}

export default MenuWeb;

function MenuPlatforms() {
    return (
        <Menu>
            <Link href="/play-station">
                <Menu.Item as="a">PlayStation</Menu.Item>
            </Link>
            <Link href="/xbox">
                <Menu.Item as="a">Xbox</Menu.Item>
            </Link>
            <Link href="/switch">
                <Menu.Item as="a">Switch</Menu.Item>
            </Link>
        </Menu>
    )
}

function MenuOptions({onShowModal}) {


    return (
        <Menu>
            <Menu.Item onClick={onShowModal}>
                <Icon name="user outline" />
                Mi cuenta
            </Menu.Item>
        </Menu>
    );
}