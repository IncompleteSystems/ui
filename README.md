## @incomplete/ui

A set of features for building UI libraries.

We provide a collection of default plugins and component behaviors that can be used to create UI libraries with ease.

This project is inspired by the [Tailwind CSS](https://tailwindcss.com/) library, and includes [tailwind-variants](https://www.tailwind-variants.org/).
Our library source code is inspired by [Framer Motion](https://www.framer.com/motion/).

## Getting Started

```sh
yarn add @incomplete/ui
```

```tsx
// Import the `ui` library
import ui from '@incomplete/ui';

// Create styles for a button component
const ButtonStyles = ui.variants({
  base: 'text-md px-6 py-3',
  variants: {
    size: {
      sm: 'text-sm px-4 py-2',
      md: 'text-md px-6 py-3',
      lg: 'text-lg px-8 py-4',
    },
    color: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-gray-500 text-white',
    },
  },
});

// Create a button component using the styles
const Button = ui.button(ButtonStyles);
```

## The `ui` Library

The `ui` library is a default instance of the `createLibrary` function. It includes a set of default plugins and features that can be used to create UI libraries.

### `createLibrary`

A factory function that creates a UI library. It takes a configuration object as an optional parameter and returns a library object. The library object is a Proxy that allows accessing plugins and creating components based on the plugins.

### `createConfig`

Creates a configuration object for a UI library. It includes default plugins and features, and allows customization through an input `config` object. The function returns the configuration object with the merged plugins and features.

### `createPlugins`

Creates and returns a map of cached plugins based on the provided configuration. The function takes in a configuration object and iterates over the plugins defined in the configuration to initialize and store them in the cache. The plugin cache is then returned as the result.

### `createTemplate`

Creates a template component. It takes a component name or type and a configuration object as input, and returns a new component with custom props. The function utilizes the `createComponent` function to generate the template component.

### `createComponent`

Creates a React component based on a provided component name or element type and a configuration object. It applies a set of features to the component based on the configuration, and returns the resulting component. The function uses React's `createElement` and `forwardRef` functions to render the component.


## Library Plugins

The `ui` library is built around a set of plugins that provide key features for the UI components. Plugins are used to create templates for components, apply class names, and handle variants.

They are available as methods on the `ui` library instance. They can be accessed using dot notation, e.g. `ui.variants()`.

### `createComponentPlugin`

The plugin function takes a component name and a configuration object as input, and returns a new component with updated props.

This plugin can be accessed by using the `ui(SomeComponent)` method.

### `createTemplatePlugin`

The plugin function returns a component template based on the provided configuration.

This plugin can be accessed by using the `ui.<HTMLElement>()` method. Where `<HTMLElement>` is the name of the HTML element.

### `componentVariantsPlugin`

The plugin function returns the styles for component variants based on the provided configuration. It uses the [tailwind-variants](https://www.tailwind-variants.org/) package to generate the variants.

This plugin can be accessed using the `ui.variants()` method.

##  Component Behaviors

The `ui` library provides a set of default behaviors for UI components. These behaviors are implemented as React Hooks and can be used to apply reusable functionality to components.

The hooks take props being passed to the component and a component ref and return a set of props which are applied to the component.

### `elementTagFeature`

The hook determines the component to render based on the `as` prop, or defaults to `defaultComponent` or a `Slot` component if `asChild` is true.

### `classNameFeature`

The hook takes a component and a configuration object as input and returns a new component with an updated `className` prop. It utilizes dependencies from the `@incomplete/ui.classnames` and `@incomplete/ui.utils` packages.

### `propertiesFeature`

The hook takes in the component and the configuration, and returns a function that processes the properties. If the configuration specifies property processors, it applies them to the properties before returning the processed object.

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/IncompleteSystems/ui/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/IncompleteSystems/ui/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/IncompleteSystems/ui/issues)**: Submit bugs found or log feature requests for ui.
