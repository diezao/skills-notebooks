# Optional Codespaces exercises

In a disposable Codespace, select **Skills Lab optional kind and Slurm**.
The configuration starts Docker inside that Codespace. Use a learner-owned
workspace with no unrelated repositories, credentials or mounted data.
Do not run these instructions in a shared Docker daemon. Review the current
GitHub Free allowances and privacy terms before starting.

## Kubernetes replica health

Create the disposable cluster with the tested image reference.

```bash
kind create cluster --name skills-lab-practice \
  --image kindest/node:v1.37.0@sha256:a1ed56cfb0e7b93589bdf97c8cd566405a265939e3620fc4f5de89adff580ae5
kubectl config use-context kind-skills-lab-practice
```

Follow the [Kubernetes readiness exercise](../killercoda/kubernetes-readiness/exercise.md)
and submit the observed ready replica count. Check the current context before
starting. Remove the practice cluster when finished.

```bash
kind delete cluster --name skills-lab-practice
```

## Parallel sum

Use the first hex character of the synthetic challenge to select the task
count. Each array task writes its own number. The cluster is just a controller
and one worker and runs only inside the practice workspace.

```bash
cd examples/external-practice/codespaces/slurm
docker compose up --build -d
docker compose exec -T controller sinfo
```

Once the worker is idle, set `challenge` to the value issued in Skills Lab.

```bash
challenge=sl1:slurm:0123456789abcdef0123456789abcdef
if [[ $challenge =~ ^sl1:slurm:[0-9a-f]{32}$ ]]; then
  seed=${challenge##*:}
  count=$((2 + 16#${seed:0:1}))
  docker compose exec -T controller sbatch --wait \
    --array="1-$count%1" --chdir=/work --output=/work/%A_%a.txt \
    --wrap='printf "%s\n" "$SLURM_ARRAY_TASK_ID"'
fi
```

Use the job ID reported by `sbatch` to select only this submission's files.
Read and sum the values with `awk` inside the controller. Enter the sum in
Skills Lab. Remove this Compose project's disposable volumes when done.

```bash
docker compose down --volumes
```

kind and kubectl use Apache-2.0 licences. The container packages retain
their Debian copyright notices, including Slurm's GPL and MUNGE's GPL/LGPL.
The build pulls dependencies through Debian's signed archive metadata.
