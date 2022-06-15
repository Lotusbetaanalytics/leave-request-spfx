import * as React from 'react';
import './global.scss';
import { ILeaveRequestProps } from './ILeaveRequestProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as jQuery from 'jquery';
import { HashRouter, Route, Switch } from 'react-router-dom'
import HomeScreen from './Home';
import UserDashboard from './User/Dashboard';

export default class LeaveRequest extends React.Component<ILeaveRequestProps, {}> {
  public render(): React.ReactElement<ILeaveRequestProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
      <HashRouter>
        <Switch>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/dashboard' component={UserDashboard} />
        </Switch>
      </HashRouter>
    );
  }
}
