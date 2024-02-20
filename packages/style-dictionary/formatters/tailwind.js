import fs from "fs";
import Handlebars from "handlebars";

Handlebars.registerHelper("json", function (context) {
  return JSON.stringify(context, null, 2);
});

const tailwindConfigTemplate = Handlebars.compile(
  fs.readFileSync("./formatters/tailwind.config.js.hbs", { encoding: "utf8" })
);

const kebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

const tailwindFormatter = function (dictionary, platform) {
  const tailwindConfig = {
    content: platform.options.content,
    darkMode: platform.options.content,
    theme: {
      extend: dictionary.allTokens.reduce((tokens, token) => {
        tokens[token.path.map((path) => kebabCase(path)).join(".")] =
          `var(--${token.name})`;

        return tokens;
      }, {}),
    },
  };

  return tailwindConfigTemplate({
    config: tailwindConfig,
  });
};

export default tailwindFormatter;
