import React, { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import Resume from "../resume/resume";
import styles from "./body.module.css";
import Editor from "../editor/editor";
import { Download } from "react-feather";

function Body() {
  const colors = ["#B3C100", "#D32D41", "#1F3F49", "#4CB5F5", "#6AB187"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  const resumeRef = useRef();

  const [activeColor, setActiveColor] = useState(colors[0]);
  
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  useEffect(() => {
    console.log(resumeInformation);
  }, [resumeInformation]);

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Resume Builder</p>
      <div className={styles.toolbar}>
        <ReactToPrint
          trigger={() => {
            return (
              <button>
                Download <Download />
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
        <div className={styles.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={`${styles.color} ${activeColor===item? styles.active:""}`}
              onClick={()=>setActiveColor(item)}
            />
          ))}
        </div>
   
      </div>
      <div className={styles.main}>
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation} // Pass setInformation as a prop
        />
        <Resume
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
        />
      </div>
    </div>
  );
}

export default Body;

// return (
//   <div className={styles.container}>
//     <p className={styles.heading}>Resume Builder</p>
//     <div className={styles.toolbar}>
//       <div className={styles.colors}>
//         {colors.map((item) => (
//           <span
//             key={item}
//             style={{ backgroundColor: item }}
//             className={`${styles.color} ${
//               activeColor === item ? styles.active : ""
//             }`}
//             onClick={() => setActiveColor(item)}
//           />
//         ))}
//       </div>
//       <ReactToPrint
//         trigger={() => {
//           return (
//             <button>
//               Download <Download />
//             </button>
//           );
//         }}
//         content={() => resumeRef.current}
//       />
//     </div>
//     <div className={styles.main}>
//       <Editor
//         sections={sections}
//         information={resumeInformation}
//         setInformation={setResumeInformation}
//       />
//     </div>
//   </div>
// );
// }

// export default Body;
