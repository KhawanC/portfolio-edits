import { Flex, Title, Text, Image, Box } from '@mantine/core';
import SvgIcon from './SvgIcon';
import xIcon from '../assets/icons/x.svg';
import tiktokIcon from '../assets/icons/tiktok.svg';
import discordIcon from '../assets/icons/discord.svg';
import SocialButton from './SocialButton';
import { profile } from '../data';
import { copyText } from '../utils/copyText';
import { notifications } from '@mantine/notifications';

export default function Hero() {
  const { name, role, bio, photo, socials } = profile;

  const handleDiscord = async () => {
    await copyText(socials.discord);
    notifications.show({
      id: 'discord-copied',
      message: `Discord username copied — ${socials.discord}`,
      icon: <SvgIcon src={discordIcon} size={15} />,
      autoClose: 1800,
      withCloseButton: false,
      radius: 'xl',
      styles: {
        root: {
          width: 'fit-content',
          margin: '0 auto',
          background: 'rgba(17, 24, 39, 0.85)',
          backdropFilter: 'blur(8px)',
          border: '1px solid var(--mantine-color-dark-4)',
          paddingBlock: 8,
        },
        icon: { background: 'transparent', color: 'var(--mantine-color-navy-3)' },
        description: { color: 'var(--mantine-color-dark-0)', fontSize: 13 },
      },
    });
  };

  return (
    <Flex
      component="header"
      direction={{ base: 'column', sm: 'row' }}
      align={{ base: 'center', sm: 'center' }}
      gap={{ base: 32, sm: 56 }}
    >
      <Box className="rise" w={{ base: '100%', sm: 340 }} maw={340} style={{ flexShrink: 0 }}>
        <Image
          src={photo}
          alt={`Photo of ${name}`}
          radius="lg"
          fit="cover"
          style={{
            aspectRatio: '4 / 5',
            objectPosition: 'center 30%',
            border: '1px solid var(--mantine-color-dark-4)',
            boxShadow: '0 30px 80px -30px rgba(29, 74, 202, 0.45)',
          }}
        />
      </Box>

      <Flex
        direction="column"
        className="rise"
        style={{ animationDelay: '100ms' }}
        gap="md"
        align={{ base: 'center', sm: 'flex-start' }}
        ta={{ base: 'center', sm: 'left' }}
        maw={480}
      >
        <Text size="xs" tt="uppercase" fw={500} c="navy.3" style={{ letterSpacing: '0.2em' }}>
          {role}
        </Text>
        <Title order={1} fz={{ base: 44, sm: 64 }} lh={1} c="white">
          {name}
        </Title>
        <Text size="lg" c="dark.1" lh={1.6}>
          {bio}
        </Text>

        <Flex gap="xs" mt="xs" wrap="wrap" justify={{ base: 'center', sm: 'flex-start' }}>
          <SocialButton label="X / Twitter" href={socials.x} icon={xIcon} />
          <SocialButton label="TikTok" href={socials.tiktok} icon={tiktokIcon} />
          <SocialButton label="Copy Discord username" onClick={handleDiscord} icon={discordIcon} />
        </Flex>
      </Flex>
    </Flex>
  );
}
