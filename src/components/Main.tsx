import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/avatar.png';

const CV_URL = "https://drive.google.com/file/d/1n-eA36HnJzpID_4gmrDsKMNfF8gA5osz/view?usp=sharing";

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/MaximilianoIS" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={CV_URL} target="_blank" rel="noreferrer" aria-label="CV"><DescriptionIcon/></a>
          </div>
          <h1>Maximiliano Islas</h1>
          <p>Physics + AI Student</p>

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