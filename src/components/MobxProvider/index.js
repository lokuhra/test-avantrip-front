import React from 'react';
import { Provider } from 'mobx-react';
import stores from '../../store';

export default ({ children }) => <Provider {...stores}>{children}</Provider>;
