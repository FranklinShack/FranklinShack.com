
import React from 'react';
import styles from '../../page.module.css'; // Adjust the path to your CSS file
import Experience from "./Experience";
import PositionList from "./PositionList";
/*
Props List:
name
company_image
image_alt
location
time_span
positions
*/



const ExperienceList = () => {
  return (
    <main className={styles.contentContainer}>
        <h1 className={styles.projects}>
            Experience
        </h1>
        <div className={styles.projectlist}>
            <Experience
                name = "Course Assistant"
                location = "Hoboken, NJ"
                time_span = "Aug. 2020 - May 2023"
                position_list = {[
                    ["Discrete Structures", "Proctored exams, graded assignments and exams related to predicate logic, proofs, set theory, and other theory topics.  Ran lab sessions and graded lab assignments done in Racket using a custom python autograding solution."], 
                    ["Theory of Computation", "Proctored exams. Graded assignments and exams related to automata, Turing machines, regular expressions, and other theory topics."],
                    ["Fundamentals of Computation", "Proctored exams.  Graded assignments and exams related to Python and basic programming."],
                    ["Introduction to Game Design", "Helped students design and program game projects in Unity using C# and Aseprite."]
                ]}
            />

            <Experience
                name = "Research Assistant"
                location = "Hoboken, NJ (Remote)"
                time_span = "May 2020 - Dec. 2020"
                position_list = {[
                    [
                        "Student Research Assistant",
                        "Researched access control policies and the best languages to implement them on a large scale. Created a template using HTML, CSS, and JavaScript for a social media platform that would allow users to strictly define rules for who can see and comment on their posts, then implemented an access control system using Prolog and integrated it into a Java servlet."
                    ]
                ]}
            />
        </div>
    </main>
  );
};

export default ExperienceList;