import React from 'react'

import { DataInteractive as HeadlessDataInteractive } from '@headlessui/react'

import ui from '@incomplete/ui';

const LinkStyles = ui.variants({});

const Link = React.forwardRef((
  props: { href: string } & React.ComponentPropsWithoutRef<'a'>,
  ref: React.ForwardedRef<HTMLAnchorElement>
) => {
  const Link = ui.a(LinkStyles);
  return (
    <HeadlessDataInteractive>
      <Link {...props} ref={ref} />
    </HeadlessDataInteractive>
  )
})

Link.displayName = 'Link';

export default Link;
