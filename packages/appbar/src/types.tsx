import type { ComponentPropsWithoutRef } from 'react';

import { UIComponentVariantProps } from '@incomplete/ui';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { AppBarStyles } from './styles';

export type AppBarProps = ComponentPropsWithoutRef<'aside'> & UIComponentVariantProps<typeof AppBarStyles>;
export type AppBarNavProps = ComponentPropsWithoutRef<'aside'> & UIComponentVariantProps<typeof AppBarStyles>;
export type AppBarNavItemProps = ComponentPropsWithoutRef<'aside'> & UIComponentVariantProps<typeof AppBarStyles> & { icon: IconDefinition };