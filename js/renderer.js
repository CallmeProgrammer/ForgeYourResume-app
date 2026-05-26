const resumePreview =
  document.getElementById(
    "resumePreview"
  );

/* ========================= */
/* MAIN RENDER FUNCTION */
/* ========================= */

function renderResume() {

  const template =
    appState.currentTemplate;

  const renderer =
    templates?.[template];

  if (typeof renderer === "function") {

    resumePreview.innerHTML =
      renderer(appState);

  }

}

/* ========================= */
/* MODERN SECTION RENDERERS */
/* ========================= */

function renderModernSummary(state) {

  return `

    <div class="resume-section">

      <h2>Summary</h2>

      <p>

        ${state.personalInfo.summary ||

    "Professional summary goes here."
    }

      </p>

    </div>

  `;
}

function renderModernSkills(state) {

  return `

    <div class="resume-section">

      <h2>Skills</h2>

      <div class="skills-list">

        ${state.skills.map(skill => `

            <div class="dot-skill">

              <span class="dot-skill-name">

                ${skill.name || "Skill"}

              </span>

              <div class="dot-level">

                ${Array.from({ length: 5 }).map((_, i) => `

                    <span class="
                      dot
                      ${i < Math.round(skill.level / 20)

      ? "filled"

      : ""
    }
                    "></span>

                  `).join("")
    }

              </div>

            </div>

          `).join("")
    }

      </div>

    </div>

  `;
}

function renderModernExperience(state) {

  return `

    <div class="resume-section">

      <h2>Experience</h2>

      ${state.experiences.map(exp => `

          <div class="experience-item">

            <div class="experience-top">

              <div>

                <h3>

                  ${exp.role || "Role"}

                </h3>

                <h4>

                  ${exp.company || "Company"}

                </h4>

              </div>

              <div class="experience-meta">

                <span>

                  ${exp.location || ""}

                </span>

                <span>

                  ${exp.duration || ""}

                </span>

              </div>

            </div>

            <p>

              ${exp.description || ""}

            </p>

          </div>

        `).join("")
    }

    </div>

  `;
}

/* ========================= */
/* MINIMAL TEMPLATE */
/* ========================= */

function renderMinimalTemplate(state) {

  return `

    <div class="minimal-template">

      <h1>

        ${state.personalInfo.fullName ||

    "YOUR NAME"
    }

      </h1>

      <p>

        ${state.personalInfo.role ||

    "Your Role"
    }

      </p>

      <hr>

      <h2>Summary</h2>

      <p>

        ${state.personalInfo.summary ||

    "Professional summary"
    }

      </p>

      <hr>

      <h2>Skills</h2>

      <div class="skills-list">

        ${state.skills.map(skill => `

            <div class="dot-skill">

              <span class="dot-skill-name">

                ${skill.name || "Skill"}

              </span>

              <div class="dot-level">

                ${Array.from({ length: 5 }).map((_, i) => `

                    <span class="
                      dot
                      ${i < Math.round(skill.level / 20)

        ? "filled"

        : ""
      }
                    "></span>

                  `).join("")
      }

              </div>

            </div>

          `).join("")
    }

      </div>

    </div>

  `;
}

/* ========================= */
/* MODERN TEMPLATE */
/* ========================= */

