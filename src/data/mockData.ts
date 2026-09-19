import type { NotificationItem, Project, Task } from '../types';

export const projects: Project[] = [
  {
    id: 'p-101',
    name: 'Northstar Portal',
    owner: 'Product Design',
    status: 'Active',
    progress: 78,
    dueDate: '2026-10-02',
    teamSize: 6,
    description: 'Marketing and operations portal for shared workflows and reporting.',
  },
  {
    id: 'p-102',
    name: 'Ops Console',
    owner: 'Platform Team',
    status: 'Planning',
    progress: 34,
    dueDate: '2026-11-12',
    teamSize: 4,
    description: 'Internal operations dashboard for alerting, capacity, and release coordination.',
  },
  {
    id: 'p-103',
    name: 'Customer Health',
    owner: 'Success Team',
    status: 'At Risk',
    progress: 62,
    dueDate: '2026-09-28',
    teamSize: 5,
    description: 'Customer insight workspace for onboarding, retention, and renewals.',
  },
];

export const tasks: Task[] = [
  {
    id: 'T-204',
    title: 'Finalize onboarding checklist',
    assignee: 'Maya',
    status: 'In Progress',
    priority: 'High',
    dueDate: '2026-09-22',
    project: 'Northstar Portal',
  },
  {
    id: 'T-205',
    title: 'Review API contract updates',
    assignee: 'Jordan',
    status: 'Review',
    priority: 'Medium',
    dueDate: '2026-09-24',
    project: 'Ops Console',
  },
  {
    id: 'T-206',
    title: 'Fix export queue timeout',
    assignee: 'Ava',
    status: 'Blocked',
    priority: 'High',
    dueDate: '2026-09-21',
    project: 'Customer Health',
  },
  {
    id: 'T-207',
    title: 'Audit accessibility pass',
    assignee: 'Noah',
    status: 'Done',
    priority: 'Low',
    dueDate: '2026-09-20',
    project: 'Northstar Portal',
  },
];

export const notifications: NotificationItem[] = [
  {
    id: 'n1',
    title: 'Design review scheduled',
    description: 'Northstar Portal review is set for 3:00 PM today.',
    time: '12 min ago',
    unread: true,
  },
  {
    id: 'n2',
    title: 'Deployment succeeded',
    description: 'Ops Console staging deployment is complete.',
    time: '1 hour ago',
  },
  {
    id: 'n3',
    title: 'Team comment added',
    description: 'A new comment was added to the onboarding checklist.',
    time: '3 hours ago',
  },
];
