import type { ComponentPropsWithoutRef } from 'react';

import { UIComponentVariantProps } from '@incomplete/ui';

import { CardStyles } from './styles';

export type CardProps = ComponentPropsWithoutRef<'div'> & UIComponentVariantProps<typeof CardStyles>;

export type CardHeaderProps = ComponentPropsWithoutRef<'div'> & UIComponentVariantProps<typeof CardStyles>;

export type CardBodyProps = ComponentPropsWithoutRef<'div'> & UIComponentVariantProps<typeof CardStyles>;

export type CardFooterProps = ComponentPropsWithoutRef<'div'> & UIComponentVariantProps<typeof CardStyles>;
