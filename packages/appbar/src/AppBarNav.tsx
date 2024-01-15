import ui from '@incomplete/ui';

export const AppBarNavStyles = ui.variants({
  base: 'flex flex-col space-y-1',
});

export const AppBarNav = ui.nav(AppBarNavStyles);

export default AppBarNav;