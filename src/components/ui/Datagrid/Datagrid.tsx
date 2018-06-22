import * as React from 'react';
import { SFC } from 'react';
import { Scrollbars } from 'tt-react-custom-scrollbars';
import { Icon } from 'rmwc/Icon';
import { Typography } from 'rmwc/Typography';
import { Select, SquareButton } from 'components/ui';
import {
  Toolbar,
  ToolbarIcon,
  ToolbarRow,
  ToolbarSection,
} from 'rmwc/Toolbar';

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
          <div className="rows-per-page">
            <Typography use="caption">Rows per page:</Typography>
            <Select options={['5', '10', '25']} />
          </div>

          <div className="items-counter">
            <Typography className="from" use="caption">1</Typography>
            <Typography use="caption">{' - '}</Typography>
            <Typography className="to" use="caption">15</Typography>
            <Typography use="caption">{' of '}</Typography>
            <Typography className="total" use="caption">25</Typography>
          </div>

          <div className="actions">
            <ToolbarIcon use="chevron_left" />
            <ToolbarIcon use="chevron_right" />
          </div>
        </ToolbarSection>
      </ToolbarRow>
    </Toolbar>
  </div>
);
