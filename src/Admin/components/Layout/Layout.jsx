import SideNav from "../SideNav/SideNav"
import './layout.css';

const Layout = ({ children }) => {
  return (
    <section className="admin-dashboard-layout">
      <div className="container">
        <SideNav />
        
        <div className="children">
          <p>Admin Dashboard</p>
          { children }
        </div>

      </div>
    </section>
  )
}

export default Layout