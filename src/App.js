import logo from './logo.svg';
import './App.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {AiOutlineCalendar} from "react-icons/ai"

function App() {
  return (
    <div className="h-[100vh]">
     
<Sidebar 
style={{
  height: "100vh"
}}
>
  <Menu>
  <MenuItem>  Documentation </MenuItem>
  <MenuItem icon={<AiOutlineCalendar />} >  Calendar </MenuItem>
  

    <SubMenu label="Charts">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
      <MenuItem> Pie charts </MenuItem>
    </SubMenu>
    <SubMenu label="Charts">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
      <MenuItem> Pie charts </MenuItem>
    </SubMenu>
    <SubMenu label="Charts">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
      <MenuItem> Pie charts </MenuItem>
    </SubMenu>
    
    <SubMenu label="Charts">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
      <MenuItem> Pie charts </MenuItem>
    </SubMenu>
    <SubMenu label="Charts">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
      <MenuItem> Pie charts </MenuItem>
    </SubMenu>
    <MenuItem> Documentation </MenuItem>
    <MenuItem> Calendar </MenuItem>
    <MenuItem> Gautam </MenuItem>
    <MenuItem> Subodh </MenuItem>
    <MenuItem> Subodh </MenuItem>
  </Menu>
</Sidebar>;
    </div>
  );
}

export default App;
