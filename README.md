# README #
Repository of backend: https://github.com/cediackermann/ueK223_1_backend
# uk223 Skeleton

homepage: http://localhost:3000
login: http://localhost:3000/login
user component: http://localhost:3000/users

## Starter Project


### Schritt 1
Als erstes müssen Sie Ihre Postgres-Datenbank erstellen. Der untenstehende Command wird ihnen dabei hilfreich sein. Sobald Sie das gemacht haben, können Sie die Docker App öffnen und den Docker starten.
### Docker command
```
docker run --name postgres_db -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```
### Schritt 2
Öffnen Sie den geclonten Backend Ordner in Ihrer Umgebung und klicken Sie auf den Gradle Button, der sich auf der rechten Seite ihrer Umgebung befindet.
klicken sie auf den Bootrun welcher in der folgenden Reihenfolge zu finden ist: demo>Tasks>application>bootrun.

<img width="288" alt="image" src="https://github.com/user-attachments/assets/ef3f61f5-5351-4b98-a135-32c6a13a64be" />



### Schritt 3
Öffnen Sie ihr geclontes Frontend Projekt und öffnen ein Terminal und geben sie Folgendes ein:
```
npm install
```
```
npm start
```

### Schritt 4
| E-Mail            | Password | Authorities                                      |  
|-------------------|----------|--------------------------------------------------|
| user@example.com  | 1234     | Create/Read/Update/Delete/Participate/Join Event | 
| admin@example.com | 1234     | Hat alle Admin Rechte                            |   
