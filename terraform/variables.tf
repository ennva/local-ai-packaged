variable "hostinger_api_token" {
  description = "Hostinger API token"
  type        = string
  sensitive   = true
}

variable "vps_plan" {
  description = "VPS plan type"
  type        = string
  default     = "linux1" # Options: linux1, linux2, linux3, windows1, etc.
}

variable "region" {
  description = "VPS region"
  type        = string
  default     = "eu-nl" # Options: eu-nl, us-ca, as-sg, etc.
}

variable "ssh_key" {
  description = "SSH public key for VPS access"
  type        = string
  default     = ""
}