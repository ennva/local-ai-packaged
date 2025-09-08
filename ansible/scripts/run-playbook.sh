#!/bin/bash
#!/bin/bash
# Run playbook with proper environment

PLAYBOOK=${1:-update-repo.yml}
INVENTORY=${2:-production}

export ANSIBLE_CONFIG=$(pwd)/ansible.cfg

ansible-playbook \
  playbooks/$PLAYBOOK \
  -i inventory/$INVENTORY/hosts \
  --vault-password-file .vault_pass \
  --tags "${3:-all}" \
  "${@:4}"