// @flow
import React from 'react';
import type { Node } from 'react';

import Cookies from 'js-cookie';

import Input from '@material-ui/core/Input';

import { UpdateAccountSubmitRoute, LoginRoute } from '../routes';
import SimpleForm from './SimpleForm';

const UpdateAccount = (): Node => (
  <SimpleForm
    formName="Update Account"
    submitText="Update"
    submitRoute={UpdateAccountSubmitRoute}
    onSubmit={() => alert('Account updated.')}
    onFail={() => {
      window.location.href = `/#${LoginRoute}`;
    }}
  >
    <Input
      id="name"
      autoComplete="name"
      defaultValue={Cookies.get('name')}
      required
    />
    <Input
      id="address"
      autoComplete="address"
      defaultValue={Cookies.get('address')}
      required
    />
    <Input id="bankAccount" />
    <Input
      id="email"
      autoComplete="email"
      defaultValue={Cookies.get('email')}
      required
    />
    <Input id="password" type="password" required />
    <Input id="confirm-password" type="password" required />
  </SimpleForm>
);

export default UpdateAccount;