function renderModernTemplate(state) {

  return `

    <div class="modern-template">

      <!-- HEADER -->

      <div class="modern-header">

        <div>

          <h1>

            ${
              state.personalInfo.fullName ||
              "YOUR NAME"
            }

          </h1>

          <h3>

            ${
              state.personalInfo.role ||
              "Your Role"
            }

          </h3>

          <div class="modern-contact">

            ${
              state.personalInfo.email
              ?
              `
              <span>

                <i class="fa-solid fa-envelope"></i>

                ${state.personalInfo.email}

              </span>
              `
              :
              ""
            }

            ${
              state.personalInfo.phone
              ?
              `
              <span>

                <i class="fa-solid fa-phone"></i>

                ${state.personalInfo.phone}

              </span>
              `
              :
              ""
            }

          </div>

        </div>

      </div>

      ${
        state.sections.map(section => {

          /* ========================= */
          /* SUMMARY */
          /* ========================= */

          if(section.id === "summary") {

            return `

              <div class="resume-section">

                <h2>Summary</h2>

                <p>

                  ${
                    state.personalInfo.summary ||
                    "Professional Summary"
                  }

                </p>

              </div>

            `;
          }

          /* ========================= */
          /* SKILLS */
          /* ========================= */

          if(section.id === "skills") {

            return `

              <div class="resume-section">

                <h2>Skills</h2>

                <div class="skills-list">

                  ${
                    state.skills.map(skill => `

                      <div class="skill-item">

                        <div class="skill-name">

                          ${skill.name}

                        </div>

                        <div class="skill-dots">

                          ${
                            [...Array(5)].map((_, i) => `

                              <span
                                class="
                                  dot
                                  ${
                                    i < Math.round(skill.level / 20)
                                    ? "filled"
                                    : ""
                                  }
                                "
                              ></span>

                            `).join("")
                          }

                        </div>

                      </div>

                    `).join("")
                  }

                </div>

              </div>

            `;
          }

          /* ========================= */
          /* EXPERIENCE */
          /* ========================= */

          if(section.id === "experience") {

            return `

              <div class="resume-section">

                <h2>Experience</h2>

                ${
                  state.experiences.map(exp => `

                    <div class="experience-item">

                      <div class="experience-top">

                        <div>

                          <h3>

                            ${exp.company || ""}

                          </h3>

                          <p>

                            ${exp.role || ""}

                          </p>

                        </div>

                        <div class="experience-right">

                          <p>

                            ${exp.location || ""}

                          </p>

                          <p>

                            ${exp.startMonth || ""}

                            ${exp.startYear || ""}

                            -

                            ${
                              exp.currentlyWorking
                              ? "Present"
                              : `
                                ${exp.endMonth || ""}
                                ${exp.endYear || ""}
                              `
                            }

                          </p>

                        </div>

                      </div>

                      <ul class="experience-points">

                        ${
                          exp.description
                          ?
                          exp.description
                          .split("\n")
                          .filter(point => point.trim())
                          .map(point => `

                            <li>

                              ${point}

                            </li>

                          `).join("")
                          :
                          ""
                        }

                      </ul>

                    </div>

                  `).join("")
                }

              </div>

            `;
          }

          /* ========================= */
          /* EDUCATION */
          /* ========================= */

          if(section.id === "education") {

            return `

              <div class="resume-section">

                <h2>Education</h2>

                ${
                  state.education.map(edu => `

                    <div class="education-item">

                      <div class="education-top">

                        <div>

                          <h3>

                            ${edu.school || ""}

                          </h3>

                          <p>

                            ${edu.degree || ""}

                            —

                            ${edu.score || ""}

                          </p>

                        </div>

                        <div class="education-right">

                          <p>

                            ${edu.location || ""}

                          </p>

                          <p>

                            ${edu.startYear || ""}

                            —

                            ${
                              edu.current
                              ? "Present"
                              : edu.endYear || ""
                            }

                          </p>

                        </div>

                      </div>

                    </div>

                  `).join("")
                }

              </div>

            `;
          }

          /* ========================= */
          /* PROJECTS */
          /* ========================= */

          if(section.id === "projects") {

            return `

              <div class="resume-section">

                <h2>Projects</h2>

                ${
                  state.projects.map(project => `

                    <div class="project-item">

                      <div class="project-heading">

                        ${
                          project.link

                          ?

                          `

                          <a
                            href="${project.link}"
                            target="_blank"
                            class="project-title-link"
                          >

                            ${project.title}

                          </a>

                          `

                          :

                          `

                          <span class="project-title-text">

                            ${project.title}

                          </span>

                          `
                        }

                        <span class="project-divider">

                          |

                        </span>

                        <span class="project-tech-inline">

                          ${project.tech || ""}

                        </span>

                      </div>

                      <ul class="project-points">

                        ${
                          project.description
                          ?
                          project.description
                          .split("\n")
                          .filter(point => point.trim())
                          .map(point => `

                            <li>

                              ${point}

                            </li>

                          `).join("")
                          :
                          ""
                        }

                      </ul>

                    </div>

                  `).join("")
                }

              </div>

            `;
          }

          /* ========================= */
          /* CERTIFICATIONS */
          /* ========================= */

          if(section.id === "certifications") {

            return `

              <div class="resume-section">

                <h2>Certifications</h2>

                <ul class="simple-list">

                  ${
                    state.certifications.map(cert => `

                      <li>

                        ${cert.name}

                      </li>

                    `).join("")
                  }

                </ul>

              </div>

            `;
          }

          /* ========================= */
          /* HOBBIES */
          /* ========================= */

          if(section.id === "hobbies") {

            return `

              <div class="resume-section">

                <h2>Hobbies</h2>

                <ul class="simple-list">

                  ${
                    state.hobbies.map(hobby => `

                      <li>

                        ${hobby.name}

                      </li>

                    `).join("")
                  }

                </ul>

              </div>

            `;
          }

          return "";

        }).join("")
      }

      <!-- CUSTOM SECTIONS -->

      ${
        state.customSections.map(custom => `

          <div class="resume-section">

            <h2>

              ${custom.title}

            </h2>

            <ul class="custom-points">

              ${
                custom.content
                ?
                custom.content
                .split("\n")
                .filter(point => point.trim())
                .map(point => `

                  <li
                    style="
                      font-weight:
                      ${
                        custom.bold
                        ? "700"
                        : "400"
                      };

                      font-style:
                      ${
                        custom.italic
                        ? "italic"
                        : "normal"
                      };
                    "
                  >

                    ${point}

                  </li>

                `).join("")
                :
                ""
              }

            </ul>

          </div>

        `).join("")
      }

    </div>

  `;
}





