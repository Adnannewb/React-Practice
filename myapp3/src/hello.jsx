// import './hello.css'
export default function Hello() {
  return (
    // <h1 className="heading">This is an  External style</h1>
    <nav className="bg-white border-b border-gray-100 shadow-sm px-6 py-4">
      {/* Apply flex utilities directly to the ul wrapper */}
      <ul className="flex items-center justify-around max-w-2xl mx-auto">
        <li className="text-gray-600 hover:text-neutral-900 font-medium cursor-pointer transition-colors">
          Home
        </li>
        <li className="text-gray-600 hover:text-neutral-900 font-medium cursor-pointer transition-colors">
          About
        </li>
        <li className="text-gray-600 hover:text-neutral-900 font-medium cursor-pointer transition-colors">
          Project
        </li>
        <li className="text-gray-600 hover:text-neutral-900 font-medium cursor-pointer transition-colors">
          Contact
        </li>
      </ul>
    </nav>
  );
}
