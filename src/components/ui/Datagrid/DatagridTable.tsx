import * as React from 'react';
import { SFC } from 'react';
import { Scrollbars } from 'tt-react-custom-scrollbars';
import { Icon } from 'rmwc/Icon';

export const DatagridTable: SFC<{}> = () => (
  <Scrollbars
    className="odc-table-scrollbars"
    autoHide
    universal
  >
    <div className="odc-table-wrapper">
      <div className="odc-table">
        <div className="odc-table__thead">
          <div className="odc-table__tr">
            <div className="odc-table__th" style={{ flex: '1 0 200px' }}>
              <div className="odc-table__content">
                <span className="odc-table__text">Name</span>
              </div>
            </div>
            <div className="odc-table__th odc-table__th--active" style={{ flex: '1 0 200px' }}>
              <div className="odc-table__content">
                <Icon className="odc-table__icon" use="arrow_upward" />
                <span className="odc-table__text">Email</span>
              </div>
            </div>
            <div className="odc-table__th" style={{ flex: '1 0 200px' }}>
              <div className="odc-table__content">
                <span className="odc-table__text">Profession</span>
              </div>
            </div>
            <div className="odc-table__th" style={{ flex: '1 0 200px' }}>
              <div className="odc-table__content">
                <span className="odc-table__text">Age</span>
              </div>
            </div>
          </div>
        </div>

        <Scrollbars
          autoHide
          universal
          style={{ minWidth: 800 - 100 }}
        >
          <div className="odc-table__tbody">
            <div className="odc-table__tr">
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Danilo Barros</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>danilobarros@email.com</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Web Developer</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>33</div>
            </div>
            <div className="odc-table__tr">
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Danilo Barros</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>danilobarros@email.com</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Web Developer</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>33</div>
            </div>
            <div className="odc-table__tr">
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Danilo Barros</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>danilobarros@email.com</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Web Developer</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>33</div>
            </div>
            <div className="odc-table__tr">
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Danilo Barros</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>danilobarros@email.com</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Web Developer</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>33</div>
            </div>
            <div className="odc-table__tr">
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Danilo Barros</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>danilobarros@email.com</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Web Developer</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>33</div>
            </div>
            <div className="odc-table__tr">
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Danilo Barros</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>danilobarros@email.com</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Web Developer</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>33</div>
            </div>
            <div className="odc-table__tr">
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Danilo Barros</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>danilobarros@email.com</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Web Developer</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>33</div>
            </div>
            <div className="odc-table__tr">
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Danilo Barros</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>danilobarros@email.com</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Web Developer</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>33</div>
            </div>
            <div className="odc-table__tr">
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Danilo Barros</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>danilobarros@email.com</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Web Developer</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>33</div>
            </div>
            <div className="odc-table__tr">
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Danilo Barros</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>danilobarros@email.com</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Web Developer</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>33</div>
            </div>
            <div className="odc-table__tr">
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Danilo Barros</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>danilobarros@email.com</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Web Developer</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>33</div>
            </div>
            <div className="odc-table__tr">
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Danilo Barros</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>danilobarros@email.com</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Web Developer</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>33</div>
            </div>
            <div className="odc-table__tr">
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Danilo Barros</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>danilobarros@email.com</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Web Developer</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>33</div>
            </div>
            <div className="odc-table__tr">
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Danilo Barros</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>danilobarros@email.com</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Web Developer</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>33</div>
            </div>
            <div className="odc-table__tr">
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Danilo Barros</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>danilobarros@email.com</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Web Developer</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>33</div>
            </div>
            <div className="odc-table__tr">
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Danilo Barros</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>danilobarros@email.com</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Web Developer</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>33</div>
            </div>
            <div className="odc-table__tr">
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Danilo Barros</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>danilobarros@email.com</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Web Developer</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>33</div>
            </div>
            <div className="odc-table__tr">
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Danilo Barros</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>danilobarros@email.com</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Web Developer</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>33</div>
            </div>
            <div className="odc-table__tr">
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Danilo Barros</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>danilobarros@email.com</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Web Developer</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>33</div>
            </div>
            <div className="odc-table__tr">
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Danilo Barros</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>danilobarros@email.com</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Web Developer</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>33</div>
            </div>
            <div className="odc-table__tr">
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Danilo Barros</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>danilobarros@email.com</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Web Developer</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>33</div>
            </div>
            <div className="odc-table__tr">
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Danilo Barros</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>danilobarros@email.com</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Web Developer</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>33</div>
            </div>
            <div className="odc-table__tr">
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Danilo Barros</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>danilobarros@email.com</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Web Developer</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>33</div>
            </div>
            <div className="odc-table__tr">
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Danilo Barros</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>danilobarros@email.com</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Web Developer</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>33</div>
            </div>
            <div className="odc-table__tr">
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Danilo Barros</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>danilobarros@email.com</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>Web Developer</div>
              <div className="odc-table__td" style={{ flex: '1 0 200px' }}>33</div>
            </div>
          </div>
        </Scrollbars>
      </div>
    </div>
  </Scrollbars>
)
