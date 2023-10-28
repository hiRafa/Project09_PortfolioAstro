import { useState, useEffect } from "preact/hooks";

export const ButtonToggleHeader = () => {
  const [isHeaderHidden, setIsHeaderHidden] = useState(true);
  
  const toggleHeader = () => {
    const header: HTMLElement | null = document.getElementById("myHeader");
    const toggleButtonIcon: HTMLElement | null =
      document.getElementById("fa-arrowHeader");
    if (!header) return; // Ensure header exists
    // console.log("icon clicked")
    if (!isHeaderHidden) {
      // Your logic to hide the header
      // console.log("header is not hidden")
      header.classList.add("css-hideHeader");
      toggleButtonIcon?.classList.remove("rotate");
    } else {
      // Your logic to show the header
      // console.log("header is hidden")
      // console.log(toggleButtonIcon)
      header.classList.remove("css-hideHeader");
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
      className="hidden absolute top-0 bottom-0 -right-6 h-fit w-fit rounded-lg p-2 clr-bg m-auto max-lg:block"
      onClick={() => toggleHeader()}
    >
      <i
        className="fa-solid fa-up-right-from-square text-3xl"
        id="fa-arrowHeader"
      ></i>
    </button>
  );
};

export default ButtonToggleHeader;
