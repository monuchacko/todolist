Clear-Host
Write-Output "*** Deploying container to cluster ***"

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
az login

az acr login -n $($assoc.AZContanerName)
$assoc.AZContanerName = az acr show -n $($assoc.AZContanerName) --query loginServer --output tsv
az aks get-credentials --resource-group $($assoc.AKSResourceGroup) --name $($assoc.AKSName)

# Set the prefix to az
$assoc.Prefix = $assoc.AZContanerName

Write-Host "Building container: $($assoc.Prefix)/$($assoc.ContainerName):$($assoc.Version)"
docker build -t "$($assoc.Prefix)/$($assoc.ContainerName):$($assoc.Version)" .
docker push "$($assoc.Prefix)/$($assoc.ContainerName):$($assoc.Version)"
# docker run -d -p "$($assoc.HostPort):$($assoc.ContainerPort)" "$($assoc.Prefix)/$($assoc.ContainerName):$($assoc.Version)" --name "$($assoc.Prefix)/$($assoc.ContainerName):$($assoc.Version)"

kubectl create -f deployment.yaml
kubectl get deployments

kubectl create -f service.yaml
kubectl get services #-- watch

# Get component status
kubectl get cs

# Cluster info
kubectl cluster-info









###################################################################################################
# docker run -d -p 3000:3000 "$($assoc.Prefix)/$($assoc.ContainerName):$($assoc.Version)"
# docker run -d -p "$($assoc.HostPort):$($assoc.ContainerPort)" "$($assoc.Prefix)/$($assoc.ContainerName):$($assoc.Version)" --name "$($assoc.Prefix)/$($assoc.ContainerName):$($assoc.Version)"

# docker system prune -a

# docker run -p "$($assoc.HostPort):$($assoc.ContainerPort)" "$($assoc.Prefix)/$($assoc.ContainerName):$($assoc.Version)"
# docker run -d -p "$($assoc.HostPort):$($assoc.ContainerPort)" --name $containerName "$($assoc.Prefix)/$($assoc.ContainerName):$($assoc.Version)"
# docker run -p 49160:3000 -d app/todolist01

# docker ps
# docker image ls

# Start-Process "chrome.exe" "https://localhost:3000"
# docker image rm [OPTIONS] IMAGE [IMAGE...]
# docker ps -aqf "name=mckubecontainer001.azurecr.io/todolist01:v1"
# docker ps --filter "name=mckubecontainer001.azurecr.io/todolist01:v1"

# docker container ls -a --filter name=kind_goldstine


# https://www.youtube.com/watch?v=WMNY2nbyFWs
# docker kill mckubecontainer001.azurecr.io/todolist01

# ${Env:ProgramFiles}

# for ($i = 1; $i -le 100; $i++ )
# {
#     Write-Progress -Activity "Search in Progress" -Status "$i% Complete:" -PercentComplete $i;
# }


# az acr login -n mckubecontainer001
#$kubeRegistry = az acr show -n mckubecontainer001 --query loginServer --output tsv



# $containerName = "todolist01"
# Write-Output "Building docker container locally " $containerName
# docker build -t "app/"$containerName":v1" .

# $assoc.Prefix = "sdsdf"


# docker build -t app/todolist01:v1 .

# docker run -d -p 3000:3000 --name $containerName "app/"$containerName":v1"
# docker ps

#docker exec -it daa073921e20 bash

# Container Registry


#$kubecontainerName = "mckubecontainer001"
#Write-Output $kubecontainerName

#az acr login -n mckubecontainer001
#$acrLoginServer = az acr show -n mckubecontainer001 --query loginServer --output tsv
#Write-Output $acrLoginServer

#$acrContainerName = $acrLoginServer + "/todolist01:v1"
##$a = docker tag app/todolist01:v1 $acrLoginServer + "/" + app/todolist01:v1 
#Write-Output $acrContainerName