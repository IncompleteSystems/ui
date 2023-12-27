import { ComponentType, ElementType, ForwardedRef, PropsWithChildren } from 'react';

export type UIComponent<
  TComponent extends ElementType,
  TCustomProps,
> = (
  stringsOrFn: TemplateStringsArray | Function,
  ...values: any[]
) => ComponentType<Omit<React.HTMLAttributes<TComponent>, keyof TCustomProps> & TCustomProps>;

export type UILibrary = (
  <T extends ElementType>(component: T) => UIComponent<
    T,
    { asChild?: boolean, as?: keyof HTMLElementTagNameMap } & JSX.IntrinsicAttributes
  >
) & {
    [Key in keyof HTMLElementTagNameMap]: UIComponent<
      Key,
      { asChild?: boolean, as?: keyof HTMLElementTagNameMap, className?: any }
    >;
  };

export interface UILibraryConfig {
  prefix?: string;
  cache?: Map<string | ElementType, Function>;
  features?: UIComponentFeature<any>[];
  wrappers?: UIComponentWrapper<any>[];
}

export type UIComponentConfig<CustomProps extends {} = {}> = UILibraryConfig & CustomProps & {
  params?: any[];
}

export type UIComponentFeature<CustomProps> = (component: string | ComponentType, config: UIComponentConfig) => (props: PropsWithChildren<CustomProps>, ref: ForwardedRef<unknown>) => PropsWithChildren<CustomProps>;

export type UIComponentWrapper<CustomProps> = (component: string | ComponentType, config: UIComponentConfig) => (element: React.ForwardRefExoticComponent<Omit<CustomProps, "ref"> & React.RefAttributes<unknown>>) => ComponentType;