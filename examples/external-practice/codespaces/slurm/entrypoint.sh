#!/usr/bin/env bash
set -euo pipefail

install -d -o munge -g munge -m 0755 /run/munge
if [[ $1 == controller && ! -s /keys/munge.key ]]; then
  umask 077
  dd if=/dev/urandom of=/keys/munge.pending bs=128 count=1 status=none
  mv /keys/munge.pending /keys/munge.key
fi

for attempt in {1..20}; do
  if [[ -s /keys/munge.key ]]; then break; fi
  sleep 1
done
install -o munge -g munge -m 0400 /keys/munge.key /etc/munge/munge.key
runuser -u munge -- munged
case "$1" in
  controller) exec slurmctld -D ;;
  worker) exec slurmd -D -N worker ;;
  *) exit 2 ;;
esac
