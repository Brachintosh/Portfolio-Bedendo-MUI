import { createTheme, } from '@material-ui/core/styles';
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import MyWork from "./components/MyWork";
import ContactMe from "./components/ContactMe";
import ScrollToTop from "./components/ScrollToTop";
import FooterBrand from "./components/FooterBrand";
import { makeStyles, MuiThemeProvider } from "@material-ui/core";
import { brown, amber } from "@material-ui/core/colors";

const theme = createTheme({
  palette:{
    primary:{main:"#b26500"},
    secondary:{main:"#343434"},
    third: {main: "#D7A86E"},
   }
})

function App() {
  
const classes = useStyles();

  return (
  <MuiThemeProvider theme={theme}>
    <div className={classes.root}>   
      <NavBar />
      <ScrollToTop hidden showBelow={150}/>
      <About id="about" title="About Me" dark={true} />
      <Skills id="skills" title="My Coding Experience" dark={false} />
      <MyWork id="work" title="My Works" dark={true} />
      <ContactMe id="contact" title="Get in Touch" dark={false} />
      <FooterBrand />
    </div>
  </MuiThemeProvider>
  );
};

// Material UI settings hook >> useStyles:
const useStyles = makeStyles((theme) =>({
  // ClassName:
  root:{
    color: "#b26500"
  }
}))

export default App;
