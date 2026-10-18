// ADD, EDIT, OR REMOVE PROJECTS HERE. This is the only file you need to touch.
//
// Fields:
//   id        unique short name (no spaces)
//   title     project name
//   description  1-2 sentences
//   image     an imported screenshot (see the imports below), a path in /public/projects
//             (e.g. '/projects/my-app.png'), or '' for a placeholder with the project's initials
//   tags      tech stack, shown as tags (also used by the filter buttons)
//   github    link to the repository ('' hides the button)
//   demo      link to the live site ('' hides the button)
//   website   extra Website button link ('' or leave out to hide it)
//   featured  true = shown on the Home page

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
    github: 'https://github.com/your-username/developer-portfolio',
    demo: 'https://drive.google.com/file/d/1nmIBaMVuypTYcgm3FGesTclhwCNN0KBB/view?usp=sharing',
    website: 'https://alab-ready.pages.dev/',
    featured: true,
  },
  {
    id: 'word-bud',
    title: 'Word Bud',
    description:
      'A vocabulary builder with flashcards, quizzes, and progress tracking. Sample project: replace it with one of your own.',
    image: wordBudImg,
    tags: ['Java', 'Android Studio'],
    github: 'https://github.com/your-username/word-bud',
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
