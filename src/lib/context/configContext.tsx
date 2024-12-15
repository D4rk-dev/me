import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import { english, Language, spanish } from '@/languages';

interface ConfigContext {
  color: string;
  language: Language;
  padding: number;
  top: number;
  setLang: React.Dispatch<React.SetStateAction<string>>;
}

const Config = createContext({});

export const ConfigProvider: FC<PropsWithChildren> = ({ children }) => {
  const [color, setColor] = useState('neutral');
  const [lang, setLang] = useState('en');
  const [top, setTop] = useState(0);
  const [padding, setPadding] = useState(77);
  const language: Language = useMemo(() => {
    switch (lang) {
      case 'en':
        return english;
      default:
        return spanish;
    }
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => {
      setTop(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if(top > 0){
      setPadding( 77 + top);
    }
  }, [top]);

  return (
    <Config.Provider
      value={{
        color,
        language,
        padding,
        top
      }}
    >
      {children}
    </Config.Provider>
  );
};

export const useConfig = () => {
  const ctx = useContext(Config);

  if (!ctx) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }

  return ctx as ConfigContext;
};
