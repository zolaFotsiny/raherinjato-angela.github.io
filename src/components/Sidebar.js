
import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Profile</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/competences">Competences</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
