import ui from '@incomplete/ui';

import { useAppBarContext } from './context';
import { AppBarNavProps } from './types';

export const AppBarNav = ({ className, ...props }: AppBarNavProps) => {
  const { styles } = useAppBarContext();

  const AppBarNavBase = ui.nav(styles.nav);

  return (
    <AppBarNavBase className={className} {...props} />
  );
}

export default AppBarNav;