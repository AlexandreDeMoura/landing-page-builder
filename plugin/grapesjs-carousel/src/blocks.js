export default (editor, opt = {}) => {
  const c = opt;
  const bm = editor.BlockManager;

  bm.add("CAROUSEL", {
    label: 'Carousel',
    category: 'Generic',
    content: `
    <div class="slider">
      <div  class="slider__main-content" data-gjs-type="CAROUSEL">
        <div class="slide">
          <h2>They trust us 1</h2>
          <div class="text">When you are a lover of astronomy, the confusion between astronomy and astrology.</div>
          <img class="slider__img" src="https://www.protecvie.fr/wp-content/uploads/2016/07/personne-agee-heureuse.jpg"/>
        </div>
        <div class="slide">
          <h2>They trust us 2</h2>
          <div class="text">When you are a lover of astronomy, the confusion     between astronomy and astrology.</div>
          <img class="slider__img" src="https://www.protecvie.fr/wp-content/uploads/2016/07/personne-agee-heureuse.jpg"/>
        </div>
        <div class="slide">
          <h2>They trust us 3</h2>
          <div class="text">When you are a lover of astronomy, the confusion     between astronomy and astrology.</div>
          <img class="slider__img" src="https://www.protecvie.fr/wp-content/uploads/2016/07/personne-agee-heureuse.jpg"/>
        </div>
        <div class="slide">
          <h2>They trust us 4</h2>
          <div class="text">When you are a lover of astronomy, the confusion     between astronomy and astrology.</div>
          <img class="slider__img" src="https://www.protecvie.fr/wp-content/uploads/2016/07/personne-agee-heureuse.jpg"/>
        </div>
      </div>
    </div>

    <style>
      * {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
      }

      html {
      box-sizing: border-box;
      }

      body {
      font-family: sans-serif;
      -webkit-font-smoothing: sans-serif;
      -moz-osx-font-smoothing: sans-serif;
      font-weight: 500;
      line-height: 1.6;
      }

      .slider {
        width: 100vw;
        height: auto;
        display: flex;
        justify-content: center;
      }

      .slider__main-content {
        width: 100%;
        max-width: 1300px;
        display: flex;
        justify-content: center;
      }

      .slide {
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .slide > * {
        margin-bottom: 30px;
      }

      h2 {
        color: #1C2A4C;
        font-size: 42px;
        line-height: 55px;
        font-weight: 400;
      }

      .text {
        color: #1C2A4C;
        font-size: 22px;
        line-height: 31px;
      }

      .slider__img {
        margin: 0 auto 30px auto;
        width: 35px;
        height: 35px;
        border-radius: 50%;
      }

      .slick-dots li button:before {
        font-size: 30px;
      }
    </style>`,
  });

  bm.add("DIV BLOCK", {
    label: 'Div Block',
    category: 'Basic',
    attributes: {
      class: 'gjs-fonts gjs-f-b1'
    },
    content: `<div></div>`,
  });

  bm.add("LINK IMG", {
    label: 'Link Image',
    category: 'Basic',
    content: `<a class="link-img"><img class="link-img__img"/></a>`,
  });
}