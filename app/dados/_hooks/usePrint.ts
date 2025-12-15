import { useRef, useCallback } from "react";

export const usePrint = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useCallback(() => {
    if (componentRef.current) {
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      document.body.appendChild(iframe);

      const iframeDoc = iframe.contentWindow?.document;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write("<html><head><title>Imprimir</title>");
        iframeDoc.write("<style>@page { size: landscape; }</style>");
        const headElements = document.head.querySelectorAll(
          'link[rel="stylesheet"], style'
        );
        headElements.forEach((element) => {
          iframeDoc.head.appendChild(element.cloneNode(true));
        });

        iframeDoc.write("</head><body>");
        iframeDoc.write(componentRef.current.outerHTML);
        iframeDoc.write("</body></html>");
        iframeDoc.close();

        iframe.contentWindow?.focus();
        iframe.contentWindow?.print();

        setTimeout(() => {
          document.body.removeChild(iframe);
        }, 1000);
      }
    }
  }, []);

  return { componentRef, handlePrint };
};
