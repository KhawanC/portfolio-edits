import photo from './assets/foto-pessoal.jpg';
import dbdRoblox from './assets/dbd-roblox-edit.mp4';
import phantomBlade from './assets/phantom-blade-edit.mp4';
import liveCut from './assets/pipi-corte-live.mp4';
import roblox from './assets/roblox-edit.mp4';
import ujiixLong from './assets/ujiix-corte-live-longo.mp4';
import ordemParanormal from './assets/ordem-paranormal-rpg-edit.mp4';

export const profile = {
  name: 'Khawan',
  role: 'Video Editor',
  bio: "Turning moments into dynamic, eye-catching and fun compilations. Don't hesitate to reach out.",
  photo,
  socials: {
    x: 'https://x.com/clonazepam_k',
    tiktok: 'https://www.tiktok.com/@khawanc',
    discord: 'khawan_c',
  },
};

// Add new videos here — they'll show up automatically.
// Vertical (9:16) videos fill the grid. Mark 16:9 videos with `horizontal: true`:
// they're listed one below the other, under the vertical ones.
// Videos in other formats (e.g. square 1:1) can use `fit: 'contain'` to sit
// inside the same 9:16 card without being cropped.
export const videos = [
  { title: 'Live Highlights', tag: 'Stream cut', src: liveCut },
  { title: 'Phantom Blade', tag: 'Gaming edit', src: phantomBlade },
  { title: 'Dead by Daylight × Roblox', tag: 'Gaming edit', src: dbdRoblox },
  { title: 'Redliner × Roblox', tag: 'Gaming edit', src: roblox },
  { title: 'Ordem Paranormal', tag: 'RPG edit', src: ordemParanormal, fit: 'contain' },
  { title: 'Ujiix Live', tag: 'Stream cut', src: ujiixLong, horizontal: true },
];
