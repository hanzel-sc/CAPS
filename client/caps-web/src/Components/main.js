import React from 'react';
import './main.css';

function MainStuff(){
    return(
        <section id="main-section" className="main-section">
            <div className="left">
                <p>CAPS, or the Centre for Academic and Professional Support, is designed for students, educators, and professionals within the CHRIST community who are eager to enhance their academic, scholarly, and professional skills. Whether you are a student striving to excel in your studies, a researcher looking to master advanced writing techniques, or someone seeking guidance on professional communication, CAPS is your go-to resource. Our services cater to a wide range of needs through various modalities, including peer training, one-on-one coaching, e-learning modules, and psychometric assessments. </p>
            </div>
            <div className="right">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/fzUOF2MNOrk" title="What is CAPS?" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section>

    );
}
export default MainStuff;