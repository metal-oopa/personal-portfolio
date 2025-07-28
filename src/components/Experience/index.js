import { useEffect, useState } from 'react'

import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const workExperience = [
  {
    id: 1,
    company: 'Mak Design Private Limited',
    companyUrl: 'https://www.makdesign.in/',
    position: 'Software Development Engineer',
    duration: 'May 2024 – Present',
    location: 'Mumbai, Maharashtra (Remote)',
    achievements: [
      'Built a real-time notification module using Django and MongoDB, secured by end-to-end encryption, ensuring timely and confidential delivery of critical alerts to end-users.',
      'Created a framework for performance analytics loading time, click event response time for maps rendered by different libraries using JavaScript and connected it to a React frontend.'
    ]
  },
  {
    id: 2,
    company: 'Defence Research and Development Organisation (DRDO)',
    companyUrl: 'https://www.drdo.gov.in/drdo/',
    position: 'Software Development Engineer',
    duration: 'May 2023 – May 2024',
    location: 'Gwalior, Madhya Pradesh (Hybrid)',
    achievements: [
      'Engineered a heavy-gas dispersion model (Java), with 92% predictive accuracy, enhancing hazard prediction capabilities for safety teams.',
      'Designed and implemented a Java Swing GUI, validated through improved usability testing, to streamline and simplify end-user interactions.',
      'Developed a 2D plotting tool in Python backed by a Flask API, enabling data visualization that improved decision-making clarity among project stakeholders.'
    ]
  },
  {
    id: 3,
    company: 'Verified Network',
    companyUrl: 'https://www.verified.network/',
    position: 'DevOps Engineer — Contract',
    duration: 'February 2023 — May 2023',
    location: 'Switzerland (Remote)',
    achievements: [
      'Redesigned the trading platform\'s core engine by implementing an order-matching system using IPFS Merkle DAG and IPFS pub-sub on a Node.js/Express.js server, reducing transaction times by 70% and increasing marketplace efficiency.',
      'Achieved 90% test coverage by architecting comprehensive test suites with Chai and Mocha, ensuring robust code quality and reliability.',
      'Engineered the CI/CD pipeline (GitHub Actions and AWS CodeDeploy) resulting in fully automated deployments and accelerating release cycles.'
    ]
  },
  {
    id: 4,
    company: 'Metarootz',
    companyUrl: 'https://www.metarootz.io/',
    position: 'Software Development Engineer — Contract',
    duration: 'December 2022 — February 2023',
    location: 'Dubai, UAE (Remote)',
    achievements: [
      'Developed a social media platform using Node.js/Express.js, Next.js, and MongoDB, scaled it to 10,000+ active users, and integrated WebSocket-based voice/video calling to boost user engagement and interaction.'
    ]
  }
]

const Experience = () => {
  const experienceArray = 'Experience'.split('')
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container experience-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={experienceArray}
              idx={15}
            />
          </h1>
          <p>
            My professional journey spans across various industries and technologies,
            from defense systems to trading platforms and social media applications.
            Each role has contributed to my growth as a versatile software engineer.
          </p>
        </div>

        <div className="experience-container">
          <div className="timeline">
            {workExperience.map((job, index) => (
              <div key={job.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-marker">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <div className="timeline-content">
                  <div className="job-header">
                    <h3 className="company-name">
                      <a href={job.companyUrl} target="_blank" rel="noreferrer">
                        {job.company}
                      </a>
                    </h3>
                    <h4 className="position">{job.position}</h4>
                    <div className="job-meta">
                      <span className="duration">{job.duration}</span>
                      <span className="location">{job.location}</span>
                    </div>
                  </div>
                  <ul className="achievements">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
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

export default Experience
