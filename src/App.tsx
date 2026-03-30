/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Layout from './components/Layout';
import FocusView from './components/FocusView';
import TasksView from './components/TasksView';
import StatsView from './components/StatsView';
import SettingsView from './components/SettingsView';
import { Tab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('focus');

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === 'focus' && <FocusView />}
      {activeTab === 'tasks' && <TasksView />}
      {activeTab === 'stats' && <StatsView />}
      {activeTab === 'settings' && <SettingsView />}
    </Layout>
  );
}
