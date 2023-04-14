import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  SkipToContent,
  HeaderMenu
} from '@carbon/react';
import { Link } from 'react-router-dom';

const SiteHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Tomas Dambrauskas playground">
        <SkipToContent />
        <HeaderName element={Link} to="/" prefix="playground by">
          Tomas Dambrauskas
        </HeaderName>
        <HeaderNavigation aria-label="Tomas Dambrauskas playground">
          {/* <HeaderMenuItem element={Link} to="/ibm-bpm">
            IBM BPM/BAW
          </HeaderMenuItem> */}
          <HeaderMenu aria-label="Tools" menuLinkName="Tools">
            <HeaderMenuItem element={Link} to="/wa-trimmer">WhatsApp trimmer</HeaderMenuItem>
            <HeaderMenuItem element={Link} to="/ikigai">IKIGAI</HeaderMenuItem>
            {/*<HeaderMenuItem href="#">WhatsTheStatus</HeaderMenuItem> */}
          </HeaderMenu>
        </HeaderNavigation>
        <a className="paypal-donation-container" href="https://www.paypal.com/donate/?hosted_button_id=BS8W5F8XZA9K8"
          target="_blank" rel="noopener noreferrer">
          <img className="paypal-donation-image" src="paypal-donate-button.png" />
        </a>
      </Header >
    )}
  />
);

export default SiteHeader;
