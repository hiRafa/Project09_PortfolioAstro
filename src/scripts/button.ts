// // Wrap your code in an event listener for the "DOMContentLoaded" event.
// document.addEventListener("DOMContentLoaded", function () {
//     const header: HTMLElement | null = document.getElementById("myHeader");
//     const toggleButton: NodeListOf<HTMLElement> | null = document.querySelectorAll("[data-headerbutton]");
//     const toggleButtonIcon: HTMLElement | null = document.getElementById("fa-arrowHeader");
//     let isHeaderHidden: boolean = true;
  
//     if (header && toggleButton && toggleButtonIcon) {
//       toggleButton.forEach((button) => {
//         button.addEventListener("click", function () {
//           if (!isHeaderHidden) {
//             if (header.style) {
//               header.classList.add("css-hideHeader");
//               toggleButtonIcon.classList.remove("rotate");
//             }
//           } else {
//             if (header.style) {
//               header.classList.remove("css-hideHeader");
//               toggleButtonIcon.classList.add("rotate");
//             }
//           }
//           isHeaderHidden = !isHeaderHidden;
//         });
//       });
//     }
//   });
  