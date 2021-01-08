// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import * as ComponentHelpers from '../../component_helpers/component_helpers.js';
import * as UIComponents from '../../ui/components/components.js';

ComponentHelpers.ComponentServerSetup.setup().then(() => renderComponent());

const renderComponent = (): void => {
  const iconTable = document.getElementById('icon-overview');

  const row1 = document.createElement('tr');
  const iconName1 = document.createElement('td');
  iconName1.textContent = 'node_search_icon';
  row1.appendChild(iconName1);

  const icon = new UIComponents.Icon.Icon();
  const name = 'node_search_icon';
  icon.data = {iconName: name, color: 'rgb(110, 110, 110)', width: '24px'};
  const icon1 = document.createElement('td');
  icon1.appendChild(icon);
  row1.appendChild(icon1);

  iconTable?.appendChild(row1);

  icon.onclick = (): void => {
    // Change of colour through a data-setter, which rerenders the component. Getting the data first in order not to specify the data fields all over again
    icon.data = {...icon.data, color: 'blue'};
  };

  const row2 = document.createElement('tr');
  const iconName2 = document.createElement('td');
  iconName2.textContent = 'breaking_change_icon';
  row2.appendChild(iconName2);

  const otherIcon = new UIComponents.Icon.Icon();
  const otherPath = 'http://localhost:8090/Images/breaking_change_icon.svg';
  otherIcon.data = {iconPath: otherPath, width: '24px', height: '27px', color: 'blue'};
  const icon2 = document.createElement('td');
  icon2.appendChild(otherIcon);
  row2.appendChild(icon2);

  iconTable?.appendChild(row2);

  const row3 = document.createElement('tr');
  const iconName3 = document.createElement('td');
  iconName3.textContent = 'breaking_change_icon';
  row3.appendChild(iconName3);

  const otherIcon2 = new UIComponents.Icon.Icon();
  otherIcon2.classList.add('custom-color');
  otherIcon2.data = {iconName: 'node_search_icon', width: '24px', height: '24px', color: 'black'};
  const icon3 = document.createElement('td');
  icon3.appendChild(otherIcon2);
  row3.appendChild(icon3);

  iconTable?.appendChild(row3);
};
