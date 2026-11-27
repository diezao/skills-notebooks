After entering your observed count in Prove it, clean up the namespace you
created in this scenario.

```bash
if [[ ${created_namespace:-} =~ ^skills-lab-[0-9a-f]{12}$ ]]; then
  kubectl delete namespace "$created_namespace"
fi
```
