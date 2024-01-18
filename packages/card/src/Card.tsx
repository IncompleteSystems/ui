import { useMemo } from "react";

import ui from '@incomplete/ui';

import { CardStyles } from './styles';
import { CardStylesProvider } from './context';
import { CardProps } from './types';

export const Card = ({ children, className, ...props }: CardProps) => {
  const styles = useMemo(() => CardStyles(props), [props]);

  const CardBase = ui.div(styles.base);

  return (
    <CardStylesProvider value={{ styles }}>
      <CardBase className={className} {...props}>
        {children}
      </CardBase>
    </CardStylesProvider>
  );
};

export default Card;
