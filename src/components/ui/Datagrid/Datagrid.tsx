import * as React from 'react';
import { SFC } from 'react';
import { Scrollbars } from 'tt-react-custom-scrollbars';
import { Icon } from 'rmwc/Icon';
import {
  Toolbar,
  ToolbarIcon,
  ToolbarRow,
  ToolbarSection,
} from 'rmwc/Toolbar';
import { SquareButton } from 'components/ui';

export const Datagrid: SFC<{}> = () => (
  <div className="odc-datagrid">
    <Toolbar>
      <ToolbarRow>
        <SquareButton
          noRipple
          primary
          use="add"
        />

        <ToolbarSection alignEnd>
          <ToolbarIcon use="filter_list" />
        </ToolbarSection>
      </ToolbarRow>
    </Toolbar>

    <Scrollbars
      autoHide
      universal
    >
      <div className="odc-table-wrapper">
        <div className="odc-table">
          <div className="odc-thead">
            <div className="odc-tr">
              <div className="odc-th">
                <div className="content">
                  <span className="text">Name</span>
                </div>
              </div>
              <div className="odc-th odc-th--active">
                <div className="content">
                  <Icon use="arrow_upward" />
                  <span className="text">Email</span>
                </div>
              </div>
              <div className="odc-th">
                <div className="content">
                  <span className="text">Profession</span>
                </div>
              </div>
              <div className="odc-th">
                <div className="content">
                  <span className="text">Age</span>
                </div>
              </div>
            </div>
          </div>

          <Scrollbars
            autoHide
            universal
            style={{ overflowX: 'hidden', flex: 1 }}
          >
            <div className="odc-tbody">
              <div className="odc-tr">
                <div className="odc-td">Danilo Barros</div>
                <div className="odc-td">danilobarros@email.com</div>
                <div className="odc-td">Web Developer</div>
                <div className="odc-td">33</div>
              </div>
              <div className="odc-tr">
                <div className="odc-td">Danilo Barros</div>
                <div className="odc-td">danilobarros@email.com</div>
                <div className="odc-td">Web Developer</div>
                <div className="odc-td">33</div>
              </div>
              <div className="odc-tr">
                <div className="odc-td">Danilo Barros</div>
                <div className="odc-td">danilobarros@email.com</div>
                <div className="odc-td">Web Developer</div>
                <div className="odc-td">33</div>
              </div>
              <div className="odc-tr">
                <div className="odc-td">Danilo Barros</div>
                <div className="odc-td">danilobarros@email.com</div>
                <div className="odc-td">Web Developer</div>
                <div className="odc-td">33</div>
              </div>
              <div className="odc-tr">
                <div className="odc-td">Danilo Barros</div>
                <div className="odc-td">danilobarros@email.com</div>
                <div className="odc-td">Web Developer</div>
                <div className="odc-td">33</div>
              </div>
              <div className="odc-tr">
                <div className="odc-td">Danilo Barros</div>
                <div className="odc-td">danilobarros@email.com</div>
                <div className="odc-td">Web Developer</div>
                <div className="odc-td">33</div>
              </div>
              <div className="odc-tr">
                <div className="odc-td">Danilo Barros</div>
                <div className="odc-td">danilobarros@email.com</div>
                <div className="odc-td">Web Developer</div>
                <div className="odc-td">33</div>
              </div>
              <div className="odc-tr">
                <div className="odc-td">Danilo Barros</div>
                <div className="odc-td">danilobarros@email.com</div>
                <div className="odc-td">Web Developer</div>
                <div className="odc-td">33</div>
              </div>
              <div className="odc-tr">
                <div className="odc-td">Danilo Barros</div>
                <div className="odc-td">danilobarros@email.com</div>
                <div className="odc-td">Web Developer</div>
                <div className="odc-td">33</div>
              </div>
              <div className="odc-tr">
                <div className="odc-td">Danilo Barros</div>
                <div className="odc-td">danilobarros@email.com</div>
                <div className="odc-td">Web Developer</div>
                <div className="odc-td">33</div>
              </div>
              <div className="odc-tr">
                <div className="odc-td">Danilo Barros</div>
                <div className="odc-td">danilobarros@email.com</div>
                <div className="odc-td">Web Developer</div>
                <div className="odc-td">33</div>
              </div>
              <div className="odc-tr">
                <div className="odc-td">Danilo Barros</div>
                <div className="odc-td">danilobarros@email.com</div>
                <div className="odc-td">Web Developer</div>
                <div className="odc-td">33</div>
              </div>
              <div className="odc-tr">
                <div className="odc-td">Danilo Barros</div>
                <div className="odc-td">danilobarros@email.com</div>
                <div className="odc-td">Web Developer</div>
                <div className="odc-td">33</div>
              </div>
              <div className="odc-tr">
                <div className="odc-td">Danilo Barros</div>
                <div className="odc-td">danilobarros@email.com</div>
                <div className="odc-td">Web Developer</div>
                <div className="odc-td">33</div>
              </div>
              <div className="odc-tr">
                <div className="odc-td">Danilo Barros</div>
                <div className="odc-td">danilobarros@email.com</div>
                <div className="odc-td">Web Developer</div>
                <div className="odc-td">33</div>
              </div>
              <div className="odc-tr">
                <div className="odc-td">Danilo Barros</div>
                <div className="odc-td">danilobarros@email.com</div>
                <div className="odc-td">Web Developer</div>
                <div className="odc-td">33</div>
              </div>
              <div className="odc-tr">
                <div className="odc-td">Danilo Barros</div>
                <div className="odc-td">danilobarros@email.com</div>
                <div className="odc-td">Web Developer</div>
                <div className="odc-td">33</div>
              </div>
              <div className="odc-tr">
                <div className="odc-td">Danilo Barros</div>
                <div className="odc-td">danilobarros@email.com</div>
                <div className="odc-td">Web Developer</div>
                <div className="odc-td">33</div>
              </div>
              <div className="odc-tr">
                <div className="odc-td">Danilo Barros</div>
                <div className="odc-td">danilobarros@email.com</div>
                <div className="odc-td">Web Developer</div>
                <div className="odc-td">33</div>
              </div>
              <div className="odc-tr">
                <div className="odc-td">Danilo Barros</div>
                <div className="odc-td">danilobarros@email.com</div>
                <div className="odc-td">Web Developer</div>
                <div className="odc-td">33</div>
              </div>
              <div className="odc-tr">
                <div className="odc-td">Danilo Barros</div>
                <div className="odc-td">danilobarros@email.com</div>
                <div className="odc-td">Web Developer</div>
                <div className="odc-td">33</div>
              </div>
              <div className="odc-tr">
                <div className="odc-td">Danilo Barros</div>
                <div className="odc-td">danilobarros@email.com</div>
                <div className="odc-td">Web Developer</div>
                <div className="odc-td">33</div>
              </div>
              <div className="odc-tr">
                <div className="odc-td">Danilo Barros</div>
                <div className="odc-td">danilobarros@email.com</div>
                <div className="odc-td">Web Developer</div>
                <div className="odc-td">33</div>
              </div>
              <div className="odc-tr">
                <div className="odc-td">Danilo Barros</div>
                <div className="odc-td">danilobarros@email.com</div>
                <div className="odc-td">Web Developer</div>
                <div className="odc-td">33</div>
              </div>
              <div className="odc-tr">
                <div className="odc-td">Danilo Barros</div>
                <div className="odc-td">danilobarros@email.com</div>
                <div className="odc-td">Web Developer</div>
                <div className="odc-td">33</div>
              </div>
              <div className="odc-tr">
                <div className="odc-td">Danilo Barros</div>
                <div className="odc-td">danilobarros@email.com</div>
                <div className="odc-td">Web Developer</div>
                <div className="odc-td">33</div>
              </div>
            </div>
          </Scrollbars>
        </div>
      </div>
    </Scrollbars>

    <Toolbar className="odc-pagination">
      <ToolbarRow>
        <ToolbarSection alignEnd>
          <ToolbarIcon use="chevron_left" />
          <ToolbarIcon use="chevron_right" />
        </ToolbarSection>
      </ToolbarRow>
    </Toolbar>
  </div>
);
