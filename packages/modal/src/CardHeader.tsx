import ui from '@incomplete/ui';

import { useCardContext } from './context';
import { CardHeaderProps } from './types';

export const CardHeader = ({ children, className, ...props }: CardHeaderProps) => {
  const { styles } = useCardContext();

  const CardHeader = ui.div(styles.header);

  return (
    <CardHeader className={className} {...props}>
      {children}
    </CardHeader>
  );
}

export default CardHeader;
