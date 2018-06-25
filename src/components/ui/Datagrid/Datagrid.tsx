import * as React from 'react';
import classNames from 'classnames';
import { Component } from 'react';
import { Scrollbars } from 'tt-react-custom-scrollbars';
import { Select, SquareButton } from 'components/ui';
import { Drawer } from 'rmwc/Drawer';
import { Icon } from 'rmwc/Icon';
import { Typography } from 'rmwc/Typography';
import {
  Toolbar,
  ToolbarIcon,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
} from 'rmwc/Toolbar';

type DatagridState = {
  filtersDrawerOpen: boolean;
};

export class Datagrid extends Component<{}, DatagridState> {
  constructor(props: any) {
    super(props);

    this.state = {
      filtersDrawerOpen: false,
    };
  }

  render() {
    const { filtersDrawerOpen } = this.state;

    return (
      <div className="odc-datagrid">
        <Toolbar className="odc-datagrid__toolbar odc-toolbar">
          <ToolbarRow>
            <SquareButton
              noRipple
              primary
              use="add"
            />

            <ToolbarSection alignEnd>
              <ToolbarIcon use="filter_list" onClick={this.toggleFilters} />
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>

        <div
          className={classNames(
            'odc-datagrid__filters-wrapper',
            { 'odc-datagrid__filters-wrapper--open': filtersDrawerOpen },
          )}
        >
          <Scrollbars
            className="odc-table-scrollbars odc-table-scrollbars--horizontal"
            autoHide
            universal
          >
            <div className="odc-table-wrapper">
              <div className="odc-table">
                <div className="odc-table__thead">
                  <div className="odc-table__tr">
                    <div className="odc-table__th">
                      <div className="odc-table__content">
                        <span className="odc-table__text">Name</span>
                      </div>
                    </div>
                    <div className="odc-table__th odc-table__th--active">
                      <div className="odc-table__content">
                        <Icon className="odc-table__icon" use="arrow_upward" />
                        <span className="odc-table__text">Email</span>
                      </div>
                    </div>
                    <div className="odc-table__th">
                      <div className="odc-table__content">
                        <span className="odc-table__text">Profession</span>
                      </div>
                    </div>
                    <div className="odc-table__th">
                      <div className="odc-table__content">
                        <span className="odc-table__text">Age</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Scrollbars
                  autoHide
                  universal
                >
                  <div className="odc-table__tbody">
                    <div className="odc-table__tr">
                      <div className="odc-table__td">Danilo Barros</div>
                      <div className="odc-table__td">danilobarros@email.com</div>
                      <div className="odc-table__td">Web Developer</div>
                      <div className="odc-table__td">33</div>
                    </div>
                    <div className="odc-table__tr">
                      <div className="odc-table__td">Danilo Barros</div>
                      <div className="odc-table__td">danilobarros@email.com</div>
                      <div className="odc-table__td">Web Developer</div>
                      <div className="odc-table__td">33</div>
                    </div>
                    <div className="odc-table__tr">
                      <div className="odc-table__td">Danilo Barros</div>
                      <div className="odc-table__td">danilobarros@email.com</div>
                      <div className="odc-table__td">Web Developer</div>
                      <div className="odc-table__td">33</div>
                    </div>
                    <div className="odc-table__tr">
                      <div className="odc-table__td">Danilo Barros</div>
                      <div className="odc-table__td">danilobarros@email.com</div>
                      <div className="odc-table__td">Web Developer</div>
                      <div className="odc-table__td">33</div>
                    </div>
                    <div className="odc-table__tr">
                      <div className="odc-table__td">Danilo Barros</div>
                      <div className="odc-table__td">danilobarros@email.com</div>
                      <div className="odc-table__td">Web Developer</div>
                      <div className="odc-table__td">33</div>
                    </div>
                    <div className="odc-table__tr">
                      <div className="odc-table__td">Danilo Barros</div>
                      <div className="odc-table__td">danilobarros@email.com</div>
                      <div className="odc-table__td">Web Developer</div>
                      <div className="odc-table__td">33</div>
                    </div>
                    <div className="odc-table__tr">
                      <div className="odc-table__td">Danilo Barros</div>
                      <div className="odc-table__td">danilobarros@email.com</div>
                      <div className="odc-table__td">Web Developer</div>
                      <div className="odc-table__td">33</div>
                    </div>
                    <div className="odc-table__tr">
                      <div className="odc-table__td">Danilo Barros</div>
                      <div className="odc-table__td">danilobarros@email.com</div>
                      <div className="odc-table__td">Web Developer</div>
                      <div className="odc-table__td">33</div>
                    </div>
                    <div className="odc-table__tr">
                      <div className="odc-table__td">Danilo Barros</div>
                      <div className="odc-table__td">danilobarros@email.com</div>
                      <div className="odc-table__td">Web Developer</div>
                      <div className="odc-table__td">33</div>
                    </div>
                    <div className="odc-table__tr">
                      <div className="odc-table__td">Danilo Barros</div>
                      <div className="odc-table__td">danilobarros@email.com</div>
                      <div className="odc-table__td">Web Developer</div>
                      <div className="odc-table__td">33</div>
                    </div>
                    <div className="odc-table__tr">
                      <div className="odc-table__td">Danilo Barros</div>
                      <div className="odc-table__td">danilobarros@email.com</div>
                      <div className="odc-table__td">Web Developer</div>
                      <div className="odc-table__td">33</div>
                    </div>
                    <div className="odc-table__tr">
                      <div className="odc-table__td">Danilo Barros</div>
                      <div className="odc-table__td">danilobarros@email.com</div>
                      <div className="odc-table__td">Web Developer</div>
                      <div className="odc-table__td">33</div>
                    </div>
                    <div className="odc-table__tr">
                      <div className="odc-table__td">Danilo Barros</div>
                      <div className="odc-table__td">danilobarros@email.com</div>
                      <div className="odc-table__td">Web Developer</div>
                      <div className="odc-table__td">33</div>
                    </div>
                    <div className="odc-table__tr">
                      <div className="odc-table__td">Danilo Barros</div>
                      <div className="odc-table__td">danilobarros@email.com</div>
                      <div className="odc-table__td">Web Developer</div>
                      <div className="odc-table__td">33</div>
                    </div>
                    <div className="odc-table__tr">
                      <div className="odc-table__td">Danilo Barros</div>
                      <div className="odc-table__td">danilobarros@email.com</div>
                      <div className="odc-table__td">Web Developer</div>
                      <div className="odc-table__td">33</div>
                    </div>
                    <div className="odc-table__tr">
                      <div className="odc-table__td">Danilo Barros</div>
                      <div className="odc-table__td">danilobarros@email.com</div>
                      <div className="odc-table__td">Web Developer</div>
                      <div className="odc-table__td">33</div>
                    </div>
                    <div className="odc-table__tr">
                      <div className="odc-table__td">Danilo Barros</div>
                      <div className="odc-table__td">danilobarros@email.com</div>
                      <div className="odc-table__td">Web Developer</div>
                      <div className="odc-table__td">33</div>
                    </div>
                    <div className="odc-table__tr">
                      <div className="odc-table__td">Danilo Barros</div>
                      <div className="odc-table__td">danilobarros@email.com</div>
                      <div className="odc-table__td">Web Developer</div>
                      <div className="odc-table__td">33</div>
                    </div>
                    <div className="odc-table__tr">
                      <div className="odc-table__td">Danilo Barros</div>
                      <div className="odc-table__td">danilobarros@email.com</div>
                      <div className="odc-table__td">Web Developer</div>
                      <div className="odc-table__td">33</div>
                    </div>
                    <div className="odc-table__tr">
                      <div className="odc-table__td">Danilo Barros</div>
                      <div className="odc-table__td">danilobarros@email.com</div>
                      <div className="odc-table__td">Web Developer</div>
                      <div className="odc-table__td">33</div>
                    </div>
                    <div className="odc-table__tr">
                      <div className="odc-table__td">Danilo Barros</div>
                      <div className="odc-table__td">danilobarros@email.com</div>
                      <div className="odc-table__td">Web Developer</div>
                      <div className="odc-table__td">33</div>
                    </div>
                    <div className="odc-table__tr">
                      <div className="odc-table__td">Danilo Barros</div>
                      <div className="odc-table__td">danilobarros@email.com</div>
                      <div className="odc-table__td">Web Developer</div>
                      <div className="odc-table__td">33</div>
                    </div>
                    <div className="odc-table__tr">
                      <div className="odc-table__td">Danilo Barros</div>
                      <div className="odc-table__td">danilobarros@email.com</div>
                      <div className="odc-table__td">Web Developer</div>
                      <div className="odc-table__td">33</div>
                    </div>
                    <div className="odc-table__tr">
                      <div className="odc-table__td">Danilo Barros</div>
                      <div className="odc-table__td">danilobarros@email.com</div>
                      <div className="odc-table__td">Web Developer</div>
                      <div className="odc-table__td">33</div>
                    </div>
                    <div className="odc-table__tr">
                      <div className="odc-table__td">Danilo Barros</div>
                      <div className="odc-table__td">danilobarros@email.com</div>
                      <div className="odc-table__td">Web Developer</div>
                      <div className="odc-table__td">33</div>
                    </div>
                  </div>
                </Scrollbars>
              </div>
            </div>
          </Scrollbars>

          <Drawer
            className="odc-datagrid__filters"
            open
            permanent
          >
            <Toolbar className="odc-toolbar">
              <ToolbarRow>
                <ToolbarTitle>Filters</ToolbarTitle>
                <ToolbarSection alignEnd>
                  <ToolbarIcon use="close" onClick={this.toggleFilters} />
                </ToolbarSection>
              </ToolbarRow>
            </Toolbar>

            {/* {!!drawerContent && (
              <DrawerContent onClick={this.closeDrawer}>
                {drawerContent}
              </DrawerContent>
            )} */}
          </Drawer>
        </div>

        <Toolbar className="odc-pagination odc-toolbar">
          <ToolbarRow>
            <ToolbarSection alignEnd>
              <div className="odc-pagination__rows">
                <Typography use="caption">Rows per page:</Typography>
                <Select options={['5', '10', '25']} />
              </div>

              <div className="odc-pagination__counter">
                <Typography className="odc-pagination__from" use="caption">1</Typography>
                <Typography use="caption">{' - '}</Typography>
                <Typography className="odc-pagination__to" use="caption">15</Typography>
                <Typography use="caption">{' of '}</Typography>
                <Typography className="odc-pagination__total" use="caption">25</Typography>
              </div>

              <div className="odc-pagination__actions">
                <ToolbarIcon use="chevron_left" />
                <ToolbarIcon use="chevron_right" />
              </div>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
      </div>
    );
  }

  private toggleFilters = () => this.setState({ filtersDrawerOpen: !this.state.filtersDrawerOpen });
}
