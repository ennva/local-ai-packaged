# Data source to get available VPS plans
data "hostinger_vps_plans" "available" {}

# Data source to get available regions
data "hostinger_vps_regions" "available" {}

# Create a new VPS
resource "hostinger_vps" "my_vps" {
  name     = "my-production-vps"
  plan     = var.vps_plan
  region   = var.region
  os_image = "ubuntu-22.04" # Options: ubuntu-22.04, debian-11, centos-9, etc.
  ssh_keys = var.ssh_key != "" ? [var.ssh_key] : []
  
  # Optional: Custom root password (if not using SSH key)
  # root_password = "secure-password-123"
  
  tags = ["production", "web-server"]
}

# VPS snapshot resource
resource "hostinger_vps_snapshot" "backup" {
  vps_id = hostinger_vps.my_vps.id
  name   = "weekly-backup"
}

# VPS firewall rule
resource "hostinger_vps_firewall_rule" "web_ports" {
  vps_id = hostinger_vps.my_vps.id
  
  rule {
    protocol = "tcp"
    port     = "80"
    source   = "0.0.0.0/0"
  }
  
  rule {
    protocol = "tcp"
    port     = "443"
    source   = "0.0.0.0/0"
  }
  
  rule {
    protocol = "tcp"
    port     = "22"
    source   = "your-ip-address/32" # Restrict SSH to your IP
  }
}