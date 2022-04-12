import { makeStyles } from "@material-ui/core";

function App() {
  const classes =useStyles();
  return (

    <div className={classes.root}>
      <h2>Brachintosh</h2>
    </div>
  );
}
const useStyles = makeStyles((theme) =>({
  root:{
  
  }
}))

export default App;
