FROM debian:13-slim@sha256:8aa5a7bf5a1955bddbe7d74fcdd0b91ab30e74362a8b73af672b0481b35b44a0
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
    munge slurmctld slurmd slurm-client libpmix2 && rm -rf /var/lib/apt/lists/* && \
    install -d -o slurm -g slurm /var/spool/slurmctld && install -d -m 0755 /var/spool/slurmd
COPY --chmod=0644 slurm.conf /etc/slurm/slurm.conf
COPY --chmod=0644 cgroup.conf /etc/slurm/cgroup.conf
COPY entrypoint.sh /usr/local/bin/slurm-lab
ENTRYPOINT ["/bin/bash", "/usr/local/bin/slurm-lab"]
