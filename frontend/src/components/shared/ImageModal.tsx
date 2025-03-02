import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";
import type { Image } from "../blog/BlogCarousel";

interface ModalProps {
  selectedImage: Image | null;
  setSelectedImage: (image: Image | null) => void;
}

const ImageModal = ({ selectedImage, setSelectedImage }: ModalProps) => {
  return (
    <Modal
      isOpen={!!selectedImage}
      onRequestClose={() => setSelectedImage(null)}
      contentLabel="Full-size image"
      className="fixed inset-0 flex items-center justify-center p-0"
      overlayClassName="fixed inset-0 flex items-center justify-center"
      style={{
        overlay: {
          zIndex: 100,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        content: {
          position: "relative",
          border: "none",
          background: "transparent",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          inset: 0,
        },
      }}
      ariaHideApp={false}
    >
      <div className="relative bg-transparent p-0 max-w-3xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl w-full border-none mx-auto px-4">
        <button
          className="absolute top-2 right-2 text-white bg-[#1D192C] rounded-full px-3 py-1 z-10 hover:bg-red-700"
          onClick={() => setSelectedImage(null)}
        >
          <FontAwesomeIcon icon={faX} />
        </button>
        {selectedImage && (
          <div className="flex justify-center items-center w-full">
            <img
              src={selectedImage.asset.url || "/placeholder.svg"}
              alt={selectedImage.alt || "Full-size image"}
              className="max-h-[80vh] object-contain max-w-full"
            />
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ImageModal;
