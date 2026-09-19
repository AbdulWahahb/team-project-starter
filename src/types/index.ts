export type Theme = 'light' | 'dark' | 'system';

export type NavItem = {
  label: string;
  to: string;
  icon: string;
};

export type Project = {
  id: string;
  name: string;
  owner: string;
  status: 'Active' | 'Planning' | 'At Risk';
  progress: number;
  dueDate: string;
  teamSize: number;
  description: string;
};

export type Task = {
  id: string;
  title: string;
  assignee: string;
  status: 'In Progress' | 'Review' | 'Blocked' | 'Done';
  priority: 'Low' | 'Medium' | 'High';
  dueDate: string;
  project: string;
};

export type NotificationItem = {
  id: string;
  title: string;
  description: string;
  time: string;
  unread?: boolean;
};

export type EmptyStateProps = {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
};
