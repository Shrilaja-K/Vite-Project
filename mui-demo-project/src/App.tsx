import './App.css';
import Muitypography from './Components/Muitypography';
import Muibuttons from './Components/Muibuttons';
import Muicheckbox from './Components/Muicheckbox';
import Muiradiobutton from './Components/Muiradiobutton';
import Muiselect from './Components/Muiselect';
import Muisliders from './Components/Muisliders';
import Muitextfields from './Components/Muitextfields';
import Muilayout from './Components/Muilayout';
import UIgrid from './Components/UIgrid';
import Muitable from './Components/Muitable';
import UItable from './Components/UItable';
import Muilink from './Components/Muilink';
import UIlink from './Components/UIlink';
import Muinavbar from './Components/Muinavbar';
import Muidialog from './Components/Muidialog';
import MuiSkeleton from './Components/Muiskeleton';
import Muipagination from './Components/Muipagination';
import Muiresponsive from './Components/Muiresponsive';
import { createTheme, colors, ThemeProvider } from '@mui/material';
import Propstyle from './Components/Propstyle';
import Withstyle from './Components/Withstyle';

// Creating a custom theme
const theme = createTheme({
  status: {
    danger: '#bb3838ff',
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Muitypography /> */}
        {/* <Muibuttons /> */}
        {/* <Muicheckbox /> */}
        {/* <Muiradiobutton /> */}
        {/* <Muiselect /> */}
        {/* <Muisliders /> */}
        {/* <Muitextfields /> */}
        {/* <Muilayout /> */}
        {/* <Muinavbar /> */}
        {/* <UIgrid /> */}
        {/* <Muitable /> */}
        {/* <UItable /> */}
        {/* <Muilink /> */}
        {/* <UIlink /> */}
        {/* <Muidialog />*/}
        {/* <MuiSkeleton /> */}
        {/* <Muipagination /> */}
        {/* <Muiresponsive /> */}
        <Withstyle />

        {/* <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
          <Propstyle />
          <Propstyle bgcolor="secondary.main" size={120} />
          <Propstyle bgcolor="error.main" size={150} />
        </div> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
