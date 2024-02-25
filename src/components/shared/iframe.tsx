import React from "react";
import styled from "styled-components";

interface Props {
  videoSrc: string;
  title: string;
}

const IframeContainer = styled.div`
  width: 640px;
  height: 360px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }

  margin-bottom: 10px;
`;

const IframeElement = styled.iframe`
  width: 100%;
  height: 100%;
`;

const IframeVideos = ({ videoSrc, title }: Props) => {
  return (
    <IframeContainer>
      <IframeElement
        src={videoSrc}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></IframeElement>
    </IframeContainer>
  );
};

export default IframeVideos;
