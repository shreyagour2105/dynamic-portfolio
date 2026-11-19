const bcrypt = require('bcryptjs');

function createSeedData() {
  return {
    profile: {
      id: 'profile',
      name: 'Alex Morgan',
      role: 'Full-stack product engineer',
      location: 'Available worldwide',
      email: 'hello@example.com',
      headline: 'I turn ambitious ideas into calm, useful digital products.',
      bio: 'I design and build web experiences that balance sharp engineering with thoughtful interaction. My work spans product strategy, accessible interfaces, and resilient backend systems.',
      availability: 'Open to select collaborations',
      social: {
        github: 'https://github.com/',
        linkedin: 'https://www.linkedin.com/',
      },
    },
    projects: [
      {
        id: 'project-atlas',
        title: 'Atlas Workspace',
        summary: 'A focused operations hub that turns fragmented team signals into a clear daily plan.',
        description: 'Product design and full-stack implementation for a collaborative planning workspace.',
        technologies: ['React', 'Node.js', 'PostgreSQL'],
        liveUrl: 'https://example.com',
        repositoryUrl: 'https://github.com/',
        featured: true,
        year: 2026,
        color: '#ff6b4a',
      },
      {
        id: 'project-lumen',
        title: 'Lumen Analytics',
        summary: 'An accessible analytics experience that helps small teams act on customer behavior.',
        description: 'A data-rich dashboard with progressive disclosure and fast reporting workflows.',
        technologies: ['React', 'Express', 'D3'],
        liveUrl: 'https://example.com',
        repositoryUrl: 'https://github.com/',
        featured: true,
        year: 2025,
        color: '#7c5cff',
      },
      {
        id: 'project-fieldnotes',
        title: 'Fieldnotes',
        summary: 'A distraction-light publishing tool for researchers working between desk and field.',
        description: 'Offline-friendly writing and media capture with a deliberately simple interface.',
        technologies: ['PWA', 'IndexedDB', 'Node.js'],
        liveUrl: 'https://example.com',
        repositoryUrl: 'https://github.com/',
        featured: false,
        year: 2025,
        color: '#1cb89a',
      },
    ],
    skills: [
      { id: 'skill-product', name: 'Product engineering', category: 'Build', level: 92 },
      { id: 'skill-react', name: 'React & design systems', category: 'Frontend', level: 94 },
      { id: 'skill-node', name: 'Node.js APIs', category: 'Backend', level: 88 },
      { id: 'skill-accessibility', name: 'Accessibility', category: 'Craft', level: 90 },
      { id: 'skill-strategy', name: 'Product strategy', category: 'Think', level: 84 },
      { id: 'skill-prototyping', name: 'Rapid prototyping', category: 'Craft', level: 91 },
    ],
    achievements: [
      { id: 'achievement-1', title: 'Design systems lead', issuer: 'Independent studio', year: 2026, description: 'Created a shared system that aligned product and engineering workflows.' },
      { id: 'achievement-2', title: 'Accessibility advocate', issuer: 'Community program', year: 2025, description: 'Led practical workshops on inclusive product development.' },
      { id: 'achievement-3', title: 'Open-source contributor', issuer: 'Developer community', year: 2024, description: 'Contributed fixes and documentation to tools used by web teams.' },
    ],
    users: [
      {
        id: 'admin',
        email: (process.env.ADMIN_EMAIL || 'admin@portfolio.dev').toLowerCase(),
        passwordHash: bcrypt.hashSync(process.env.ADMIN_PASSWORD || 'ChangeMe123!', 10),
        role: 'admin',
      },
    ],
  };
}

module.exports = { createSeedData };
