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
    // console.log("icon clicked")
    if (!isHeaderHidden) {
      // Your logic to hide the header
      // console.log("header is not hidden")
      header.classList.add("css-hideHeader");
      toggleButton?.classList.remove("rotate");
      // toggleButtonIcon?.classList.remove("rotate");
    } else {
      // Your logic to show the header
      // console.log("header is hidden")
      // console.log(toggleButton)
      header.classList.remove("css-hideHeader");
      toggleButton?.classList.add("rotate");
      // toggleButtonIcon?.classList.add("rotate");
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
      className="hidden absolute bottom-9 -right-6 h-fit w-fit rounded-lg p-2 clr-bg m-auto max-lg:block"
      onClick={() => toggleHeader()}
    >
     
      {/* <div class="css-headerButton-lb"></div> */}
      <svg
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

      {/* <svg
        width="384"
        height="383"
        viewBox="0 0 384 383"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="fa-arrowHeader"
      >
        <path
          d="M70.1114 107.932C71.6451 115.135 78.7271 119.73 85.9294 118.196C93.1317 116.662 97.727 109.581 96.1933 102.378C94.6595 95.1759 87.5776 90.5806 80.3753 92.1143C73.173 93.6481 68.5777 100.73 70.1114 107.932ZM263.386 102.014L265.886 102.014L265.886 99.4701L263.343 99.5144L263.386 102.014ZM263.386 299.823L277.82 285.389L263.386 270.955L248.953 285.389L263.386 299.823ZM83.1959 107.655L263.43 104.514L263.343 99.5144L83.1088 102.656L83.1959 107.655ZM260.886 102.014L260.886 285.389L265.886 285.389L265.886 102.014L260.886 102.014Z"
          fill="white"
        />
      </svg> */}
    </button>
  );
};

export default ButtonToggleHeader;
