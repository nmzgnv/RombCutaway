import React from 'react';
import PropTypes from 'prop-types';
import Nick from '../img/team/Nick.png'
import {Panel, PanelHeader, Header, Button, SimpleCell, Group, Cell, Div, Avatar, Text} from '@vkontakte/vkui';

const Cutaway = ({ id, go}) => (
  <Panel id={id}>
    <PanelHeader>Визитка</PanelHeader>
    <Group>
      <Div>
        <SimpleCell style={{marginBottom: 20}} before={<Avatar src={Nick} size={96}/>}>Мозганов Николай</SimpleCell>
        <SimpleCell style={{marginBottom: 20}} before={<Avatar src={Nick} size={96}/>}>Мозганов Николай</SimpleCell>
        <SimpleCell style={{marginBottom: 20}} before={<Avatar src={Nick} size={96}/>}>Мозганов Николай</SimpleCell>
        <SimpleCell style={{marginBottom: 20}} before={<Avatar src={Nick} size={96}/>}>Мозганов Николай</SimpleCell>
      </Div>
    </Group>
  </Panel>
);

export default Cutaway;
