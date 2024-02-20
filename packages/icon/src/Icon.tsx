import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import ui from '@incomplete/ui';
import { classNames as cx } from '@incomplete/ui.classnames';

export type IconProps = FontAwesomeIconProps;

export const IconStyles = ui.variants({
  base: 'text-quarternary hover:text-secondary',
  variants: {
    // active: {
    //   true: 'text-secondary',
    //   false: '',
    // },
  },
});

export const Icon = ({ className, ...props }: IconProps) => {

  const styles = IconStyles(props);

  return (
    <FontAwesomeIcon className={cx(styles, className)} {...props} />
  );
};

export default Icon;