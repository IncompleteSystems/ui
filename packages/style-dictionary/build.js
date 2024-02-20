import tailwindFormatter from "./formatters/tailwind.js";
import tailwindCssFormatter from "./formatters/css.js";
import StyleDictionary from "style-dictionary";


// StyleDictionary.registerTransform({
//   type: `name`,
//   name: `tailwind/name`,
//   // matcher: (token) => {},
//   transformer: (token) => {
//     return ;
//   }
// })

// Generate tokens for base styleguide
StyleDictionary.extend({
  source: [
    `tokens/Primitives/*.json`,
    `tokens/Containers/*.json`,
    `tokens/Radius/*.json`,
    `tokens/Spacing/*.json`,
    `tokens/Widths/*.json`,
  ],
  format: {
    "tailwind/tokens": tailwindFormatter,
    "tailwind/css": tailwindCssFormatter,
  },
  platforms: {
    // tailwind: {
    //   transforms: ["attribute/cti", "name/cti/kebab"],
    //   buildPath: "./dist/",
    //   files: [
    //     {
    //       destination: "tailwind.config.js",
    //       format: "tailwind/tokens",
    //     },
    //   ],
    //   options: {
    //     content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
    //     darkMode: "class",
    //   },
    // },
    styleguide: {
      transformGroup: "css",
      buildPath: "./dist/styles/",
      files: [
        {
          destination: `styleguide.css`,
          format: "tailwind/css",
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
}).buildAllPlatforms();

// Generate tokens for dark-mode
// StyleDictionary.extend({
//   include: [
//     `tokens/Primitives/*.json`,
//     `tokens/Containers/*.json`,
//     `tokens/Radius/*.json`,
//     `tokens/Spacing/*.json`,
//     `tokens/Widths/*.json`,
//   ],
//   source: [`tokens/Color Modes/Dark.json`],
//   format: {
//     "tailwind/css": tailwindCssFormatter,
//   },
//   platforms: {
//     'dark-mode': {
//       transformGroup: "css",
//       buildPath: "./dist/styles/",
//       files: [
//         {
//           destination: `dark.css`,
//           format: "tailwind/css",
//           options: {
//             outputReferences: true,
//           },
//         },
//       ],
//     },
//   },
// }).buildAllPlatforms();

// Generate tokens for light-mode
// StyleDictionary.extend({
//   include: [
//     `tokens/Primitives/*.json`,
//     `tokens/Containers/*.json`,
//     `tokens/Radius/*.json`,
//     `tokens/Spacing/*.json`,
//     `tokens/Widths/*.json`,
//   ],
//   source: [`tokens/Color Modes/Light.json`],
//   format: {
//     "tailwind/css": tailwindCssFormatter,
//   },
//   platforms: {
//     'light-mode': {
//       transformGroup: "css",
//       buildPath: "./dist/styles/",
//       files: [
//         {
//           destination: `light.css`,
//           format: "tailwind/css",
//           options: {
//             outputReferences: true,
//           },
//         },
//       ],
//       options: {
//         // includeParent: true,
//       },
//     },
//   },
// }).buildAllPlatforms();

// StyleDictionary.extend({
//   source: [
//     `tokens/**/*.json`,
//   ],
//   format: {
//     "tailwind/tokens": tailwindFormatter,
//   },
//   platforms: {
//     tailwind: {
//       transforms: ["attribute/cti", "name/cti/kebab"],
//       buildPath: "./dist/",
//       files: [
//         {
//           destination: "tailwind.config.js",
//           format: "tailwind/tokens",
//         },
//       ],
//       options: {
//         content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
//         darkMode: "class",
//       },
//     },
//   },
// }).buildAllPlatforms();