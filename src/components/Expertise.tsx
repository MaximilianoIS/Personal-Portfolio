import React from "react";
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsHPC = [
    "Python",
    "C / C++",
    "Fortran 90",
    "MATLAB",
    "Open MPI",
    "Monte Carlo",
    "Sparse Matrices",
    "GPU Acceleration",
    "Mathematica",
    "Linux",
    "Docker",
    "LaTeX",
];

const labelsQuantum = [
    "Qiskit",
    "Exact Diagonalization",
    "Quantum Dynamics",
    "Spin-orbit Coupling",
    "Many-body Physics",
    "Quantum Espresso",
    "Quantum Information",
    "LabVIEW",
];

const labelsAI = [
    "PyTorch",
    "Scikit-learn",
    "Graph Neural Networks",
    "LLM Fine-tuning",
    "NLP",
    "RAG Systems",
    "Hugging Face",
    "LangChain",
    "Pandas",
    "Time-series Analysis",
    "Uncertainty Quantification",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">

                <div className="skill">
                    <div className="skill-icon">
                        <MemoryOutlinedIcon sx={{ fontSize: '2.2rem', color: '#c9a84c' }} />
                    </div>
                    <h3>HPC & Mathematical Modeling</h3>
                    <p>
                        I develop high-performance numerical algorithms for scientific computing,
                        combining parallel programming (Open MPI), Monte Carlo methods, and sparse
                        matrix techniques. Experienced in scientific programming with Python,
                        C/C++, and Fortran 90 on Linux-based HPC environments.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsHPC.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-icon">
                        <BubbleChartOutlinedIcon sx={{ fontSize: '2.2rem', color: '#c9a84c' }} />
                    </div>
                    <h3>Quantum Simulation & Physics</h3>
                    <p>
                        I investigate quantum many-body systems, including spin-orbit–coupled
                        optical lattices and quantum entanglement dynamics. Skilled in implementing
                        exact diagonalization and quantum circuit simulations, with hands-on
                        experience in experimental optics and laser systems.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsQuantum.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-icon">
                        <PsychologyOutlinedIcon sx={{ fontSize: '2.2rem', color: '#c9a84c' }} />
                    </div>
                    <h3>AI for Science & Research</h3>
                    <p>
                        I apply machine learning and deep learning to scientific and economic
                        problems — from physics-informed models and graph neural networks to
                        NLP pipelines for large-scale media analysis. Experience building
                        LLM-based and RAG systems for research and real-world applications.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsAI.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;
