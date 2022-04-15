import { makeStyles } from "@material-ui/core";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import MyWork from "./components/MyWork";
import ContactMe from "./components/ContactMe";
import ScrollToTop from "./components/ScrollToTop";
import FooterBrand from "./components/FooterBrand";

function App() {
  
const classes = useStyles();

  return (

    <div className={classes.root}>
      
      <NavBar />
      <ScrollToTop hidden showBelow={150}/>
      <About id="about" title="About Me" dark={true} />
      <Skills id="skills" title="My Coding Experience" dark={false} />
      <MyWork id="work" title="My Works" dark={true} />
      <ContactMe id="contact" title="Get in Touch" dark={false} />
      <FooterBrand />
    </div>

  );
};

// Material UI settings hook >> useStyles:
const useStyles = makeStyles((theme) =>({
  // ClassName:
  root:{
    color: "#616161"
  }
}))

export default App;
