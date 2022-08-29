import React from 'react';

import ReactToPrint from 'react-to-print';
import PrivacyPolicy_draft from '../../images/PrivacyPolicy.docx'
import FileViewer from 'react-file-viewer';
const type = 'docx'

export class ComponentToPrint extends React.PureComponent {
  render() {
    return (
     <div>
         <FileViewer
                  fileType={type}
                  filePath={PrivacyPolicy_draft}
                       />
     </div>
    );
  }
}




class TermsAndsConditions extends React.PureComponent {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
     
            return (
              <button
                className="adimera-btn"
                // style={{
                //   borderRadius: "30px",
                //   borderColor: "#ffaf33",
                //   color: "white",
                //   backgroundColor: "#ffaf33",
                // }}
              >
                Print this out!
              </button>
            );
          }}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={el => (this.componentRef = el)} />

        <a href={PrivacyPolicy_draft} target="_blank" rel="noopener noreferrer" download>
        <button className="adimera-btn" style={{borderColor:"#ffaf33"}}>
          
              Download File
        </button>
        
</a>
      </div>
    );
  }
}

    

export default TermsAndsConditions;
