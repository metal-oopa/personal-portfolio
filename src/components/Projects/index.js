import { useEffect, useState } from 'react'

import { faCode, faCodeBranch, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

// Projects data - easily scalable for future additions
const projects = [
  {
    id: 1,
    title: 'Real-time Notification System',
    description: 'Built a comprehensive real-time notification module using Django and MongoDB with end-to-end encryption for secure delivery of critical alerts.',
    technologies: ['Django', 'MongoDB', 'WebSocket', 'End-to-End Encryption', 'Python'],
    category: 'Backend Development',
    status: 'Completed',
    year: '2024',
    company: 'Mak Design Private Limited',
    features: [
      'Real-time delivery of notifications',
      'End-to-end encryption for security',
      'Scalable MongoDB backend',
      'WebSocket integration for instant updates'
    ],
    images: [], // Provision for multiple images
    githubUrl: null, // Private project
    liveUrl: null, // Private project
    isPrivate: true
  },
  {
    id: 2,
    title: 'Performance Analytics Framework',
    description: 'Created a comprehensive framework for tracking performance analytics including loading times and click event response times for map libraries, connected to a React frontend.',
    technologies: ['JavaScript', 'React', 'Performance API', 'Data Visualization', 'Analytics'],
    category: 'Frontend Development',
    status: 'Completed',
    year: '2024',
    company: 'Mak Design Private Limited',
    features: [
      'Real-time performance monitoring',
      'Map library performance comparison',
      'React-based dashboard',
      'Interactive data visualization'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 3,
    title: 'Heavy-Gas Dispersion Model',
    description: 'Engineered a sophisticated heavy-gas dispersion model with 92% predictive accuracy, enhancing hazard prediction capabilities for safety teams.',
    technologies: ['Java', 'Mathematical Modeling', 'Algorithm Design', 'Safety Systems'],
    category: 'Scientific Computing',
    status: 'Completed',
    year: '2023',
    company: 'DRDO',
    features: [
      '92% predictive accuracy',
      'Advanced mathematical modeling',
      'Safety team integration',
      'Real-time hazard prediction'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 4,
    title: 'Java Swing GUI Application',
    description: 'Designed and implemented a user-friendly Java Swing GUI validated through usability testing to streamline end-user interactions.',
    technologies: ['Java', 'Swing', 'GUI Design', 'Usability Testing', 'UX/UI'],
    category: 'Desktop Application',
    status: 'Completed',
    year: '2023',
    company: 'DRDO',
    features: [
      'Intuitive user interface',
      'Validated through usability testing',
      'Streamlined user interactions',
      'Cross-platform compatibility'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 5,
    title: '2D Data Visualization Tool',
    description: 'Developed a Python-based 2D plotting tool backed by Flask API for enhanced data visualization and improved decision-making clarity.',
    technologies: ['Python', 'Flask', 'Data Visualization', 'API Development', 'Charts'],
    category: 'Data Visualization',
    status: 'Completed',
    year: '2023',
    company: 'DRDO',
    features: [
      'Interactive 2D plotting',
      'Flask API backend',
      'Real-time data processing',
      'Decision-making insights'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 6,
    title: 'IPFS Trading Platform Engine',
    description: 'Redesigned trading platform core engine with IPFS Merkle DAG and pub-sub system, reducing transaction times by 70%.',
    technologies: ['Node.js', 'Express.js', 'IPFS', 'Merkle DAG', 'Blockchain', 'Pub-Sub'],
    category: 'Blockchain Development',
    status: 'Completed',
    year: '2023',
    company: 'Verified Network',
    features: [
      '70% reduction in transaction times',
      'IPFS Merkle DAG implementation',
      'Pub-sub messaging system',
      'Enhanced marketplace efficiency'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 7,
    title: 'Automated CI/CD Pipeline',
    description: 'Engineered comprehensive CI/CD pipeline using GitHub Actions and AWS CodeDeploy for fully automated deployments.',
    technologies: ['GitHub Actions', 'AWS CodeDeploy', 'DevOps', 'Automation', 'Cloud'],
    category: 'DevOps',
    status: 'Completed',
    year: '2023',
    company: 'Verified Network',
    features: [
      'Fully automated deployments',
      'GitHub Actions integration',
      'AWS CodeDeploy implementation',
      'Accelerated release cycles'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 8,
    title: 'Social Media Platform',
    description: 'Developed a scalable social media platform with WebSocket-based voice/video calling, serving 10,000+ active users.',
    technologies: ['Node.js', 'Express.js', 'Next.js', 'MongoDB', 'WebSocket', 'WebRTC'],
    category: 'Full Stack Development',
    status: 'Completed',
    year: '2022',
    company: 'Metarootz',
    features: [
      '10,000+ active users',
      'WebSocket voice/video calling',
      'Scalable architecture',
      'Real-time communication'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  }
]

const Projects = () => {
  const projectsArray = 'Projects'.split('')
  const [letterClass, setLetterClass] = useState('text-animate')
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Get unique categories for filtering
  const categories = ['All', ...new Set(projects.map(project => project.category))]

  // Filter projects based on selected category
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={projectsArray}
              idx={15}
            />
          </h1>
          <p>
            A showcase of my technical projects spanning various domains including
            backend development, data visualization, blockchain, and DevOps. Each project
            represents a solution to real-world challenges.
          </p>
          
          {/* Category Filter */}
          <div className="filter-container">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-container">
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="project-card" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Project Images Section - with provision for multiple images */}
                {project.images && project.images.length > 0 && (
                  <div className="project-images">
                    <div className="image-carousel">
                      {project.images.map((image, idx) => (
                        <img key={idx} src={image} alt={`${project.title} ${idx + 1}`} />
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="project-content">
                  <div className="project-header">
                    <div className="project-meta">
                      <span className="category">{project.category}</span>
                      <span className="year">{project.year}</span>
                      <span className={`status ${project.status.toLowerCase()}`}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="company">{project.company}</p>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link">
                        <FontAwesomeIcon icon={faCodeBranch} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.isPrivate && (
                      <span className="private-indicator">
                        <FontAwesomeIcon icon={faCode} />
                        <span>Private Project</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
