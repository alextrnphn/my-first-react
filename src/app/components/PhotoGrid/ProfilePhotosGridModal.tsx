import styled from "styled-components";
import Image from "next/image";
import { PostObject } from "./ProfilePhotosGrid";
const ModalBackdrop = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  left: 0px;
  right: 0px;
  bottom: 0px;
  top: 0px;
  display: grid;
  place-items: center;
`;
const ModalContent = styled.div`
  width: 80%;
  height: 80%;
  background-color: white;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 60% 40%;
  max-width: 900px;

  .image-container {
    background-color: red;
    position: relative;
  }
  .comments-container {
    background-color: white;

    p {
      color: black;
    }
    padding: 10px;
  }
`;
interface ProfilePhotosGridModalPropsType {
  closeModal: () => void;
  selectedPost: PostObject | null;
}

export default function ProfilePhotosGridModal({
  closeModal,
  selectedPost,
}: ProfilePhotosGridModalPropsType) {
  return (
    <ModalBackdrop onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <div className="image-container">
          <Image
            src={selectedPost ? selectedPost?.media_url : ""}
            alt="Modal Image"
            fill
            objectFit="cover"
          />
        </div>
        <div className="comments-container">
          <p>comments</p>
        </div>
      </ModalContent>
    </ModalBackdrop>
  );
}
