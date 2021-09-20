import "./App.css";
import "../styles/global.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CompetitionPage from "../component/Pages/CompetitionPage/CompetitionPage.js";
import CompetitionsPage from "../component/Pages/CompetitionsPage/CompetitionsPage";
import TeamsPage from "../component/Pages/TeamsPage/TeamsPage";
import TeamMatches from "../component/Pages/TeamMatches/TeamMatches";
import MatchesPage from "../component/Pages/MatchesPage/MatchesPage";
import MatchPage from "../component/Pages/MatchPage/MatchPage";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={CompetitionsPage} />
        <Route
          exact
          path="test-app/competitions/:id"
          component={CompetitionPage}
        />
        <Route
          exact
          path="test-app/competitions/:id/teams"
          component={TeamsPage}
        />
        <Route exact path="test-app/matches" component={MatchesPage} />
        <Route exact path="test-app/matches/:id" component={MatchPage} />
        <Route
          exact
          path="test-app/teams/:id/matches"
          component={TeamMatches}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
