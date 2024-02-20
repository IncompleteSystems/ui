import { useMemo } from 'react';

import ui from '@incomplete/ui';

import { AppBarStyles } from './styles';
import { AppBarStylesProvider } from './context';
import { AppBarProps } from './types';

export const AppBar = ({ children, className, ...props }: AppBarProps) => {
  const styles = useMemo(() => AppBarStyles(props), [props]);

  const AppBarBase = ui.aside(styles.base);

  return (
    <AppBarStylesProvider value={{ styles }}>
      <AppBarBase className={className} {...props}>
        {children}
      </AppBarBase>
    </AppBarStylesProvider>
  );
};

export default AppBar;