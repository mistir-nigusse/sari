import React from "react";

import ReactToPrint from "react-to-print";
import PrivacyPolicy_draft from "../../images/PrivacyPolicy.docx";
import FileViewer from "react-file-viewer";
const type = "docx";

export class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <div>
        <FileViewer fileType={type} filePath={PrivacyPolicy_draft} />
      </div>
    );
  }
}

class DeliveryAndReturn extends React.PureComponent {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return (
              <button
                className="adimera-btn"
                style={{ outline: "none", border: "none" }}
              >
                Print this out!
              </button>
            );
          }}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />

        <a
          href={PrivacyPolicy_draft}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <button
            className="adimera-btn"
            style={{ outline: "none", border: "none" }}
          >
            Download File
          </button>
        </a>
      </div>
    );
  }
}

export default DeliveryAndReturn;
