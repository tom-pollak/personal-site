// import './src/css/index.css';

require("./src/css/index.css")


const AnchorScroll = () => {
    const Anchor = document.querySelectorAll(`div[id="top"]`)[0];
    console.log("Anchor", Anchor);
    let Position = null;
    if (Anchor) {
      Position = Anchor.offsetTop;
    }
    window.scrollTo({ top: Position});
  };
  
  exports.onRouteUpdate = () => {
    AnchorScroll();
  };