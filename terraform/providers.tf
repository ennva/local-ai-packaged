terraform {
  required_providers {
    hostinger = {
      source  = "hostinger/hostinger"
      version = "~> 1.0"
    }
  }
}

provider "hostinger" {
  api_token = var.hostinger_api_token
}

# Optional: Store state remotely (recommended)
terraform {
  backend "s3" {
    bucket = "your-terraform-state-bucket"
    key    = "hostinger/terraform.tfstate"
    region = "us-east-1"
  }
}