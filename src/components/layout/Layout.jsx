import AppRoutes from '../../router';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Layout() {
  return (
    <div>
      <Sidebar />
      <main>
        <Navbar />
        <AppRoutes />
      </main>
    </div>
  );
}

export default Layout;
