import React from "react";
import CertificateForm from "./CertificateForm";
import { Container } from "semantic-ui-react";
import docxGenerator from "./docxGenerator";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  return (
    <Container className='content'>
      <CertificateForm
        onSubmit={(formValues) =>
          docxGenerator(
            "models/certificate.docx",
            formValues,
            `${formValues.firstName} - certificate.docx`
          )
        }
      />
    </Container>
  );
}

export default App;
