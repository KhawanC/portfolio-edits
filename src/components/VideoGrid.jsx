import { SimpleGrid, Box } from '@mantine/core';
import VideoCard from './VideoCard';

export default function VideoGrid({ videos }) {
  // Only one video plays at a time
  const handlePlay = (e) => {
    document.querySelectorAll('video').forEach((v) => {
      if (v !== e.currentTarget) v.pause();
    });
  };

  return (
    <Box component="section" aria-label="Videos">
      <SimpleGrid
        cols={{ base: 1, xs: 2, md: 4 }}
        spacing={{ base: 'lg', md: 'md' }}
        verticalSpacing={{ base: 32, md: 'md' }}
        maw={{ base: 360, xs: '100%' }}
        mx="auto"
      >
        {videos.map((video, i) => (
          <VideoCard key={video.title} {...video} index={i} onPlay={handlePlay} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