function renderAcademicTemplate(state) {

  return `

    <div class="academic-template">

      <!-- HEADER -->

      <div class="academic-header">

        <h1>

          ${
            state.personalInfo.fullName ||
            "YOUR NAME"
          }

        </h1>

       

        <div class="academic-contact">

          ${
            state.personalInfo.phone
            ?
            `
            <span>

              <i class="fa-solid fa-phone"></i>

              ${state.personalInfo.phone}

            </span>
            `
            :
            ""
          }

          ${
            state.personalInfo.email
            ?
            `
            <span>

              <i class="fa-solid fa-envelope"></i>

              ${state.personalInfo.email}

            </span>
            `
            :
            ""
          }

        </div>

      </div>

      ${
        state.sections.map(section => {

          /* ========================= */
          /* SUMMARY */
          /* ========================= */

          if(section.id === "summary") {

            return `

              <div class="academic-section">

                <h2>Summary</h2>

                <p>

                  ${
                    state.personalInfo.summary ||
                    "Professional Summary"
                  }

                </p>

              </div>

            `;
          }

          /* ========================= */
          /* SKILLS */
          /* ========================= */

          if(section.id === "skills") {

            return `

              <div class="academic-section">

                <h2>Technical Skills</h2>

                <ul class="academic-skills">

                  ${
                    state.academicSkills.map(skill => `

                      <li>

                        <strong>

                          ${skill.heading || "Skill"}:

                        </strong>

                        ${skill.value || ""}

                      </li>

                    `).join("")
                  }

                </ul>

              </div>

            `;
          }

          /* ========================= */
          /* EXPERIENCE */
          /* ========================= */

          if(section.id === "experience") {

            return `

              <div class="academic-section">

                <h2>Experience</h2>

                ${
                  state.experiences.map(exp => `

                    <div class="academic-exp">

                      <div class="academic-exp-top">

                        <div>

                          <strong>

                            ${exp.company || ""}

                          </strong>

                          <div>

                            ${exp.role || ""}

                          </div>

                        </div>

                        <div class="academic-exp-right">

                          <div>

                            ${exp.location || ""}

                          </div>

                          <div>

                            ${exp.startMonth || ""}

                            ${exp.startYear || ""}

                            -

                            ${
                              exp.currentlyWorking
                              ? "Present"
                              : `
                                ${exp.endMonth || ""}
                                ${exp.endYear || ""}
                              `
                            }

                          </div>

                        </div>

                      </div>

                      <ul class="experience-points">

                        ${
                          exp.description
                          ?
                          exp.description
                          .split("\n")
                          .filter(point => point.trim())
                          .map(point => `

                            <li>

                              ${point}

                            </li>

                          `).join("")
                          :
                          ""
                        }

                      </ul>

                    </div>

                  `).join("")
                }

              </div>

            `;
          }

          /* ========================= */
          /* EDUCATION */
          /* ========================= */

          if(section.id === "education") {

            return `

              <div class="academic-section">

                <h2>Education</h2>

                ${
                  state.education.map(edu => `

                    <div class="education-item">

                      <div class="education-top">

                        <div>

                          <h3>

                            ${edu.school || ""}

                          </h3>

                          <p>

                            ${edu.degree || ""}

                            —

                            ${edu.score || ""}

                          </p>

                        </div>

                        <div class="education-right">

                          <p>

                            ${edu.location || ""}

                          </p>

                          <p>

                            ${edu.startYear || ""}

                            —

                            ${
                              edu.current
                              ? "Present"
                              : edu.endYear || ""
                            }

                          </p>

                        </div>

                      </div>

                    </div>

                  `).join("")
                }

              </div>

            `;
          }

          /* ========================= */
          /* PROJECTS */
          /* ========================= */

          if(section.id === "projects") {

            return `

              <div class="academic-section">

                <h2>Projects</h2>

                ${
                  state.projects.map(project => `

                    <div class="academic-project">

                      <div class="project-heading">

                        ${
                          project.link

                          ?

                          `

                          <a
                            href="${project.link}"
                            target="_blank"
                            class="project-title-link"
                          >

                            ${project.title}

                          </a>

                          `

                          :

                          `

                          <span class="project-title-text">

                            ${project.title}

                          </span>

                          `
                        }

                        <span class="project-divider">

                          |

                        </span>

                        <span class="project-tech-inline">

                          ${project.tech || ""}

                        </span>

                      </div>

                      <ul class="project-points">

                        ${
                          project.description
                          ?
                          project.description
                          .split("\n")
                          .filter(point => point.trim())
                          .map(point => `

                            <li>

                              ${point}

                            </li>

                          `).join("")
                          :
                          ""
                        }

                      </ul>

                    </div>

                  `).join("")
                }

              </div>

            `;
          }

          /* ========================= */
          /* CERTIFICATIONS */
          /* ========================= */

          if(section.id === "certifications") {

            return `

              <div class="academic-section">

                <h2>Certifications</h2>

                <ul class="simple-list">

                  ${
                    state.certifications.map(cert => `

                      <li>

                        ${cert.name}

                      </li>

                    `).join("")
                  }

                </ul>

              </div>

            `;
          }

          /* ========================= */
          /* HOBBIES */
          /* ========================= */

          if(section.id === "hobbies") {

            return `

              <div class="academic-section">

                <h2>Hobbies</h2>

                <ul class="simple-list">

                  ${
                    state.hobbies.map(hobby => `

                      <li>

                        ${hobby.name}

                      </li>

                    `).join("")
                  }

                </ul>

              </div>

            `;
          }

          return "";

        }).join("")
      }

      <!-- CUSTOM SECTIONS -->

      ${
        state.customSections.map(custom => `

          <div class="academic-section">

            <h2>

              ${custom.title}

            </h2>

            <ul class="custom-points">

              ${
                custom.content
                ?
                custom.content
                .split("\n")
                .filter(point => point.trim())
                .map(point => `

                  <li
                    style="
                      font-weight:
                      ${
                        custom.bold
                        ? "700"
                        : "400"
                      };

                      font-style:
                      ${
                        custom.italic
                        ? "italic"
                        : "normal"
                      };
                    "
                  >

                    ${point}

                  </li>

                `).join("")
                :
                ""
              }

            </ul>

          </div>

        `).join("")
      }

    </div>

  `;
}