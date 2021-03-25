import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../stores/store';
import { Menu, MenuItem } from '@progress/kendo-react-layout';

export default observer(function NavBar()  {
  const { commonStore} = useStore();
  const { menuDisabled } = commonStore;

  function handleOnSelect(e: any) {
    console.log(e);
  }
  return (
    <div>
      <Menu onSelect={handleOnSelect}>       
        <MenuItem  disabled={menuDisabled}>
            <img
              src="/assets/logo.png"
              alt="logo"
              style={{ marginRight: 10 }}
            />
            Symphony
          </MenuItem>
          <MenuItem text="Capture" disabled={menuDisabled} data={{route: '/capture'}} />
      </Menu>
    </div>
  );
});