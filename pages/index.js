import React, { useState, useRef, useEffect } from 'react';
import {
  MDBSideNav,
  MDBSideNavMenu,
  MDBSideNavItem,
  MDBSideNavLink,
  MDBSideNavCollapse,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function App() {
  const [modeOpen, setModeOpen] = useState(true);
  const [modeCollapse1, setModeCollapse1] = useState(true);
  const [modeCollapse2, setModeCollapse2] = useState(false);
  const [mode, setMode] = useState('push');
  const [activeBtn, setActiveBtn] = useState('first');
  const sidenavContent = useRef(null);
  const [container, setContainer] = useState();

  useEffect(() => {
    setContainer(sidenavContent.current);
  }, []);

  return (
    <>
      <div className='d-flex my-4'>
        <MDBBtn
          onClick={() => {
            setMode('push');
            setActiveBtn('first');
          }}
          outline={activeBtn !== 'first'}
          className='me-3'
        >
          Push
        </MDBBtn>
        <MDBBtn
          onClick={() => {
            setMode('side');
            setActiveBtn('second');
          }}
          outline={activeBtn !== 'second'}
          className='me-3'
        >
          Side
        </MDBBtn>
        <MDBBtn
          onClick={() => {
            setMode('over');
            setActiveBtn('third');
          }}
          outline={activeBtn !== 'third'}
          className='me-3'
        >
          Over
        </MDBBtn>
      </div>

      <MDBSideNav
        mode={mode}
        isOpen={modeOpen}
        contentRef={container}
        absolute
        getOpenState={(e) => setModeOpen(e)}
      >
        <MDBSideNavMenu>
          <MDBSideNavItem>
            <MDBSideNavLink>
              <MDBIcon far icon='smile' className='fa-fw me-3' />
              Link 1
            </MDBSideNavLink>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink icon='angle-down' shouldBeExpanded={modeCollapse1} onClick={() => setModeCollapse1(!modeCollapse1)}>
              <MDBIcon fas icon='grin' className='fa-fw me-3' />
              Category 1
            </MDBSideNavLink>
            <MDBSideNavCollapse show={modeCollapse1}>
              <MDBSideNavLink>Link 2</MDBSideNavLink>
              <MDBSideNavLink>Link 3</MDBSideNavLink>
            </MDBSideNavCollapse>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink icon='angle-down' shouldBeExpanded={modeCollapse2} onClick={() => setModeCollapse2(!modeCollapse2)}>
              <MDBIcon fas icon='grin' className='fa-fw me-3' />
              Category 2
            </MDBSideNavLink>
            <MDBSideNavCollapse show={modeCollapse2}>
              <MDBSideNavLink>Link 4</MDBSideNavLink>
              <MDBSideNavLink>Link 5</MDBSideNavLink>
            </MDBSideNavCollapse>
          </MDBSideNavItem>
        </MDBSideNavMenu>
      </MDBSideNav>

      <div style={{ padding: '20px' }} className='text-center'>
        <div style={{ padding: '20px' }} className='text-center'>
          <MDBBtn onClick={() => setModeOpen(!modeOpen)}>
            <MDBIcon fas icon='bars' />
          </MDBBtn>
        </div>

        <div ref={sidenavContent} className='d-flex my-5 text-start'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc magna massa, ornare quis interdum a,
          cursus in quam. Quisque risus libero, cursus eget eros vitae, aliquam placerat velit. Vivamus luctus
          eros id sagittis luctus. Pellentesque felis nulla, rhoncus viverra nunc vitae, viverra aliquam ante. Ut
          feugiat mattis tempor.
        </div>
      </div>
    </>
  );
}