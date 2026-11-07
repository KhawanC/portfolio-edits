import photo from './assets/foto-pessoal.jpg';
import dbdRoblox from './assets/dbd-roblox-edit.mp4';
import phantomBlade from './assets/phantom-blade-edit.mp4';
import liveCut from './assets/pipi-corte-live.mp4';
import roblox from './assets/roblox-edit.mp4';

export const profile = {
  name: 'Khawan',
  role: 'Video Editor',
  bio: "Video editor focused on turning moments into dynamic, eye-catching and fun compilations. Don't hesitate to reach out.",
  photo,
  socials: {
    x: 'https://x.com/clonazepam_k',
    tiktok: 'https://www.tiktok.com/@khawanc',
    discord: 'khawan_c',
  },
};

// Add new videos here — they'll show up automatically in the grid.
export const videos = [
  { title: 'Live Highlights', tag: 'Stream cut', src: liveCut },
  { title: 'Phantom Blade', tag: 'Gaming edit', src: phantomBlade },
  { title: 'Dead by Daylight × Roblox', tag: 'Gaming edit', src: dbdRoblox },
  { title: 'Redliner × Roblox', tag: 'Gaming edit', src: roblox },
];
