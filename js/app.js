const templateCards =
    document.querySelectorAll(".template-card");

const templateSelection =
    document.getElementById("templateSelection");

const builderPage =
    document.getElementById("builderPage");

const sectionManagerList =
    document.getElementById(
        "sectionManagerList"
    );

/* ========================= */
/* FORM INPUTS */
/* ========================= */

const fullNameInput =
    document.getElementById("fullName");

const roleInput =
    document.getElementById("role");

const emailInput =
    document.getElementById("email");

const phoneInput =
    document.getElementById("phone");

const summaryInput =
    document.getElementById("summary");

/* ========================= */
/* SKILL SECTIONS */
/* ========================= */

const normalSkillsSection =
    document.getElementById(
        "normalSkillsSection"
    );

const skillsContainer =
    document.getElementById(
        "skillsContainer"
    );

const addSkillBtn =
    document.getElementById(
        "addSkill"
    );

/* ========================= */
/* ACADEMIC SKILLS */
/* ========================= */

const academicSkillsSection =
    document.getElementById(
        "academicSkillsSection"
    );

const academicSkillsContainer =
    document.getElementById(
        "academicSkillsContainer"
    );

const addAcademicSkillBtn =
    document.getElementById(
        "addAcademicSkill"
    );

/* ========================= */
/* TEMPLATE SELECTION */
/* ========================= */

templateCards.forEach(card => {

    card.addEventListener("click", () => {

        const template =
            card.dataset.template;

        appState.currentTemplate =
            template;

        templateSelection.classList
            .add("hidden");

        builderPage.classList
            .remove("hidden");

        /* TEMPLATE-SPECIFIC UI */

        if (template === "academic") {

            academicSkillsSection
                .classList.remove("hidden");

            normalSkillsSection
                .classList.add("hidden");

        }

        else {

            academicSkillsSection
                .classList.add("hidden");

            normalSkillsSection
                .classList.remove("hidden");

        }

        renderResume();

    });

});

/* ========================= */
/* PERSONAL INFO */
/* ========================= */

fullNameInput.addEventListener(
    "input",

    e => {

        appState.personalInfo.fullName =
            e.target.value;

        renderResume();

    });

roleInput.addEventListener(
    "input",

    e => {

        appState.personalInfo.role =
            e.target.value;

        renderResume();

    });

emailInput.addEventListener(
    "input",

    e => {

        appState.personalInfo.email =
            e.target.value;

        renderResume();

    });

phoneInput.addEventListener(
    "input",

    e => {

        appState.personalInfo.phone =
            e.target.value;

        renderResume();

    });

summaryInput.addEventListener(
    "input",

    e => {

        appState.personalInfo.summary =
            e.target.value;

        renderResume();

    });

/* ========================= */
/* MODERN TEMPLATE SKILLS */
/* ========================= */

addSkillBtn.addEventListener(
    "click",

    () => {

        const skillDiv =
            document.createElement("div");

        skillDiv.classList.add(
            "skill-form"
        );

        skillDiv.innerHTML = `

      <input
        type="text"
        placeholder="Skill Name"
        class="skill-name"
      >

      <input
        type="range"
        min="1"
        max="100"
        value="80"
        class="skill-range"
      >

    `;

        skillsContainer.appendChild(
            skillDiv
        );

        const skillName =
            skillDiv.querySelector(
                ".skill-name"
            );

        const skillRange =
            skillDiv.querySelector(
                ".skill-range"
            );

        const skillData = {

            name: "",

            level: 80

        };

        appState.skills.push(
            skillData
        );

        skillName.addEventListener(
            "input",

            e => {

                skillData.name =
                    e.target.value;

                renderResume();

            });

        skillRange.addEventListener(
            "input",

            e => {

                skillData.level =
                    e.target.value;

                renderResume();

            });

        renderResume();

    });

    /* ========================= */
/* THEME */
/* ========================= */

const themeToggle =
  document.getElementById(
    "themeToggle"
  );

themeToggle.addEventListener(

  "click",

  () => {

    document.body.classList.toggle(
      "light-mode"
    );

  });
/* ========================= */
/* ACADEMIC TEMPLATE SKILLS */
/* ========================= */

