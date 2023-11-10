import { useState, useEffect } from "preact/hooks";

export const ButtonToggleHeader = () => {
  const [isHeaderHidden, setIsHeaderHidden] = useState(true);

  const toggleHeader = () => {
    const header: HTMLElement | null = document.getElementById("myHeader");
    const toggleButton: HTMLElement | null =
      document.getElementById("toggleButton");
    const toggleButtonIcon: HTMLElement | null =
      document.getElementById("fa-arrowHeader");

    if (!header) return; // Ensure header exists
    if (!isHeaderHidden) {
      // Your logic to hide the header
      header.classList.add("css-hideHeader");
      toggleButton?.classList.remove("movebutton");
      toggleButtonIcon?.classList.remove("rotate");
      // toggleButtonIcon?.classList.remove("rotate");
    } else {
      // Your logic to show the header
      header.classList.remove("css-hideHeader");
      toggleButton?.classList.add("movebutton");
      toggleButtonIcon?.classList.add("rotate");
    }
    setIsHeaderHidden(!isHeaderHidden);
  };

  useEffect(() => {
    const toggleButton = document.getElementById("toggleButton");
    const toggleButtonIcon = document.getElementById("fa-arrowHeader");

    if (toggleButton && toggleButtonIcon) {
      toggleButton.addEventListener("click", toggleHeader);

      return () => {
        // Clean up the event listener when the component unmounts
        toggleButton.removeEventListener("click", toggleHeader);
      };
    }
  }, [isHeaderHidden]);

  return (
    <button
      id="toggleButton"
      className="hidden  max-lg:block  m-auto  "
      onClick={() => toggleHeader()}
    >
      <p class="hidden absolute top-16 right-2 clr-text z-50 text-base max-lg:flex flex-col items-center justify-center">
        <span>M</span>
        <span>E</span>
        <span>N</span> 
        <span>U</span>
      </p>

      <svg
        className="rounded-lg p-2 clr-bg rotate-45 w-12 h-12"
        width="307"
        height="306"
        viewBox="0 0 307 306"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="fa-arrowHeader"
      >
        <path
          d="M0.833333 27C0.833333 41.7276 12.7724 53.6667 27.5 53.6667C42.2276 53.6667 54.1667 41.7276 54.1667 27C54.1667 12.2724 42.2276 0.333333 27.5 0.333333C12.7724 0.333333 0.833333 12.2724 0.833333 27ZM277.5 27H282.5V22H277.5V27ZM277.5 305.868L306.368 277L277.5 248.132L248.632 277L277.5 305.868ZM27.5 32H277.5V22H27.5V32ZM272.5 27V277H282.5V27H272.5Z"
          fill="white"
        />
      </svg>

    </button>
  );
};

export default ButtonToggleHeader;
