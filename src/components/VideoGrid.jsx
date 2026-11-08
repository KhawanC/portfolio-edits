import { SimpleGrid, Stack, Box } from '@mantine/core';
import VideoCard from './VideoCard';

export default function VideoGrid({ videos }) {
  // Only one video plays at a time
  const handlePlay = (e) => {
    document.querySelectorAll('video').forEach((v) => {
      if (v !== e.currentTarget) v.pause();
    });
  };

  const vertical = videos.filter((v) => !v.horizontal);
  const horizontal = videos.filter((v) => v.horizontal);

  return (
    <Box component="section" aria-label="Videos">
      <Stack gap={{ base: 32, md: 48 }}>
        {vertical.length > 0 && (
          <SimpleGrid
            cols={{ base: 1, xs: 2, md: 4 }}
            spacing={{ base: 'lg', md: 'md' }}
            verticalSpacing={{ base: 32, md: 'md' }}
            maw={{ base: 360, xs: '100%' }}
            mx="auto"
            w="100%"
          >
            {vertical.map((video, i) => (
              <VideoCard key={video.title} {...video} index={i} onPlay={handlePlay} />
            ))}
          </SimpleGrid>
        )}

        {horizontal.length > 0 && (
          <Stack gap={32}>
            {horizontal.map((video, i) => (
              <VideoCard
                key={video.title}
                {...video}
                index={vertical.length + i}
                onPlay={handlePlay}
              />
            ))}
          </Stack>
        )}
      </Stack>
    </Box>
  );
}
