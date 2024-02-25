import type { ComponentPropsWithoutRef } from 'react';

import { UIComponentVariantProps, UIComponent } from '@incomplete/ui';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { AppBarStyles } from './styles';

export type AppBarProps = UIComponent<'aside', any> & ComponentPropsWithoutRef<'aside'> & UIComponentVariantProps<typeof AppBarStyles>;
export type AppBarNavProps = ComponentPropsWithoutRef<'nav'> & UIComponentVariantProps<typeof AppBarStyles>;
export type AppBarNavItemProps = ComponentPropsWithoutRef<'a'> & UIComponentVariantProps<typeof AppBarStyles> & { icon: IconDefinition, as: React.ReactNode | React.ForwardRefExoticComponent<any> };