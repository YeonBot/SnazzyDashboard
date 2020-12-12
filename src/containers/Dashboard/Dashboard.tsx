import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import SideBarBody from '../SideBar/SideBarBody';
import BookMarkCard from '../../containers/BookMarkCard';
import FavoriteCard from '../../containers/FavoriteCard';

import style from './Dashboard.module.scss';

class Dashboard extends Component {
    render() {
        return (
            <div className={style.Dashboard}>
                <Container className={style.Dashboard__container}>
                    <div className={style.Dashboard__row}>
                        <div className={style.Dashboard__row__sidebar}>
                            <SideBarBody/>
                        </div>
                        <BookMarkCard/>
                    </div>
                </Container>
                <Container className={style.Dashboard__container__bottom}>
                    <Row className={style.Dashboard__row__bottom}>
                        <Col>
                            <FavoriteCard/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Dashboard;