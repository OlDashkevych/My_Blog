import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BlockLoading } from 'react-loadingg';
import routes from '../routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<BlockLoading />}>
        <Switch>
          {routes.map(({ Component, path, label, exact }) => (
            <Route path={path} key={label} exact={exact}>
              <Component />
            </Route>
          ))}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
