import { ActionIcon, Tooltip } from '@mantine/core';
import SvgIcon from './SvgIcon';

export default function SocialButton({ label, href, onClick, icon }) {
  const linkProps = href
    ? { component: 'a', href, target: '_blank', rel: 'noopener noreferrer' }
    : { onClick };

  return (
    <Tooltip label={label} withArrow openDelay={250} color="dark.5">
      <ActionIcon
        {...linkProps}
        aria-label={label}
        variant="default"
        size={44}
        radius="xl"
        styles={{
          root: {
            background: 'rgba(17, 24, 39, 0.6)',
            borderColor: 'var(--mantine-color-dark-4)',
            color: 'var(--mantine-color-dark-0)',
            transition: 'transform 150ms ease, border-color 150ms ease, color 150ms ease',
          },
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--mantine-color-navy-4)';
          e.currentTarget.style.color = '#fff';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--mantine-color-dark-4)';
          e.currentTarget.style.color = 'var(--mantine-color-dark-0)';
          e.currentTarget.style.transform = 'none';
        }}
      >
        <SvgIcon src={icon} size={18} />
      </ActionIcon>
    </Tooltip>
  );
}
