import { makeStyles } from "@material-ui/core";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import MyWork from "./components/MyWork";
import ContactMe from "./components/ContactMe";

function App() {
  
const classes = useStyles();

  return (

    <div className={classes.root}>
      
      <NavBar />
      <About />
      <Skills />
      <MyWork />
      <ContactMe />

    </div>

  );
};

// Material UI settings hook >> useStyles:
const useStyles = makeStyles((theme) =>({
  // ClassName:
  root:{
    color: "#123412"
  }
}))

export default App;
