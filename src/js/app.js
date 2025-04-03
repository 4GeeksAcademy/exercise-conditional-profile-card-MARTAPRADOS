import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 *
 *  {
 *    includeCover: true, // if includeCover is true the algorithm should show the cover image
 *    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
 *    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
 *    socialMediaPosition: "position-left", // social media bar position (left or right)
 *
 *    twitter: null, // social media usernames
 *    github: null,
 *    linkedin: null,
 *    instagram: null,
 *
 *    name: null,
 *    lastName: null,
 *    role: null,
 *    country: null,
 *    city: null
 *  }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables);

  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover === false) {
    cover = "<div class='cover'></div>";
  }

  const name = variables.name || "Lucy";
  const lastName = variables.lastName || "Boilett";
  const role = variables.role || "Web Developer";
  const city = variables.city || "Miami";
  const country = variables.country || "USA";

  const twitter = variables.twitter
    ? `<li><a href="https://twitter.com/${variables.twitter}"><i class="fab fa-twitter"></i></a></li>`
    : "";
  const github = variables.github
    ? `<li><a href="https://github.com/${variables.github}"><i class="fab fa-github"></i></a></li>`
    : "";
  const linkedin = variables.linkedin
    ? `<li><a href="https://linkedin.com/in/${variables.linkedin}"><i class="fab fa-linkedin"></i></a></li>`
    : "";
  const instagram = variables.instagram
    ? `<li><a href="https://instagram.com/${variables.instagram}"><i class="fab fa-instagram"></i></a></li>`
    : "";

  const socialMediaPosition = variables.socialMediaPosition || "position-right";

  document.querySelector("#widget_content").innerHTML = `
    <div class="widget">
      ${cover}
      <img src="${variables.avatarURL}" class="photo" />
      <h1>${name} ${lastName}</h1>
      <h2>${role}</h2>
      <h3>${city}, ${country}</h3>
      <ul class="${socialMediaPosition}">
        ${twitter}
        ${github}
        ${linkedin}
        ${instagram}
      </ul>
    </div>
  `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    includeCover: true,

    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",

    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",

    socialMediaPosition: "position-left",

    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,

    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };

  render(window.variables);

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value === "" || this.value === "null"
          ? null
          : this.value === "true"
          ? true
          : this.value === "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
