/**
 * StylesheetProps interface
 * 
 * This interface defines the properties for the Stylesheet component.
 * 
 * @property {string} base - The URL of the base stylesheet. This stylesheet is always loaded.
 * @property {string} light - The URL of the light mode stylesheet. This stylesheet is loaded when the user's preferred color scheme is light or not specified.
 * @property {string} dark - The URL of the dark mode stylesheet. This stylesheet is loaded when the user's preferred color scheme is dark.
 */
export interface StylesheetProps {
  base: string;
  light: string;
  dark: string;
}

/**
 * Stylesheet component
 * 
 * This component is used to dynamically load different stylesheets based on the user's preferred color scheme.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.base - The URL of the base stylesheet. This stylesheet is always loaded.
 * @param {string} props.light - The URL of the light mode stylesheet. This stylesheet is loaded when the user's preferred color scheme is light or not specified.
 * @param {string} props.dark - The URL of the dark mode stylesheet. This stylesheet is loaded when the user's preferred color scheme is dark.
 * 
 * @returns {JSX.Element} A fragment containing link elements for the stylesheets.
 */
export const Stylesheet = ({ base, light, dark }: StylesheetProps) => {
  return (
    <>
      {base ? <link rel="stylesheet" href={base} /> : null}
      {light ? <link rel="stylesheet" href={light} media="(prefers-color-scheme: light) or (prefers-color-scheme: no-preference)" /> : null}
      {dark ? <link rel="stylesheet" href={dark} media="(prefers-color-scheme: dark)" /> : null}
    </>
  );
};