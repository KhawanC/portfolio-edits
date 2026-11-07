import { Container, Divider, Text, Stack } from '@mantine/core';
import Hero from './components/Hero';
import VideoGrid from './components/VideoGrid';
import { videos } from './data';

export default function App() {
  return (
    <Container size="lg" px={{ base: 'md', sm: 'xl' }} py={{ base: 40, sm: 72 }}>
      <Stack gap={48}>
        <Hero />

        <Divider
          className="rise"
          style={{ animationDelay: '200ms' }}
          color="dark.4"
          labelPosition="center"
          label={
            <Text size="xs" tt="uppercase" fw={500} c="dark.2" style={{ letterSpacing: '0.2em' }}>
              Selected work
            </Text>
          }
        />

        <VideoGrid videos={videos} />

        <Text component="footer" ta="center" size="xs" c="dark.3" pt="md">
          © {new Date().getFullYear()} Khawan
        </Text>
      </Stack>
    </Container>
  );
}
