import type { ComponentPropsWithoutRef } from 'react';

import { UIComponentVariantProps } from '@incomplete/ui';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { AppBarStyles } from './styles';

export type AppBarProps = ComponentPropsWithoutRef<'aside'> & UIComponentVariantProps<typeof AppBarStyles>;
export type AppBarNavProps = ComponentPropsWithoutRef<'nav'> & UIComponentVariantProps<typeof AppBarStyles>;
export type AppBarNavItemProps = ComponentPropsWithoutRef<'a'> & UIComponentVariantProps<typeof AppBarStyles> & { icon: IconDefinition, as: React.ReactNode };