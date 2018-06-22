import * as React from 'react';
import { SFC } from 'react';
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

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Profession</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Danilo Barros</td>
          <td>danilobarros@email.com</td>
          <td>Web Developer</td>
          <td>33</td>
        </tr>
        <tr>
          <td>Danilo Barros</td>
          <td>danilobarros@email.com</td>
          <td>Web Developer</td>
          <td>33</td>
        </tr>
        <tr>
          <td>Danilo Barros</td>
          <td>danilobarros@email.com</td>
          <td>Web Developer</td>
          <td>33</td>
        </tr>
        <tr>
          <td>Danilo Barros</td>
          <td>danilobarros@email.com</td>
          <td>Web Developer</td>
          <td>33</td>
        </tr>
        <tr>
          <td>Danilo Barros</td>
          <td>danilobarros@email.com</td>
          <td>Web Developer</td>
          <td>33</td>
        </tr>
        <tr>
          <td>Danilo Barros</td>
          <td>danilobarros@email.com</td>
          <td>Web Developer</td>
          <td>33</td>
        </tr>
        <tr>
          <td>Danilo Barros</td>
          <td>danilobarros@email.com</td>
          <td>Web Developer</td>
          <td>33</td>
        </tr>
        <tr>
          <td>Danilo Barros</td>
          <td>danilobarros@email.com</td>
          <td>Web Developer</td>
          <td>33</td>
        </tr>
        <tr>
          <td>Danilo Barros</td>
          <td>danilobarros@email.com</td>
          <td>Web Developer</td>
          <td>33</td>
        </tr>
        <tr>
          <td>Danilo Barros</td>
          <td>danilobarros@email.com</td>
          <td>Web Developer</td>
          <td>33</td>
        </tr>
        <tr>
          <td>Danilo Barros</td>
          <td>danilobarros@email.com</td>
          <td>Web Developer</td>
          <td>33</td>
        </tr>
        <tr>
          <td>Danilo Barros</td>
          <td>danilobarros@email.com</td>
          <td>Web Developer</td>
          <td>33</td>
        </tr>
        <tr>
          <td>Danilo Barros</td>
          <td>danilobarros@email.com</td>
          <td>Web Developer</td>
          <td>33</td>
        </tr>
        <tr>
          <td>Danilo Barros</td>
          <td>danilobarros@email.com</td>
          <td>Web Developer</td>
          <td>33</td>
        </tr>
        <tr>
          <td>Danilo Barros</td>
          <td>danilobarros@email.com</td>
          <td>Web Developer</td>
          <td>33</td>
        </tr>
        <tr>
          <td>Danilo Barros</td>
          <td>danilobarros@email.com</td>
          <td>Web Developer</td>
          <td>33</td>
        </tr>
        <tr>
          <td>Danilo Barros</td>
          <td>danilobarros@email.com</td>
          <td>Web Developer</td>
          <td>33</td>
        </tr>
        <tr>
          <td>Danilo Barros</td>
          <td>danilobarros@email.com</td>
          <td>Web Developer</td>
          <td>33</td>
        </tr>
        <tr>
          <td>Danilo Barros</td>
          <td>danilobarros@email.com</td>
          <td>Web Developer</td>
          <td>33</td>
        </tr>
        <tr>
          <td>Danilo Barros</td>
          <td>danilobarros@email.com</td>
          <td>Web Developer</td>
          <td>33</td>
        </tr>
      </tbody>
    </table>

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
