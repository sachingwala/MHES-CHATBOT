import { Container, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const videos = [
  { url: "//www.youtube.com/embed/8jPQjjsBbIc", title: "Overcoming Anxiety" },
  { url: "https://www.youtube.com/embed/3nwwKbM_vJc", title: "Guided Meditation" },
  { url: "https://www.youtube.com/embed/O-6f5wQXSu8", title: "Positive Thinking" },
  { url: "https://www.youtube.com/embed/QhTPzc1QRas", title: "Managing Stress" }
];

const VideoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000
  };

  return (
    <Container sx={{ py: 4, textAlign: "center" }}>
      <Typography variant="h4" sx={{ mb: 1 }}>Motivational & Mental Health Videos</Typography>
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index} style={{ padding: "5px" }}>
            <iframe width="100%" height="426" src={video.url} title={video.title} allowFullScreen></iframe>
            <Typography variant="subtitle1">{video.title}</Typography>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default VideoCarousel;
