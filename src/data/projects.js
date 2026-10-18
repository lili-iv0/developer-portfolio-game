import facilityImg from '../assets/facility.jpeg';
import floodImg from '../assets/flood.png';
import wordBudImg from '../assets/wordBud.png';
import rawsImg from '../assets/RAWS.jpeg';

const projects = [
  {
    id: 'facility-reservation',
    title: 'Campus Facility Reservation System',
    description:
      'Booking portal for campus rooms and halls with admin approval, a weekly calendar, check-in tracking, and printable slips.',
    image: facilityImg,
    tags: ['Ongoing', 'Python', 'Django', 'Bootstrap', 'SQLite', 'Chart.js'],
    github: 'https://github.com/Misteaken-Tan/Facility_Reservation',
    demo: '',
    website: '',
    featured: true,
  },
  {
    id: 'alab-ready',
    title: 'Alab Ready',
    description:
      'A gamified disaster preparedness learning platform for Bulacan State University NSTP students, featuring role-based access, XP and badge rewards, and assessment analytics.',
    image: floodImg,
    tags: ['React', 'Vite', 'HTML', 'CSS', 'JavaScript', 'Supabase', 'PWA'],
    github: '',
    demo: 'https://drive.google.com/file/d/1nmIBaMVuypTYcgm3FGesTclhwCNN0KBB/view?usp=sharing',
    website: 'https://alab-ready.pages.dev/',
    featured: true,
  },
  {
    id: 'word-bud',
    title: 'Word Bud',
    description:
      'An Android vocabulary learning app featuring interactive flashcards, quizzes, progress tracking, and achievement badges to make learning fun and engaging.',
    image: wordBudImg,
    tags: ['Java', 'Android Studio', 'Figma'],
    github: 'https://github.com/lili-iv0/WordBud',
    demo: '',
    website: '',
    featured: true,
  },
  {
    id: 'raws-game',
    title: 'Red Alert: Weeks of Survival',
    description:
      'A strategy game where players manage resources and survive waves of enemies. Sample project: replace it with one of your own.',
    image: rawsImg,
    tags: ['Unity', 'C#'],
    github: 'https://github.com/lili-iv0/RAWS',
    demo: 'https://drive.google.com/file/d/1RtKDQIEYtiZxizNgxFo4dRZUe2Gn6Gek/view?usp=drive_link',
    website: '',
    featured: false,
  },
];

export default projects;
