export const main = () => {
  return `<header class="header">
            <button type="button" class="btn header-garage-btn">garage</button>
            <button type="button" class="btn header-winners-btn">winners</button>
          </header>
          <main class="garage-page">
            <form class="form create-form" id="create-form">
              <input class="input" id="create-name" name="name" type="text" />
              <input class="color" id="create-color" name="color" type="color" value="#ffffff" />
              <button class="btn" id="create-btn">Create</button>
            </form>
            <form class="form update-form" id="update-form">
              <input class="input" id="update-name" name="name" type="text" />
              <input class="color" id="update-color" name="color" type="color" value="#ffffff" />
              <button class="btn" id="update-btn">Update</button>
            </form>
            <div class="control">
              <button type="button" class="btn control-race-btn">race</button>
              <button type="button" class="btn control-reset-btn">reset</button>
              <button type="button" class="btn control-generate-btn">generate car</button>
            </div>
            <div id="garage" class="garage">/*           */</div>
            <div>
              <p class="win-message hidden" id="win-message"></p>
            </div>
          </main>
          <div id="winners-page" class="winners-page">/*           */</div>
          <div class="pagination">
            <button class="btn prev-button" disabled id="prev">←</button>
            <button class="btn next-button" disabled id="next">→</button>
          </div>`;
};
