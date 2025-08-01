---
title: Contributing to Rancher
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/contribute-to-rancher"/>
</head>

Learn about the repositories used for Rancher and Rancher docs, how to build Rancher repositories, and what information to include when you file an issue.

For more detailed information on how to contribute to the development of Rancher projects, refer to the [Rancher Developer Wiki](https://github.com/rancher/rancher/wiki). The wiki has resources on many topics, including the following:

- How to set up the Rancher development environment and run tests
- The typical flow of an issue through the development lifecycle
- Coding guidelines and development best practices
- Debugging and troubleshooting
- Developing the Rancher API

On the Rancher Users Slack, the channel for developers is **#developer**.

## Rancher Docs

If you have suggestions for the documentation on this website, [open](https://github.com/rancher/rancher-docs/issues/new/choose) an issue in the main [Rancher docs](https://github.com/rancher/rancher-docs) repository. This repo contains documentation for Rancher v2.0 and later.

See the [Rancher docs README](https://github.com/rancher/rancher-docs#readme) for more details on contributing to and building the Rancher v2.x docs repo.

For documentation describing Rancher v1.6 and earlier, see the [Rancher 1.x docs](https://github.com/rancher/rancher.github.io) repo, which contains source files for https://rancher.com/docs/rancher/v1.6/en/.

## Rancher Repositories

All of repositories are located within our main GitHub organization. There are many repositories used for Rancher, but we'll provide descriptions of some of the main ones used in Rancher.

Repository | URL | Description
-----------|-----|-------------
Rancher | https://github.com/rancher/rancher | This repository is the main source code for Rancher 2.x.
Types | https://github.com/rancher/types | This repository is the repository that has all the API types for Rancher 2.x.
API Framework | https://github.com/rancher/norman | This repository is an API framework for building Rancher style APIs backed by Kubernetes Custom Resources.
User Interface | https://github.com/rancher/dashboard/ | This repository is the source of the Dashboard UI.
(Rancher) Docker Machine | https://github.com/rancher/machine | This repository is the source of the Docker Machine binary used when using Node Drivers. This is a fork of the `docker/machine` repository.
machine-package | https://github.com/rancher/machine-package | This repository is used to build the Rancher Docker Machine binary.
kontainer-engine | https://github.com/rancher/kontainer-engine | This repository is the source of kontainer-engine, the tool to provision hosted Kubernetes clusters.
CLI | https://github.com/rancher/cli | This repository is the source code for the Rancher CLI used in Rancher 2.x.
(Rancher) Helm repository | https://github.com/rancher/helm | This repository is the source of the packaged Helm binary. This is a fork of the `helm/helm` repository.
loglevel repository | https://github.com/rancher/loglevel | This repository is the source of the loglevel binary, used to dynamically change log levels.

To see all libraries/projects used in Rancher, see the [`go.mod` file](https://github.com/rancher/rancher/blob/master/go.mod) in the `rancher/rancher` repository.

![Rancher diagram](/img/ranchercomponentsdiagram-2.6.svg)<br/>
<sup>Rancher components used for provisioning/managing Kubernetes clusters.</sup>

### Building Rancher Repositories

Every repository should have a Makefile and can be built using the `make` command. The `make` targets are based on the scripts in the `/scripts` directory in the repository, and each target will use [Dapper](https://github.com/rancher/dapper) to run the target in an isolated environment. The `Dockerfile.dapper` will be used for this process, and includes all the necessary build tooling needed.

The default target is `ci`, and will run `./scripts/validate`, `./scripts/build`, `./scripts/test` and `./scripts/package`. The resulting binaries of the build will be in `./build/bin` and are usually also packaged in a Docker image.

### Rancher Bugs, Issues or Questions

If you find any bugs or are having any trouble, please search the [reported issue](https://github.com/rancher/rancher/issues) as someone may have experienced the same issue or we are actively working on a solution.

If you can't find anything related to your issue, contact us by [filing an issue](https://github.com/rancher/rancher/issues/new). Though we have many repositories related to Rancher, we want the bugs filed in the Rancher repository so we won't miss them! If you want to ask a question or ask fellow users about an use case, we suggest creating a post on the [Rancher Forums](https://forums.rancher.com).

#### Checklist for Filing Issues

Please follow this checklist when filing an issue which will helps us investigate and fix the issue. More info means more data we can use to determine what is causing the issue or what might be related to the issue.

:::note

For large amounts of data, please use [GitHub Gist](https://gist.github.com/) or similar and link the created resource in the issue.

:::

:::note Important:

Please remove any sensitive data as it will be publicly viewable.

:::

- **Resources:** Provide as much as detail as possible on the used resources. As the source of the issue can be many things, including as much of detail as possible helps to determine the root cause. See some examples below:
  - **Hosts:** What specifications does the host have, like CPU/memory/disk, what cloud does it happen on, what Amazon Machine Image are you using, what DigitalOcean droplet are you using, what image are you provisioning that we can rebuild or use when we try to reproduce
  - **Operating System:** What operating system are you using? Providing specifics helps here like the output of `cat /etc/os-release` for exact OS release and `uname -r` for exact kernel used
  - **Docker:** What Docker version are you using, how did you install it? Most of the details of Docker can be found by supplying output of `docker version` and `docker info`
  - **Environment:** Are you in a proxy environment, are you using recognized CA/self signed certificates, are you using an external loadbalancer
  - **Rancher:** What version of Rancher are you using, this can be found on the bottom left of the UI or be retrieved from the image tag you are running on the host
  - **Clusters:** What kind of cluster did you create, how did you create it, what did you specify when you were creating it
- **Steps to reproduce the issue:** Provide as much detail on how you got into the reported situation. This helps the person to reproduce the situation you are in.
  - Provide manual steps or automation scripts used to get from a newly created setup to the situation you reported.
- **Logs:** Provide data/logs from the used resources.
    - Rancher
        - Docker install

        ```
        docker logs \
        --timestamps \
        $(docker ps | grep -E "rancher/rancher:|rancher/rancher " | awk '{ print $1 }')
        ```
        - Kubernetes install using `kubectl`

        :::note

        Make sure you configured the correct kubeconfig (for example, `export KUBECONFIG=$PWD/kube_config_cluster.yml` if Rancher is installed on a Kubernetes cluster) or are using the embedded kubectl via the UI.

        :::

        ```
        kubectl -n cattle-system \
        logs \
        -l app=rancher \
        --timestamps=true
        ```
    - System logging (these might not all exist, depending on operating system)
        - `/var/log/messages`
        - `/var/log/syslog`
        - `/var/log/kern.log`
    - Docker daemon logging (these might not all exist, depending on operating system)
        - `/var/log/docker.log`
- **Metrics:** If you are experiencing performance issues, please provide as much of data (files or screenshots) of metrics which can help determining what is going on. If you have an issue related to a machine, it helps to supply output of `top`, `free -m`, `df` which shows processes/memory/disk usage.
