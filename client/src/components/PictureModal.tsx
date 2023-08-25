import { ApplicationContext } from "@/context/AppContext";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useContext } from "react";

const PictureModal = () => {
  const { hidePicture, pictureModalUrl } = useContext(ApplicationContext);

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-10 bg-black bg-opacity-80 px-3 py-2">
      <div className="relative h-full">
        <Image src={pictureModalUrl ?? ""} alt="Picture" objectFit="contain" fill />
        <button className="absolute top-0 right-0" onClick={() => hidePicture()}>
          <FontAwesomeIcon icon={faXmark} className="text-[25px] text-whte" />
        </button>
      </div>
    </div>
  );
}

export default PictureModal;