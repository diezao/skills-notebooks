Set `challenge` to the Kubernetes challenge from Skills Lab. This example
challenge is safe to practise with.

```bash
challenge=sl1:kubernetes:0123456789abcdef0123456789abcdef
```

Use the first hexadecimal digit to choose the desired size. Create a worker
that remains running in its own temporary namespace.

```bash
if [[ $challenge =~ ^sl1:kubernetes:[0-9a-f]{32}$ ]]; then
  seed=${challenge##*:}
  replicas=$((1 + 16#${seed:0:1} % 3))
  namespace=skills-lab-${seed:0:12}
  unset created_namespace
  if kubectl create namespace "$namespace"; then
    created_namespace=$namespace
    kubectl -n "$namespace" create deployment worker \
      --image=busybox:1.36.1@sha256:73aaf090f3d85aa34ee199857f03fa3a95c8ede2ffd4cc2cdb5b94e566b11662 \
      --replicas="$replicas" -- sleep 600
  fi
fi
```

Use `kubectl rollout status` to wait for the worker. Read the number of
ready replicas from the deployment status with `kubectl get deployment`. Submit
that observed count to Skills Lab.