addAcademicSkillBtn.addEventListener(

    "click",

    () => {

        const div =
            document.createElement("div");

        div.classList.add(
            "skill-form"
        );

        div.innerHTML = `

      <div class="skill-form-top">

        <button
          class="remove-skill-btn"
        >

          <i class="fa-solid fa-trash"></i>

        </button>

      </div>

      <input
        type="text"
        placeholder="Skill Heading"
        class="academic-heading"
      >

      <input
        type="text"
        placeholder="Skill Values"
        class="academic-value"
      >

    `;

        academicSkillsContainer
            .appendChild(div);

        const heading =
            div.querySelector(
                ".academic-heading"
            );

        const value =
            div.querySelector(
                ".academic-value"
            );

        const removeBtn =
            div.querySelector(
                ".remove-skill-btn"
            );

        const skillData = {

            heading: "",

            value: ""

        };

        appState.academicSkills.push(
            skillData
        );

        /* LIVE UPDATE */

        heading.addEventListener(

            "input",

            e => {

                skillData.heading =
                    e.target.value;

                renderResume();

            });

        value.addEventListener(

            "input",

            e => {

                skillData.value =
                    e.target.value;

                renderResume();

            });

        /* REMOVE SKILL */

        removeBtn.addEventListener(

            "click",

            () => {

                div.remove();

                const index =
                    appState.academicSkills.indexOf(
                        skillData
                    );

                if (index > -1) {

                    appState.academicSkills.splice(
                        index,
                        1
                    );

                }

                renderResume();

            });

        renderResume();

    });

/* ========================= */
/* INITIAL RENDER */
/* ========================= */

renderResume();

/* ========================= */
/* EXPERIENCE */
/* ========================= */

const experienceContainer =
    document.getElementById(
        "experienceContainer"
    );

const addExperienceBtn =
    document.getElementById(
        "addExperience"
    );

