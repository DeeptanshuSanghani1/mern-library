import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full h-auto bg-gray-800 lg:px-24 md:px-16 sm:px-14 px-12 py-2 shadow-md">
        <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <Link className='text-3xl text-orange-500 font-semibold tracking-[0.2rem]'>Navbar</Link>
            </div>

        </div>


    </nav>

  );
};

export default Navbar;
