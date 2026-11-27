# Diezao Skills Notebooks

Free practice for Diezao Skills Lab. All exercise data, labels, logs and challenges are synthetic. Use your own eligible account for optional hosted exercises. Check current provider terms before signing up and keep personal, school and work data out of shared notebooks and workspaces.

## Start with a notebook

Open a notebook in Colab, or download the linked notebook and run it locally with Jupyter. Run cells from top to bottom. A plain CPU runtime is enough to attempt every exercise.

| Lab | Practice | Notebook |
| --- | --- | --- |
| Instrument thresholds | Predict and count readings above a threshold. | [Source](examples/notebooks/instrument-threshold.ipynb) · [Colab](https://colab.research.google.com/github/diezao/skills-notebooks/blob/main/examples/notebooks/instrument-threshold.ipynb) |
| Instrument log | Separate valid and invalid readings and summarize the result. | [Source](docs/drafts/foundations/python-instrument-log.ipynb) · [Colab](https://colab.research.google.com/github/diezao/skills-notebooks/blob/main/docs/drafts/foundations/python-instrument-log.ipynb) |
| Matrix device | Verify a matrix product on CPU or on CUDA if available. | [Source](examples/notebooks/matrix-device.ipynb) · [Colab](https://colab.research.google.com/github/diezao/skills-notebooks/blob/main/examples/notebooks/matrix-device.ipynb) |
| Bell-pair parity | Compare X- and Z-basis distributions with a Qiskit simulator. | [Source](examples/qiskit-bell/bell-parity.ipynb) · [Colab](https://colab.research.google.com/github/diezao/skills-notebooks/blob/main/examples/qiskit-bell/bell-parity.ipynb) |
| Classifier threshold | Compare predicted classes with reference labels at different thresholds. | [Source](examples/notebooks/classifier-threshold.ipynb) · [Colab](https://colab.research.google.com/github/diezao/skills-notebooks/blob/main/examples/notebooks/classifier-threshold.ipynb) |

## Optional external practice

- **Linux log evidence** and **Kubernetes replica health** are [Killercoda scenario sources](examples/external-practice/killercoda). Identify matching log line numbers or observe ready replicas. A hosted scenario URL depends on an owner configuring Killercoda sync for this repository.
- **Kubernetes and Slurm** run in a [disposable Codespace](https://codespaces.new/diezao/skills-notebooks) using the [Codespaces guide](examples/external-practice/codespaces/README.md). Observe replica health in kind or sum the results of a bounded Slurm array in Compose. Docker-in-Docker and kind run privileged only inside the learner’s own disposable Codespace. Stop and delete it when done.
- **Seeded data audit, AI evaluation and Bell parity** use a Skills Lab challenge to calculate a self-check result. Open [data audit](https://colab.research.google.com/github/diezao/skills-notebooks/blob/main/examples/external-practice/notebooks/data-audit.ipynb), [AI evaluation](https://colab.research.google.com/github/diezao/skills-notebooks/blob/main/examples/external-practice/notebooks/ai-evaluation.ipynb), or [Bell parity](https://colab.research.google.com/github/diezao/skills-notebooks/blob/main/examples/external-practice/notebooks/bell-parity.ipynb) in Colab. To use Kaggle, download the corresponding file from the [seeded notebooks directory](examples/external-practice/notebooks) and import it into a private notebook with a CPU runtime.
- **Optional quantum hardware comparison** compares simulator parity with a noisy device. See the [IBM Quantum capstone](examples/external-practice/IBM_QUANTUM_CAPSTONE.md).
- **Local checker** covers the seeded self-checks. Run `node --test examples/external-practice/verify.test.mjs` from the repository root.

## Accounts, eligibility and free limits

| Service | Access and limits | Age and privacy |
| --- | --- | --- |
| Colab | A Google account is needed to run a hosted notebook. Free runtime length, capacity and accelerator availability vary. | Check [Google’s age rules](https://support.google.com/accounts/answer/1350409), [privacy policy](https://policies.google.com/privacy) and the [Colab FAQ](https://research.google.com/colaboratory/faq.html). |
| Kaggle | Use your own Kaggle account. Check current session and accelerator quotas in the notebook interface before running. | Check [Kaggle terms](https://www.kaggle.com/terms) for age and account eligibility and review its [privacy policy](https://www.kaggle.com/privacy). |
| Codespaces | GitHub Free personal accounts list 120 core-hours and 15 GB-month of storage. Larger machines use more core-hours per hour. Stopped workspaces still use storage. | GitHub requires users to be at least 13, subject to local law. Review [terms](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service), [privacy](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) and [billing](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces). |
| Killercoda | Use your own account. The free plan lists up to one hour per environment. | Check [terms](https://killercoda.com/agb.html) for eligibility and review [privacy](https://killercoda.com/datenschutz.html) and [plan limits](https://killercoda.com/pricing). |
| IBM Quantum | An eligible IBM Cloud account is needed for optional hardware. The Open plan lists up to 10 minutes of quantum usage in a rolling 28-day window. | Check local age and account eligibility, the [plan limits](https://quantum.cloud.ibm.com/docs/en/guides/plans-overview) and [privacy policy](https://www.ibm.com/privacy). |

See [LICENSE](LICENSE) for the repository license.
