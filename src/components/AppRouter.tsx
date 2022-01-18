import { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { privateRoutes, RouteNames } from "../routes";
import { publicRoutes } from "./../routes";

const AppRouter: FC = (props) => {
	const auth = true;
	
    return auth ? (
        <Switch>
            {privateRoutes.map(({ path, component, exact }) => (
				<Route path={path} exact={exact} component={component} key={path}/>
			))}
			<Redirect to={RouteNames.LOGIN}/>
        </Switch>
    ) : (
        <Switch>
            {publicRoutes.map(({ path, component, exact }) => (
                <Route path={path} exact={exact} component={component} key={path}/>
			))}
			<Redirect to={RouteNames.EVENT}/>
        </Switch>
    );
};

export default AppRouter;
