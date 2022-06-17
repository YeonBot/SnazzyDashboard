import React, { useState } from 'react';
import {
  Modal, ModalBody, Input, FormGroup,
} from 'reactstrap';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SIDEBAR } from '../../../constants/preference';

import styles from './PreferenceModal.module.scss';

type Props = {
  isOpen: boolean;
  toggle: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function PreferenceModal({
  isOpen, toggle, darkMode, toggleDarkMode,
}: Props) {
  const [selectedSideBarKey, changeSideBarKey] = useState<string>(SIDEBAR.WIDGET.GITHUB.KEY);
  const [SelectedComp, changeComp] = useState<any>(SIDEBAR.WIDGET.GITHUB.COMP);

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      centered
      className={styles.PreferenceModal}
      backdropClassName={styles.PreferenceModal__backdrop}
    >

      <ModalBody className={styles.PreferenceModal__body}>
        <div className={styles.PreferenceModal__sidebar}>
          <div className={styles.PreferenceModal__sidebar__title}>Widget</div>
          {
            Object.keys(SIDEBAR.WIDGET).map((sidebarkey) => {
              const { ICON } = SIDEBAR.WIDGET[sidebarkey as keyof typeof SIDEBAR.WIDGET];
              return (
                <div
                  role="button"
                  tabIndex={0}
                  key={sidebarkey}
                  className={cx(
                    'PreferenceModal__sidebar__item',
                    { 'PreferenceModal__sidebar__item-selected': sidebarkey === selectedSideBarKey },
                  )}
                  onClick={() => {
                    changeSideBarKey(sidebarkey);
                    changeComp(SIDEBAR.WIDGET[sidebarkey as keyof typeof SIDEBAR.WIDGET].COMP);
                  }}
                  onKeyPress={() => {
                    changeSideBarKey(sidebarkey);
                    changeComp(SIDEBAR.WIDGET[sidebarkey as keyof typeof SIDEBAR.WIDGET].COMP);
                  }}
                >

                  <FontAwesomeIcon icon={ICON} size="lg" />
                  {SIDEBAR.WIDGET[sidebarkey as keyof typeof SIDEBAR.WIDGET].LABEL}

                </div>
              );
            })
          }
          <span className={cx('PreferenceModal__sidebar__hr')}>
            <hr />
          </span>
          <div className={styles.PreferenceModal__sidebar__title}>Favorite</div>
          {
            Object.keys(SIDEBAR.FAVORITE).map((sidebarkey) => {
              const { ICON } = SIDEBAR.FAVORITE[sidebarkey as keyof typeof SIDEBAR.FAVORITE];
              return (
                <div
                  role="button"
                  tabIndex={0}
                  key={sidebarkey}
                  className={cx(
                    'PreferenceModal__sidebar__item',
                    { 'PreferenceModal__sidebar__item-selected': sidebarkey === selectedSideBarKey },
                  )}
                  onClick={() => {
                    changeSideBarKey(sidebarkey);
                    changeComp(SIDEBAR.FAVORITE[sidebarkey as keyof typeof SIDEBAR.FAVORITE].COMP);
                  }}
                  onKeyPress={() => {
                    changeSideBarKey(sidebarkey);
                    changeComp(SIDEBAR.FAVORITE[sidebarkey as keyof typeof SIDEBAR.FAVORITE].COMP);
                  }}
                >
                  <FontAwesomeIcon icon={ICON} size="lg" />
                  {SIDEBAR.FAVORITE[sidebarkey as keyof typeof SIDEBAR.FAVORITE].LABEL}
                </div>
              );
            })
          }
          <span className={cx('PreferenceModal__sidebar__hr')}>
            <hr />
          </span>
          <div className={cx('PreferenceModal__sidebar__darkmode')}>
            <div className={cx('PreferenceModal__sidebar__darkmode__label')}>
              <FontAwesomeIcon icon={SIDEBAR.DARKMODE.ICON} size="lg" />
              {SIDEBAR.DARKMODE.LABEL}
            </div>
            <FormGroup switch>
              <Input
                type="switch"
                id="themeSwitch"
                name="customSwitch"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
            </FormGroup>
          </div>
        </div>
        <div className={styles.PreferenceModal__content}>
          {SelectedComp}
        </div>
      </ModalBody>
    </Modal>
  );
}

export default PreferenceModal;
