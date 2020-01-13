export default (editor, opt = {}) => {
  const c = opt;
  const bm = editor.BlockManager;

  bm.add("CAROUSEL", {
    label: 'Carousel',
    category: 'Generic',
    content: ` <div class="slider"> <div  class="slider__main-content" data-gjs-type="CAROUSEL"> <div class="slide"> <h2>They trust us 1</h2> <div class="text">When you are a lover of astronomy, the confusion between astronomy and astrology.</div> <img class="slider__img" src="https://www.protecvie.fr/wp-content/uploads/2016/07/personne-agee-heureuse.jpg"/> </div> <div class="slide"> <h2>They trust us 2</h2> <div class="text">When you are a lover of astronomy, the confusion     between astronomy and astrology.</div> <img class="slider__img" src="https://www.protecvie.fr/wp-content/uploads/2016/07/personne-agee-heureuse.jpg"/> </div> <div class="slide"> <h2>They trust us 3</h2> <div class="text">When you are a lover of astronomy, the confusion     between astronomy and astrology.</div> <img class="slider__img" src="https://www.protecvie.fr/wp-content/uploads/2016/07/personne-agee-heureuse.jpg"/> </div> <div class="slide"> <h2>They trust us 4</h2> <div class="text">When you are a lover of astronomy, the confusion     between astronomy and astrology.</div> <img class="slider__img" src="https://www.protecvie.fr/wp-content/uploads/2016/07/personne-agee-heureuse.jpg"/> </div> </div> </div> <style> * { margin: 0; padding: 0; box-sizing: inherit; } html { box-sizing: border-box; } body { font-family: sans-serif; -webkit-font-smoothing: sans-serif; -moz-osx-font-smoothing: sans-serif; font-weight: 500; line-height: 1.6; } .slider { width: 100vw; height: auto; display: flex; justify-content: center; } .slider__main-content { width: 100%; max-width: 1300px; display: flex; justify-content: center; } .slide { width: 60%; display: flex; flex-direction: column; align-items: center; text-align: center; } .slide > * { margin-bottom: 30px; } h2 { color: #1C2A4C; font-size: 42px; line-height: 55px; font-weight: 400; } .text { color: #1C2A4C; font-size: 22px; line-height: 31px; } .slider__img { margin: 0 auto 30px auto; width: 35px; height: 35px; border-radius: 50%; } .slick-dots li button:before { font-size: 30px; } </style>`,
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

  bm.add("NavBar", {
    label: 'NavBar',
    category: 'Header',
    content: `<div id="i9zk" data-gjs-type="NavBar"> 
    <div id="imgg"> 
      <img id="ibt6" src="<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;100&quot; viewBox=&quot;0 0 24 24&quot; style=&quot;fill: rgba(0,0,0,0.15); transform: scale(0.75)&quot;> <path d=&quot;M8.5 13.5l2.5 3 3.5-4.5 4.5 6H5m16 1V5a2 2 0 0 0-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2z&quot;></path> </svg>"/> 
      <img id="iou3q" src="<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;100&quot; viewBox=&quot;0 0 24 24&quot; style=&quot;fill: rgba(0,0,0,0.15); transform: scale(0.75)&quot;> <path d=&quot;M8.5 13.5l2.5 3 3.5-4.5 4.5 6H5m16 1V5a2 2 0 0 0-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2z&quot;></path> </svg>" class="navigation-hamburger"/> 
      <div id="i0sr" class="navigation-menu"> 
        <a id="ipw1" class="navigation-link">Menu 1</a> 
        <a class="navigation-link">Menu 2</a> 
        <a class="navigation-link">Menu 3</a> 
        <a class="navigation-link">Menu 4</a> 
        <a class="navigation-link">Menu 5</a> 
        <a class="navigation-link">Menu 6</a> 
        <a id="ibuvy" class="secondary-cta">Action</a> 
      </div> 
    </div> 
    <div id="itmus"> 
      <div class="navigation-menu navigation-menu--alternative"> 
        <a class="navigation-link">Menu 1</a> 
        <a class="navigation-link">Menu 2</a> 
        <a class="navigation-link">Menu 3</a> 
        <a class="navigation-link">Menu 4</a> 
        <a class="navigation-link">Menu 5</a> 
        <a class="navigation-link">Menu 6</a> 
        <a class="secondary-cta">Action</a> 
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
  *{
    box-sizing:border-box;
  }
  body{
    margin-top:0px;
    margin-right:0px;
    margin-bottom:0px;
    margin-left:0px;
  }
  #i9zk{
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    flex-direction:column;
  }
  #imgg{
    max-width:1400px;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  #ibt6{
    color:black;
  }
  .navigation-link{
    font-size:21px;
    margin-top:0px;
    margin-right:55px;
    margin-bottom:0px;
    margin-left:0px;
  }
  .navigation-menu{
    display:flex;
    align-items:center;
  }
  .secondary-cta{
    font-size:19px;
    background-color:rgb(0, 101, 242);
    color:rgb(255, 255, 255);
    padding-top:12px;
    padding-right:40px;
    padding-bottom:12px;
    padding-left:40px;
  }
  #iou3q{
    color:black;
    display:none;
  }
  .navigation-menu.navigation-menu--alternative{
    display:none;
  }
  #itmus{
    width:100%;
  }
  @media (max-width: 768px){
    .navigation-menu{
      display:none;
    }
    #iou3q{
      display:block;
    }
  }
  @media (max-width: 480px){
    .navigation-menu.navigation-menu--alternative{
      flex-direction:column;
      align-items:flex-start;
    }
    .navigation-link{
      margin:0 55px 15px 0;
    }
  }  
  </style>
  `,
  });
}