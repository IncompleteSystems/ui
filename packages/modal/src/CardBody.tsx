import ui from '@incomplete/ui';

import { useCardContext } from './context';
import { CardBodyProps } from './types';

export const CardBody = ({ children, className, ...props }: CardBodyProps) => {
  const { styles } = useCardContext();

  const CardBody = ui.div(styles.body);

  return (
    <CardBody className={className} {...props}>
      {children}
    </CardBody>
  );
}

export default CardBody;