addExperienceBtn.addEventListener(

    "click",

    () => {

        const div =
            document.createElement("div");

        div.classList.add(
            "experience-form"
        );

        div.innerHTML = `

  <div class="experience-header">

    <h4>

      Experience Entry

    </h4>

    <button
      class="remove-exp-btn"
      type="button"
    >

      <i class="fa-solid fa-trash"></i>

    </button>

  </div>

  <div class="experience-grid">

    <input
      type="text"
      placeholder="Company Name"
      class="exp-company"
    >

    <input
      type="text"
      placeholder="Role"
      class="exp-role"
    >

    <input
      type="text"
      placeholder="Location"
      class="exp-location"
    >

    <!-- DATE GROUP -->

    <div class="date-group">

      <!-- START DATE -->

      <div class="date-select">

        <label>

          Start Date

        </label>

        <div class="date-row">

          <select class="exp-start-month">

            <option value="">

              Month

            </option>

            <option>Jan</option>
            <option>Feb</option>
            <option>Mar</option>
            <option>Apr</option>
            <option>May</option>
            <option>Jun</option>
            <option>Jul</option>
            <option>Aug</option>
            <option>Sep</option>
            <option>Oct</option>
            <option>Nov</option>
            <option>Dec</option>

          </select>

          <select class="exp-start-year">

            <option value="">

              Year

            </option>

            ${Array.from(
            { length: 35 },

            (_, i) => `

                  <option>

                    ${2025 - i}

                  </option>

                `
        ).join("")
            }

          </select>

        </div>

      </div>

      <!-- END DATE -->

      <div class="date-select end-date-wrapper">

        <label>

          End Date

        </label>

        <div class="date-row">

          <select class="exp-end-month">

            <option value="">

              Month

            </option>

            <option>Jan</option>
            <option>Feb</option>
            <option>Mar</option>
            <option>Apr</option>
            <option>May</option>
            <option>Jun</option>
            <option>Jul</option>
            <option>Aug</option>
            <option>Sep</option>
            <option>Oct</option>
            <option>Nov</option>
            <option>Dec</option>

          </select>

          <select class="exp-end-year">

            <option value="">

              Year

            </option>

            ${Array.from(
                { length: 35 },

                (_, i) => `

                  <option>

                    ${2025 - i}

                  </option>

                `
            ).join("")
            }

          </select>

        </div>

      </div>

    </div>

    <!-- CURRENTLY WORKING -->

    <label class="current-job">

      <input
        type="checkbox"
        class="exp-current"
      >

      Currently Working Here

    </label>

  </div>

  <textarea
    placeholder="Description / Achievements"
    class="exp-description"
  ></textarea>

`;

        experienceContainer
            .appendChild(div);

        /* ========================= */
        /* ELEMENTS */
        /* ========================= */

        const company =
            div.querySelector(".exp-company");

        const role =
            div.querySelector(".exp-role");

        const location =
            div.querySelector(".exp-location");

        const startMonth =
            div.querySelector(".exp-start-month");

        const startYear =
            div.querySelector(".exp-start-year");

        const endMonth =
            div.querySelector(".exp-end-month");

        const endYear =
            div.querySelector(".exp-end-year");

        const endDateWrapper =
            div.querySelector(".end-date-wrapper");

        const currentCheck =
            div.querySelector(".exp-current");

        const description =
            div.querySelector(".exp-description");

        const removeBtn =
            div.querySelector(".remove-exp-btn");

        /* ========================= */
        /* EXPERIENCE OBJECT */
        /* ========================= */

        const expData = {

            company: "",

            role: "",

            location: "",

            startMonth: "",

            startYear: "",

            endMonth: "",

            endYear: "",

            currentlyWorking: false,

            description: ""

        };

        appState.experiences.push(
            expData
        );

        /* ========================= */
        /* LIVE EVENTS */
        /* ========================= */

        company.addEventListener(

            "input",

            e => {

                expData.company =
                    e.target.value;

                renderResume();

            });

        role.addEventListener(

            "input",

            e => {

                expData.role =
                    e.target.value;

                renderResume();

            });

        location.addEventListener(

            "input",

            e => {

                expData.location =
                    e.target.value;

                renderResume();

            });

        /* START DATE */

        startMonth.addEventListener(

            "change",

            e => {

                expData.startMonth =
                    e.target.value;

                renderResume();

            });

        startYear.addEventListener(

            "change",

            e => {

                expData.startYear =
                    e.target.value;

                renderResume();

            });

        /* END DATE */

        endMonth.addEventListener(

            "change",

            e => {

                expData.endMonth =
                    e.target.value;

                renderResume();

            });

        endYear.addEventListener(

            "change",

            e => {

                expData.endYear =
                    e.target.value;

                renderResume();

            });

        /* CURRENTLY WORKING */

        currentCheck.addEventListener(

            "change",

            e => {

                expData.currentlyWorking =
                    e.target.checked;

                if (e.target.checked) {

                    endDateWrapper.style.display =
                        "none";

                    expData.endMonth = "";

                    expData.endYear = "";

                }

                else {

                    endDateWrapper.style.display =
                        "block";

                }

                renderResume();

            });

        /* DESCRIPTION */

        description.addEventListener(

            "input",

            e => {

                expData.description =
                    e.target.value;

                renderResume();

            });

        /* REMOVE */

        removeBtn.addEventListener(

            "click",

            () => {

                div.remove();

                const index =
                    appState.experiences.indexOf(
                        expData
                    );

                if (index > -1) {

                    appState.experiences.splice(
                        index,
                        1
                    );

                }

                renderResume();

            });

        renderResume();

    });

/* ========================= */
/* PROJECTS */
/* ========================= */

const addProjectBtn =
    document.getElementById(
        "addProject"
    );

const projectsContainer =
    document.getElementById(
        "projectsContainer"
    );

addProjectBtn.addEventListener(

    "click",

    () => {

        const div =
            document.createElement("div");

        div.classList.add(
            "project-form"
        );

        div.innerHTML = `

<div class="project-header">

  <h4>

    Project Entry

  </h4>

  <button
    class="remove-project-btn"
    type="button"
  >

    <i class="fa-solid fa-trash"></i>

  </button>

</div>

<input
  type="text"
  placeholder="Project Title"
  class="project-title"
>

<input
  type="text"
  placeholder="Project Link (Optional)"
  class="project-link"
>

<input
  type="text"
  placeholder="Technologies Used (React, Node, MongoDB)"
  class="project-tech"
>

<textarea
  placeholder="Project Bullet Points / Achievements"
  class="project-description"
></textarea>

`;

        projectsContainer.appendChild(
            div
        );

        const title =
            div.querySelector(".project-title");

        const link =
            div.querySelector(".project-link");

        const tech =
            div.querySelector(".project-tech");

        const description =
            div.querySelector(".project-description");

        const removeBtn =
            div.querySelector(
                ".remove-project-btn"
            );

        const projectData = {

            title: "",

            link: "",

            tech: "",

            description: ""

        };

        appState.projects.push(
            projectData
        );

        /* EVENTS */

        title.addEventListener(
            "input",
            e => {

                projectData.title =
                    e.target.value;

                renderResume();

            });

        link.addEventListener(
            "input",
            e => {

                projectData.link =
                    e.target.value;

                renderResume();

            });

        tech.addEventListener(
            "input",
            e => {

                projectData.tech =
                    e.target.value;

                renderResume();

            });

        description.addEventListener(
            "input",
            e => {

                projectData.description =
                    e.target.value;

                renderResume();

            });

        /* REMOVE */

        removeBtn.addEventListener(

            "click",

            () => {

                div.remove();

                const index =
                    appState.projects.indexOf(
                        projectData
                    );

                if (index > -1) {

                    appState.projects.splice(
                        index,
                        1
                    );

                }

                renderResume();

            });

        renderResume();

    });

