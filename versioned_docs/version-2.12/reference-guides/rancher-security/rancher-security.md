---
title: Rancher Security Guides
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/rancher-security"/>
</head>

<table width="100%">
<tr style={{verticalAlign: 'top'}}>
<td width="30%" style={{border: 'none'}}>
<h4>Security policy</h4>
<p style={{padding: '8px'}}>Rancher Labs supports responsible disclosure, and endeavours to resolve all issues in a reasonable time frame. </p>
</td>
<td width="30%" style={{border: 'none'}}>
<h4>Reporting process</h4>
<p style={{padding: '8px'}}>Please submit possible security issues by emailing <a href="mailto:security-rancher@suse.com">security-rancher@suse.com</a> .</p>
</td>
<td width="30%" style={{border: 'none'}}>
<h4>Announcements</h4>
<p style={{padding:'8px'}}>Subscribe to the <a href="https://forums.rancher.com/c/announcements">Rancher announcements forum</a> for release updates.</p>
</td>
</tr>
</table>

Security is at the heart of all Rancher features. From integrating with all the popular authentication tools and services, to an enterprise grade [RBAC capability](../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/manage-role-based-access-control-rbac.md), Rancher makes your Kubernetes clusters even more secure.

On this page, we provide security related documentation along with resources to help you secure your Rancher installation and your downstream Kubernetes clusters.

## NeuVector Integration with Rancher

NeuVector is an open-source, container-focused security application that is now integrated into Rancher. NeuVector provides production security, DevOps vulnerability protection, and a container firewall, et al. Please see the [Rancher docs](../../integrations-in-rancher/neuvector/neuvector.md) and the [NeuVector docs](https://open-docs.neuvector.com/) for more information.

## Running a Compliance Security Scan on a Kubernetes Cluster

Rancher leverages [kube-bench](https://github.com/aquasecurity/kube-bench) to run a security scan to check whether Kubernetes is deployed according to security best practices.

When Rancher runs a Compliance scan on a cluster, it generates a report showing the results of each test, including a summary with the number of passed, skipped and failed tests. The report also includes remediation steps for any failed tests.

For details, refer to the section on [security scans](../../how-to-guides/advanced-user-guides/compliance-scan-guides/compliance-scan-guides.md).
`
## SELinux RPM

[Security-Enhanced Linux (SELinux)](https://en.wikipedia.org/wiki/Security-Enhanced_Linux) is a security enhancement to Linux. After being historically used by government agencies, SELinux is now industry standard and is enabled by default on CentOS 7 and 8.

We provide two RPMs (Red Hat packages) that enable Rancher products to function properly on SELinux-enforcing hosts: `rancher-selinux` and `rke2-selinux`. For details, see [this page](selinux-rpm/selinux-rpm.md).

## Rancher Hardening Guide

The Rancher Hardening Guide is based on controls and best practices found in the <a href="https://www.cisecurity.org/benchmark/kubernetes/" target="_blank">CIS Kubernetes Benchmark</a> from the Center for Internet Security.

The hardening guides provide prescriptive guidance for hardening a production installation of Rancher. See Rancher's guides for [Self Assessment of the CIS Kubernetes Benchmark](#the-cis-benchmark-and-self-assessment) for the full list of security controls.

> The hardening guides describe how to secure the nodes in your cluster, and it is recommended to follow a hardening guide before installing Kubernetes.

Each version of the hardening guide is intended to be used with specific versions of the CIS Kubernetes Benchmark, Kubernetes, and Rancher.

## The CIS Benchmark and Self-Assessment

The benchmark self-assessment is a companion to the Rancher security hardening guide. While the hardening guide shows you how to harden the cluster, the benchmark guide is meant to help you evaluate the level of security of the hardened cluster.

This guide walks through the various controls and provide updated example commands to audit compliance in Rancher created clusters. The original benchmark documents can be downloaded from the [CIS website](https://www.cisecurity.org/benchmark/kubernetes/).

Each version of Rancher's self-assessment guide corresponds to specific versions of the hardening guide, Rancher, Kubernetes, and the CIS Benchmark.

## Third-party Penetration Test Reports

Rancher periodically hires third parties to perform security audits and penetration tests of the Rancher software stack. The environments under test follow the Rancher provided hardening guides at the time of the testing. Previous penetration test reports are available below.

Results:

- [Cure53 Pen Test - July 2019](https://releases.rancher.com/documents/security/pen-tests/2019/RAN-01-cure53-report.final.pdf)
- [Untamed Theory Pen Test - March 2019](https://releases.rancher.com/documents/security/pen-tests/2019/UntamedTheory-Rancher_SecurityAssessment-20190712_v5.pdf)

Please note that new reports are no longer shared or made publicly available.

## Rancher Security Advisories and CVEs

Rancher is committed to informing the community of security issues in our products. For the list of CVEs (Common Vulnerabilities and Exposures) for issues we have resolved, refer to [this page.](security-advisories-and-cves.md)

## Kubernetes Security Best Practices

For recommendations on securing your Kubernetes cluster, refer to the [Kubernetes Security Best Practices](kubernetes-security-best-practices.md) guide.

## Rancher Security Best Practices

For recommendations on securing your Rancher Manager deployments, refer to the [Rancher Security Best Practices](rancher-security-best-practices.md) guide.
