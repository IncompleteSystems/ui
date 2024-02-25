import ui from '@incomplete/ui';

import Icon from '@incomplete/ux.icon';

import { useAppBarContext } from './context';
import { AppBarNavItemProps } from './types';

export const AppBarNavItem = ({ icon, className, ...props }: AppBarNavItemProps) => {
  const { styles } = useAppBarContext();

  const NavItemBase = ui.a(styles.navItem);

  return (
    <NavItemBase className={className} {...props}>
      <Icon icon={icon} className={styles.navItemIcon()} />
    </NavItemBase>
  );
}

export default AppBarNavItem;