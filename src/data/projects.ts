export interface ProjectData {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  images: string[];
  videoUrl?: string;
}

// Semua gambar project diambil dari folder /public/projects
// Thumbnail (kartu di spiral) dan images (halaman detail) bisa file yang sama.
export const projects: ProjectData[] = [
  {
    id: 1,
    title: 'Sony ',
    description: 'A 3D interactive experience built with WebGL and spatial audio.',
    thumbnailUrl: '/projects/sony.png',
    images: [
      '/projects/sony.png',
      '/projects/sony.png',
    ],
  },
  {
    id: 2,
    title: 'Nike',
    description: 'Generative art installation using real-time neural network feedback loops.',
    thumbnailUrl: '/projects/nike.png',
    images: [
      '/projects/nike.png',
      '/projects/nike.png',
    ],
  },
  {
    id: 3,
    title: 'Dayoon OS',
    description: 'Design system and component library for data-rich dashboards.',
    thumbnailUrl: '/projects/os.png',
    images: [
      '/projects/os.png',
      '/projects/os.png',
    ],
  },
  {
    id: 4,
    title: 'Volx',
    description: 'Cinematic short film blending live-action with real-time VFX.',
    thumbnailUrl: '/projects/motor.png',
    images: [
      '/projects/motor.png',
      '/projects/motor.png',
    ],
  }
];
