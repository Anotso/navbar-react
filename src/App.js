import React, {useState} from 'react';
import './App.css'
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/Backdrop/BackDrop';


function App() {

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
    
  function drawerToggleclickHandler(){
    setSideDrawerOpen(!sideDrawerOpen);
  }

  //function backdropclickHandler(){
    //setSideDrawerOpen(!sideDrawerOpen);
  //}

  let backDrop;

  if(sideDrawerOpen){
    backDrop = <BackDrop click={drawerToggleclickHandler}/>;
  }

  return (
    <div className="App">
      <Toolbar drawerToggleclickHandler={drawerToggleclickHandler}/>
      <SideDrawer show={sideDrawerOpen}/>
      {backDrop}
      <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id tellus lobortis, ullamcorper urna ac, faucibus velit. Nullam hendrerit tortor in elit condimentum, eget placerat diam pulvinar. Aliquam erat volutpat. Duis elementum euismod leo quis accumsan. Ut tristique, odio sed dictum tempor, ex magna maximus est, eu rhoncus arcu turpis ut diam. Maecenas sit amet nibh cursus, facilisis augue vel, semper magna. Ut nulla sapien, lacinia et justo in, elementum vulputate metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris quam ante, tempor in blandit sed, vehicula et mi. Fusce interdum sit amet sem sed finibus. Phasellus quis iaculis libero.

          Cras vitae lectus iaculis, facilisis nulla vel, tristique diam. Cras vel purus eu justo pretium volutpat ut nec leo. Curabitur accumsan, dolor sit amet interdum convallis, velit metus suscipit lorem, ut interdum nibh diam vel ex. Ut magna ante, commodo dapibus aliquet nec, ornare egestas felis. Nulla ac vestibulum erat. Vestibulum ut efficitur libero, mollis sollicitudin metus. Pellentesque pulvinar nisl eu ligula eleifend, ullamcorper scelerisque augue ultrices.
      </p>
      </main>
    </div>
  );
}

export default App;
