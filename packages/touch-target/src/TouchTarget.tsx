import ui from '@incomplete/ui';

export const TouchTargetStyles = ui.variants({
  base: 'absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden',
});

/* Expand the hit area to at least 44×44px on touch devices */
export function TouchTarget({ children, ...props }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <span
        className={TouchTargetStyles(props)}
        aria-hidden="true"
      />
    </>
  )
}

export default TouchTarget;