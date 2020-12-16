import React, {Component} from 'react';
import Sidebar from "react-sidebar";
import {Container, Row, Col, Button} from 'reactstrap';

import SideBarBody from '../SideBar/SideBarBody';
import BookMarkCard from '../../containers/BookMarkCard';
import FavoriteCard from '../../containers/FavoriteCard';

import style from './Dashboard.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";


type Props = {}

type States = {
    sidebarOpen: boolean;
}

class Dashboard extends Component<Props, States> {
    constructor(props: any) {
        super(props);
        this.state = {
            sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.toggleSetSidebarOpen = this.toggleSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open: boolean) {
        this.setState({sidebarOpen: open});
    }

    toggleSetSidebarOpen() {
        const {sidebarOpen} = this.state;
        this.setState((prev) => ({sidebarOpen: !sidebarOpen}));

        if (sidebarOpen) {
            // @ts-ignore
            document.getElementById('sidebarId').classList.remove(style['Dashboard__animation-reset']);
            // @ts-ignore
            document.getElementById('sidebarId').classList.add(style.Dashboard__animation);
        } else {
            // @ts-ignore
            document.getElementById('sidebarId').classList.remove(style.Dashboard__animation);
            // @ts-ignore
            document.getElementById('sidebarId').classList.add(style['Dashboard__animation-reset']);
        }
    }

    render() {
        return (
            <div className={style.Dashboard}>
                <Container className={style.Dashboard__container}>
                    <div className={style.Dashboard__row}>
                        <div className={style.Dashboard__row__sidebar}>
                            <Sidebar
                                sidebar={
                                    <SideBarBody toggleSetSidebarOpen={this.toggleSetSidebarOpen}/>
                                }
                                shadow={false}
                                open={this.state.sidebarOpen}
                                onSetOpen={this.onSetSidebarOpen}
                                sidebarId={'sidebarId'}
                                rootClassName={style['Dashboard__row__sidebar-root']}
                                sidebarClassName={style['Dashboard__row__sidebar-sidebar']}
                                overlayClassName={style['Dashboard__row__sidebar-overlay']}
                                contentClassName={style['Dashboard__row__sidebar-overlay']}
                            >
                                <span/>
                            </Sidebar>
                            <div className={style.Dashboard__row__sidebar__openBtn}>
                                <Button color="dark" onClick={this.toggleSetSidebarOpen}>
                                    <FontAwesomeIcon icon={this.state.sidebarOpen ? faChevronLeft : faChevronRight} size='lg'/>
                                </Button>
                            </div>
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