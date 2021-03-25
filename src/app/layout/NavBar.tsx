import { observer } from 'mobx-react-lite';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';

export default observer(function NavBar()  {
  const { commonStore} = useStore();
  const { menuDisabled } = commonStore;
  return (
    <div>
      <Menu fixed="top" inverted >
        <Container>
        <Menu.Item header as={NavLink} exact to="/" disabled={menuDisabled}>
            <img
              src="/assets/logo.png"
              alt="logo"
              style={{ marginRight: 10 }}
            />
            Symphony
          </Menu.Item>
          <Menu.Item name="Capture" as={NavLink} to="/capture" disabled={menuDisabled} />             
        </Container>
      </Menu>
    </div>
  );
});