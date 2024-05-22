import styled from "styled-components";
import Image from "next/image";
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
  .image-container {
    background-color: red;
  }
  .comments-container {
    background-color: gray;
  }
`;
export default function ProfilePhotosGridModal() {
  return (
    <ModalBackdrop>
      <ModalContent>
        <div className="image-container">
          <Image />
        </div>

        <div className="comments-container">
          <p>comments</p>
        </div>
      </ModalContent>
    </ModalBackdrop>
  );
}