/* ========================= */
/* EDUCATION */
/* ========================= */

const addEducationBtn =
  document.getElementById(
    "addEducation"
  );

const educationContainer =
  document.getElementById(
    "educationContainer"
  );

addEducationBtn.addEventListener(

  "click",

  () => {

    const div =
      document.createElement("div");

    div.classList.add(
      "education-form"
    );

    div.innerHTML = `

<div class="education-header">

  <h4>

    Education Entry

  </h4>

  <button
    class="remove-edu-btn"
    type="button"
  >

    <i class="fa-solid fa-trash"></i>

  </button>

</div>

<div class="education-grid">

  <input
    type="text"
    placeholder="Institution Name"
    class="edu-school"
  >

  <input
    type="text"
    placeholder="Degree / Course"
    class="edu-degree"
  >

  <input
    type="text"
    placeholder="CGPA / Percentage"
    class="edu-score"
  >

  <input
    type="text"
    placeholder="Location"
    class="edu-location"
  >

</div>

<div class="date-group">

  <div class="date-select">

    <label>

      Start Year

    </label>

    <select class="edu-start-year">

      <option value="">
        Year
      </option>

      ${
        Array.from(
          {length: 50},
          (_, i) => 1980 + i
        ).map(year => `

          <option value="${year}">

            ${year}

          </option>

        `).join("")
      }

    </select>

  </div>

  <div class="date-select">

    <label>

      End Year

    </label>

    <select class="edu-end-year">

      <option value="">
        Year
      </option>

      ${
        Array.from(
          {length: 50},
          (_, i) => 1980 + i
        ).map(year => `

          <option value="${year}">

            ${year}

          </option>

        `).join("")
      }

    </select>

  </div>

</div>

<label class="current-job">

  <input
    type="checkbox"
    class="edu-current"
  >

  Currently Studying Here

</label>

`;

    educationContainer.appendChild(
      div
    );

    const school =
      div.querySelector(".edu-school");

    const degree =
      div.querySelector(".edu-degree");

    const score =
      div.querySelector(".edu-score");

    const location =
      div.querySelector(".edu-location");

    const startYear =
      div.querySelector(".edu-start-year");

    const endYear =
      div.querySelector(".edu-end-year");

    const current =
      div.querySelector(".edu-current");

    const removeBtn =
      div.querySelector(".remove-edu-btn");

    const eduData = {

      school: "",

      degree: "",

      score: "",

      location: "",

      startYear: "",

      endYear: "",

      current: false

    };

    appState.education.push(
      eduData
    );

    /* EVENTS */

    school.addEventListener(

      "input",

      e => {

        eduData.school =
          e.target.value;

        renderResume();

      });

    degree.addEventListener(

      "input",

      e => {

        eduData.degree =
          e.target.value;

        renderResume();

      });

    score.addEventListener(

      "input",

      e => {

        eduData.score =
          e.target.value;

        renderResume();

      });

    location.addEventListener(

      "input",

      e => {

        eduData.location =
          e.target.value;

        renderResume();

      });

    startYear.addEventListener(

      "change",

      e => {

        eduData.startYear =
          e.target.value;

        renderResume();

      });

    endYear.addEventListener(

      "change",

      e => {

        eduData.endYear =
          e.target.value;

        renderResume();

      });

    current.addEventListener(

      "change",

      e => {

        eduData.current =
          e.target.checked;

        renderResume();

      });

    removeBtn.addEventListener(

      "click",

      () => {

        div.remove();

        const index =
          appState.education.indexOf(
            eduData
          );

        if(index > -1) {

          appState.education.splice(
            index,
            1
          );

        }

        renderResume();

      });

    renderResume();

});
/* ========================= */
/* CERTIFICATIONS */
/* ========================= */

