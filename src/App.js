import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app_video">
        <Video
          url="./video/IMG_5021.mp4"
          channel="denoz"
          description="Le mec chanceux"
          song="Si je roule..."
          likes={106}
          messages={43}
          shares={77}
        />
        <Video
          url="./video/IMG_4973.mp4"
          channel="denoz"
          description="C'est la teuf"
          song="Si je roule..."
          likes={183}
          messages={67}
          shares={91}
        />
      </div>
    </div>
  );
}

export default App;
