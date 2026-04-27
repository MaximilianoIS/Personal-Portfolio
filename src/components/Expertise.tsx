import React from "react";
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const BLUE = '#5b8db8';

const skills = [
    {
        icon: <PsychologyOutlinedIcon sx={{ fontSize: '1.9rem', color: BLUE }} />,
        title: 'AI for Science & Research',
        desc: 'Applying ML and deep learning to scientific and economic problems — from physics-informed models and GNNs to NLP pipelines and LLM-based RAG systems.',
        labels: ['PyTorch', 'Scikit-learn', 'GNN', 'LLM Fine-tuning', 'NLP', 'RAG', 'Hugging Face', 'LangChain', 'Time-series', 'UQ'],
    },
    {
        icon: <MemoryOutlinedIcon sx={{ fontSize: '1.9rem', color: BLUE }} />,
        title: 'HPC & Mathematical Modeling',
        desc: 'High-performance numerical algorithms for scientific computing — parallel programming (MPI), Monte Carlo methods, sparse matrix techniques on Linux HPC clusters.',
        labels: ['Python', 'C / C++', 'Fortran 90', 'Open MPI', 'Monte Carlo', 'Sparse Matrices', 'GPU', 'MATLAB', 'Mathematica', 'LaTeX'],
    },
    {
        icon: <BubbleChartOutlinedIcon sx={{ fontSize: '1.9rem', color: BLUE }} />,
        title: 'Quantum Simulation & Physics',
        desc: 'Quantum many-body systems, spin-orbit–coupled optical lattices, entanglement dynamics. Exact diagonalization, quantum circuit simulation, experimental optics.',
        labels: ['Qiskit', 'Exact Diag.', 'Quantum Dynamics', 'Spin-orbit', 'Many-body', 'Quantum ESPRESSO', 'LabVIEW'],
    },
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                {skills.map((s, i) => (
                    <div className="skill" key={i}>
                        <div className="skill-icon">
                            {s.icon}
                        </div>
                        <h3 className="skill-title">{s.title}</h3>
                        <p className="skill-desc">{s.desc}</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {s.labels.map((label, j) => (
                                <Chip key={j} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Expertise;
