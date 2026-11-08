import { Box, Text, Stack } from '@mantine/core';

export default function VideoCard({ title, tag, src, horizontal = false, index, onPlay }) {
  return (
    <Stack gap={10} className="rise" style={{ animationDelay: `${300 + index * 80}ms` }}>
      <Box
        style={{
          aspectRatio: horizontal ? '16 / 9' : '9 / 16',
          borderRadius: 'var(--mantine-radius-lg)',
          overflow: 'hidden',
          background: '#0b1220',
          border: '1px solid var(--mantine-color-dark-4)',
          boxShadow: '0 20px 50px -25px rgba(0, 0, 0, 0.8)',
        }}
      >
        <video
          // "#t=0.1" makes browsers render a first-frame preview without autoplay
          src={`${src}#t=0.1`}
          controls
          playsInline
          preload="metadata"
          onPlay={onPlay}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </Box>
      <Box px={4}>
        <Text fw={500} size="sm" c="white" lineClamp={1}>
          {title}
        </Text>
        <Text size="xs" c="dark.2">
          {tag}
        </Text>
      </Box>
    </Stack>
  );
}
