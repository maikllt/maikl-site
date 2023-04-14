import React, { useState, setOpen } from 'react';
import {
  Button,
  Grid,
  Column,
  TextArea,
  Modal,
  Loading
} from '@carbon/react';
import { Link } from '@carbon/react/icons';
import ReactDOM from 'react-dom';

const IKIGAIpage = () => {
  return (
    <Grid className="ikigai-page" fullWidth>
      <Column lg={6} md={4} sm={4} className="ikigai-page-desription">
        <h2 className="ikigai-page__heading">What is <strong>IKIGAI</strong>?</h2>
        <p className="ikigai-page__p">
          "Japanese concept referring to something that gives a person a sense of <strong>purpose</strong>,
          a <strong>reason for living</strong>." &nbsp; 
          <a href="https://en.wikipedia.org/wiki/Ikigai" target="_blank" rel="noopener noreferrer">
            <Link size="16" />
          </a>
        </p>
        <img
          className="ikigai-diagram"
          src="diagram_ikigai.png"
          alt="IKIGAI diagram"
        />
      </Column>
      <Column lg={8} md={4} sm={4} className="ikigai-page-content">
        <TextArea
          enableCounter
          id="text-area-1"
          labelText="What you LOVE"
          maxCount={300}
          rows="3"
        />
        <TextArea
          enableCounter
          id="text-area-2"
          labelText="What the world NEEDS"
          maxCount={300}
          rows="3"
        />
        <TextArea
          enableCounter
          id="text-area-3"
          labelText="What you can be PAID FOR"
          maxCount={300}
          rows="3"
        />
        <TextArea
          enableCounter
          id="text-area-4"
          labelText="What are you GOOD AT"
          maxCount={300}
          rows="3"
        />
        <ModalStateManager
          renderLauncher={({ setOpen }) => (
            <Button kind="primary" onClick={() => setOpen(true)}>Give my IKIGAI</Button>
          )}>
          {({ open, setOpen }) => (
            <Modal
              modalHeading="Your IKIGAI"
              primaryButtonText="Start over"
              onRequestSubmit={() => setOpen(false)}
              open={open}
              onRequestClose={() => setOpen(false)}>
              <div className="ikigai-modal-content">
                <p>SORRY! work still in progress, please try another day... </p>
                <Loading className="ikigai-loader" withOverlay={false} />;
              </div>
            </Modal>
          )}
        </ModalStateManager>
      </Column>
    </Grid>
  );
};

const ModalStateManager = ({
  renderLauncher: LauncherContent,
  children: ModalContent,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {!ModalContent || typeof document === 'undefined'
        ? null
        : ReactDOM.createPortal(
          <ModalContent open={open} setOpen={setOpen} />,
          document.body
        )}
      {LauncherContent && <LauncherContent open={open} setOpen={setOpen} />}
    </>
  );
};

export default IKIGAIpage;