import React from 'react';
import { Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { insertDocument } from '../../api/documents/methods.js';

const callMethod = (index) => {
  insertDocument.call({ title: `Document #${index + 1}` }, (error) => {
    if (error) Bert.alert(error.reason, 'danger');
  });
};

const swarm = () => { for (let i = 0; i < 25; i++) { callMethod(i); } };

export const Index = () => (
  <Button onClick={ swarm } bsStyle="success">Call insertDocument Method</Button>
);
