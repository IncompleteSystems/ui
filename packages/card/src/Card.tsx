import React, { createContext, useMemo, useContext } from "react";

import ui, { UIComponentVariantProps } from '@incomplete/ui';
import { TVReturnType } from 'tailwind-variants';

export const CardStyles = ui.variants({
  base: 'divide-y overflow-hidden rounded-lg shadow',
  variants: {
    color: {
      'dark': 'bg-gray-900 border border-slate-800 divide-slate-800',
      'light': 'bg-white border',
    }
  },
  slots: {
    header: 'px-4 py-5 sm:px-6',
    body: 'px-4 py-5 sm:p-6',
    footer: 'px-4 py-4 sm:px-6',
  },
})

export type CardProps = React.ComponentPropsWithoutRef<'div'> & UIComponentVariantProps<typeof CardStyles>;

const CardContext = createContext<typeof CardStyles | null>(null);

export const Card = ({ children, className, ...props }: CardProps) => {
  const styles = useMemo(() => CardStyles(props), [props]);

  const CardRoot = ui.div(styles.base);

  return (
    <CardContext.Provider value={styles as unknown as typeof CardStyles}>
      <CardRoot className={className} {...props}>
        {children}
      </CardRoot>
    </CardContext.Provider>
  );
};

export type CardHeaderProps = React.ComponentPropsWithoutRef<'div'> & UIComponentVariantProps<typeof CardStyles>;

export const CardHeader = ({ children, className, ...props }: CardHeaderProps) => {
  const styles = useContext(CardContext);

  const CardHeader = ui.div(styles?.header);

  return (
    <CardHeader className={className} {...props}>
      {children}
    </CardHeader>
  );
}

export type CardBodyProps = React.ComponentPropsWithoutRef<'div'> & UIComponentVariantProps<typeof CardStyles>;

export const CardBody = ({ children, className, ...props }: CardBodyProps) => {
  const styles = CardStyles(props);

  const CardBody = ui.div(styles.body);

  return (
    <CardBody className={className} {...props}>
      {children}
    </CardBody>
  );
}

export type CardFooterProps = React.ComponentPropsWithoutRef<'div'> & UIComponentVariantProps<typeof CardStyles>;

export const CardFooter = ({ children, className, ...props }: CardFooterProps) => {
  const styles = CardStyles(props);

  const CardFooter = ui.div(styles.footer);

  return (
    <CardFooter className={className} {...props}>
      {children}
    </CardFooter>
  );
}

// export const Card = (props) => {
//   return (
//     <div className="items-start self-stretch border border-[color:var(--colors-border-border-secondary,#1F242F)] shadow-sm bg-gray-900 flex max-w-[341px] flex-col py-5 rounded-xl border-solid">
//       <div className="items-stretch self-center flex w-full max-w-[293px] gap-3">
//         <div className="flex-col justify-center items-stretch overflow-hidden relative flex aspect-square w-12 rounded-full">
//           <img
//             loading="lazy"
//             srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3ee5bb6b-1323-47ac-a016-01dbb254ae53?apiKey=996556ca46c34929813e0f84dd0b568e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee5bb6b-1323-47ac-a016-01dbb254ae53?apiKey=996556ca46c34929813e0f84dd0b568e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee5bb6b-1323-47ac-a016-01dbb254ae53?apiKey=996556ca46c34929813e0f84dd0b568e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee5bb6b-1323-47ac-a016-01dbb254ae53?apiKey=996556ca46c34929813e0f84dd0b568e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee5bb6b-1323-47ac-a016-01dbb254ae53?apiKey=996556ca46c34929813e0f84dd0b568e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee5bb6b-1323-47ac-a016-01dbb254ae53?apiKey=996556ca46c34929813e0f84dd0b568e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee5bb6b-1323-47ac-a016-01dbb254ae53?apiKey=996556ca46c34929813e0f84dd0b568e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee5bb6b-1323-47ac-a016-01dbb254ae53?apiKey=996556ca46c34929813e0f84dd0b568e&"
//             className="absolute h-full w-full object-cover object-center inset-0"
//           />
//           <div className="relative border-[color:var(--component-colors-components-avatars-avatar-contrast-border,rgba(255,255,255,0.12))] flex shrink-0 h-12 flex-col rounded-full border-[0.75px] border-solid" />
//         </div>
//         <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto px-5">
//           <div className="text-neutral-100 text-base font-semibold leading-6 whitespace-nowrap">
//             Lead Product Designer
//           </div>
//           <div className="text-neutral-400 text-sm leading-5 whitespace-nowrap">
//             Polymath
//           </div>
//         </div>
//       </div>
//       <div className="self-center text-neutral-400 text-sm leading-5 whitespace-nowrap mt-6">
//         May 2020 – Present
//       </div>
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4ee855e-675a-4115-9e5b-b82fedeb0f76?apiKey=996556ca46c34929813e0f84dd0b568e&"
//         className="aspect-[341] object-contain object-center w-full self-stretch fill-gray-800 overflow-hidden mt-6"
//       />
//       <div className="text-neutral-300 text-sm font-semibold leading-5 whitespace-nowrap mr-6 mt-4 self-end">
//         View project
//       </div>
//     </div>
//   );
// }

export default Card;
