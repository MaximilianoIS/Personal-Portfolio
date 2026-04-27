import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/avatar.png';
import AnimatedWave from './AnimatedWave';

const CV_URL = "https://drive.google.com/file/d/1n-eA36HnJzpID_4gmrDsKMNfF8gA5osz/view?usp=sharing";

interface NewsItem {
  type: 'talk' | 'preprint' | 'award' | 'news';
  label: string;
  title: string;
  date: string;
  location?: string;
  url: string;
}

const newsItems: NewsItem[] = [
  {
    type: 'talk',
    label: 'NEXT TALK',
    title: 'Quantum Future Korea 2026',
    date: 'May 15, 2026',
    location: 'National Assembly · Seoul',
    url: 'https://www.qisca.org/event-details/quantum-future-korea-2026',
  },
];

const typeColors: Record<NewsItem['type'], string> = {
  talk:     '#7c9bbf',
  preprint: '#9b8fc0',
  award:    '#c9a84c',
  news:     '#7ab89a',
};

function Main() {
  return (
    <div className="container">
      <div className="about-section">

        {/* Animated wave replaces static PNG */}
        <AnimatedWave darkMode={false} />

        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>

        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/MaximilianoIS" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={CV_URL} target="_blank" rel="noreferrer" aria-label="CV"><DescriptionIcon/></a>
          </div>

          <h1>Maximiliano Islas</h1>
          <p className="hero-subtitle">Physics + AI Student</p>

          {/* ── News / Events strip ── */}
          <div className="news-strip">
            {newsItems.map((item, i) => {
              const [month, day] = item.date.split(' ');
              return (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="news-pill"
                style={{ '--pill-color': typeColors[item.type] } as React.CSSProperties}
              >
                {/* Date block */}
                <div className="news-pill__date-block">
                  <span className="month">{month}</span>
                  <span className="day">{day?.replace(',','')}</span>
                </div>

                {/* Body */}
                <div className="news-pill__body">
                  <span className="news-pill__badge">{item.label}</span>
                  <span className="news-pill__title">{item.title}</span>
                  {item.location && (
                    <span className="news-pill__meta">{item.location}</span>
                  )}
                </div>

                <OpenInNewIcon className="news-pill__icon" />
              </a>
            )})}
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/MaximilianoIS" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={CV_URL} target="_blank" rel="noreferrer" aria-label="CV"><DescriptionIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
