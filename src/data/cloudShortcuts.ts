export interface CloudShortcut {
  id: number;
  command: string;
  description: string;
  platform: 'AWS' | 'Azure' | 'GCP';
}

export const cloudShortcuts: CloudShortcut[] = [
  { 
    id: 1,
    command: "aws s3 sync . s3://bucket-name",
    description: "Sync current directory with S3 bucket",
    platform: "AWS"
  },
  {
    id: 2,
    command: "az group list",
    description: "List all resource groups",
    platform: "Azure"
  },
  {
    id: 3,
    command: "gcloud compute instances list",
    description: "List all compute instances",
    platform: "GCP"
  },
  {
    id: 4,
    command: "aws ec2 describe-instances",
    description: "List all EC2 instances",
    platform: "AWS"
  },
  {
    id: 5,
    command: "az vm list",
    description: "List all virtual machines",
    platform: "Azure"
  }
];