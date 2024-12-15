import Navbar from '@/components/navbar';
import Router from './routes';
import { useConfig } from '@/lib/context/configContext';

function App() {
  const {padding} = useConfig();
  return (
    <>
      <Navbar />
      <main id='main' className="container mx-auto" style={{paddingTop:padding}}>
        <Router />
      </main>
    </>
  );
}

export default App;
