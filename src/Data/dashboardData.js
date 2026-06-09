export const stats = [
  {
    title: "Total Resources",
    value: "1,240",
    badge: "STABLE",
    icon: "inventory_2",
    subtitle: "AWS, GCP, Azure",
  },
  {
    title: "Issues Found",
    value: "42",
    badge: "ACTION REQUIRED",
    icon: "gpp_bad",
    subtitle: "+12 from last scan",
  },
  {
    title: "Issues Fixed",
    value: "18",
    badge: "OPTIMIZED",
    icon: "task_alt",
    subtitle: "Auto-remediation active",
  },
  {
    title: "Active Alerts",
    value: "5",
    badge: "MONITORING",
    icon: "warning",
    subtitle: "3 high severity",
  },
];

export const alerts = [
  {
    severity: "Critical",
    title: "Unauthorized S3 Access Attempt",
    description:
      "Inbound traffic detected from an unknown IP targeting production resources.",
    time: "2m ago",
  },
  {
    severity: "High",
    title: "IAM Policy Drift Detected",
    description: "Admin permissions granted outside approved change window.",
    time: "14m ago",
  },
  {
    severity: "Medium",
    title: "Unencrypted RDS Instance",
    description: "Database launched without AES-256 encryption.",
    time: "1h ago",
  },
];
