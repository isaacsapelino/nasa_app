Write-Host "Make sure to activate your python environment" -Foreground Red
Start-Sleep -s 1
for ($i = 1; $i -le 100; $i++ )
{
    Write-Progress -Activity "Starting Web App" -Status "$i% Progress:" -PercentComplete $i;
}

Start-Process PowerShell -WindowStyle Minimized -ArgumentList 'Write-Host "Ctrl-C to exit." -ForegroundColor red; yarn start-api'
Start-Process PowerShell -WindowStyle Minimized -ArgumentList 'Write-Host "Ctrl-C to exit." -ForegroundColor red; yarn start'


