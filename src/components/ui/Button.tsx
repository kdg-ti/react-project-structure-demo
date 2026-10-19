import type { ComponentProps } from 'react'

type Props = ComponentProps<'button'> & { variant?: 'primary' | 'ghost' }

/** A plain button. Paste it into any other project and it works: that is what makes it shared. */
export const Button = ({ variant = 'primary', style, ...rest }: Props) => (
  <button
    {...rest}
    style={{
      padding: '0.4rem 0.9rem',
      borderRadius: 6,
      border: '1px solid #1a6fb0',
      background: variant === 'primary' ? '#1a6fb0' : 'transparent',
      color: variant === 'primary' ? '#fff' : '#1a6fb0',
      cursor: 'pointer',
      ...style,
    }}
  />
)
