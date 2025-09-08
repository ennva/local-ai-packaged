# Usage
1. Initialize the project:

```bash
mkdir -p ansible-git-deploy
cd ansible-git-deploy
# Create the structure above
```
2. Install roles:

```bash
ansible-galaxy install -r requirements.yml
```

3. Set up vault password:

```bash
echo "your-vault-password" > .vault_pass
chmod 600 .vault_pass
```

4. Run the playbook:

```bash
./scripts/run-playbook.sh update-repo.yml production
```

5. For specific tags:

```bash
./scripts/run-playbook.sh update-repo.yml production git,update
```

## This structure provides:

- Organization: Clear separation of concerns

- Reusability: Roles can be reused across different playbooks

- Maintainability: Easy to update and extend

- Security: Sensitive data encrypted with ansible-vault

- Scalability: Supports multiple environments and hosts

- Documentation: Self-documenting through clear structure