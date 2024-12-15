import { FC } from 'react';
import Wrapper from './ui/wrapper';
import { useConfig } from '@/lib/context/configContext';
import Backdrop from './ui/backdrop';

const Hamburguer: FC = () => {
  return (
    <div className="flex flex-col w-[25px] h-[25px]  content-between justify-between cursor-pointer">
      <span className="w-full h-[2px] bg-white"></span>
      <span className="w-full h-[2px] bg-white"></span>
      <span className="w-full h-[2px] bg-white"></span>
    </div>
  );
};

const Menu = () => {
  return (
    <Backdrop open className="flex content-center justify-center flex-wrap">
      <Wrapper className="p-2 w-4/5 h-fit">
        <ul className="flex flex-col space-y-4">
          <li>
            <a href="#" className="text-white">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Contact
            </a>
          </li>
        </ul>
      </Wrapper>
    </Backdrop>
  );
};

const Navbar: FC = () => {
  const {
    language: { navbar }
  } = useConfig();
  return (
    <div className='fixed top-0 w-full'>
      
    <Wrapper >
      <nav className="p-4">
        <div className="lg:hidden flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">D47K</h1>
          <Hamburguer />
        </div>
        <div className="hidden lg:flex container mx-auto justify-between items-center">
          <h1 className="text-white text-2xl font-bold">D47K</h1>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white">
                {navbar.projects}
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                {navbar.about}
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                {navbar.contact}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Wrapper>
    </div>
  );
};

export default Navbar;
