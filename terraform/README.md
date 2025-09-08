# Prerequisites
1. **Hostinger API Token**: Get it from your Hostinger control panel

2. **Terraform installed** (v1.0+ recommended)

# Usage
1. Install Ansible (if not already installed):

```bash
# On Ubuntu/Debian
sudo apt update
sudo apt install ansible

# On macOS
brew install ansible
```

2. Set up SSH access to your VPS

3. Create an encrypted vault for sensitive data (recommended):

```bash
ansible-vault create secrets.yml
```
Add your git token and other sensitive data.

4. Run the playbook:

```bash
# Basic run
ansible-playbook update-git-repo.yml

# With vault
ansible-playbook update-git-repo.yml --ask-vault-pass

# Specific host
ansible-playbook update-git-repo.yml -l your-vps-ip-address

# Check mode (dry run)
ansible-playbook update-git-repo.yml --check
```

5. For frequent updates, you can create a simple script:

```bash
#!/bin/bash
ansible-playbook update-git-repo.yml --ask-vault-pass
```

## Key Features
- Idempotent: Safe to run multiple times
- Cross-platform: Works on both Debian/Ubuntu and RedHat/CentOS
- Secure: Uses proper ownership and permissions
- Flexible: Easily customizable for different repositories and branches
- Informative: Provides feedback about the current state and changes