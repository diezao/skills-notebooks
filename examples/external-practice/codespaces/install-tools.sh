#!/usr/bin/env bash
set -euo pipefail

case "$(uname -m)" in
  x86_64)
    architecture=amd64
    kind_sha=aee6151561422756b764a4ae28e7f44cda5af5a9eead3cc9985112b1de8d8e0d
    kubectl_sha=6129359f4e1f3848a5572ccb0b26cf28b8ca08cef38c95a765b2f64a2c961a2f
    ;;
  aarch64)
    architecture=arm64
    kind_sha=20022bee6cfcd5086cb7234d218e3454e6090022f2a8f55d1fa7fcf42c3867a2
    kubectl_sha=922df28df248cc00a9e025f947704f1d1482de64ece54cfe57e61f19eaf1eef3
    ;;
  *) printf 'Unsupported Codespaces architecture.\n' >&2; exit 1 ;;
esac

directory=$(mktemp -d)
trap 'rm -rf -- "$directory"' EXIT

install_tool() {
  local name=$1 url=$2 digest=$3
  curl --fail --silent --show-error --location --retry 3 --connect-timeout 20 --max-time 180 \
    "$url" --output "$directory/$name"
  printf '%s  %s\n' "$digest" "$directory/$name" | sha256sum --check --status
}

install_tool kind "https://github.com/kubernetes-sigs/kind/releases/download/v0.33.0/kind-linux-$architecture" "$kind_sha"
install_tool kubectl "https://dl.k8s.io/release/v1.37.0/bin/linux/$architecture/kubectl" "$kubectl_sha"
sudo install -m 0755 "$directory/kind" "$directory/kubectl" /usr/local/bin/
kind version
kubectl version --client
