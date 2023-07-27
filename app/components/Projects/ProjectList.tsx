import React from 'react';
import styles from '../../page.module.css'; // Adjust the path to your CSS file
import Project from "./Project";

/*
Props List:
name
desc
image
image_alt
link
github
*/


const ProjectList = () => {
  return (
    <main className={styles.contentContainer}>
        <h1 className={styles.projects}>
            Projects
        </h1>
        <div className={styles.projectlist}>
            <Project 
                name="FranklinShack.com"
                desc="You're here!"
                link="https://FranklinShack.com"
                github="https://github.com/FranklinShack/FranklinShack.com"
            />
        </div>
    </main>
  );
};

export default ProjectList;