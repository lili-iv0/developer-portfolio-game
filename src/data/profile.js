// Edit this file to change your name, bio, skills, and links.
// Components read from here, so you never need to touch them for content.

const profile = {
  name: 'Lee Ann Robles',
  title: 'IT Web and Mobile Developer',
  tagline:
    'I build web applications with Django and React, with a focus on clear interfaces, clean data models, and code that is easy to maintain.',

  email: 'leeann.robles1804@gmail.com',
  github: 'https://github.com/lili-iv0',
  linkedin: 'https://www.linkedin.com/in/liyan-robles',
  resumeUrl: 'https://drive.google.com/file/d/12EileBVbLPDpoFpRtyczZ4x7jjh8Jo9N/view?usp=sharing', // e.g. '/resume.pdf' (put the file in the /public folder). Leave empty to hide the button.

  // Contact form: create a free form at https://formspree.io, then paste the ID
  // (the part after /f/ in your form URL). Leave empty to open the visitor's email app instead.
  formspreeId: '',

  // Shown in the code panel on the Home page.
  stack: ['React', 'Javascript','Supabase'],

  // Three short status items shown under the hero on the Home page.
  now: [
    { label: 'Building', value: 'A reservation system with Django and Bootstrap' },
    { label: 'Learning', value: 'REST API design and automated testing' },
    { label: 'Availability', value: 'Open to internships and freelance work', open: true },
  ],

  bio: [
    'I’m an IT student specializing in web and mobile development. I enjoy creating applications that solve real-world problems and make everyday tasks easier. I work with JavaScript, React, Node.js, Express, Django, Supabase, Java, and Firebase, and I’m always looking for opportunities to learn and improve my skills as a developer.',
  ],

// Grouped skills. No self-ratings: recruiters read the list and your projects.
skills: [
  { group: 'Front end', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { group: 'Back end', items: ['Node.js', 'Express.js', 'Django', 'REST APIs'] },
  { group: 'Mobile', items: ['Java', 'Android Studio', 'Firebase', 'Capacitor'] },
  { group: 'Databases', items: ['Supabase', 'Firebase', 'MySQL'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Android Studio', 'Vercel', 'Cloudflare Pages'] },
],

  // Education and experience, newest first.
  timeline: [
    {
      when: '2023 – Present',
      title: 'BS in Information Technology',
      place: 'Bulacan State University – Malolos',
      note: 'Focus on web and mobile development, databases, and software engineering.',
    },
    {
      when: '2026',
      title: 'Capstone project',
      place: 'Alab Ready - A gamified learning system',
      note: 'A gamified disaster preparedness platform built for Bulacan State University NSTP students. Features role-based dashboards for students, teachers, and admins, interactive modules, mini-games, XP and badges, and full assessment analytics with Excel export.',
    },
  ],
};

export default profile;
