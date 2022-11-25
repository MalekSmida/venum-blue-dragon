interface PropsVideo {
  source: string;
}

const Video: React.FC<PropsVideo> = ({ source }) => {
  return (
    <video loop autoPlay muted src={source} className="min-w-full"></video>
  );
};

export default Video;
