export interface CloudTip {
  id: number;
  tip: string;
}

export const cloudTips: CloudTip[] = [
  { id: 1, tip: "Always enable MFA for root and IAM users" },
  { id: 2, tip: "Use spot instances for non-critical workloads to save costs" },
  { id: 3, tip: "Implement proper tagging strategy for resource management" },
  { id: 4, tip: "Use CloudFront for global content delivery" },
  { id: 5, tip: "Enable auto-scaling for handling traffic spikes" },
  { id: 6, tip: "Regularly backup data and test recovery procedures" },
  { id: 7, tip: "Use parameter store for sensitive configuration" },
  { id: 8, tip: "Implement proper VPC design with private subnets" },
  { id: 9, tip: "Use IAM roles instead of access keys" },
  { id: 10, tip: "Enable CloudTrail for audit logging" }
];