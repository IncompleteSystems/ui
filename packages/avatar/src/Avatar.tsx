
import { classNames as clsx } from '@incomplete/ui.classnames';
import ui, { UIComponentVariantProps } from '@incomplete/ui';

export const AvatarStyles = ui.variants({
  base: [
    'inline-grid align-middle *:col-start-1 *:row-start-1',

    // Base Background
    'bg-[--avatar-bg]',

    // Dark mode
    'dark:bg-[--avatar-bg]',

  ],
  variants: {
    color: {
      'dark/zinc': 'text-white [--avatar-bg:theme(colors.zinc.900)] dark:text-white dark:[--avatar-bg:theme(colors.zinc.600)]',
      light: 'text-zinc-950 [--avatar-bg:white] dark:text-white dark:[--avatar-bg:theme(colors.zinc.800)]',
      'dark/white': 'text-white [--avatar-bg:theme(colors.zinc.900)] dark:text-zinc-950 dark:[--avatar-bg:white]',
      dark: 'text-white [--avatar-bg:theme(colors.zinc.900)] dark:[--avatar-bg:theme(colors.zinc.800)]',
      white: 'text-zinc-950 [--avatar-bg:white]',
      zinc: 'text-white [--avatar-bg:theme(colors.zinc.600)]',
      indigo: 'text-white [--avatar-bg:theme(colors.indigo.500)]',
      cyan: 'text-cyan-950 [--avatar-bg:theme(colors.cyan.300)]',
      red: 'text-white [--avatar-bg:theme(colors.red.600)]',
      organge: 'text-white [--avatar-bg:theme(colors.orange.500)]',
      amber: 'text-amber-950 [--avatar-bg:theme(colors.amber.400)]',
      yellow: 'text-yellow-950 [--avatar-bg:theme(colors.yellow.300)]',
      lime: 'text-lime-950 [--avatar-bg:theme(colors.lime.300)]',
      green: 'text-white [--avatar-bg:theme(colors.green.600)]',
      emerald: 'text-white [--avatar-bg:theme(colors.emerald.600)]',
      teal: 'text-white [--avatar-bg:theme(colors.teal.600)]',
      sky: 'text-white [--avatar-bg:theme(colors.sky.500)]',
      blue: 'text-white [--avatar-bg:theme(colors.blue.600)]',
      violet: 'text-white [--avatar-bg:theme(colors.violet.500)]',
      purple: 'text-white [--avatar-bg:theme(colors.purple.500)]',
      fuchsia: 'text-white [--avatar-bg:theme(colors.fuchsia.500)]',
      pink: 'text-white [--avatar-bg:theme(colors.pink.500)]',
      rose: 'text-white [--avatar-bg:theme(colors.rose.500)]',
    },
    size: {
      small: 'size-6',
      medium: 'size-8',
      large: 'size-10',
      xlarge: 'size-12',
      xxlarge: 'size-14',
    },
    shape: {
      square: 'rounded-[20%] *:rounded-[20%]',
      circle: 'rounded-full *:rounded-full',
    },
  },
  slots: {
    border: 'ring-1 ring-inset ring-black/5 dark:ring-white/5 forced-colors:outline',
    initials: 'select-none fill-current text-[48px] font-medium uppercase',
    image: '',
  },
});

export type AvatarProps = UIComponentVariantProps<typeof AvatarStyles>
  & React.ComponentPropsWithoutRef<'span'>
  & Pick<React.ImgHTMLAttributes<HTMLImageElement>, 'alt' | 'src'>
  & { initials?: string };

export const Avatar = ({ alt, className, initials, src, ...props }: AvatarProps) => {
  const styles = AvatarStyles(props);

  const AvatarRoot = ui.span(styles.base);
  const AvatarBorder = ui.span(styles.border);
  const AvatarInitials = ui.svg(styles.initials);
  const AvatarImage = ui.img(styles.image);

  return (
    <AvatarRoot {...props} className={clsx(styles.base(props), className)}>
      {initials && (
        <AvatarInitials className={clsx(styles.initials(props))} viewBox="0 0 100 100" aria-hidden={alt ? undefined : 'true'}>
          {alt && <title>{alt}</title>}
          <text x="50%" y="50%" alignmentBaseline="middle" dominantBaseline="middle" textAnchor="middle" dy=".125em">
            {initials}
          </text>
        </AvatarInitials>
      )}
      {src && <AvatarImage src={src} alt={alt} className={clsx(styles.image(props))} />}
      <AvatarBorder />
    </AvatarRoot>
  )
};

export default Avatar;