import fs from "fs";
import Handlebars from "handlebars";

const tailwindCssTemplate = Handlebars.compile(
  fs.readFileSync("./formatters/stylesheet.css.hbs", { encoding: "utf8" })
);

const tailwindCssFormatter = function (dictionary, platform, file) {
  // format the tokens as a css stylesheet
  const styles = dictionary.allTokens
    // remove all tokens that are not sources
    .filter((token) => token.isSource)
    .map((token) => {
      console.log(token);
      const name = token.name;
      const value = dictionary.usesReference(token.original.value)
        ? dictionary.getReferences(token.original.value).reduce((value, ref) => {
            return value.replace(
              `\{${ref.path.join(".")}\}`,
              `var(--${ref.name})`
            );
          }, token.original.value)
        : token.value;

      return {
        name,
        value,
      };
    });

  const cssTemplate = tailwindCssTemplate({ styles });

  return cssTemplate;
};

export default tailwindCssFormatter;
