import OrganizationSettings from './components/OrganizationSettings';
import Nav from './components/Navbar';
import BroadSection from './components/NabarT';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <Nav/>
      <BroadSection/>
      <div className="flex">
      <div className="w-1/3">
        <Menu />
      </div>
      <div className="w-2/3">
        <OrganizationSettings />
      </div>
    </div>
    </div>
  );
}

export default App;
