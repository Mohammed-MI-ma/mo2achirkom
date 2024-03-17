import { Modal } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPromoVideoOpened } from "../../reducers/applicationService/applicationSlice";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const d = useDispatch();

  const promoVideoOpened = useSelector(
    (state) => state.application.promoVideoOpened
  );

  const handleCancel = () => {
    d(setPromoVideoOpened(false));
  };

  return (
    <Modal
      title={null}
      centered
      onCancel={handleCancel}
      footer={null}
      open={promoVideoOpened}
    >
      <div style={styles.container}>
        <ReactPlayer
          playing
          config={{
            file: {
              hlsOptions: {
                // Set the poster image URL
                poster: "/path/to/poster/image.jpg",
              },
            },
          }}
          url="https://www.moroccoinnovationhub.org/hls/ad.m3u8"
          controls
          style={styles.video}
        ></ReactPlayer>
      </div>
    </Modal>
  );
};
const styles = {
  container: {
    position: "relative",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  video: {},
};

export default VideoPlayer;