const addCertificationBtn =
  document.getElementById(
    "addCertification"
  );

const certificationsContainer =
  document.getElementById(
    "certificationsContainer"
  );

addCertificationBtn.addEventListener(

  "click",

  () => {

    const div =
      document.createElement("div");

    div.classList.add(
      "simple-entry"
    );

    div.innerHTML = `

      <input
        type="text"
        placeholder="Certification Name"
        class="cert-input"
      >

      <button
        class="remove-simple-btn"
      >

        <i class="fa-solid fa-trash"></i>

      </button>

    `;

    certificationsContainer.appendChild(
      div
    );

    const input =
      div.querySelector(".cert-input");

    const removeBtn =
      div.querySelector(
        ".remove-simple-btn"
      );

    const certData = {

      name: ""

    };

    appState.certifications.push(
      certData
    );

    input.addEventListener(

      "input",

      e => {

        certData.name =
          e.target.value;

        renderResume();

      });

    removeBtn.addEventListener(

      "click",

      () => {

        div.remove();

        const index =
          appState.certifications.indexOf(
            certData
          );

        if(index > -1) {

          appState.certifications.splice(
            index,
            1
          );

        }

        renderResume();

      });

    renderResume();

});

/* ========================= */
/* HOBBIES */
/* ========================= */

const addHobbyBtn =
  document.getElementById(
    "addHobby"
  );

const hobbiesContainer =
  document.getElementById(
    "hobbiesContainer"
  );

addHobbyBtn.addEventListener(

  "click",

  () => {

    const div =
      document.createElement("div");

    div.classList.add(
      "simple-entry"
    );

    div.innerHTML = `

      <input
        type="text"
        placeholder="Hobby"
        class="hobby-input"
      >

      <button
        class="remove-simple-btn"
      >

        <i class="fa-solid fa-trash"></i>

      </button>

    `;

    hobbiesContainer.appendChild(
      div
    );

    const input =
      div.querySelector(".hobby-input");

    const removeBtn =
      div.querySelector(
        ".remove-simple-btn"
      );

    const hobbyData = {

      name: ""

    };

    appState.hobbies.push(
      hobbyData
    );

    input.addEventListener(

      "input",

      e => {

        hobbyData.name =
          e.target.value;

        renderResume();

      });

    removeBtn.addEventListener(

      "click",

      () => {

        div.remove();

        const index =
          appState.hobbies.indexOf(
            hobbyData
          );

        if(index > -1) {

          appState.hobbies.splice(
            index,
            1
          );

        }

        renderResume();

      });

    renderResume();

});

/* ========================= */
/* CUSTOM SECTIONS */
/* ========================= */

const addCustomSectionBtn =
  document.getElementById(
    "addCustomSection"
  );

const customSectionsContainer =
  document.getElementById(
    "customSectionsContainer"
  );

addCustomSectionBtn.addEventListener(

  "click",

  () => {

    const div =
      document.createElement("div");

    div.classList.add(
      "custom-section-form"
    );

    div.innerHTML = `

      <input
        type="text"
        placeholder="Section Title"
        class="custom-title"
      >

      <textarea
        placeholder="Write bullet points here..."
        class="custom-content"
      ></textarea>

      <div class="format-buttons">

        <button
          class="bold-btn"
          type="button"
        >

          <b>B</b>

        </button>

        <button
          class="italic-btn"
          type="button"
        >

          <i>I</i>

        </button>

      </div>

      <button
        class="remove-custom-btn"
      >

        <i class="fa-solid fa-trash"></i>

      </button>

    `;

    customSectionsContainer.appendChild(
      div
    );

    const title =
      div.querySelector(".custom-title");

    const content =
      div.querySelector(".custom-content");

    const boldBtn =
      div.querySelector(".bold-btn");

    const italicBtn =
      div.querySelector(".italic-btn");

    const removeBtn =
      div.querySelector(".remove-custom-btn");

    const sectionData = {

      title: "",

      content: "",

      bold: false,

      italic: false

    };

    appState.customSections.push(
      sectionData
    );

    title.addEventListener(

      "input",

      e => {

        sectionData.title =
          e.target.value;

        renderResume();

      });

    content.addEventListener(

      "input",

      e => {

        sectionData.content =
          e.target.value;

        renderResume();

      });

    boldBtn.addEventListener(

      "click",

      () => {

        sectionData.bold =
          !sectionData.bold;

        renderResume();

      });

    italicBtn.addEventListener(

      "click",

      () => {

        sectionData.italic =
          !sectionData.italic;

        renderResume();

      });

    removeBtn.addEventListener(

      "click",

      () => {

        div.remove();

        const index =
          appState.customSections.indexOf(
            sectionData
          );

        if(index > -1) {

          appState.customSections.splice(
            index,
            1
          );

        }

        renderResume();

      });

});
/* ========================= */
/* PAPER SIZE */
/* ========================= */

