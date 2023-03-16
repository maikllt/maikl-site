import React from 'react';
import { Grid, Column, Link } from '@carbon/react';
import { LogoGithub } from '@carbon/react/icons';

// Take in a phrase and separate the third word in an array
function createArrayFromPhrase(phrase) {
  const splitPhrase = phrase.split(' ');
  const thirdWord = splitPhrase.pop();
  return [splitPhrase.join(' '), thirdWord];
}

const InfoSection = props => (
  <Grid className={`${props.className} info-section`}>
    <Column md={8} lg={4} xlg={3}>
      <h3 className="info-section__heading">{props.heading}</h3>
    </Column>
    {props.children}
  </Grid>
);

const InfoCard = props => {
  const splitHeading = createArrayFromPhrase(props.heading);

  return (
    <Column sm={4} md={8} lg={4} className="info-card">
      <Link
        className="info-card__heading-link"
        href={props.href}
        target="_blank">
        <h4 className="info-card__heading">
          {`${splitHeading[0]} `}
          <strong>{splitHeading[1]}</strong>
        </h4>
      </Link>
      <p className="info-card__body">{props.body}</p>
      <Column className="info-card-links">
        <Link href={props.href} target="_blank">
          {props.icon()}
        </Link>
        <Link href={props.gitHref} target="_blank">
          <LogoGithub size="32" />
        </Link>
      </Column>
    </Column>
  );
};

export { InfoSection, InfoCard };
