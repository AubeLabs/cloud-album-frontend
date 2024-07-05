import Link from 'next/link';

const Sidebar = () => (
  <nav>
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/auth/login">Login</Link></li>
      <li><Link href="/albums">Album List</Link></li>
      <li><Link href="/albums/create">Create Album</Link></li>
    </ul>
  </nav>
);

export default Sidebar;