const a4Btn =
  document.getElementById(
    "a4Btn"
  );

const legalBtn =
  document.getElementById(
    "legalBtn"
  );

a4Btn.addEventListener(

  "click",

  () => {

    appState.paperSize = "a4";

    resumePreview.classList.remove(
      "legal"
    );

    resumePreview.classList.add(
      "a4"
    );

    renderResume();

  });

legalBtn.addEventListener(

  "click",

  () => {

    appState.paperSize =
      "legal";

    resumePreview.classList.remove(
      "a4"
    );

    resumePreview.classList.add(
      "legal"
    );

    renderResume();

  });
/* ========================= */
/* DOWNLOAD PDF */
/* ========================= */

const downloadPdfBtn =
  document.getElementById(
    "downloadPdf"
  );

downloadPdfBtn.addEventListener(

  "click",

  () => {

    const resume =
      document.getElementById(
        "resumePreview"
      );

    /* REMOVE SCALE BEFORE PDF */

    const previousTransform =
      resume.style.transform;

    resume.style.transform =
      "scale(1)";

    /* FILE NAME */

    const fileName =

      appState.personalInfo.fullName

      ?

      `${appState.personalInfo.fullName}_Resume.pdf`

      :

      "Resume.pdf";

    /* PDF OPTIONS */

    const options = {

      margin: 0,

      filename: fileName,

      image: {

        type: "jpeg",

        quality: 1
      },

      html2canvas: {

        scale: 2,

        useCORS: true,

        scrollY: 0
      },

      jsPDF: {

        unit: "px",

        format:

          appState.paperSize === "a4"

          ?

          [794, 1123]

          :

          [816, 1344],

        orientation: "portrait"
      }

    };

    /* DOWNLOAD */

    html2pdf()

      .set(options)

      .from(resume)

      .save()

      .then(() => {

        /* RESTORE SCALE */

        resume.style.transform =
          previousTransform;

      });

  });

/* ========================= */
/* SECTION MANAGER */
/* ========================= */

function renderSectionManager() {

    sectionManagerList.innerHTML = "";

    appState.sections.forEach(
        (section, index) => {

            const div =
                document.createElement("div");

            div.classList.add(
                "section-item"
            );

            div.innerHTML = `

                <span>

                    ${section.title}

                </span>

                <div class="section-controls">

                    <button
                        class="section-btn move-up"
                    >

                        <i class="fa-solid fa-arrow-up"></i>

                    </button>

                    <button
                        class="section-btn move-down"
                    >

                        <i class="fa-solid fa-arrow-down"></i>

                    </button>

                </div>

            `;

            const moveUp =
                div.querySelector(".move-up");

            const moveDown =
                div.querySelector(".move-down");

            /* MOVE UP */

            moveUp.addEventListener(

                "click",

                () => {

                    if (index > 0) {

                        [
                            appState.sections[index - 1],
                            appState.sections[index]
                        ] = [

                                appState.sections[index],
                                appState.sections[index - 1]

                            ];

                        renderSectionManager();

                        renderResume();

                    }

                }

            );

            /* MOVE DOWN */

            moveDown.addEventListener(

                "click",

                () => {

                    if (
                        index <
                        appState.sections.length - 1
                    ) {

                        [
                            appState.sections[index + 1],
                            appState.sections[index]
                        ] = [

                                appState.sections[index],
                                appState.sections[index + 1]

                            ];

                        renderSectionManager();

                        renderResume();

                    }

                }

            );

            sectionManagerList.appendChild(
                div
            );

        }
    );

}

/* ========================= */
/* INITIALIZE */
/* ========================= */

renderSectionManager();

renderResume();