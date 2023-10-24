import React from 'react';
import { Grid, Column, Link, Button } from '@carbon/react';
import { InfoSection, InfoCard } from '../../components/Info';
import {
  Chat,
  Person,
  LogoLinkedin,
  LogoGithub,
  Email,
  EarthFilled,
  CalendarAddAlt
} from '@carbon/react/icons';

const LandingPage = () => {
  const openCalendly = () => {
    const calendlyLink = 'https://calendly.com/tomas-dambrauskas/30min';
    window.open(calendlyLink, '_blank');
  };

  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__r1">
        <Grid className="intro-group-content">
          <Column md={4} lg={4} sm={4}>
            <img
              height={200}
              className="landing-page__illo"
              src="avataaars.png"
              alt="Tomas avatar"
            />
          </Column>
          <Column md={4} lg={12} sm={4} className="landing-page__content">
            <h2 className="landing-page__subheading">Welcome!</h2>
            <p>
              You can find my personal experiments below. You can always reach
              me here:
            </p>
            <Link href="mailto:hi@maikl.lt" target="_blank">
              <Email size="40" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/tomasdambrauskas/"
              target="_blank">
              <LogoLinkedin size="40" />
            </Link>
            <Link href="https://github.com/maikllt" target="_blank">
              <LogoGithub size="40" />
            </Link>
            <Button renderIcon={CalendarAddAlt}
              kind="tertiary"
              onClick={openCalendly}
            // style={{ display: 'block', marginTop: '20px' }}
            >
              Book my time
            </Button>
          </Column>
        </Grid>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <InfoSection heading="The 'Tools'">
          <InfoCard
            heading="This website"
            body="It was to try IBM Carbon Design System and following the tutorial for React. Will serve as a box 
            for my future experiments"
            icon={() => <Person size={32} />}
            href="/"
            gitHref="https://github.com/maikllt/maikl-site"
          />
          <InfoCard
            heading="WhatsApp trimmer"
            body="Service that allows paste phone number and cleans it from unsupported WhatsApp (WA) characters and 
            opens WA to send the message"
            icon={() => <Chat size={32} />}
            href="/wa-trimmer"
            gitHref="https://github.com/maikllt/WhatsApp-trimmer"
          />
          <InfoCard
            heading="Your IKIGAI"
            body="Trying OpenAI API. Allows to find your purpose using Japanese IKIGAI method."
            icon={() => <EarthFilled size={32} />}
            href="/ikigai"
            gitHref="https://github.com/maikllt/maikl-site"
          />
          {/* <InfoCard
            heading="WhatsTheStatus"
            body=""
            icon={() => <Globe size={32} />}
          /> */}
        </InfoSection>
      </Column>
    </Grid>
  );
};

export default LandingPage;
