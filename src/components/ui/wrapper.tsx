import { useConfig } from '@/lib/context/configContext';
import {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useId,
  useState
} from 'react';

interface WrapperProps {
  bg?: number;
  border?: number;
  className?: string;
  shrink?: boolean;
}

type WrapperType = FC<HTMLAttributes<PropsWithChildren> & WrapperProps>;

const Wrapper: WrapperType = (props) => {
  const {
    children,
    bg = 950,
    border = 900,
    className = '',
    shrink,
    ...elProps
  } = props;
  const { color, top } = useConfig();
  const [elementTop, setElementTop] = useState(0);
  const [originalHeight, setOriginalHeight] = useState<null | number>(null);
  const [height, setHeight] = useState<null | number>(null);
  const id = useId();

  useEffect(() => {
    if (shrink) {
      const element = document.getElementById(id);
      setElementTop(element?.getBoundingClientRect().top || 0);
      setOriginalHeight(element?.getBoundingClientRect().height || null);
      setHeight(element?.getBoundingClientRect().height || null);
    }
  }, [id, shrink]);

  useEffect(() => {
    if (shrink && elementTop !== null && originalHeight !== null) {
      if (top > elementTop - 89) {
        const newHeight = originalHeight - (top - (elementTop - 89));
        setHeight(newHeight < 0 ? 0 : newHeight);
      } else {
        setHeight(originalHeight);
      }
    }
  }, [top, originalHeight, elementTop, shrink]);

  useEffect(() => {
    if (height && height < 1) {
      console.log(id, height);
    }
  }, [height]);

  return (
    <div
      id={id}
      className={`m-3 border overflow-hidden bg-${color}-${bg} border-${color}-${border} ${className} ${height === 0 ? 'hidden' : ''}`}
      style={height !== null ? { height } : {}}
      {...elProps as any}
    >
        <>{children}</>
    </div>
  );
};

export default Wrapper;
