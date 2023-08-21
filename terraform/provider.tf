terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.12.0"
    }
  }
}

provider "aws" {
  region = "ap-southeast-2"
  default_tags {
    tags = {
      Owner   = "tomfrantz_dev_terraform"
      Project = "tomfrantz_dev"
    }
  }
}
