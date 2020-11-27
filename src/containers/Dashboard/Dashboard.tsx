import React, {Component} from 'react';
import { Container,Row,Col } from 'reactstrap';

import SideBarCard from '../SideBar/SideBarBody';
import BookMarkCard from '../../containers/BookMarkCard';
import FavoriteCard from '../../containers/FavoriteCard';

import style from './Dashboard.module.scss';

class Dashboard extends Component {
    render() {
        return (
            <div className={style.Dashboard}>
                <Container className={style.Dashboard__container}>
                    <Row className={style.Dashboard__row}>
                        <Col xs="6" sm="4">
                            <SideBarCard/>
                        </Col>
                        <Col xs="12" sm="8">
                            <BookMarkCard/>
                        </Col>
                    </Row>
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