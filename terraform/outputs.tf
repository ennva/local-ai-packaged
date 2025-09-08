output "vps_ip_address" {
  description = "Public IP address of the VPS"
  value       = hostinger_vps.my_vps.ip_address
}

output "vps_status" {
  description = "Current status of the VPS"
  value       = hostinger_vps.my_vps.status
}

output "vps_username" {
  description = "Default username for the VPS"
  value       = hostinger_vps.my_vps.username
}

output "vps_created_at" {
  description = "Creation timestamp of the VPS"
  value       = hostinger_vps.my_vps.created_at
}

output "vps_plan_details" {
  description = "Details of the VPS plan"
  value       = hostinger_vps.my_vps.plan_details
}