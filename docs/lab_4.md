# Lab 4 - Deploy 75 Servers

- [Create Azure Web App](#Create-Azure-Web-App)
- [Configure GitHub Actions](#Configure-GitHub-Actions)
- [Run GitHub Actions](#Run-GitHub-Actions)
- [Continuous Deployment of Changes](#Continuous-Deployment-of-Changes)
- [Unit Testing](#Unit-Testing)

---

## Overview

The fourth lab is a demo of how we can quickly deploy 75 servers to Azure.

## Create ARM Template Deployment

Create the Azure Resource Group for lab 4 and start an ARM Template Deployment from Azure Cloud Shell.

1. Create the Resource Group `rg-lab-4`

```powershell
New-AzResourceGroup -Name 'rg-lab-4' -Location 'eastus2'
```

2. Create the Azure Web App

```powershell
New-AzResourceGroupDeployment -ResourceGroupName 'rg-lab-4' -TemplateUri https://raw.githubusercontent.com/softchoice-corp/DevOpsBootcamp/master/lab_4/75serversolution.deploy.json -Verbose
```
