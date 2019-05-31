# Clear screen
Clear-Host
Write-Output "*** Deploying container to cluster ***"

# Init variables
$assoc = New-Object psobject -Property @{
    Prefix = "app"
    ContainerName = "todolist01"
    Version = "v1"
    HostPort = 3000
    ContainerPort = 3000
    AZContanerName = "mckubecontainer001"
    AZContanerRegistryName = ""
    AKSResourceGroup = "tf-eastus2-dev-sharepointwebdev-rg"
    AKSName = "mc-kube001"
}

Write-Output "Login to Azure"
# Login to cloud
az login

# Get Credentials for cloud infrastructure
az acr login -n $($assoc.AZContanerName)
$assoc.AZContanerName = az acr show -n $($assoc.AZContanerName) --query loginServer --output tsv
az aks get-credentials --resource-group $($assoc.AKSResourceGroup) --name $($assoc.AKSName)

# Set the prefix to az
$assoc.Prefix = $assoc.AZContanerName

# Build and push docker
Write-Host "Building container: $($assoc.Prefix)/$($assoc.ContainerName):$($assoc.Version)"
docker build -t "$($assoc.Prefix)/$($assoc.ContainerName):$($assoc.Version)" .
docker push "$($assoc.Prefix)/$($assoc.ContainerName):$($assoc.Version)"
# docker run -d -p "$($assoc.HostPort):$($assoc.ContainerPort)" "$($assoc.Prefix)/$($assoc.ContainerName):$($assoc.Version)" --name "$($assoc.Prefix)/$($assoc.ContainerName):$($assoc.Version)"

# Create cluster from deployment.yaml 
kubectl create -f deployment.yaml

# Verify deployment
kubectl get deployments

# Create service from service.yaml 
kubectl create -f service.yaml

# Verify service
kubectl get services #-- watch

# Get component status
kubectl get cs

# Cluster info
kubectl cluster-info
