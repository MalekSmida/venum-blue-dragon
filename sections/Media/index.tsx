// local files
import { Video, Button, Title } from '../../components';

function Media() {
  return (
    <div className="relative text-white">
      <Video source="https://a.storyblok.com/f/117261/x/a0ff98bb58/giants-3-0-v12.mp4" />
      <div className="absolute bottom-0 left-0 px-20 py-24">
        <Title className="pb-9 pl-3">Les gants GIANT 3.0</Title>
        <Button title="Découvrir" link="/home" />
      </div>
    </div>
  );
}

export default Media;
