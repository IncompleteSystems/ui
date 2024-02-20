import ui from '@incomplete/ui';

import { useCardContext } from './context';
import { CardFooterProps } from './types';

export const CardFooter = ({ children, className, ...props }: CardFooterProps) => {
  const { styles } = useCardContext();

  const CardFooter = ui.div(styles.footer);

  return (
    <CardFooter className={className} {...props}>
      {children}
    </CardFooter>
  );
}

export default CardFooter;
