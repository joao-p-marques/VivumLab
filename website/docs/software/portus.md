---
id: portus
title: Portus
hide_title: true
hide_table_of_contents: false
sidebar_label: Portus
custom_edit_url: https://github.com/VivumLab/VivumLab/issues/new?template=documentation.md
#description: How do I find you when I cannot solve this problem
#keywords:
#  - docs
#  - docusaurus
#image: https://i.imgur.com/mErPwqL.png
---

# Portus

[Portus](http://port.us.org) Portus is an open source authorization service and user interface for the next generation Docker Registry

![amd64](https://img.shields.io/badge/{% if not portus.amd64 %}untested{% else %}{{ portus.amd64 }}{% endif %}-amd64-{% if not portus.amd64 %}inactive{% elif portus.amd64 == "verified" %}success{% elif portus.amd64 == "supported" %}informational{% elif portus.amd64 == "unsupported" %}critical{% endif %}?style=flat) <br \>
![arm64](https://img.shields.io/badge/{% if not portus.arm64 %}untested{% else %}{{ portus.arm64 }}{% endif %}-arm64-{% if not portus.arm64 %}inactive{% elif portus.arm64 == "verified" %}success{% elif portus.arm64 == "supported" %}informational{% elif portus.arm64 == "unsupported" %}critical{% endif %}?style=flat) <br \>
![armv7](https://img.shields.io/badge/{% if not portus.armv7 %}untested{% else %}{{ portus.armv7 }}{% endif %}-armv7-{% if not portus.armv7 %}inactive{% elif portus.armv7 == "verified" %}success{% elif portus.armv7 == "supported" %}informational{% elif portus.armv7 == "unsupported" %}critical{% endif %}?style=flat) <br \>

## Information


**Docker Image:** !!! LINK TO DOCKER IMAGE/ DOCKER HUB !!! <br \>
**Current Image Version:** {{ portus.version }}

## SETUP

### Enabling Portus

#### Command:

**`vlab set portus.enable True`**

#### File alteration:

set the appropriate service settings in `settings/config.yml` to true

eg.
```
portus
  enable: True
```

#### Finalising changes:

run: **`vlab update_one service=portus`**

## FIRST RUN

### ADMINISTRATOR SETUP

Navigate to *https://{{ portus.domain }}*

Create an account with your desired username; as this is the first user, portus makes this account the administrator.

### SMTP/ MAIL

1. run **`vlab decrypt`** to decrypt the `vault.yml` file
2. make some changes


#### SMTP Settings
```
smtp:
  host:
  port:
  user:
  pass:
  from_email:
  from_name:
```

3. run **`vlab update_one service=portus`** to complete the changes


## ACCESS

portus (HTTPS) link: [https://{% if portus.domain %}{{ portus.domain }}{% else %}{{ portus.subdomain + "." + domain }}{% endif %}/](https://{% if portus.domain %}{{ portus.domain }}{% else %}{{ portus.subdomain + "." + domain }}{% endif %}/) <br \>
portus (HTTP) link: [http://{% if portus.domain %}{{ portus.domain }}{% else %}{{ portus.subdomain + "." + domain }}{% endif %}/](http://{% if portus.domain %}{{ portus.domain }}{% else %}{{ portus.subdomain + "." + domain }}{% endif %}/)

{% if enable_tor %}
Tor link: [http://{{ portus.subdomain + "." + tor_domain }}/](http://{{ portus.subdomain + "." + tor_domain }}/)
{% endif %}

## OPTIONS

### HTTPS_ONLY
*Default: False* <br \>
*Options: True/False*

#### Command:

**`vlab set portus.https_only True`**

#### File alteration:

set the appropriate service settings in `settings/config.yml` to true

eg.
```
portus
  https_only: True
```

### AUTH
*Default: False* <br \>
*Options: True/False*

#### Command:

**`vlab set portus.auth True`**

#### File alteration:

set the appropriate service settings in `settings/config.yml` to true

eg.
```
portus
  auth: True
```

### DOMAIN
*Default: False* <br \>
*NOTE: include the sitename and top level domain suffix. eg. name.com, site.net*

#### Command:

**`vlab set portus.domain portus.com`**

#### File alteration:

set the appropriate service settings in `settings/config.yml` to true

eg.
```
portus
  domain: portus.com
```

### SUBDOMAIN
*Default: portus* <br \>
*NOTE: Periods/ delimiters are not required. eg. 'media' will set the full URL as 'media.{{domain}}'*

#### Command:

**`vlab set portus.subdomain media`**

#### File alteration:

set the appropriate service settings in `settings/config.yml` to true

eg.
```
portus
  subdomain: media
```

### VERSION
*Default: {{  portus.version  }}* <br \>
*NOTE: Ensure that the version exists*

#### Command:

**`vlab set portus.version 2.7`**

#### File alteration:

set the appropriate service settings in `settings/config.yml` to true

eg.
```
portus
  version: 2.7
```

### Finalising changes:

run: **`vlab update_one service=portus`**

## Need more help?
Further information regarding services can be found. <br \>
General Information can be found in the [documentation](https://docs.vivumlab.com). <br \>
Additional assistance can be found on our [Contact Us](https://docs.vivumlab.com/Contact-us) page.
