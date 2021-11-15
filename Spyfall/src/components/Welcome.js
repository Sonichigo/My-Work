import "../App.css";
import Header from "./Header";
import Sidebar from "./SideBar";
import CreateFeed from "./CreateFeed";
import Quests from "./Quests";
import Grid from "@react-css/grid";

function Welcome() {
  return (
    <div className="App">
      <Header />
      <br />
      <Grid columns="20% auto 20%" gap="1em">
        <Sidebar />
        <CreateFeed />
        <Quests />
      </Grid>
    </div>
  );
}

export default Welcome;
