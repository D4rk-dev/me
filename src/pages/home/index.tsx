import { ArrowTopRightIcon } from '@/components/icons';
import Wrapper from '@/components/ui/wrapper';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {}, []);
  return (
    <section>
      <div className="flex justify-between content-center  flex-wrap">
        <Wrapper shrink className="h-[250px] w-[230px]">
          <div className="flex justify-center items-center h-full">
            <span className="text-white opacity-15">
              Working on a great photo
            </span>
          </div>
        </Wrapper>
        <Wrapper shrink className="w-[calc(100%-300px)]">
          <div>
            <div className="grid grid-cols-3 p-1">
              <Wrapper bg={900} border={800} className="col-span-2 p-2">
                <div className="flex flex-row items-center">
                  <div className="relative">
                    <span className="flex rounded-full bg-green-600 animate-ping w-[15px] h-[15px] mr-2 ml-2 "></span>{' '}
                    <span className="flex rounded-full bg-green-600 w-[15px] h-[15px] mr-2 ml-2 absolute top-0"></span>
                  </div>
                  <span className="text-white">Available for work</span>
                </div>
              </Wrapper>
              <Wrapper
                bg={900}
                border={800}
                className="text-white p-2 cursor-pointer shadow hover:shadow-neutral-700"
              >
                <div className="flex flex-row items-center justify-center ">
                  <span className="mr-2">Contact</span>
                  <ArrowTopRightIcon />
                </div>
              </Wrapper>
            </div>
            <div className="pl-4">
              <h1 className="text-white text-xl mb-5">Andres Hilario Vidal</h1>
              <p className="text-white">
                I am Mexican Full Stack developer with 5+ year of experience
              </p>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className="grid grid-cols-4">
        <Wrapper shrink className="col-span-2 p-3">
          <Wrapper bg={900} border={800} className="p-2 w-fit">
            <span className="text-white">Education</span>
          </Wrapper>
          <div>
            <ul>
              <li className='flex flex-row items-center pl-3'>
                <span className="flex w-[50px] h-[50px] bg-[#333]" />
                <div className='ml-3 pt-3.5'>
                  <span className="text-white text-xs">2019 - 2020</span>
                  <h2 className="text-white"></h2>
                  <p className="text-white">Universidad Tecnologica de la sierra Hidalguense</p>
                  <p className="text-white">BS in Information and Communication Technologies</p>
                </div>
              </li>
              <li className='flex flex-row items-center pl-3'>
                <span className="flex w-[50px] h-[50px] bg-[#333]" />
                <div className='ml-3 pt-3.5'>
                  <span className="text-white text-xs">2019 - 2020</span>
                  <h2 className="text-white"></h2>
                  <p className="text-white">Universidad Tecnologica de la sierra Hidalguense</p>
                  <p className="text-white">BS in Information and Communication Technologies</p>
                </div>
              </li>
            </ul>
          </div>
        </Wrapper>
        <Wrapper shrink className="col-span-2 p-2">
          <span className="text-white">Experience</span>
        </Wrapper>
      </div>
      <Wrapper shrink>
        <div className="flex flex-col content-center  flex-wrap">
          <Wrapper bg={900} border={800} className="w-[230px]">
            <div className="text-white h-[250px]"></div>
          </Wrapper>
        </div>
      </Wrapper>
      <Wrapper shrink>
        <div className="flex flex-col content-center  flex-wrap">
          <Wrapper bg={900} border={800} className="w-[230px]">
            <div className="text-white h-[250px]"></div>
          </Wrapper>
        </div>
      </Wrapper>
      <Wrapper shrink>
        <div className="flex flex-col content-center  flex-wrap">
          <Wrapper bg={900} border={800} className="w-[230px]">
            <div className="text-white h-[250px]"></div>
          </Wrapper>
        </div>
      </Wrapper>
      <Wrapper shrink>
        <div className="flex flex-col content-center  flex-wrap">
          <Wrapper bg={900} border={800} className="w-[230px]">
            <div className="text-white h-[250px]"></div>
          </Wrapper>
        </div>
      </Wrapper>
      <Wrapper shrink>
        <div className="flex flex-col content-center  flex-wrap">
          <Wrapper bg={900} border={800} className="w-[230px]">
            <div className="text-white h-[250px]"></div>
          </Wrapper>
        </div>
      </Wrapper>
      <Wrapper shrink>
        <div className="flex flex-col content-center  flex-wrap">
          <Wrapper bg={900} border={800} className="w-[230px]">
            <div className="text-white h-[250px]"></div>
          </Wrapper>
        </div>
      </Wrapper>
    </section>
  );
};

export default Home;
