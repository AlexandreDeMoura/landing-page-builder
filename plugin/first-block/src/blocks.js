export default (editor, opts = {}) => {
  const bm = editor.BlockManager;

  bm.add('MY-BLOCK', {
    label: 'My block',
    content: `
    <div class="gjs-row" id="i3od">
      <div class="gjs-cell" id="in75">
        <div class="gjs-row" id="i48t">
      <div class="gjs-cell" id="ixo7">
        <div id="iy78">Knowing What Moisturizer To Use Is Knowing Skin Part 1
        </div>
        <div id="iklxl">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </div>
        <div class="gjs-row" id="ikn6l">
          <div class="gjs-cell" id="i3pyn">
            <a id="idyoy">Link</a>
          </div>
          <div class="gjs-cell" id="iai1i">
            <a id="imloe">Link</a>
          </div>
        </div>
      </div>
      <div class="gjs-cell" id="ihof">
        <img id="igwyt" src="data:image/png;base64,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"/>
      </div>
    </div>
  </div>
</div>
<style>
  * {
  box-sizing: border-box;
  }
  body {
  margin: 0;
  }
  .gjs-row{
    display:table;
    padding-top:10px;
    padding-right:10px;
    padding-bottom:10px;
    padding-left:10px;
    width:100%;
  }
  .gjs-cell{
    width:8%;
    display:table-cell;
    height:75px;
  }
  #ixo7{
    display:flex;
    width:50%;
    flex-direction:column;
    height:100%;
    padding:0 65px 0 0;
  }
  #in75{
    display:block;
    width:100%;
    max-width:1200px;
    height:auto;
  }
  #i48t{
    padding:0 0 0 0;
    width:100%;
    display:flex;
    height:auto;
  }
  #i3od{
    display:flex;
    justify-content:center;
  }
  #ihof{
    display:flex;
    width:50%;
    height:auto;
    justify-content:center;
  }
  #iy78{
    padding:0 10px 0 10px;
    font-size:55px;
    line-height:62px;
    margin:0 0 25px 0;
  }
  #iklxl{
    padding:0 0 0 10px;
    font-size:26px;
    margin:0 0 25px 0;
  }
  #i3pyn{
    display:flex;
    align-items:center;
    width:25%;
    justify-content:flex-start;
  }
  #idyoy{
    padding:10px 35px 10px 35px;
    color:#000000;
    border:1px solid black;
  }
  #ikn6l{
    display:flex;
  }
  #iai1i{
    display:flex;
    align-items:center;
    width:25%;
    justify-content:flex-start;
  }
  #imloe{
    padding:10px 35px 10px 35px;
    color:#000000;
    border:1px solid black;
  }
  #igwyt{
    color:black;
    width:424px;
  }
  @media (max-width: 768px){
    .gjs-cell{
      width:100%;
      display:block;
    }
    #i48t{
      flex-direction:column-reverse;
    }
    #ixo7{
      width:100%;
      padding:0 65px 0 65px;
    }
    #ihof{
      width:100%;
      margin:0 0 40px 0;
    }
    #iy78{
      text-align:center;
    }
    #iklxl{
      text-align:center;
    }
    #ikn6l{
      justify-content:center;
    }
    #i3pyn{
      justify-content:center;
      width:40%;
    }
    #iai1i{
      justify-content:center;
      width:40%;
    }
    #idyoy{
      padding:15px 60px 15px 60px;
    }
    #imloe{
      padding:15px 60px 15px 60px;
    }
  }
  @media (max-width: 480px){
    #igwyt{
      width:90%;
    }
    #ixo7{
      padding:0 10px 0 10px;
    }
    #iy78{
      font-size:45px;
      line-height:53px;
    }
    #iklxl{
      font-size:23px;
      line-height:30px;
    }
    #ikn6l{
      flex-direction:column;
    }
    #i3pyn{
      width:100%;
      margin:0 0 25px 0;
    }
    #iai1i{
      width:100%;
    }
  }
</style>`,
  });



bm.add('CAROUSEL', {
    label: 'carousel',
    content: `
    <div class="slider">
      <div  class="slider__main-content" data-gjs-type="CAROUSEL">
        <div class="slide">
          <h2>They trust us 1</h2>
          <div class="text">When you are a lover of astronomy, the confusion     between astronomy and astrology.</div>
          <img src="https://www.protecvie.fr/wp-content/uploads/2016/07/personne-agee-heureuse.jpg"/>
        </div>
        <div class="slide">
          <h2>They trust us 2</h2>
          <div class="text">When you are a lover of astronomy, the confusion     between astronomy and astrology.</div>
          <img src="https://www.protecvie.fr/wp-content/uploads/2016/07/personne-agee-heureuse.jpg"/>
        </div>
        <div class="slide">
          <h2>They trust us 3</h2>
          <div class="text">When you are a lover of astronomy, the confusion     between astronomy and astrology.</div>
          <img src="https://www.protecvie.fr/wp-content/uploads/2016/07/personne-agee-heureuse.jpg"/>
        </div>
        <div class="slide">
          <h2>They trust us 4</h2>
          <div class="text">When you are a lover of astronomy, the confusion     between astronomy and astrology.</div>
          <img src="https://www.protecvie.fr/wp-content/uploads/2016/07/personne-agee-heureuse.jpg"/>
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
  font-size: calc(0.6em + 1.05vw);
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

  img {
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

}