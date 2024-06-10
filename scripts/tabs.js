let languages = document.getElementsByClassName("language");
let languageInfoBox = document.getElementsByClassName("outer-language-info-box")[0] // Theres only one
const mainColor = getComputedStyle(languages[0]).getPropertyValue(
    "--mainColor");

// Iterates through the languages and formats the page based on the selected one
function selectLanguage(selectedLanguage) {
  for (const language of languages) {
    if (language === selectedLanguage) {
      console.log(selectedLanguage);
      language.style.cssText = `
        background-color: var(--blendedColor);
        border-radius: 100px;
      `;
      // Sets both the number and language name text color
      language.getElementsByTagName("p")[0].style.color = mainColor;
      language.getElementsByTagName("p")[1].style.color = mainColor;
      setLanguageInfo(language)
    } else {
      language.style.cssText = "";
      language.getElementsByTagName("p")[0].style.cssText = "";
      language.getElementsByTagName("p")[1].style.cssText = "";
    }
  }
}

// Formats the info box based on what language is selected
function setLanguageInfo(language) {
  switch (language.getElementsByTagName("p")[1].textContent) {

    case "Starting":
      languageInfoBox.innerHTML = `
      
      <p class="language-description">
        Throughout your journey you will face many tricks and twists, be prepared to go through and escape. What is your mothers mother?
      </p>
   <h1 class="container-h1">Enter what you've found here...</h1>
    <form id="login-form-1">
        <input type="text" placeholder="Enter Password" id="password-1">
        <button type="submit" class="button11">Test your fate</button>
      </form>
      `;
      // Sets the length of the bars
      break;

    case "next":
      languageInfoBox.innerHTML = `
      <div class = "form-fields-text">
      <p class="language-description">
        Another thing
      </p>
      <div class="container">
   <h1 class="container-h1">Enter what you've found here...</h1>
      <form id="login-form-1" class="form-pass">
        <input type="text" placeholder="Enter Password" id="password-1" autofocus>
        <button type="submit" class="button11">Test your fate</button>
      </form>
    </div>
  </div>
      `;
      break;

    case "Swift":
      languageInfoBox.innerHTML = `
        <div class="progress-bars">
          <div class="chart">
            <span>Confidence:</span>
            <footer>
              <div class="progress-bar" id="confidence-bar"></div>
            </footer>
          </div>
          <div class="chart">
            <span>Enjoyment:</span>
            <footer>
              <div class="progress-bar" id="enjoyment-bar"></div>
            </footer>
          </div>
        </div>
        <p class="language-description">
          Swift was the first language I learned, but I lost interest overtime
          after I learned Python. I got really "good" at it, even doing machine
          learning!
        </p>
        <div class="example-projects">
          <div class="project" id="project1">
            <div class="project-inner">
              <div class="project-top">
                <a href="https://jacksonelia.github.io/random-project.html#William_Whitakers_Words_App">
                  <span>William Whitaker's App</span>
                </a>
                <p>A Latin to English translation app.</p>
              </div>
              <div class="project-bottom">
                <p>Swift Soup</p>
                <a href="https://github.com/jacksonelia/WilliamWhitakersWordsSwiftApp" target="_blank">
                  <i class="ion-social-github-outline"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="project" id="project2">
            <div class="project-inner">
              <div class="project-top">
                <a href="https://jacksonelia.github.io/random-project.html#Block_Drop">
                  <span>Block Drop</span>
                </a>
                <p>A tetris-inspired, block puzzle game. </p>
              </div>
              <div class="project-bottom">
                <p>SwiftUI</p>
                <a href="https://github.com/jacksonelia/Block-Drop" target="_blank">
                  <i class="ion-social-github-outline"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
      document.getElementById("confidence-bar").style.cssText = "width: 60%;";
      document.getElementById("enjoyment-bar").style.cssText = "width: 70%;";
      break;

    case "JavaScript":
      languageInfoBox.innerHTML = `
        <div class="progress-bars">
          <div class="chart">
            <span>Confidence:</span>
            <footer>
              <div class="progress-bar" id="confidence-bar"></div>
            </footer>
          </div>
          <div class="chart">
            <span>Enjoyment:</span>
            <footer>
              <div class="progress-bar" id="enjoyment-bar"></div>
            </footer>
          </div>
        </div>
        <p class="language-description">
          I learned Javascript with this website being
          my motivator. I like how clean, simple, and powerful it is.
        </p>
        <div class="example-projects">
          <div class="project" id="project1">
            <div class="project-inner">
              <div class="project-top">
                <a href="https://jacksonelia.github.io/random-project.html#This_Website">
                  <span>My Website</span>
                </a>
                <p>This is the website you're on.</p>
              </div>
              <div class="project-bottom">
                <p>No libraries used</p>
                <a href="https://github.com/jacksonelia/jacksonelia.github.io" target="_blank">
                  <i class="ion-social-github-outline"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="project" id="project2">
            <div class="project-inner">
              <div class="project-top">
                <a href="https://jacksonelia.github.io/random-project.html#Casino_Crawl">
                  <span>Casino Crawl</span>
                </a>
                <p>A small, game jam dungeon crawler.</p>
              </div>
              <div class="project-bottom">
                <p>Phaser</p>
                <a href="https://github.com/yikuansun/CasinoCrawler" target="_blank">
                  <i class="ion-social-github-outline"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
      document.getElementById("confidence-bar").style.cssText = "width: 70%;";
      document.getElementById("enjoyment-bar").style.cssText = "width: 60%;";
      break;

    case "C":
      languageInfoBox.innerHTML = `
        <div class="progress-bars">
          <div class="chart">
            <span>Confidence:</span>
            <footer>
              <div class="progress-bar" id="confidence-bar"></div>
            </footer>
          </div>
          <div class="chart">
            <span>Enjoyment:</span>
            <footer>
              <div class="progress-bar" id="enjoyment-bar"></div>
            </footer>
          </div>
        </div>
        <p class="language-description">
          C is the newest language I've learned. I enjoy how its
          complexity can result in very fast speeds.
        </p>
        <div class="example-projects">
          <div class="project" id="project1">
            <div class="project-inner">
              <div class="project-top">
                <a href="https://github.com/JacksonElia/C_Games">
                  <span>C Games</span>
                </a>
                <p>A collection of visual oddities made with C.</p>
              </div>
              <div class="project-bottom">
                <p>No libraries used</p>
                <a href="https://github.com/JacksonElia/C_Games" target="_blank">
                  <i class="ion-social-github-outline"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
      document.getElementById("confidence-bar").style.cssText = "width: 50%;";
      document.getElementById("enjoyment-bar").style.cssText = "width: 90%;";
      break;
  }
}