import type { ComponentType, ElementType, ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react';
import type { TV as UIComponentVariants, VariantProps as UIComponentVariantProps } from 'tailwind-variants';
import type { VariantContextFactory } from '@incomplete/ui.context';

export { UIComponentVariants, UIComponentVariantProps };

export type UIComponent<
  TComponent extends ElementType,
  TCustomProps,
> = React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;

export type UIComponentTemplate<
  TComponent extends ElementType,
  TCustomProps,
> = (
  stringsOrFn: TemplateStringsArray | Function,
  ...values: any[]
) => UIComponent<TComponent, TCustomProps>;

export type ElementTagNames = Exclude<keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap, "set">;

export type UILibrary<TPlugins extends {} = {}> = (
  <T extends ElementType>(component: T) => UIComponentTemplate<
    T,
    JSX.IntrinsicAttributes
  >
) & {
    [Key in ElementTagNames]: UIComponentTemplate<
      Key,
      JSX.IntrinsicAttributes & React.PropsWithRef<HTMLAttributes<Key>>
    >;
  } & UILibraryPlugins<TPlugins & DefaultPlugins>;


export type DefaultPlugins = {
  createComponent: UIComponent<any, any>;
  createTemplate: UIComponentTemplate<any, any>;
  variants: UIComponentVariants;
  context: VariantContextFactory;
}

export type UILibraryPlugin<Plugin = any> = Plugin;

export type UILibraryPlugins<TPlugins> = {
  [Key in keyof TPlugins]: UILibraryPlugin<TPlugins[Key]>
};

export type UILibraryPluginInitFunction<TConfig extends UILibraryConfig = {}, TPlugin = any> = (config: TConfig) => UILibraryPlugin<TPlugin>

export type UILibraryPluginsInitializer<TPlugins, TConfig extends {}> = {
  [Key in keyof TPlugins]: UILibraryPluginInitFunction<TConfig, TPlugins[Key]>
}

export type UILibraryConfig<TPlugins extends {} = {}, TConfig extends {} = {}> = {
  features?: UIComponentFeature<any, any>[];
  plugins?: UILibraryPluginsInitializer<TPlugins, TConfig>;
} & TConfig

export type UIComponentConfig<TConfig extends {} = {}> = UILibraryConfig<any, TConfig>;

export type UIComponentHook<CustomProps extends {}> = (props: PropsWithChildren<CustomProps>, ref: ForwardedRef<unknown>) => PropsWithChildren<CustomProps>

export type UIComponentFeature<CustomProps extends {} = {}, CustomConfig extends {} = {}> = (component: string | ComponentType<CustomProps>, config: UILibraryConfig<any, CustomConfig>) => UIComponentHook<CustomProps>;
