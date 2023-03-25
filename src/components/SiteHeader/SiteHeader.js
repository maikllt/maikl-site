import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  SkipToContent,
  HeaderMenu,
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
      </Header>
    )}
  />
);

export default SiteHeader;
